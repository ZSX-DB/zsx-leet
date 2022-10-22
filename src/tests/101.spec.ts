import isSymmetric from '../101';
import { toBinaryTree } from '../utils/convert';

test("101", () => {
    expect(isSymmetric(toBinaryTree([1, 2, 2, 3, 4, 4, 3]))).toBe(true)
    expect(isSymmetric(toBinaryTree([1, 2, 2, null, 3, null, 3]))).toBe(false)
})
