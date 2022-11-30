import maxProfit from '../309';

test("309", () => {
    expect(maxProfit([1, 2, 3, 0, 2])).toBe(3)
    expect(maxProfit([1])).toBe(0)
    expect(maxProfit([1, 2, 4])).toBe(3)
})
