import deleteDuplicates from "../82";
import {toLinkedList} from "../utils/convert";

test("82", () => {
    expect(deleteDuplicates(toLinkedList([1, 2, 3, 3, 4, 4, 5]))).toEqual(toLinkedList([1, 2, 5]))
    expect(deleteDuplicates(toLinkedList([1, 1, 1, 2, 3]))).toEqual(toLinkedList([2, 3]))
})
