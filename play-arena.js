const log = console.log
import PlayArenaUtil from "./utils/play-arena-util.js"

class PlayArena {
    constructor(player1, player2) {
        this.player1 = player1
        this.player2 = player2
        this.util = new PlayArenaUtil()
    }

    fight() {
        log(`${'*'.repeat(15)} STARTING NEW GAME ${'*'.repeat(15)}`)
        let [attacker, defender] = this.determineInitialRoles()
        log(`Attacker: ${attacker.name} | Health: ${attacker.health} | Strength: ${attacker.strength} | Attack: ${attacker.attack}`)
        log(`Defender: ${defender.name} | Health: ${defender.health} | Strength: ${defender.strength} | Attack: ${defender.attack}`)
        while (attacker.isAlive && defender.isAlive) {
            this.makeMove(attacker, defender);
            [attacker, defender] = this.util.swapObjects(attacker, defender);
        }
        this.announceWinner();
    }

    determineInitialRoles() {
        if (this.player1.health < this.player2.health)
            return [this.player1, this.player2];
        return [this.player2, this.player1];
    }

    makeMove(attacker, defender) {
        const attackPower = attacker.util.calculateAttackDamage(attacker.attack);
        const defensePower = defender.util.calculateDefendingStrength(defender.strength);
        log(`Attacker: ${attacker.name} | Defender: ${defender.name} | ` +
            `Attack Power: ${attackPower} | Defense Power: ${defensePower}`);
        const damageToHealth = Math.max(attackPower - defensePower, 0);
        defender.health = Math.max(defender.health - damageToHealth, 0);
        log(`${defender.name}'s Health after attack: ${defender.health}`);
    }

    announceWinner() {
        let winner = this.player1.isAlive ? this.player1.name : this.player2.name;
        log(`${'*'.repeat(15)} Winner of the Game is:: ${winner} ${'*'.repeat(15)}`);

    }
}


export default PlayArena