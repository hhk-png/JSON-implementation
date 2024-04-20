import { describe, it, expect } from 'vitest'
import { parse, stringify } from '../src/JSONimp.ts'

const testObj = {
  name: 'John',
  age: 20,
  isMan: true,
  income: null,
  wife: null,
}

const nestedObj = {
  ...testObj,
  address: {
    city: 'San Francisco',
    zipCode: 94130,
  },
}
const objWithDate = {
  ...testObj,
  birthDate: new Date(),
}

const testCases = [
  // { value: 1234, key: 'Number' },
  // { value: 'test', key: 'String' },
  { value: true, key: 'Boolean' },
  { value: testObj, key: 'Object' },
  { value: nestedObj, key: 'Nested Objects' },
  { value: [1, 2, 3, null], key: 'Array' },
  { value: [1, 2, Symbol(), 4, [undefined, 8, 9, [10]]], key: 'Nested Array' },
  {
    value: { ...testObj, testArr: [1, 2, 3, () => {}, [10]] },
    key: 'Object with Arrays',
  },
  { value: new Date(), key: 'Date' },
  { value: objWithDate, key: 'Object with Date' },
  { value: null, key: 'Null' },
  { value: undefined, key: 'Undefined' },
  { value: () => {}, key: 'Function' },
  { value: { ...testObj, testFunc: () => {} }, key: 'Object with Function' },
]



describe('parse and stringfy', () => {
  it('Number', () => {
    const value = 1234
    const result = parse(stringify(value))
    expect(stringify(value)).toBe(stringify(result))
  })

  it('String', () => {
    const value = 'test'
    const result = parse(stringify(value))
    expect(stringify(value)).toBe(stringify(result))
  })

  it('Boolean', () => {
    const value = true
  })
})
