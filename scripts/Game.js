class Game
{
    constructor(player, mode) {
        this.player = player
        this.mode = mode
    }

    start() {
        console.log("Start")
    }

    next() {
        console.log("Next level")
    }

    reset() {
        console.log("Reset")
    }

    end() {
        console.log("Game over")
    }
}