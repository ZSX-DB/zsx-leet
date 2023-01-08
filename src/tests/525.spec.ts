import findMaxLength from '../525';

test("525", () => {
    expect(findMaxLength([0, 1])).toBe(2)
    expect(findMaxLength([0, 1, 0])).toBe(2)
})
