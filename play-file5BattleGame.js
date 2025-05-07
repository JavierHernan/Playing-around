//mess around with classes and constructors
class Armor {
    constructor(slashN, pierceN) {
        this.slashNegate = slashN; //this is dependency injection
        this.pierceNegate = pierceN;
    }
}
class Weapon {
    constructor(slash, pierce) {
        this.slashDamage = slash;
        this.pierceDamage = pierce;
    }
}
class FancyHat {
    constructor(swagFactor) {
        this.swagFactor = swagFactor;
    }
}

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

let ChainMail = new Armor(5,0);
// console.log(ChainMail)
let ME = new Character();
ME.equipArmor(ChainMail)
// console.log("ME.equipArmor", ME)
let Spear = new Weapon(0,6);
Spear.shaftLength = 5;
ME.equipWeapon(Spear)
// console.log("ME.equipWeapon", ME)
// console.log("ME.weapon", ME.weapon)
ME.attack()
// let Fedora = new FancyHat();

// node play-file5BattleGame.js