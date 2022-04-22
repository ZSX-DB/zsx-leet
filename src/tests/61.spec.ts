import rotateRight from "../61";
import {toLinkedList} from "../utils/convert";

test("61", () => {
    expect(rotateRight(toLinkedList([1, 2, 3, 4, 5]), 2)).toEqual(toLinkedList([4, 5, 1, 2, 3]))
    expect(rotateRight(toLinkedList([0, 1, 2]), 4)).toEqual(toLinkedList([2, 0, 1]))
    expect(rotateRight(toLinkedList([1]), 0)).toEqual(toLinkedList([1]))
    expect(rotateRight(toLinkedList([1]), 1)).toEqual(toLinkedList([1]))
    expect(rotateRight(toLinkedList([1, 2]), 2)).toEqual(toLinkedList([1, 2]))
})
