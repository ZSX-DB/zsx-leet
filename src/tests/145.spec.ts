import postorderTraversal from "../145";
import {toBinaryTree} from "../utils/convert";

test("145", () => {
    expect(postorderTraversal(toBinaryTree([1, null, 2, 3]))).toEqual([3, 2, 1])
    expect(postorderTraversal(toBinaryTree([1]))).toEqual([1])
    expect(postorderTraversal(toBinaryTree([]))).toEqual([])
    expect(postorderTraversal(toBinaryTree([1, 2, 3]))).toEqual([2, 3, 1])
    expect(postorderTraversal(toBinaryTree([1, 2, 3, 4, 5, 6, null]))).toEqual([4, 5, 2, 6, 3, 1])
})
