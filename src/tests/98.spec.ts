import isValidBST from '../98';
import { toBinaryTree } from '../utils/convert';

test("98", () => {
    expect(isValidBST(toBinaryTree([2, 1, 3]))).toBe(true)
    expect(isValidBST(toBinaryTree([5, 1, 4, null, null, 3, 6]))).toBe(false)
})
