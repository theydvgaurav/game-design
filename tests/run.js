import PlayerTest from './player.js'
import PlayArenaUtilTest from './player-util.js'
import PlayArenaTest from './play-arena.js'
import PlayerFactoryTest from './player-factory.js'
import PlayerUtilTest from './player-util.js'

const playerTest = new PlayerTest();
playerTest.run();

const playArenaUtilTest = new PlayArenaUtilTest();
playArenaUtilTest.run();

const playArenaTest = new PlayArenaTest();
playArenaTest.run();

const playerFactoryTest = new PlayerFactoryTest();
playerFactoryTest.run();

const playerUtilTest = new PlayerUtilTest();
playerUtilTest.run();