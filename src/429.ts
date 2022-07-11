const levelOrder = (root: Node | null): number[][] => {
    if (root === null) {
        return []
    }
    const queue: Node[] = [root]
    const result: number[][] = []
    while (queue.length) {
        const length = queue.length
        const nodeVals: number[] = []
        for (let i = 0; i < length; i++) {
            const node: Node = queue.shift() as Node
            nodeVals.push(node.val)
            node.children.forEach(child => {
                queue.push(child)
            })
        }
        result.push(nodeVals)
    }
    return result
}

export default levelOrder
