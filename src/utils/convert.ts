const toBinaryTree = <T extends Trees>(trees: T): NarrowingBinaryTree<T> => {
    if (trees.length === 0) {
        return null as NarrowingBinaryTree<T>
    }
    // 根据二维数组反向构建二叉树
    const items: Trees[] = [[trees.shift() as Tree]]
    while (trees.length) {
        const firstItem = items[0]
        if (firstItem.every(item => item === null)) {
            break
        }
        const newItem: Trees = []
        firstItem.forEach(item => {
            if (item === null) {
                newItem.push(null, null)
            } else {
                newItem.push(trees.shift() ?? null, trees.shift() ?? null)
            }
        })
        items.unshift(newItem)
    }
    const container: (TreeNode | null)[][] = []
    for (let i = 0; i < items.length; i++) {
        const item: Trees = items[i]
        if (i === 0) {
            container.push(item.map(it => it === null ? null : { val: it, left: null, right: null }))
        } else {
            container.push(item.map((it, index) => it === null ? null : {
                val: it,
                left: container[i - 1][2 * index],
                right: container[i - 1][2 * index + 1]
            }))
        }
    }
    return container[container.length - 1][0] as NarrowingBinaryTree<T>
}

const toLinkedList = <T extends number[]>(list: T, last?: ListNode): NarrowingLinkedList<T> => {
    const n: number = list.length
    if (n === 0) {
        return null as NarrowingLinkedList<T>
    }
    const initListNode: ListNode = { val: -1, next: null }
    const ret: ListNode = { ...initListNode }
    let temp: ListNode = ret
    for (let i = 0; i < n; i++) {
        temp.val = list[i]
        if (i !== n - 1) {
            temp.next = { ...initListNode }
            temp = temp.next
        } else {
            temp.next = last ?? null
        }
    }
    return ret as NarrowingLinkedList<T>
}

export {
    toBinaryTree,
    toLinkedList
}
