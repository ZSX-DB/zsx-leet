const isPalindrome = (head: ListNode): boolean => {
    const vals: number[] = []
    let temp: ListNode | null = head
    while (temp) {
        vals.push(temp.val)
        temp = temp.next
    }
    let left = 0
    let right = vals.length - 1
    while (left <= right) {
        if (vals[left] !== vals[right]) {
            return false
        }
        left++
        right--
    }
    return true
}

// const isPalindrome = (head: ListNode): boolean => {
//     let frontPointer: ListNode | null = head
//     const check = (currNode: ListNode | null): boolean => {
//         if (currNode === null) {
//             return true
//         }
//         if (check(currNode.next) === false) {
//             return false
//         }
//         if (currNode.val !== frontPointer?.val) {
//             return false
//         }
//         frontPointer = frontPointer.next
//         return true
//     }
//     return check(head)
// }

export default isPalindrome
