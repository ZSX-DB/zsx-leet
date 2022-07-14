type Tree = number | null

type Trees = Tree[]

const fillTrees = (trees: Trees): Trees => {
    if (trees.includes(null)) {
        const maxPossibleDepth: number = trees.filter(tree => tree !== null).length
        const wholeTrees: Trees = [...trees]
        for (let i = 0; i < maxPossibleDepth; i++) {
            if (wholeTrees[i] === null) {
                wholeTrees.splice(2 * i + 1, 0, null, null)
            }
        }
        return wholeTrees
    } else {
        let len: number = trees.length
        let num: number = 1
        while (len > num) {
            len -= num
            num *= 2
        }
        return trees.concat(Array(num * 3 - len).fill(null))
    }
}

const hierarchyTrees = (trees: Trees): Trees[] => {
    const hierarchies: Trees[] = []
    let sliceLen: number = 1
    let start: number = 0
    while (sliceLen < trees.length) {
        const hierarchy = []
        for (let i = start; i < start + sliceLen; i++) {
            hierarchy.push(trees[i] ?? null)
        }
        if (hierarchy.every(item => item === null)) {
            break
        }
        hierarchies.push(hierarchy)
        start += sliceLen
        sliceLen *= 2
    }
    return hierarchies.reverse()
}

const toBinaryTree = (trees: Trees): TreeNode | null => {
    if (trees.length === 0) {
        return null
    }
    // 填充缺失的 null 节点
    const wholeTrees: Trees = fillTrees(trees)
    // 生成自底向上树
    const hierarchies: Trees[] = hierarchyTrees(wholeTrees)
    // 存放节点
    const container: Array<TreeNode | null>[] = []
    // 构建树
    for (let i = 0; i < hierarchies.length; i++) {
        const hierarchy: Trees = hierarchies[i]
        if (i === 0) {
            container.push(hierarchy.map(item => item === null ? null : {val: item, left: null, right: null}))
        } else {
            container.push(hierarchy.map((item, index) => item === null ? null : {
                val: item,
                left: container[i - 1][2 * index],
                right: container[i - 1][2 * index + 1]
            }))
        }
    }
    return container[container.length - 1][0]
}

const toLinkedList = (list: number[]): ListNode | null => {
    const len: number = list.length
    if (len === 0) {
        return null
    }
    const initListNode: ListNode = {val: -1, next: null}
    const result: ListNode = {...initListNode}
    let temp: ListNode | null = result
    for (let i = 0; i < list.length; i++) {
        temp.val = list[i]
        temp.next = (i !== len - 1) ? {...initListNode} : null
        temp = temp.next
    }
    return result
}

export {
    toBinaryTree,
    toLinkedList
}
