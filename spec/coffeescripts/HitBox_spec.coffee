describe 'HitBox', ->
  beforeEach ->
    @hitBox = new HitBox(300, 300)

  it "should hit when one is within bounds", ->
    expect(@hitBox.is_hitted(20, 50)).toBeTruthy()

  it "should not detect hit when a hit is not in the bounds", ->
    expect(@hitBox.is_hitted(400, 50)).toBeFalsy()