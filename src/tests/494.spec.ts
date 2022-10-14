import findTargetSumWays from '../494';

test("494", () => {
    expect(findTargetSumWays([1, 1, 1, 1, 1], 3)).toBe(5)
    expect(findTargetSumWays([1], 1)).toBe(1)
})
