# made by malcolm
# enjoy

def on_overlap_tile(sprite, location):
    game.splash("You Died! Lol ur so bad") 
    game.reset()
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile1
    """),
    on_overlap_tile)

def on_overlap_tile2(sprite, location):
    scene.camera_shake(2, 500)
    music.big_crash.play()
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile6
    """),
    on_overlap_tile2)

def on_overlap_tile3(sprite, location):
    myCorg.max_move_velocity = 250
scene.on_overlap_tile(SpriteKind.player,
    sprites.dungeon.purple_outer_north1,
    on_overlap_tile3)

def on_overlap_tile4(sprite, location):
    game.splash("You Died! Lol ur so bad")
    game.reset()
scene.on_overlap_tile(SpriteKind.player,
    sprites.dungeon.hazard_lava0,
    on_overlap_tile4)

def on_overlap_tile5(sprite, location):
    effects.clouds.end_screen_effect()
    tiles.set_tilemap(tilemap("""
        level6
    """))
    effects.star_field.start_screen_effect()
    myCorg.max_move_velocity = 69
    myCorg.max_jump = 999
    music.sonar.play()
    scene.set_background_color(15)
    game.splash("Good Luck!")
    game.splash("Spam jump to fly")
    scene.camera_shake(2, 100)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile3
    """),
    on_overlap_tile5)

def on_overlap_tile6(sprite, location):
    myCorg.max_jump += 120
    music.beam_up.play()
    scene.camera_shake(1, 100)
scene.on_overlap_tile(SpriteKind.player,
    sprites.dungeon.collectible_blue_crystal,
    on_overlap_tile6)

def on_overlap_tile7(sprite, location):
    effects.confetti.start_screen_effect()
    game.over(True)
scene.on_overlap_tile(SpriteKind.player,
    sprites.dungeon.chest_closed,
    on_overlap_tile7)

def on_overlap_tile8(sprite, location):
    effects.clouds.start_screen_effect()
    myCorg.max_move_velocity = 69
    myCorg.max_jump = 2
    scene.set_background_color(9)
    tiles.set_tilemap(tilemap("""
        level2
    """))
    music.sonar.play()
    scene.camera_shake(2, 100)
scene.on_overlap_tile(SpriteKind.player,
    sprites.dungeon.purple_outer_south0,
    on_overlap_tile8)

def on_overlap_tile9(sprite, location):
    game.splash("You Died! Lol ur so bad")
    game.reset()
scene.on_overlap_tile(SpriteKind.player,
    sprites.dungeon.hazard_lava1,
    on_overlap_tile9)

def on_overlap_tile10(sprite, location):
    pass
scene.on_overlap_tile(SpriteKind.player,
    sprites.dungeon.green_outer_south0,
    on_overlap_tile10)

def on_overlap_tile11(sprite, location):
    game.splash("You Died! Lol ur so bad")
    game.reset()
scene.on_overlap_tile(SpriteKind.player,
    sprites.dungeon.hazard_water,
    on_overlap_tile11)

def on_overlap_tile12(sprite, location):
    game.splash("You Died! Lol ur so bad")
    game.reset()
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile2
    """),
    on_overlap_tile12)

def on_overlap_tile13(sprite, location):
    myCorg.max_move_velocity = 135
    music.power_up.play()
    scene.camera_shake(2, 1000)
scene.on_overlap_tile(SpriteKind.player,
    sprites.dungeon.collectible_red_crystal,
    on_overlap_tile13)

myCorg: Corgio = None
game.splash("Press Space to start!")
tiles.set_tilemap(tilemap("""
    level1
"""))
scene.set_background_color(10)
myCorg = corgio.create(SpriteKind.player)
myCorg.horizontal_movement()
myCorg.vertical_movement()
myCorg.follow()
music.spooky.play()
myCorg.max_move_velocity += 15