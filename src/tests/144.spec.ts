import preorderTraversal from "../144";
import {toBinaryTree} from "../utils/convert";

test("144", () => {
    expect(preorderTraversal(toBinaryTree([1, null, 2, 3]))).toEqual([1, 2, 3])
    expect(preorderTraversal(toBinaryTree([]))).toEqual([])
    expect(preorderTraversal(toBinaryTree([1]))).toEqual([1])
    expect(preorderTraversal(toBinaryTree([1, null, 2]))).toEqual([1, 2])
})
