import rob from "../337";
import {toBinaryTree} from "../utils/convert";

test("337", () => {
    expect(rob(toBinaryTree([3, 2, 3, null, 3, null, 1]))).toBe(7)
    expect(rob(toBinaryTree([3, 4, 5, 1, 3, null, 1]))).toBe(9)
})
