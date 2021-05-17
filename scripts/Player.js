class Player
{
    constructor(name, age) {
        this.name = name
        this.age = age
        this.score = 0
    }

    addScore(score) {
        this.score += parseInt(score,10)
    }
    dropScore(score) {
        this.score -= parseInt(score,10)
    }

    getName() {
        return this.name
    }
    getAge() {
        return this.age
    }
    getScore() {
        return this.score
    }
}