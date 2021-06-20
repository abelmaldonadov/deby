class Game
{
    constructor(player, mode, info) {
        this.player = player
        this.mode = mode
        this.info = info

        this.setBG()
        this.setEnun()
        this.start()
    }

    start() {
        // Eliminar informe del storange
        // localStorage.removeItem("info")

        // Mostrar mensaje de presentación
        let arrHabil = this.mode.getArrHabil()
        let habil = "<ul>"
        for (let i = 0; i < arrHabil.length; i++) {
            habil += `<li>${ arrHabil[i] }</li>`
        }
        habil += "</ul>"
        Msg.talk(`
            Hola <span class="text-13 text-notify">${ this.player.getName() }</span> 
            Bienvenido(a) al juego: <span class="text-13 text-notify">${ this.mode.getName() }</span> <br>
            En este juego podrás desarrollar las siguientes habilidades: <br>
            <span class="ml-3 block"> <br>
            ${habil}</span> <br>
            Mucha suerte ;)
        `)

        this.setItems()
        this.setMission()
    }
    next() {
        // Evaluar si ya se gano el juego
        if (this.mode.getNumLevels() == this.mode.getLevel() + 1) {
            this.win()
        } else {
            this.mode.addLevel()
            Msg.talk(this.mode.getMsgNext())
            this.setMission()
            this.setItems()
        }
    }
    win() {
        localStorage.setItem("info",JSON.stringify(this.info))
        Msg.talk(this.mode.getMsgWin())
    }
    reset() {
        this.mode.convertArrMissionRand()
        this.mode.setLevel(0)
        this.info.setArrQuestions([])
        this.start()
    }
    end() {
        Msg.talk("Game over")
        localStorage.clear()
        location.href = window.location.origin
    }

    repLevel() {
        Msg.talk(this.mode.getMsgLose())
    }
    select(e) {
        if (mode.evalSelect(e)) {
            this.info.addQuestion({time: 10, question: this.mode.getMission().enun, resp: e.dataset.obj, cal: true})
            game.next()
        } else {
            this.info.addQuestion({time: 10, question: this.mode.getMission().enun, resp: e.dataset.obj, cal: false})
            game.repLevel()
        }
    }

    setBG() {
        document.querySelector("body").style.background = "url('assets/modes/"+this.mode.getShortName()+"/images/bg.svg')"
    }
    setEnun() {
        document.querySelector(".panel .enun").innerHTML = `
            <h4>${ this.mode.getName() }</h4>
            <i class="text-11">${ this.mode.getDescription() }</i>
            <p class="text-11 text-gray">Informe disponible al culminar la actividad</p>
        `
    }
    setMission() {
        let mission = this.mode.getMission()
        document.querySelector(".mission").innerHTML = `
            <div class="col">
                <div class="control l-yellow p-2 pointer" id="audioObjTrigger">
                    <h4 class="center">
                        ${ mission.enun } 
                        <span>&#128226;</span> <span class="text-gray">(Click)</span>
                        <audio id="audioObj" src="assets/modes/farm/sounds/${ mission.obj }.mp3"></audio>
                    </h4>
                </div>
            </div>
        `
        // document.querySelector("#audioObj").play()
        document.querySelector("#audioObjTrigger").addEventListener("click", () => {
            document.querySelector("#audioObj").play()
        })
    }
    setItems() {
        document.querySelector(".monitor").innerHTML = ""
        this.mode.getArrMission().forEach(item => {
            document.querySelector(".monitor").innerHTML += `
                <div class="col sm-6 lg-4 xl-3 overflow-h pointer">
                    <div class="blur radius p-3">
                        <img class="w-100" src="assets/modes/${ this.mode.getShortName() }/images/${ item.obj }.svg" onclick="game.select(this)" data-obj="${ item.obj }">
                    </div>
                </div>
            `
        })
    }

    getInfo() {
        return this.info
    }
}