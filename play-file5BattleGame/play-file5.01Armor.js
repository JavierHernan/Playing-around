
class Armor {
    constructor(slashN, pierceN, weightN) {
        this.slashNegate = slashN; //this is dependency injection
        this.pierceNegate = pierceN;
        this.weight = weightN
    }
}

let ChainMail = new Armor(5,0);
