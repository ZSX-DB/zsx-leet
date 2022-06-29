import removeElements from "../203";
import {toLinkedList} from "../utils/convert";

test("203", () => {
    expect(removeElements(toLinkedList([1, 2, 6, 3, 4, 5, 6]), 6)).toEqual(toLinkedList([1, 2, 3, 4, 5]))
    expect(removeElements(toLinkedList([]), 1)).toEqual(toLinkedList([]))
    expect(removeElements(toLinkedList([7, 7, 7, 7]), 7)).toEqual(toLinkedList([]))
})
