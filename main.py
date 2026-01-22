def on_down_pressed():
    animation.run_image_animation(nena,
        assets.animation("""
            nena-animation-down
            """),
        500,
        False)
controller.down.on_event(ControllerButtonEvent.PRESSED, on_down_pressed)

nena: Sprite = None
nena = sprites.create(assets.image("""
    nena-front
    """), SpriteKind.player)
controller.move_sprite(nena)