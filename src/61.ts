// const rotateRight = (head: ListNode | null, k: number): ListNode | null => {
//     const getNumOfNodes = (node: ListNode | null): number => {
//         let count: number = 0
//         let curr: ListNode | null = node
//         while (curr) {
//             count++
//             curr = curr.next
//         }
//         return count
//     }
//     const length = getNumOfNodes(head)
//     if (head === null || length === 1 || k % length === 0) {
//         return head
//     }
//     let curr1: ListNode | null = head
//     let last: ListNode | null = null
//     const x = length - k % length - 1
//     let y = 0
//     if (x === 0) {
//         while (curr1) {
//             curr1 = curr1.next
//             if (curr1?.next === null) {
//                 curr1.next = {
//                     val: head.val,
//                     next: null
//                 }
//                 break
//             }
//         }
//         return head.next
//     }
//     while (curr1) {
//         curr1 = curr1.next
//         y++
//         if (y === x) {
//             last = (curr1 as ListNode).next;
//             (curr1 as ListNode).next = null
//             break
//         }
//     }
//     let curr2 = last
//     while (curr2) {
//         if (curr2.next === null) {
//             curr2.next = head
//             break
//         } else {
//             curr2 = curr2.next
//         }
//     }
//     return last
// }

const rotateRight = (head: ListNode | null, k: number): ListNode | null => {
    if (k === 0 || head === null || head.next === null) {
        return head
    }
    let n: number = 1
    let curr: ListNode = head
    while (curr.next) {
        curr = curr.next
        n++
    }
    if (k % n === 0) {
        return head
    }
    // 闭合成环
    curr.next = head
    let surplus: number = n - k % n
    while (surplus > 0) {
        curr = curr.next
        surplus--
    }
    const result: ListNode = curr.next
    curr.next = null
    return result
}

export default rotateRight
