// PRESETS
const PLAYER_NAME = localStorage.getItem("playerName")
const PLAYER_AGE = localStorage.getItem("playerAge")
const GAME_MODE = localStorage.getItem("gameMode")

let player = new Player(PLAYER_NAME,PLAYER_AGE)
let mode
switch (GAME_MODE) {
    case "farm":
        mode = new Farm()
        break;

    default:
        console.error("No se estableció el modo de juego")
        break;
}
let game = new Game(player,mode)

// EVENTS
document.querySelector("#next").addEventListener("click",() => { game.next() })
document.querySelector("#reset").addEventListener("click",() => { game.reset() })

// GAME
