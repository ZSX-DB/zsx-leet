import findShortestSubArray from '../697';

test("697", () => {
    expect(findShortestSubArray([1, 2, 2, 3, 1])).toBe(2)
    expect(findShortestSubArray([1, 2, 2, 3, 1, 4, 2])).toBe(6)
})
