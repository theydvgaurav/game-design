import TestSuite from './base.js';
import PlayerUtil from '../utils/player-util.js'; 
import PlayerFactory from '../utils/player-factory.js'; 



class PlayerFactoryTest extends TestSuite {
    constructor() {
        super();
        this.addTests();
    }

    addTests() {
        this.addTest('should create a player with valid properties', () => {
            const factory = new PlayerFactory();

            factory.util.generateRandomNumber = (min, max) => (min + max) / 2;

            const player = factory.createPlayer('Test Player');

            TestSuite.assertEquals('Test Player', player.name);
            TestSuite.assertTrue(player.health >= 50 && player.health <= 100, 'Health should be between 50 and 100');
            TestSuite.assertTrue(player.strength >= 10 && player.strength <= 50, 'Strength should be between 10 and 50');
            TestSuite.assertTrue(player.attack >= 10 && player.attack <= 50, 'Attack should be between 10 and 50');
            TestSuite.assertInstanceOf(player.util, PlayerUtil, 'Player util should be an instance of PlayerUtil');
        });

        this.addTest('should create multiple players with different properties', () => {
            const factory = new PlayerFactory();

            let callCount = 0;
            factory.util.generateRandomNumber = (min, max) => {
                callCount++;
                return min + callCount;
            };

            const player1 = factory.createPlayer('Player 1');
            const player2 = factory.createPlayer('Player 2');

            TestSuite.assertEquals('Player 1', player1.name);
            TestSuite.assertEquals('Player 2', player2.name);
            TestSuite.assertTrue(player1.health !== player2.health, 'Players should have different health values');
            TestSuite.assertTrue(player1.strength !== player2.strength, 'Players should have different strength values');
            TestSuite.assertTrue(player1.attack !== player2.attack, 'Players should have different attack values');
        });
    }
}


export default PlayerFactoryTest
