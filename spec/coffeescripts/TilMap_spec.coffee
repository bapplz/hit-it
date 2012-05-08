describe "TilMap", ->
  beforeEach ->
    @tileMap = new TileMap(3, 3, 600, 400)
    @firstTile = new Tile(1, 1)
    @tileMap.add @firstTile

  it "should disable tile", ->
    @tileMap.disable(1, 1)
    expect(@firstTile.isDisabled()).toBeTruthy()

  it "should enable tile", ->
    @tileMap.enable(1, 1)
    expect(@firstTile.isEnabled()).toBeTruthy()

  it "should call disable callback when tile is disabled", ->
    callback = jasmine.createSpy "disableCallback"
    @tileMap.on "disable", callback
    @tileMap.disable(1, 1)
    expect(callback).toHaveBeenCalled

  it "should call enable callback when tile is enabled", ->
    callback = jasmine.createSpy "enableCallback"
    @tileMap.on "enable", callback
    @tileMap.enable(1, 1)
    expect(callback).toHaveBeenCalled

  it "should call click callback when tile is clicked", ->
    callback = jasmine.createSpy "clickCallback"
    @tileMap.on "click", callback
    @tileMap.click(100, 100)
    expect(callback).toHaveBeenCalled

  it "should call click callback with correct tile selected", ->
    callback = jasmine.createSpy "clickCallback"
    @tileMap.on "click", callback
    @tileMap.click(100, 100)
    expectedTile = new Tile(1, 1)
    expect(callback).toHaveBeenCalledWith(expectedTile)


