class Fighters {
    constructor(healthPoints, damage, stamina) {
        this.healthPoints = healthPoints;
        this.damage = damage;
        this.stamina = stamina;
    }

    toRestoreLives() {
        this.healthPoints = 50
    };

    toStrike(opponent) {
        opponent.healthPoints = opponent.healthPoints - 2 * this.stamina;
        this.damage = this.damage + 10 * this.stamina;
    }

    toDefend() {
        let hit = Boolean(Math.round(Math.random()));
        if(hit){
            this.healthPoints = this.healthPoints - 10;
        } else{
            this.healthPoints = this.healthPoints - 3;
        }
    };
}
class Wizards extends Fighters {}
class Warriors extends Fighters {}

let wizard = new Wizards(50, 0, 0.5)
let warrior = new Warriors(50, 0, 0.25)

warrior.toStrike(wizard)
wizard.toStrike(warrior)

wizard.toDefend()
warrior.toDefend()

console.log(wizard)
console.log(warrior)
