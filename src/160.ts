// const getIntersectionNode = (headA: ListNode | null, headB: ListNode | null): ListNode | null => {
//     if (headA === null || headB === null) {
//         return null
//     }
//     let pointA: ListNode | null = headA
//     let pointB: ListNode | null = headB
//     while (pointA !== pointB) {
//         pointA = pointA ? pointA.next : headB
//         pointB = pointB ? pointB.next : headA
//     }
//     return pointA
// }

const getIntersectionNode = (headA: ListNode | null, headB: ListNode | null): ListNode | null => {
    const memo = new Set<ListNode>()
    let tempA: ListNode | null = headA
    while (tempA) {
        memo.add(tempA)
        tempA = tempA.next
    }
    let tempB: ListNode | null = headB
    while (tempB) {
        if (memo.has(tempB)) {
            return tempB
        }
        tempB = tempB.next
    }
    return null
}

export default getIntersectionNode
