import maxScore from '../1423';

test("1423", () => {
    expect(maxScore([1, 2, 3, 4, 5, 6, 1], 3)).toBe(12)
    expect(maxScore([2, 2, 2], 2)).toBe(4)
    expect(maxScore([9, 7, 7, 9, 7, 7, 9], 7)).toBe(55)
    expect(maxScore([1, 1000, 1], 1)).toBe(1)
    expect(maxScore([1, 79, 80, 1, 1, 1, 200, 1], 3)).toBe(202)
})
