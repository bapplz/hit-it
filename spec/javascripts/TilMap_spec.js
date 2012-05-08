(function() {

  describe("TilMap", function() {
    beforeEach(function() {
      this.tileMap = new TileMap(3, 3, 600, 400);
      this.firstTile = new Tile(1, 1);
      return this.tileMap.add(this.firstTile);
    });
    it("should disable tile", function() {
      this.tileMap.disable(1, 1);
      return expect(this.firstTile.isDisabled()).toBeTruthy();
    });
    it("should enable tile", function() {
      this.tileMap.enable(1, 1);
      return expect(this.firstTile.isEnabled()).toBeTruthy();
    });
    it("should call disable callback when tile is disabled", function() {
      var callback;
      callback = jasmine.createSpy("disableCallback");
      this.tileMap.on("disable", callback);
      this.tileMap.disable(1, 1);
      return expect(callback).toHaveBeenCalled;
    });
    it("should call enable callback when tile is enabled", function() {
      var callback;
      callback = jasmine.createSpy("enableCallback");
      this.tileMap.on("enable", callback);
      this.tileMap.enable(1, 1);
      return expect(callback).toHaveBeenCalled;
    });
    it("should call click callback when tile is clicked", function() {
      var callback;
      callback = jasmine.createSpy("clickCallback");
      this.tileMap.on("click", callback);
      this.tileMap.click(100, 100);
      return expect(callback).toHaveBeenCalled;
    });
    it("should call click callback with correct tile selected", function() {
      var callback, expectedTile;
      callback = jasmine.createSpy("clickCallback");
      this.tileMap.on("click", callback);
      this.tileMap.click(100, 100);
      expectedTile = new Tile(1, 1);
      return expect(callback).toHaveBeenCalledWith(expectedTile);
    });
    it("should be able to click on a tile when it is at the start of it", function() {
      var callback, expectedTile;
      this.tileMap = new TileMap(5, 4, 4, 5);
      this.tileMap.fillTiles();
      callback = jasmine.createSpy("clickCallback");
      this.tileMap.on("click", callback);
      this.tileMap.click(0, 0);
      expectedTile = new Tile(1, 1);
      return expect(callback).toHaveBeenCalledWith(expectedTile);
    });
    return it("should be able to click on a tile when it is at the end of it", function() {
      var callback, expectedTile;
      this.tileMap = new TileMap(5, 4, 4, 5);
      this.tileMap.fillTiles();
      callback = jasmine.createSpy("clickCallback");
      this.tileMap.on("click", callback);
      this.tileMap.click(4, 5);
      expectedTile = new Tile(5, 4);
      return expect(callback).toHaveBeenCalledWith(expectedTile);
    });
  });

}).call(this);
