import kthSmallest from '../230';
import { toBinaryTree } from '../utils/convert';

test("230", () => {
    expect(kthSmallest(toBinaryTree([3, 1, 4, null, 2]), 1)).toBe(1)
    expect(kthSmallest(toBinaryTree([5, 3, 6, 2, 4, null, null, 1]), 3)).toBe(3)
})
