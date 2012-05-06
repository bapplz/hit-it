(function() {

  this.HitBox = (function() {

    HitBox.name = 'HitBox';

    function HitBox(width, height) {
      this.width = width;
      this.height = height;
    }

    HitBox.prototype.is_hitted = function(x, y) {
      if (x > 0 && x < this.width && y > 0 && y < this.height) {
        return true;
      } else {
        return false;
      }
    };

    return HitBox;

  })();

}).call(this);
