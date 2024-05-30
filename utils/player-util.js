class PlayerUtil {
    generateRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    rollDice() {
        return this.generateRandomNumber(1, 6);
    }

    calculateDefendingStrength(strength) {
        return strength * this.rollDice()
    }

    calculateAttackDamage(attack) {
        return attack * this.rollDice()
    }
}

export default PlayerUtil