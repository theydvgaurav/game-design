class TestSuite {
    constructor() {
        this.tests = [];
    }

    addTest(testName, testFn) {
        this.tests.push({ name: testName, fn: testFn });
    }

    run() {
        this.tests.forEach(test => {
            try {
                test.fn();
                console.log(`Passed Test:: ${test.name}`);
            } catch (error) {
                console.error(`Failed Test:: ${test.name}: ${error.message}`);
            }
        });
    }

    static assertEquals(expected, actual, message) {
        if (expected !== actual) {
            throw new Error(message || `Expected ${expected}, but got ${actual}`);
        }
    }

    static assertInstanceOf(instance, constructor, message) {
        if (!(instance instanceof constructor)) {
            throw new Error(message || `Expected instance of ${constructor.name}, but got ${instance.constructor.name}`);
        }
    }

    static assertNotEquals(notExpected, actual, message) {
        if (notExpected === actual) {
            throw new Error(message || `Did not expect ${notExpected}, but got ${actual}`);
        }
    }

    static assertDeepEquals(expected, actual, message) {
        const isObject = obj => obj && typeof obj === 'object';

        if (!isObject(expected) || !isObject(actual)) {
            throw new Error(message || `Expected and actual values must be objects.`);
        }

        const keys1 = Object.keys(expected);
        const keys2 = Object.keys(actual);

        if (keys1.length !== keys2.length) {
            throw new Error(message || `Objects do not have the same number of keys.`);
        }

        for (let key of keys1) {
            if (expected[key] !== actual[key]) {
                throw new Error(message || `Expected ${expected[key]} for key ${key}, but got ${actual[key]}`);
            }
        }
    }

    static assertTrue(condition, message) {
        if (!condition) {
            throw new Error(message || `Expected condition to be true`);
        }
    }
}


export default TestSuite