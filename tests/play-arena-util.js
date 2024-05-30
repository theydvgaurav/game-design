
import PlayArenaUtil from '../utils/play-arena-util.js'
import TestSuite from './base.js';



class PlayArenaUtilTest extends TestSuite {
    constructor() {
        super();
        this.addTests();
    }

    addTests() {
        this.addTest('should swap objects correctly', () => {
            let obj1 = { a: 1, b: 2 };
            let obj2 = { c: 3, d: 4 };
            const util = new PlayArenaUtil();

            [obj1, obj2] = util.swapObjects(obj1, obj2);

            TestSuite.assertDeepEquals({ a: 1, b: 2 }, obj2, 'obj2 should have obj1\'s original properties');
            TestSuite.assertDeepEquals({ c: 3, d: 4 }, obj1, 'obj1 should have obj2\'s original properties');
        });

        this.addTest('should not affect other properties not in original objects', () => {
            let obj1 = { a: 1, b: 2 };
            let obj2 = { c: 3, d: 4 };
            const util = new PlayArenaUtil();

            [obj1, obj2] = util.swapObjects(obj1, obj2);

            TestSuite.assertNotEquals(obj1, { e: 5 }, 'obj1 should not have properties that were not in obj2');
            TestSuite.assertNotEquals(obj2, { f: 6 }, 'obj2 should not have properties that were not in obj1');
        });

        this.addTest('should swap empty objects correctly', () => {
            let obj1 = {};
            let obj2 = {};
            const util = new PlayArenaUtil();

            [obj1, obj2] = util.swapObjects(obj1, obj2);

            TestSuite.assertDeepEquals({}, obj1, 'obj1 should remain an empty object');
            TestSuite.assertDeepEquals({}, obj2, 'obj2 should remain an empty object');
        });
    }
}

export default PlayArenaUtilTest
