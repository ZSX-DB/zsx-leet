import isMonotonic from '../896';

test("896", () => {
    expect(isMonotonic([1, 2, 2, 3])).toBe(true)
    expect(isMonotonic([6, 5, 4, 4])).toBe(true)
    expect(isMonotonic([1, 3, 2])).toBe(false)
})
