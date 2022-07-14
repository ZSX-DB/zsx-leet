import deleteDuplicates from "../83";
import {toLinkedList} from "../utils/convert";

test("83", () => {
    expect(deleteDuplicates(toLinkedList([1, 1, 2]))).toEqual(toLinkedList([1, 2]))
    expect(deleteDuplicates(toLinkedList([1, 1, 2, 3, 3]))).toEqual(toLinkedList([1, 2, 3]))
})
