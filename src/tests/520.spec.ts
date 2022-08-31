import detectCapitalUse from '../520';

test("520", () => {
    expect(detectCapitalUse('USA')).toBe(true)
    expect(detectCapitalUse('FlaG')).toBe(false)
    expect(detectCapitalUse('Google')).toBe(true)
})
