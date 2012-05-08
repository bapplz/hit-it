(function() {

  this.Tile = (function() {

    Tile.name = 'Tile';

    function Tile(row, column, number, enabled) {
      this.row = row;
      this.column = column;
      this.number = number;
      this.enabled = enabled != null ? enabled : true;
    }

    Tile.prototype.enable = function() {
      return this.enabled = true;
    };

    Tile.prototype.disable = function() {
      return this.enabled = false;
    };

    Tile.prototype.isEnabled = function() {
      return this.enabled;
    };

    Tile.prototype.isDisabled = function() {
      return !this.enabled;
    };

    return Tile;

  })();

}).call(this);
