import isBalanced from '../110';
import { toBinaryTree } from '../utils/convert';

test("110", () => {
    expect(isBalanced(toBinaryTree([3, 9, 20, null, null, 15, 7]))).toBe(true)
    expect(isBalanced(toBinaryTree([]))).toBe(true)
    expect(isBalanced(toBinaryTree([1, 2, 2, 3, 3, null, null, 4, 4]))).toBe(false)
})
