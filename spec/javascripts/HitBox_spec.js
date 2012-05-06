(function() {

  describe('HitBox', function() {
    beforeEach(function() {
      return this.hitBox = new HitBox(300, 300);
    });
    it("should hit when one is within bounds", function() {
      return expect(this.hitBox.is_hitted(20, 50)).toBeTruthy();
    });
    return it("should not detect hit when a hit is not in the bounds", function() {
      return expect(this.hitBox.is_hitted(400, 50)).toBeFalsy();
    });
  });

}).call(this);
