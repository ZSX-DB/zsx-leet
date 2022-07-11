import rightSideView from "../199";
import {toBinaryTree} from "../utils/convert";

test("199", () => {
    expect(rightSideView(toBinaryTree([1, 2, 3, null, 5, null, 4]))).toEqual([1, 3, 4])
    expect(rightSideView(toBinaryTree([1, null, 3]))).toEqual([1, 3])
    expect(rightSideView(toBinaryTree([]))).toEqual([])
})
