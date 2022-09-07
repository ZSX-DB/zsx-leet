import numRescueBoats from '../881';

test("881", () => {
    expect(numRescueBoats([1, 2], 3)).toBe(1)
    expect(numRescueBoats([3, 2, 2, 1], 3)).toBe(3)
    expect(numRescueBoats([3, 5, 3, 4], 5)).toBe(4)
})
