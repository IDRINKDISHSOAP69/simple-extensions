// made by malcolm
// enjoy
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    game.splash("You Died! Lol ur so bad")
    game.reset()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile6`, function (sprite, location) {
    scene.cameraShake(2, 500)
    music.bigCrash.play()
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.purpleOuterNorth1, function (sprite, location) {
    myCorg.maxMoveVelocity = 250
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava0, function (sprite, location) {
    game.splash("You Died! Lol ur so bad")
    game.reset()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    effects.clouds.endScreenEffect()
    tiles.setTilemap(tilemap`level6`)
    effects.starField.startScreenEffect()
    myCorg.maxMoveVelocity = 69
    myCorg.maxJump = 999
    music.sonar.play()
    scene.setBackgroundColor(15)
    game.splash("Spam jump to fly")
    game.splash("Good Luck")
    music.sonar.play()
    scene.cameraShake(2, 100)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleBlueCrystal, function (sprite, location) {
    myCorg.maxJump += 4
    music.beamUp.play()
    scene.cameraShake(1, 100)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    effects.confetti.startScreenEffect()
    game.over(true)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.purpleOuterSouth0, function (sprite, location) {
    effects.clouds.startScreenEffect()
    myCorg.maxMoveVelocity = 69
    myCorg.maxJump = 2
    scene.setBackgroundColor(9)
    tiles.setTilemap(tilemap`level2`)
    music.sonar.play()
    scene.cameraShake(2, 100)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava1, function (sprite, location) {
    game.splash("You Died! Lol ur so bad")
    game.reset()
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.greenOuterSouth0, function (sprite, location) {
	
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardWater, function (sprite, location) {
    game.splash("You Died! Lol ur so bad")
    game.reset()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    game.splash("You Died! Lol ur so bad")
    game.reset()
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleRedCrystal, function (sprite, location) {
    myCorg.maxMoveVelocity = 135
    music.powerUp.play()
    scene.cameraShake(2, 1000)
})
// made by malcolm
// enjoy
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile14`, function (sprite, location) {
    game.splash("You Died! Lol ur so bad")
    game.reset()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile11`, function (sprite, location) {
    tiles.setTilemap(tilemap`level10`)
    scene.setBackgroundColor(3)
    scene.centerCameraAt(0, 0)
    effects.starField.startScreenEffect()
    effects.blizzard.startScreenEffect()
    effects.clouds.startScreenEffect()
    _2 = sprites.create(img`
        1 1 1 1 1 1 1 2 2 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 6 1 1 1 1 1 1 1 1 1 1 6 1 1 
        1 1 1 6 1 1 1 1 1 1 1 1 6 1 1 1 
        1 1 1 1 6 1 1 1 1 1 1 6 1 1 1 1 
        1 1 1 1 1 6 1 1 1 1 6 1 1 1 1 1 
        1 1 1 1 1 1 6 1 1 6 1 1 1 1 1 1 
        2 1 1 1 1 1 1 2 2 1 1 1 1 1 1 2 
        2 1 1 1 1 1 1 2 2 1 1 1 1 1 1 2 
        1 1 1 1 1 1 6 1 1 6 1 1 1 1 1 1 
        1 1 1 1 1 6 1 1 1 1 6 1 1 1 1 1 
        1 1 1 1 6 1 1 1 1 1 1 6 1 1 1 1 
        1 1 1 6 1 1 1 1 1 1 1 1 6 1 1 1 
        1 1 6 1 1 1 1 1 1 1 1 1 1 6 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 2 2 1 1 1 1 1 1 1 
        `, SpriteKind.Projectile)
    _2.setVelocity(-50, -69)
    _2.setBounceOnWall(true)
    _1 = sprites.create(img`
        1 1 1 1 1 1 1 2 2 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 6 1 1 1 1 1 1 1 1 1 1 6 1 1 
        1 1 1 6 1 1 1 1 1 1 1 1 6 1 1 1 
        1 1 1 1 6 1 1 1 1 1 1 6 1 1 1 1 
        1 1 1 1 1 6 1 1 1 1 6 1 1 1 1 1 
        1 1 1 1 1 1 6 1 1 6 1 1 1 1 1 1 
        2 1 1 1 1 1 1 2 2 1 1 1 1 1 1 2 
        2 1 1 1 1 1 1 2 2 1 1 1 1 1 1 2 
        1 1 1 1 1 1 6 1 1 6 1 1 1 1 1 1 
        1 1 1 1 1 6 1 1 1 1 6 1 1 1 1 1 
        1 1 1 1 6 1 1 1 1 1 1 6 1 1 1 1 
        1 1 1 6 1 1 1 1 1 1 1 1 6 1 1 1 
        1 1 6 1 1 1 1 1 1 1 1 1 1 6 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 2 2 1 1 1 1 1 1 1 
        `, SpriteKind.Projectile)
    _1.setVelocity(-50, 50)
    _1.setBounceOnWall(true)
    mySprite = sprites.create(img`
        1 1 1 1 1 1 1 2 2 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 6 1 1 1 1 1 1 1 1 1 1 6 1 1 
        1 1 1 6 1 1 1 1 1 1 1 1 6 1 1 1 
        1 1 1 1 6 1 1 1 1 1 1 6 1 1 1 1 
        1 1 1 1 1 6 1 1 1 1 6 1 1 1 1 1 
        1 1 1 1 1 1 6 1 1 6 1 1 1 1 1 1 
        2 1 1 1 1 1 1 2 2 1 1 1 1 1 1 2 
        2 1 1 1 1 1 1 2 2 1 1 1 1 1 1 2 
        1 1 1 1 1 1 6 1 1 6 1 1 1 1 1 1 
        1 1 1 1 1 6 1 1 1 1 6 1 1 1 1 1 
        1 1 1 1 6 1 1 1 1 1 1 6 1 1 1 1 
        1 1 1 6 1 1 1 1 1 1 1 1 6 1 1 1 
        1 1 6 1 1 1 1 1 1 1 1 1 1 6 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 2 2 1 1 1 1 1 1 1 
        `, SpriteKind.Projectile)
    mySprite.setVelocity(50, 50)
    mySprite.setBounceOnWall(true)
    scene.cameraShake(1, 999999)
})
let mySprite: Sprite = null
let myCorg: Corgio = null
let _2: Sprite = null
let _1: Sprite = null
game.splash("Press Space to start!")
tiles.setTilemap(tilemap`level1`)
effects.starField.startScreenEffect()
scene.setBackgroundColor(10)
myCorg = corgio.create(SpriteKind.Player)
myCorg.horizontalMovement()
myCorg.verticalMovement()
myCorg.follow()
music.spooky.play()
myCorg.maxMoveVelocity += 15
