import levelOrder from "../102";
import {toBinaryTree} from "../utils/convert";

test("102", () => {
    expect(levelOrder(toBinaryTree([3, 9, 20, null, null, 15, 7]))).toEqual([[3], [9, 20], [15, 7]])
    expect(levelOrder(toBinaryTree([1]))).toEqual([[1]])
    expect(levelOrder(toBinaryTree([]))).toEqual([])
})
