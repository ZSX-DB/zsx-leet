import minDiffInBST from '../783';
import { toBinaryTree } from '../utils/convert';

test("783", () => {
    expect(minDiffInBST(toBinaryTree([4, 2, 6, 1, 3]))).toBe(1)
    expect(minDiffInBST(toBinaryTree([1, 0, 48, null, null, 12, 49]))).toBe(1)
})
