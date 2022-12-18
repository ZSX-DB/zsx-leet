import findLengthOfLCIS from '../674';

test("674", () => {
    expect(findLengthOfLCIS([1, 3, 5, 4, 7])).toBe(3)
    expect(findLengthOfLCIS([2, 2, 2, 2, 2])).toBe(1)
    expect(findLengthOfLCIS([2, 1, 3])).toBe(2)
})
