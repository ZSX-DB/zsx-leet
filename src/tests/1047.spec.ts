import removeDuplicates from '../1047';

test("1047", () => {
    expect(removeDuplicates('abbaca')).toBe('ca')
    expect(removeDuplicates('aaaaaaaa')).toBe('')
    expect(removeDuplicates('aaaaaaaaa')).toBe('a')
})
