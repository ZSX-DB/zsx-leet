import minDepth from '../111';
import { toBinaryTree } from '../utils/convert';

test("111", () => {
    expect(minDepth(toBinaryTree([3, 9, 20, null, null, 15, 7]))).toBe(2)
    expect(minDepth(toBinaryTree([2, null, 3, null, 4, null, 5, null, 6]))).toBe(5)
})
