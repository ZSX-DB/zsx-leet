import getIntersectionNode from '../160';
import { toLinkedList } from '../utils/convert';

test("160", () => {
    const common1 = toLinkedList([8, 4, 5])
    const headA1 = toLinkedList([4, 1], common1)
    const headB1 = toLinkedList([5, 6, 1], common1)
    expect(getIntersectionNode(headA1, headB1)).toBe(common1)

    const common2 = toLinkedList([2, 4])
    const headA2 = toLinkedList([1, 9, 1], common2)
    const headB2 = toLinkedList([3], common2)
    expect(getIntersectionNode(headA2, headB2)).toBe(common2)

    expect(getIntersectionNode(toLinkedList([2, 6, 4]), toLinkedList([1, 5]))).toBe(null)
})
