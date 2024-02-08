class heroAttack{
    constructor(name, age, type){
        this.name = name
        this.age = age
        this.type = type
    }

    toString() {
        let attack = "";
        if (this.type === "mago") {
            attack = "magia"
        } else if (this.type === "guerreiro") {
            attack = "espada"
        } else if (this.type === "monge") {
            attack = "artes marciais"
        } else if (this.type === "ninja") {
            attack = "shuriken"
        }
        console.log(`${this.name}, de ${this.age} anos, classe ${this.type}, atacou usando ${attack}.`)
    } 
}

let newMove = new heroAttack("Brandon", "23", "mago")
newMove.toString()