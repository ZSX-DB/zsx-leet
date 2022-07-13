import BSTIterator from "../173";
import {toBinaryTree} from "../utils/convert";

test("173", () => {
    const bstIterator = new BSTIterator(toBinaryTree([7, 3, 15, null, null, 9, 20]))
    expect(bstIterator.next()).toBe(3)
    expect(bstIterator.next()).toBe(7)
    expect(bstIterator.hasNext()).toBeTruthy()
    expect(bstIterator.next()).toBe(9)
    expect(bstIterator.hasNext()).toBeTruthy()
    expect(bstIterator.next()).toBe(15)
    expect(bstIterator.hasNext()).toBeTruthy()
    expect(bstIterator.next()).toBe(20)
    expect(bstIterator.hasNext()).toBeFalsy()
})
