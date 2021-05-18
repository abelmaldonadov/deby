class Game
{
    constructor(player, mode) {
        this.player = player
        this.mode = mode
        this.setBG()
        this.setEnun()
        this.setItems()
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
        localStorage.clear()
        location.href = window.location.origin
    }

    setBG() {
        document.querySelector("body").style.background = "url('assets/modes/"+this.mode.getShortName()+"/images/bg.svg')"
    }
    setEnun() {
        document.querySelector(".control .enun").innerHTML = `
            <p>${ this.mode.getName() }</p>
            <p>${ this.mode.getDescription() }</p>
            <p>${ this.mode.getMision().enun }</p>
        `
    }
    setItems() {
        // 
    }
}