import PlayerUtil from "./utils/player-util.js"

class Player {

    constructor(name, health, strength, attack) {
        this.name = name
        this.health = health;
        this.strength = strength;
        this.attack = attack;
        this.util = new PlayerUtil()
    }

    get isAlive() {
        return this.health > 0
    }

}

export default Player