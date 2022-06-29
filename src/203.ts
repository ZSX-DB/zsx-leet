// const removeElements = (head: ListNode | null, val: number): ListNode | null => {
//     if (head === null) {
//         return null
//     }
//     head.next = removeElements(head.next, val)
//     return head.val === val ? head.next : head
// }

const removeElements = (head: ListNode | null, val: number): ListNode | null => {
    if (head === null) {
        return null
    }
    const dummy: ListNode = {
        val: NaN,
        next: head
    }
    let temp: ListNode | null = dummy
    while (temp?.next) {
        if (temp.next.val === val) {
            temp.next = temp.next.next
        } else {
            temp = temp?.next
        }
    }
    return dummy.next
}

export default removeElements
