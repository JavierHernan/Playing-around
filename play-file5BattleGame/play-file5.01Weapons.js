
class Weapon {
    constructor(slash, pierce, attackSpeedTime, specialWeaponAbility) {
        this.slashDamage = slash;
        this.pierceDamage = pierce;
        this.attackSpeedTime = attackSpeedTime;
        this.specialWeaponAbility = specialWeaponAbility;
    }
}

let Spear = new Weapon(0,6);
Spear.shaftLength = 5;
