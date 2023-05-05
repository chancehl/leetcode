import { maxSubArray } from './maxSubArray'

describe('maxSubArray', () => {
    test('input 1', () => {
        expect(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toEqual(6)
    })

    test('input 2', () => {
        expect(maxSubArray([1])).toEqual(1)
    })

    test('input 3', () => {
        expect(maxSubArray([5, 4, -1, 7, 8])).toEqual(23)
    })
})
