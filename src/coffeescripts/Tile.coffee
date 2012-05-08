class @Tile
  constructor: (@row, @column, @number, @enabled = true) ->

  enable: ->
    @enabled = true

  disable: ->
    @enabled = false

  isEnabled: ->
    @enabled

  isDisabled: ->
    !@enabled