import findMaxAverage from '../643';

test("643", () => {
    expect(findMaxAverage([1, 12, -5, -6, 50, 3], 4)).toBe(12.75)
    expect(findMaxAverage([5], 1)).toBe(5)
})
