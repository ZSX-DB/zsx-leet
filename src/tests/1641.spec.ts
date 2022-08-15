import countVowelStrings from '../1641';

test("1641", () => {
    expect(countVowelStrings(1)).toBe(5)
    expect(countVowelStrings(2)).toBe(15)
    expect(countVowelStrings(33)).toBe(66045)
})
