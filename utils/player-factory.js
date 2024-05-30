import Player from "../player.js";
import PlayerUtil from "./player-util.js";

class PlayerFactory {
    constructor() {
        this.util = new PlayerUtil();
    }

    createPlayer(name) {
        const health = this.util.generateRandomNumber(50, 100);
        const strength = this.util.generateRandomNumber(10, 50);
        const attack = this.util.generateRandomNumber(10, 50);
        return new Player(name, health, strength, attack);
    }
}

export default PlayerFactory;
