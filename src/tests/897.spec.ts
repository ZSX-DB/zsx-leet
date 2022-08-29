import increasingBST from '../897';
import { toBinaryTree } from "../utils/convert";

test("897", () => {
    expect(increasingBST(toBinaryTree([5, 3, 6, 2, 4, null, 8, 1, null, null, null, 7, 9]))).toEqual(toBinaryTree([1, null, 2, null, 3, null, 4, null, 5, null, 6, null, 7, null, 8, null, 9]))
    expect(increasingBST(toBinaryTree([5, 1, 7]))).toEqual(toBinaryTree([1, null, 5, null, 7]))
})
