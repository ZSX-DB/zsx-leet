import maxProfit from '../188';

test("188", () => {
    expect(maxProfit(2, [2, 4, 1])).toBe(2)
    expect(maxProfit(2, [3, 2, 6, 5, 0, 3])).toBe(7)
    expect(maxProfit(0, [1, 3])).toBe(0)
})
