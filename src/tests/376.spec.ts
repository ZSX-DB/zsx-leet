import wiggleMaxLength from '../376';

test("376", () => {
    expect(wiggleMaxLength([1, 7, 4, 9, 2, 5])).toBe(6)
    expect(wiggleMaxLength([1, 17, 5, 10, 13, 15, 10, 5, 16, 8])).toBe(7)
    expect(wiggleMaxLength([1, 2, 3, 4, 5, 6, 7, 8, 9])).toBe(2)
    expect(wiggleMaxLength([84])).toBe(1)
})
