import TestSuite from './base.js';
import Player from '../player.js'
import PlayArena from '../play-arena.js'; 
import PlayArenaUtil from '../utils/play-arena-util.js'; 



class PlayArenaTest extends TestSuite {
    constructor() {
        super();
        this.addTests();
    }

    addTests() {
        this.addTest('should initialize with player1, player2, and util properties', () => {
            const player1 = new Player('Player 1', 100, 10, 5);
            const player2 = new Player('Player 2', 100, 15, 7);
            const arena = new PlayArena(player1, player2);

            TestSuite.assertEquals(player1, arena.player1);
            TestSuite.assertEquals(player2, arena.player2);
            TestSuite.assertInstanceOf(arena.util, PlayArenaUtil);
        });

        this.addTest('should determine initial roles correctly when player1 has less health', () => {
            const player1 = new Player('Player 1', 80, 10, 5);
            const player2 = new Player('Player 2', 100, 15, 7);
            const arena = new PlayArena(player1, player2);

            const [attacker, defender] = arena.determineInitialRoles();
            TestSuite.assertEquals(player1, attacker);
            TestSuite.assertEquals(player2, defender);
        });

        this.addTest('should determine initial roles correctly when player2 has less health', () => {
            const player1 = new Player('Player 1', 100, 10, 5);
            const player2 = new Player('Player 2', 80, 15, 7);
            const arena = new PlayArena(player1, player2);

            const [attacker, defender] = arena.determineInitialRoles();
            TestSuite.assertEquals(player2, attacker);
            TestSuite.assertEquals(player1, defender);
        });

        this.addTest('should correctly calculate move impact on defender\'s health', () => {
            const player1 = new Player('Player 1', 100, 10, 5);
            const player2 = new Player('Player 2', 100, 15, 7);
            const arena = new PlayArena(player1, player2);
            
            player1.util.calculateAttackDamage = () => 20;
            player2.util.calculateDefendingStrength = () => 5;
            
            arena.makeMove(player1, player2);
            
            TestSuite.assertEquals(85, player2.health, "Defender's health should be reduced correctly");
        });
    }
}

export default PlayArenaTest