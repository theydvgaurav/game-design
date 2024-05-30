import TestSuite from './base.js';
import Player from '../player.js'; 
import PlayerUtil from '../utils/player-util.js';



class PlayerTest extends TestSuite {
    constructor() {
        super();
        this.addTests();
    }

    addTests() {
        this.addTest('should set the name property correctly', () => {
            const player = new Player('Test Player', 100, 10, 5);
            TestSuite.assertEquals('Test Player', player.name);
        });

        this.addTest('should set the health property correctly', () => {
            const player = new Player('Test Player', 100, 10, 5);
            TestSuite.assertEquals(100, player.health);
        });

        this.addTest('should set the strength property correctly', () => {
            const player = new Player('Test Player', 100, 10, 5);
            TestSuite.assertEquals(10, player.strength);
        });

        this.addTest('should set the attack property correctly', () => {
            const player = new Player('Test Player', 100, 10, 5);
            TestSuite.assertEquals(5, player.attack);
        });

        this.addTest('should set the util property as an instance of PlayerUtil', () => {
            const player = new Player('Test Player', 100, 10, 5);
            TestSuite.assertInstanceOf(player.util, PlayerUtil);
        });

        this.addTest('should return true for isAlive if health is greater than 0', () => {
            const player = new Player('Test Player', 100, 10, 5);
            TestSuite.assertEquals(true, player.isAlive);
        });

        this.addTest('should return false for isAlive if health is 0', () => {
            const player = new Player('Test Player', 0, 10, 5);
            TestSuite.assertEquals(false, player.isAlive);
        });

        this.addTest('should return false for isAlive if health is less than 0', () => {
            const player = new Player('Test Player', -10, 10, 5);
            TestSuite.assertEquals(false, player.isAlive);
        });
    }
}


export default PlayerTest