    // Soldier
class Soldier {
    constructor(healthArg, strengthArg) {
        this.health=healthArg
        this.strength=strengthArg

    }
    attack=()=>{
        return this.strength
    }
    receiveDamage=(damage)=>{
        this.health -= damage
    }
}
// Viking
class Viking  extends Soldier{
    constructor(nameArg, healthArg, strengthArg){
        super(healthArg, strengthArg)
        this.name=nameArg
    }
    receiveDamage=(damage)=>{
        this.health -= damage
        if (this.health >0){
            return `${this.name} has received ${damage} points of damage`
        }
        return `${this.name} has died in act of combat`
    }
    battleCry=()=>{
        return `Odin Owns You All!`
    }
}

// Saxon
class Saxon extends Soldier{
    constructor(healthArg,strengthArg){
        super(healthArg,strengthArg)
    }
    receiveDamage=(damage)=>{
        this.health -= damage
        if (this.health >0){
            return `A Saxon has received ${damage} points of damage`
        }
        return `A Saxon has died in combat`
    }
}

// War
class War {
    constructor(){
        this.vikingArmy=[]
        this.saxonArmy=[]
    }
    addViking=(viking)=>{
        this.vikingArmy.push(viking)
    }
    addSaxon=(saxon)=>{
        this.saxonArmy.push(saxon)
    }
    vikingAttack=()=>{
        let randomSaxon = Math.floor(Math.random()*this.saxonArmy.length)
        let randomViking= Math.floor(Math.random()*this.vikingArmy.length)
        let result =this.saxonArmy[randomSaxon].receiveDamage(this.vikingArmy[randomViking].strength)
        if ( this.saxonArmy[randomSaxon].health <= 0){
            this.saxonArmy.splice(randomSaxon,1)
        }
        return result
    }
    saxonAttack=()=>{
        let randomSaxon = Math.floor(Math.random()*this.saxonArmy.length)
        let randomViking= Math.floor(Math.random()*this.vikingArmy.length)
        let result =this.vikingArmy[randomViking].receiveDamage(this.saxonArmy[randomSaxon].strength)
        if ( this.vikingArmy[randomViking].health <= 0){
            this.vikingArmy.splice(randomViking,1)
        }
        return result
    }
    showStatus=()=>{
        if (this.saxonArmy.length == 0){
            return `Vikings have won the war of the century!`
        }
        else if (this.vikingArmy.length == 0){
            return `Saxons have fought for their lives and survive another day...`
        }
        else{
            return `Vikings and Saxons are still in the thick of battle.`
        }
    }
}
