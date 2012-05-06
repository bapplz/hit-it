class @HitBox

  constructor: (@width, @height) ->

  is_hitted: (x, y) ->
    if x > 0 and x < @width and y > 0 and y < @height
      true
    else
      false

