class Informe
{
    constructor(name, numQ) {
        this.name = name
        this.numTotQuestions = numQ // Numero de preguntas
        this.arrQuestions = [] // Contiene los objetos respuesta {time: 124, question: "¿Que animal hace pio?", resp: "pollo", cal: true}
    }

    addQuestion(objQ) {
        this.arrQuestions.push(objQ)
    }

    getName() {
        return this.name
    }
    setArrQuestions(arrQ) {
        this.arrQuestions = arrQ
    }
    getArrQuestions() {
        return this.arrQuestions
    }
    getNumTotQuestions() {
        return this.numtotQuestions
    }
    getNumRespGood() {
        let total = 0
        this.arrQuestions.forEach(i => {
            if (i.cal) {
                total++
            }
        })
        return this.total
    }
    getNumRespBad() {
        let total = 0
        this.arrQuestions.forEach(i => {
            if (!i.cal) {
                total++
            }
        })
        return this.total
    }
    getTime() {
        let total = 0
        this.arrQ.forEach(i => {
            total += i.time
        })
        return total
    }
}