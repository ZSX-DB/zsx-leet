import findPoisonedDuration from '../495';

test("495", () => {
    expect(findPoisonedDuration([1, 4], 2)).toBe(4)
    expect(findPoisonedDuration([1, 2], 2)).toBe(3)
})
