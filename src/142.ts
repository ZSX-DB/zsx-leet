const detectCycle = (head: ListNode | null): ListNode | null => {
    const memo = new Set<ListNode>()
    if (head !== null) {
        let temp: ListNode | null = head
        while (temp) {
            if (memo.has(temp)) {
                return temp
            }
            memo.add(temp)
            temp = temp.next
        }
    }
    return null
}

export default detectCycle
