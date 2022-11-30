import isPowerOfFour from '../342';

test("342", () => {
    expect(isPowerOfFour(16)).toBe(true)
    expect(isPowerOfFour(5)).toBe(false)
    expect(isPowerOfFour(0)).toBe(false)
    expect(isPowerOfFour(2)).toBe(false)
    expect(isPowerOfFour(9)).toBe(false)
    expect(isPowerOfFour(8)).toBe(false)
    expect(isPowerOfFour(1)).toBe(true)
})
