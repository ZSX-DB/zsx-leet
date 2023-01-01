import checkRecord from '../551';

test("551", () => {
    expect(checkRecord('PPALLP')).toBe(true)
    expect(checkRecord('PPALLL')).toBe(false)
})
