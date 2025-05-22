
class Armor {
    constructor(slashN, pierceN, weightN, specialArmorAbility) {
        this.slashNegate = slashN; //this is dependency injection
        this.pierceNegate = pierceN;
        this.weight = weightN;
        this.specialArmorAbility = specialArmorAbility;
    }
}

let ChainMail = new Armor(5,0);


export default Armor;
