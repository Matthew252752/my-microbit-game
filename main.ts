input.onButtonPressed(Button.A, function () {
    if (player.get(LedSpriteProperty.X) > 1) {
        player.change(LedSpriteProperty.X, -1)
    }
})
input.onButtonPressed(Button.B, function () {
    if (player.get(LedSpriteProperty.X) < 3) {
        player.change(LedSpriteProperty.X, 1)
    }
})
/**
 * Instructions
 */
/**
 * You are the LED on the top row. You have to dodge the oncoming LEDs from the bottom. Use A and B to move left and right. Your score is equivalent to how many seconds you survive.
 */
let player: game.LedSprite = null
player = game.createSprite(2, 0)
let obstacle = game.createSprite(randint(0, 5), 4)
let wall = game.createSprite(0, 0)
wall = game.createSprite(0, 1)
wall = game.createSprite(0, 2)
wall = game.createSprite(0, 3)
wall = game.createSprite(0, 4)
wall = game.createSprite(4, 0)
wall = game.createSprite(4, 1)
wall = game.createSprite(4, 2)
wall = game.createSprite(4, 3)
wall = game.createSprite(4, 4)
game.setScore(0)
basic.forever(function () {
    while (player.isTouching(obstacle)) {
        game.gameOver()
    }
})
basic.forever(function () {
    if (!(game.isGameOver())) {
        basic.pause(1000)
        game.setScore(game.score() + 1)
    }
})
basic.forever(function () {
    obstacle.change(LedSpriteProperty.Y, -1)
    basic.pause(randint(350, 50))
})
basic.forever(function () {
    if (obstacle.isTouching(wall)) {
        basic.pause(100)
        obstacle.delete()
        obstacle = game.createSprite(randint(1, 4), 4)
    } else {
        if (obstacle.isTouchingEdge()) {
            basic.pause(100)
            obstacle.delete()
            obstacle = game.createSprite(randint(1, 4), 4)
            basic.pause(200)
        }
    }
})
