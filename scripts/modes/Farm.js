class Farm
{
    constructor() {
        this.name = "Los animales de la granja"
        this.description = "El juego consiste en relacionar los animales con su onomatopeya"
        this.arrMision = [
            {enun:"Encuentra al animal que hace muuuuu",obj:"vaca"},
            {enun:"Encuentra al animal que hace pio pio",obj:"pollo"},
            {enun:"Encuentra al animal que hace beeeee",obj:"oveja"},
            {enun:"Encuentra al animal que hace cuac cuac",obj:"pato"},
            {enun:"Encuentra al animal que hace oink oink",obj:"cerdo"}
        ]

        this.level = 0 // CORRESPONDE AL INDICE DEL ARRMISION
        this.msgWin = "Ganaste"
        this.msgLose = "Intentalo nuevamente"
    }

    addLevel() {
        this.level++
    }

    getName() {
        return this.name
    }
    getDescription() {
        return this.description
    }
    getMision() {
        return this.arrMision[this.level]
    }
    getMsgWin() {
        return this.msgWin
    }
    getMsgLose() {
        return this.msgLose
    }
}