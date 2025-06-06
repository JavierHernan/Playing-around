import Character from './Character.js';
import Weapon from './play-file5.01Weapons.js';
import Armor from './play-file5.01Armor.js';
import FancyHat from './play-file5.02Hats.js';

let Spear = new Weapon(0,6);
Spear.shaftLength = 5;
let ChainMail = new Armor(5,0);
let Sword = new Weapon(6, 2, 3, "parry")