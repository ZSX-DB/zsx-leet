import validMountainArray from '../941';

test("941", () => {
    expect(validMountainArray([2, 1])).toBe(false)
    expect(validMountainArray([3, 5, 5])).toBe(false)
    expect(validMountainArray([0, 3, 2, 1])).toBe(true)
    expect(validMountainArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])).toBe(false)
    expect(validMountainArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0])).toBe(false)
})
