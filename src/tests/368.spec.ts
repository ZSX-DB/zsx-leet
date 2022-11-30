import largestDivisibleSubset from '../368';

test("368", () => {
    expect([[1, 2], [1, 3]]).toContainEqual(largestDivisibleSubset([1, 2, 3]))
    expect(largestDivisibleSubset([5, 9, 18, 54, 108, 540, 90, 180, 360, 720])).toEqual([9, 18, 90, 180, 360, 720])
    expect(largestDivisibleSubset([1, 2, 4, 8])).toEqual([1, 2, 4, 8])
    expect(largestDivisibleSubset([9])).toEqual([9])
    expect(largestDivisibleSubset([4, 8, 10, 240])).toEqual([4, 8, 240])
    expect([[3], [17]]).toContainEqual(largestDivisibleSubset([3, 17]))
})
