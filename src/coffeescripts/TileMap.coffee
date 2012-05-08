class @TileMap
  constructor: (@rows, @columns, @width, @height) ->
    @tiles = Array(@rows)
    @tileWidth = Math.floor(width / @columns)
    @tileHeight = Math.floor(@height / @rows)
    for i in [1..@rows]
      @tiles[i] = Array(@columns)
      for j in [1..@columns]
        @tiles[i][j] = null
    @callbacks = []
    @callbacks["disable"] = []
    @callbacks["enable"] = []
    @callbacks["click"] = []

  on: (eventType, callback) ->
    @callbacks[eventType].push callback

  click: (x, y) ->
    tileColumn = Math.floor(x / @tileWidth) + 1
    tileRow = Math.floor(y / @tileHeight) + 1
    tile = @tiles[tileColumn][tileRow]
    this.trigger("click", tile)

  trigger: (eventType, data) ->
    callbacks = @callbacks[eventType]
    callback(data) for callback in callbacks

  add: (tile) ->
    @tiles[tile.row][tile.column] = tile

  fillTiles: ->
    for i in [1..@rows]
      @tiles[i] = Array(@columns)
      for j in [1..@columns]
        tile = new Tile(i, j)
        @tiles[i][j] = tile

  disable: (row, column) ->
    @tiles[row][column].disable()
    this.trigger("disable", @tiles[row][column])

  enable: (row, column) ->
    @tiles[row][column].enable()
    this.trigger("enable", @tiles[row][column])

