const maxDepth = (root: TreeNode | null): number => {
    if (root === null) {
        return 0
    }
    let max: number = 1
    const helper = (node: TreeNode, depth: number = 1) => {
        max = Math.max(max, depth)
        if (node.left) {
            helper(node.left, depth + 1)
        }
        if (node.right) {
            helper(node.right, depth + 1)
        }
    }
    helper(root)
    return max
}

export default maxDepth
