import TestSuite from './base.js';
import PlayerUtil from '../utils/player-util.js'; 

class PlayerUtilTest extends TestSuite {
    constructor() {
        super();
        this.addTests();
    }

    addTests() {
        this.addTest('should generate a random number within the specified range', () => {
            const util = new PlayerUtil();
            const min = 10;
            const max = 20;
            const randomNumber = util.generateRandomNumber(min, max);
            TestSuite.assertTrue(randomNumber >= min && randomNumber <= max, `Random number ${randomNumber} should be between ${min} and ${max}`);
        });

        this.addTest('should roll a dice and get a number between 1 and 6', () => {
            const util = new PlayerUtil();
            const diceRoll = util.rollDice();
            TestSuite.assertTrue(diceRoll >= 1 && diceRoll <= 6, `Dice roll ${diceRoll} should be between 1 and 6`);
        });

        this.addTest('should calculate defending strength correctly', () => {
            const util = new PlayerUtil();
            util.rollDice = () => 4; 
            const strength = 5;
            const defendingStrength = util.calculateDefendingStrength(strength);
            TestSuite.assertEquals(20, defendingStrength, `Defending strength should be ${strength * 4}`);
        });

        this.addTest('should calculate attack damage correctly', () => {
            const util = new PlayerUtil();
            util.rollDice = () => 3; 
            const attack = 7;
            const attackDamage = util.calculateAttackDamage(attack);
            TestSuite.assertEquals(21, attackDamage, `Attack damage should be ${attack * 3}`);
        });
    }
}


export default PlayerUtilTest