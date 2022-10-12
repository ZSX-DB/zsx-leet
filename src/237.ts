const deleteNode = (root: ListNode): void => {
    root.val = root?.next?.val as number
    root.next = root?.next?.next as (ListNode | null)
}

export default deleteNode
