import hasPathSum from '../112';
import { toBinaryTree } from '../utils/convert';

test("112", () => {
    expect(hasPathSum(toBinaryTree([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1]), 22)).toBe(true)
    expect(hasPathSum(toBinaryTree([1, 2, 3]), 5)).toBe(false)
    expect(hasPathSum(toBinaryTree([]), 0)).toBe(false)
})
