import reverseStr from '../541';

test("541", () => {
    expect(reverseStr('abcdefg', 2)).toBe('bacdfeg')
    expect(reverseStr('abcd', 2)).toBe('bacd')
})
