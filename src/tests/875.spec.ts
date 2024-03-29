import minEatingSpeed from '../875';

test("875", () => {
    expect(minEatingSpeed([3, 6, 7, 11], 8)).toBe(4)
    expect(minEatingSpeed([30, 11, 23, 4, 20], 5)).toBe(30)
    expect(minEatingSpeed([30, 11, 23, 4, 20], 6)).toBe(23)
    expect(minEatingSpeed([312884470], 312884469)).toBe(2)
})
