import longestSubarray from '../1438';

test("1438", () => {
    expect(longestSubarray([8, 2, 4, 7], 4)).toBe(2)
    expect(longestSubarray([10, 1, 2, 4, 7, 2], 5)).toBe(4)
    expect(longestSubarray([4, 2, 2, 2, 4, 4, 2, 2], 0)).toBe(3)
})
