import sumOfLeftLeaves from "../404";
import {toBinaryTree} from "../utils/convert";

test("404", () => {
    expect(sumOfLeftLeaves(toBinaryTree([3, 9, 20, null, null, 15, 7]))).toBe(24)
    expect(sumOfLeftLeaves(toBinaryTree([1]))).toBe(0)
    expect(sumOfLeftLeaves(toBinaryTree([1, 2, 3, 4, 5]))).toBe(4)
})
