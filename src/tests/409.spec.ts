import longestPalindrome from '../409';

test("409", () => {
    expect(longestPalindrome('abccccdd')).toBe(7)
    expect(longestPalindrome('a')).toBe(1)
    expect(longestPalindrome('aaaaaccc')).toBe(7)
})
