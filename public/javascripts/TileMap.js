(function() {

  this.TileMap = (function() {

    TileMap.name = 'TileMap';

    function TileMap(rows, columns, width, height) {
      var i, j, _i, _j, _ref, _ref1;
      this.rows = rows;
      this.columns = columns;
      this.width = width;
      this.height = height;
      this.tiles = Array(this.rows);
      this.tileWidth = Math.floor(width / this.columns);
      this.tileHeight = Math.floor(this.height / this.rows);
      for (i = _i = 1, _ref = this.rows; 1 <= _ref ? _i <= _ref : _i >= _ref; i = 1 <= _ref ? ++_i : --_i) {
        this.tiles[i] = Array(this.columns);
        for (j = _j = 1, _ref1 = this.columns; 1 <= _ref1 ? _j <= _ref1 : _j >= _ref1; j = 1 <= _ref1 ? ++_j : --_j) {
          this.tiles[i][j] = null;
        }
      }
      this.callbacks = [];
      this.callbacks["disable"] = [];
      this.callbacks["enable"] = [];
      this.callbacks["click"] = [];
    }

    TileMap.prototype.on = function(eventType, callback) {
      return this.callbacks[eventType].push(callback);
    };

    TileMap.prototype.click = function(x, y) {
      var tile, tileColumn, tileRow;
      tileColumn = Math.floor(x / this.tileWidth) + 1;
      tileRow = Math.floor(y / this.tileHeight) + 1;
      tile = this.tiles[tileColumn][tileRow];
      return this.trigger("click", tile);
    };

    TileMap.prototype.trigger = function(eventType, data) {
      var callback, callbacks, _i, _len, _results;
      callbacks = this.callbacks[eventType];
      _results = [];
      for (_i = 0, _len = callbacks.length; _i < _len; _i++) {
        callback = callbacks[_i];
        _results.push(callback(data));
      }
      return _results;
    };

    TileMap.prototype.add = function(tile) {
      return this.tiles[tile.row][tile.column] = tile;
    };

    TileMap.prototype.fillTiles = function() {
      var i, j, tile, _i, _ref, _results;
      _results = [];
      for (i = _i = 1, _ref = this.rows; 1 <= _ref ? _i <= _ref : _i >= _ref; i = 1 <= _ref ? ++_i : --_i) {
        this.tiles[i] = Array(this.columns);
        _results.push((function() {
          var _j, _ref1, _results1;
          _results1 = [];
          for (j = _j = 1, _ref1 = this.columns; 1 <= _ref1 ? _j <= _ref1 : _j >= _ref1; j = 1 <= _ref1 ? ++_j : --_j) {
            tile = new Tile(i, j);
            _results1.push(this.tiles[i][j] = tile);
          }
          return _results1;
        }).call(this));
      }
      return _results;
    };

    TileMap.prototype.disable = function(row, column) {
      this.tiles[row][column].disable();
      return this.trigger("disable", this.tiles[row][column]);
    };

    TileMap.prototype.enable = function(row, column) {
      this.tiles[row][column].enable();
      return this.trigger("enable", this.tiles[row][column]);
    };

    return TileMap;

  })();

}).call(this);
