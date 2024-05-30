import PlayerFactory from "./utils/player-factory.js"
import PlayArena from "./play-arena.js"

const playerFactory = new PlayerFactory();

const player1 = playerFactory.createPlayer("Gaurav");
const player2 = playerFactory.createPlayer("Deepak");


const playArena = new PlayArena(player1, player2);

playArena.fight();