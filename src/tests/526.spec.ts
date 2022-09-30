import countArrangement from '../526';

test("526", () => {
    expect(countArrangement(2)).toBe(2)
    expect(countArrangement(1)).toBe(1)
    expect(countArrangement(11)).toBe(750)
})
