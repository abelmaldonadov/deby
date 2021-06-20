if (!localStorage.getItem("gameInit")) {
    localStorage.clear()
    location.href = window.location.origin
}

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
let info = new Informe(
    "Informe_"+new Date().getFullYear()+"-"+(new Date().getMonth()+1)+"-"+new Date().getDate()+"_"+PLAYER_NAME+"_"+PLAYER_AGE+"_"+GAME_MODE,
    mode.getNumLevels()
)
let game = new Game(player,mode, info)

// EVENTS
document.querySelector("#reset").addEventListener("click",() => { game.reset() })
document.querySelector("#exit").addEventListener("click", () => { game.end() })

// GAME
