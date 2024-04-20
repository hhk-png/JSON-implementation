// import './style.css'
import JSONimp from './JSONimp.ts';

const testObj = {
    name: 'John',
    age: 20,
    isMan: true,
    income: null,
    wife: null
};

const nestedObj = {
    ...testObj,
    address: {
        city: 'San Francisco',
        zipCode: 94130
    }
};
const objWithDate = {
    ...testObj,
    birthDate: new Date()
};

const testCases = [
    { value: 1234, key: 'Number' },
    { value: 'test', key: 'String' },
    { value: true, key: 'Boolean' },
    { value: testObj, key: 'Object' },
    { value: nestedObj, key: 'Nested Objects' },
    { value: [1, 2, 3, null], key: 'Array' },
    { value: [1, 2, Symbol(), 4, [undefined, 8, 9, [10]]], key: 'Nested Array' },
    { value: { ...testObj, testArr: [1, 2, 3, () => { }, [10]] }, key: 'Object with Arrays' },
    { value: new Date(), key: 'Date' },
    { value: objWithDate, key: 'Object with Date' },
    { value: null, key: 'Null' },
    { value: undefined, key: 'Undefined' },
    // { value: () => { }, key: 'Function' },
    { value: { ...testObj, testFunc: () => { } }, key: 'Object with Function' }
];

const checkTestCases = (stringfy: any, parse: any) => {
    let check = true;
    let testCaseFailed: any = {};
    for (let i = 0; i < testCases.length; i++) {
        const { key, value } = testCases[i];

        try {
            let result = parse(stringfy(value))
            console.log(stringfy(value))
            console.log(stringfy(result))
            if (stringfy(value) !== stringfy(result)) {
                check = false;
                testCaseFailed = { key, value }
                break;
            }
        } catch (ignore) {
            check = false;
            testCaseFailed = { key, value };
            break;
        }

    };
    if (check) {
        console.log('All Test cases has passed')
    } else {
        console.log(`Test Case for "${testCaseFailed.key}" has Failed`);
        console.log(`Test Case: ${testCaseFailed.value}`)
    }
};

// console.log(JSONimp.parse(JSONimp.stringfy(() => {})))
// console.log(JSONimp.parse(undefined))
checkTestCases(JSONimp.stringfy, JSONimp.parse); // Here you can call your custom stringify implementation

