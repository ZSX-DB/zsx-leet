const rightSideView = (root: TreeNode | null): number[] => {
    if (root === null) {
        return []
    }
    const queue: TreeNode[] = [root]
    const result: number[] = []
    while (queue.length) {
        const length = queue.length
        result.push(queue[length - 1].val)
        for (let i = 0; i < length; i++) {
            const node: TreeNode = queue.shift() as TreeNode
            if (node.left) {
                queue.push(node.left)
            }
            if (node.right) {
                queue.push(node.right)
            }
        }
    }
    return result
}

export default rightSideView
