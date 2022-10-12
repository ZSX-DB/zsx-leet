import invertTree from '../226';
import { toBinaryTree } from '../utils/convert';

test("226", () => {
    expect(invertTree(toBinaryTree([4, 2, 7, 1, 3, 6, 9]))).toEqual(toBinaryTree([4, 7, 2, 9, 6, 3, 1]))
    expect(invertTree(toBinaryTree([2, 1, 3]))).toEqual(toBinaryTree([2, 3, 1]))
    expect(invertTree(null)).toEqual(null)
})
