namespace SpriteKind {
    export const Tower = SpriteKind.create()
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    let nena: Sprite = null
    animation.runImageAnimation(
    nena,
    assets.animation`nena-animation-down`,
    500,
    false
    )
})
tiles.loadMap(tiles.createSmallMap(tilemap`level2`))
