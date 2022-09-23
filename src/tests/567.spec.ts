import checkInclusion from '../567';

test("567", () => {
    expect(checkInclusion('ab', 'eidbaooo')).toBe(true)
    expect(checkInclusion('ab', 'eidboaoo')).toBe(false)
})
