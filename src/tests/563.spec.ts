import findTilt from '../563';
import { toBinaryTree } from '../utils/convert';

test("563", () => {
    expect(findTilt(toBinaryTree([1, 2, 3]))).toBe(1)
    expect(findTilt(toBinaryTree([4, 2, 9, 3, 5, null, 7]))).toBe(15)
    expect(findTilt(toBinaryTree([21, 7, 14, 1, 1, 2, 2, 3, 3]))).toBe(9)
})
