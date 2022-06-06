import maxDepth from "../104";
import {toBinaryTree} from "../utils/convert";

test("104", () => {
    expect(maxDepth(toBinaryTree([3, 9, 20, null, null, 15, 7]))).toBe(3)
})
