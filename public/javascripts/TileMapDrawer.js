(function() {

  this.TileMapDrawer = (function() {

    TileMapDrawer.name = 'TileMapDrawer';

    function TileMapDrawer(tileMap, drawingContext) {
      this.tileMap = tileMap;
      this.drawingContext = drawingContext;
    }

    TileMapDrawer.prototype.draw = function() {
      var i, j, tile, tileHeight, tileWidth, _i, _ref, _results;
      tileWidth = this.tileMap.tileWidth;
      tileHeight = this.tileMap.tileHeight;
      _results = [];
      for (i = _i = 1, _ref = this.tileMap.rows; 1 <= _ref ? _i <= _ref : _i >= _ref; i = 1 <= _ref ? ++_i : --_i) {
        _results.push((function() {
          var _j, _ref1, _results1;
          _results1 = [];
          for (j = _j = 1, _ref1 = this.tileMap.columns; 1 <= _ref1 ? _j <= _ref1 : _j >= _ref1; j = 1 <= _ref1 ? ++_j : --_j) {
            tile = this.tileMap.tiles[i][j];
            this.drawingContext.fillStyle = this.randomFillStyle();
            _results1.push(this.drawingContext.fillRect((j - 1) * tileWidth, (i - 1) * tileHeight, tileWidth, tileHeight));
          }
          return _results1;
        }).call(this));
      }
      return _results;
    };

    TileMapDrawer.prototype.randomFillStyle = function() {
      return "rgb(" + this.randomUpTo(255) + "," + this.randomUpTo(255) + "," + this.randomUpTo(255) + ")";
    };

    TileMapDrawer.prototype.randomUpTo = function(number) {
      return Math.floor(Math.random() * 255);
    };

    return TileMapDrawer;

  })();

}).call(this);
