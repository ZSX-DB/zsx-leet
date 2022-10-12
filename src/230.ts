const kthSmallest = (root: TreeNode | null, k: number): number => {
    const nodeVals: number[] = []
    const dfs = (node: TreeNode | null) => {
        if (nodeVals.length >= k) {
            return
        }
        if (node !== null) {
            dfs(node.left)
            nodeVals.push(node.val)
            dfs(node.right)
        }
    }
    dfs(root)
    return nodeVals[k - 1]
}
export default kthSmallest
