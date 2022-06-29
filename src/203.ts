const removeElements = (head: ListNode | null, val: number): ListNode | null => {
    if (head === null) {
        return null
    }
    head.next = removeElements(head.next, val)
    return head.val === val ? head.next : head
}

export default removeElements