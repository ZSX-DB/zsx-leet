import combinationSum from '../39';

test("39", () => {
    expect(combinationSum([2, 3, 6, 7], 7)).toEqual([[2, 2, 3], [7]])
    expect(combinationSum([2, 3, 5], 8)).toEqual([[2, 2, 2, 2], [2, 3, 3], [3, 5]])
    expect(combinationSum([2], 1)).not.toEqual([1])
    expect(combinationSum([2], 1)).toEqual([])
})
