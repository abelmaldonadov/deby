class Farm
{
    constructor() {
        this.shortName = "farm"
        this.name = "Los animales de la granja"
        this.description = "El juego consiste en relacionar los animales con su onomatopeya"
        this.arrHabil = [
            "Mi Reby sabe",
            "Mi Reby sabe",
            "Mi Reby sabe"
        ]

        this.arrMission = [
            {enun:"Encuentra al animal que hace muuuuu",obj:"vaca"},
            {enun:"Encuentra al animal que hace pio pio",obj:"pollo"},
            {enun:"Encuentra al animal que hace beeeee",obj:"oveja"},
            {enun:"Encuentra al animal que hace cuac cuac",obj:"pato"},
            {enun:"Encuentra al animal que hace oink oink",obj:"cerdo"}
        ]

        this.level = 0 // CORRESPONDE AL INDICE DEL ARRMISSION
        this.msgWin = `
            <span class="text-notify text-13">Felicidades. Lo lograste.</span> Hora de probar otra actividad. <br><br> 
            <a href="informe.html" target="_blank">Visualizar informe de diagnóstico</a>
        `
        this.msgLose = `No es la respuesta. Pero no hay problema. <span class="text-notify text-13">Sigamos practicando.</span>`
        this.msgNext = `<span class="text-notify text-13">Excelente.</span> Escucha atentamente la siguiente onomatopeya.`

        // Aleatorizar las misiones
        this.convertArrMissionRand()
    }

    addLevel() {
        this.level++
        Msg.talk("Up level: "+this.level)
    }
    evalSelect(sel) {
        let selObj = sel.dataset.obj
        let trueObj = this.getMission().obj
        return (selObj == trueObj)
    }

    convertArrMissionRand() {
        let arrMission = []
        let newArrMission = []
        for (let i = 0; i < this.arrMission.length; i++) {
            arrMission[i] = this.arrMission[i]
        }
        while (arrMission.length > 0) {
            let rand = (Math.random()*100) % arrMission.length
            let ind = rand.toFixed(0) - 1
            if (ind < 0) {ind++}
            newArrMission.push(arrMission.splice(ind,1)[0])
        }
        this.arrMission = newArrMission
    }

    getShortName() {
        return this.shortName
    }
    getName() {
        return this.name
    }
    getDescription() {
        return this.description
    }
    getArrHabil() {
        return this.arrHabil
    }
    getArrMission() {
        return this.arrMission
    }
    getMission() {
        return this.arrMission[this.level]
    }
    setLevel(level) {
        this.level = level
    }
    getLevel() {
        return this.level
    }
    getMsgWin() {
        return this.msgWin
    }
    getMsgLose() {
        return this.msgLose
    }
    getMsgNext() {
        return this.msgNext
    }
    getNumLevels() {
        return this.arrMission.length
    }
}