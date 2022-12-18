import findRedundantConnection from '../684';

test("684", () => {
    expect(findRedundantConnection([[1, 2], [1, 3], [2, 3]])).toEqual([2, 3])
    expect(findRedundantConnection([[1, 2], [2, 3], [3, 4], [1, 4], [1, 5]])).toEqual([1, 4])
    expect(findRedundantConnection([[9, 10], [5, 8], [2, 6], [1, 5], [3, 8], [4, 9], [8, 10], [4, 10], [6, 8], [7, 9]])).toEqual([4, 10])
    expect(findRedundantConnection([[1, 3], [3, 4], [1, 5], [3, 5], [2, 3]])).toEqual([3, 5])
    expect(findRedundantConnection([[3, 4], [1, 2], [2, 4], [3, 5], [2, 5]])).toEqual([2, 5])
})
