import leafSimilar from '../872';
import { toBinaryTree } from '../utils/convert';

test("872", () => {
    expect(leafSimilar(toBinaryTree([3, 5, 1, 6, 2, 9, 8, null, null, 7, 4]), toBinaryTree([3, 5, 1, 6, 7, 4, 2, null, null, null, null, null, null, 9, 8]))).toBe(true)
    expect(leafSimilar(toBinaryTree([1, 2, 3]), toBinaryTree([1, 3, 2]))).toBe(false)
})
