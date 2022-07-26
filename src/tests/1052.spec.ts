import maxSatisfied from '../1052';

test("1052", () => {
    expect(maxSatisfied([1, 0, 1, 2, 1, 1, 7, 5], [0, 1, 0, 1, 0, 1, 0, 1], 3)).toBe(16)
    expect(maxSatisfied([1], [0], 1)).toBe(1)
})
