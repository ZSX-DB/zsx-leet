import fairCandySwap from '../888';

test("888", () => {
    expect([[1, 2], [2, 1]]).toContainEqual(fairCandySwap([1, 1], [2, 2]))
    expect([[1, 2], [2, 1]]).toContainEqual(fairCandySwap([1, 2], [2, 3]))
    expect([[2, 3], [3, 2]]).toContainEqual(fairCandySwap([2], [1, 3]))
    expect([[5, 4], [4, 5]]).toContainEqual(fairCandySwap([1, 2, 5], [2, 4]))
})
