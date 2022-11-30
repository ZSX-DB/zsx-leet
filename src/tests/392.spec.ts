import isSubsequence from '../392';

test("392", () => {
    expect(isSubsequence('abc', 'ahbgdc')).toBe(true)
    expect(isSubsequence('axc', 'ahbgdc')).toBe(false)
    expect(isSubsequence('', 'ahbgdc')).toBe(true)
    expect(isSubsequence('b', 'c')).toBe(false)
    expect(isSubsequence('', '')).toBe(true)
    expect(isSubsequence('aaaaaa', 'bbaaaa')).toBe(false)
})
