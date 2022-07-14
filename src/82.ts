const deleteDuplicates = (head: ListNode | null): ListNode | null => {
    if (head === null || head.next === null) {
        return head
    }
    if (head.val !== head.next.val) {
        head.next = deleteDuplicates(head.next)
        return head
    }
    while (head && head.val === head.next?.val) {
        head = head.next
    }
    return deleteDuplicates(head.next)
}

export default deleteDuplicates
