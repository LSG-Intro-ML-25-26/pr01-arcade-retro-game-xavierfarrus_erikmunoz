controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    nena,
    assets.animation`nena-animation-down`,
    500,
    false
    )
})
let nena: Sprite = null
nena = sprites.create(assets.image`nena-front`, SpriteKind.Player)
controller.moveSprite(nena)
