import isSameTree from "../100";
import {toBinaryTree} from "../utils/convert";

test("100", () => {
    expect(isSameTree(toBinaryTree([1, 2, 3]), toBinaryTree([1, 2, 3]))).toBeTruthy()
    expect(isSameTree(toBinaryTree([1, 2]), toBinaryTree([1, null, 2]))).toBeFalsy()
    expect(isSameTree(toBinaryTree([1, 2, 1]), toBinaryTree([1, 1, 2]))).toBeFalsy()
})
