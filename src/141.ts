// const hasCycle = (head: ListNode | null): boolean => {
//     if (head === null || head.next === null) {
//         return false
//     }
//     let slow: ListNode | null = head
//     let fast: ListNode | null = head.next
//     while (slow !== fast) {
//         if (fast === null || fast.next === null) {
//             return false
//         }
//         slow = slow?.next ?? null
//         fast = fast?.next?.next ?? null
//     }
//     return true
// }

const hasCycle = (head: ListNode | null): boolean => {
    const memo = new Set<ListNode>()
    if (head !== null) {
        let temp: ListNode | null = head
        while (temp) {
            if (memo.has(temp)) {
                return true
            }
            memo.add(temp)
            temp = temp.next
        }
    }
    return false
}

export default hasCycle
