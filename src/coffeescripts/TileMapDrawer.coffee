class @TileMapDrawer
  constructor: (@tileMap, @drawingContext) ->

  draw: ->
    tileWidth = @tileMap.tileWidth
    tileHeight = @tileMap.tileHeight
    for i in [1..@tileMap.rows]
      for j in [1..@tileMap.columns]
        tile = @tileMap.tiles[i][j]
        @drawingContext.fillStyle = this.randomFillStyle()
        @drawingContext.fillRect((j - 1) * tileWidth, (i - 1) * tileHeight, tileWidth, tileHeight)

  randomFillStyle: ->
    return "rgb(" + this.randomUpTo(255) + "," + this.randomUpTo(255) + "," + this.randomUpTo(255) + ")"

  randomUpTo: (number) ->
    Math.floor(Math.random() * 255)