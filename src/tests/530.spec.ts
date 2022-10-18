import getMinimumDifference from '../530';
import { toBinaryTree } from '../utils/convert';

test("530", () => {
    expect(getMinimumDifference(toBinaryTree([4, 2, 6, 1, 3]))).toBe(1)
    expect(getMinimumDifference(toBinaryTree([1, 0, 48, null, null, 12, 49]))).toBe(1)
})
