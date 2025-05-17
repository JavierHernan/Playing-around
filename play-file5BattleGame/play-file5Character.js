//mess around with classes and constructors

class Character {
    constructor() {
        this.armor;
        this.weapon;
        this.fancyHat; 
    }
    equipArmor(item) {
        this.armor = item
    }
    equipWeapon(item) {
        this.weapon = item
    }
    wearFancyHat(item) {
        this.fancyHat = item
    }
    attack(){
        if(this.weapon.pierceDamage && this.weapon.slashDamage){
            console.log(`You have done ${this.weapon.pierceDamage} in pierce and ${this.weapon.slashDamage} in slash`)
        } else if(this.weapon.pierceDamage && !this.weapon.slashDamage) {
            console.log(`You have done ${this.weapon.pierceDamage} in pierce`)
        } else if (!this.weapon.pierceDamage && this.weapon.slashDamage) {
            console.log(`You have done ${this.weapon.pierceDamage} in slash`)
        }
    }
}

// node play-file5BattleGame.js