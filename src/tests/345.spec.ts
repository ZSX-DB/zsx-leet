import reverseVowels from '../345';

test("345", () => {
    expect(reverseVowels('hello')).toBe('holle')
    expect(reverseVowels('leetcode')).toBe('leotcede')
})
