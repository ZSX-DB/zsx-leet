import reverseWords from '../151';

test("151", () => {
    expect(reverseWords('a good   example')).toBe('example good a')
    expect(reverseWords('  hello world  ')).toBe('world hello')
    expect(reverseWords('the sky is blue')).toBe('blue is sky the')
})
