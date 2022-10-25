const hasPathSum = (root: TreeNode | null, targetSum: number): boolean => {
    if (root === null) {
        return false
    }
    let match = false
    const dfs = (node: TreeNode, sum: number): void => {
        if (match) {
            return
        }
        sum += node.val
        if (node.left === null && node.right === null) {
            if (sum === targetSum) {
                match = true
            }
        } else {
            if (node.left) {
                dfs(node.left, sum)
            }
            if (node.right) {
                dfs(node.right, sum)
            }
        }
    }
    dfs(root, 0)
    return match
}

export default hasPathSum
