import combinationSum3 from '../216';

test("216", () => {
    expect(combinationSum3(3, 7)).toEqual([[1, 2, 4]])
    expect(combinationSum3(3, 9)).toEqual([[1, 2, 6], [1, 3, 5], [2, 3, 4]])
    expect(combinationSum3(4, 1)).toEqual([])
    expect(combinationSum3(3, 15)).toEqual([[1, 5, 9], [1, 6, 8], [2, 4, 9], [2, 5, 8], [2, 6, 7], [3, 4, 8], [3, 5, 7], [4, 5, 6]])
})
