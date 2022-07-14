// const deleteDuplicates = (head: ListNode | null): ListNode | null => {
//     if (head === null || head.next === null) {
//         return head
//     }
//     if (head.val !== head.next.val) {
//         head.next = deleteDuplicates(head.next)
//         return head
//     }
//     while (head && head.val === head.next?.val) {
//         head = head.next
//     }
//     return deleteDuplicates(head)
// }

const deleteDuplicates = (head: ListNode | null): ListNode | null => {
    if (head === null || head.next === null) {
        return head
    }
    let temp: ListNode | null = head
    while (temp.next) {
        if (temp.val === temp.next.val) {
            temp.next = temp.next.next
        } else {
            temp = temp.next
        }
    }
    return head
}

export default deleteDuplicates
