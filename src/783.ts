const minDiffInBST = (root: TreeNode): number => {
    const nodeVals: number[] = []
    const dfs = (node: TreeNode | null): void => {
        if (node !== null) {
            dfs(node.left)
            nodeVals.push(node.val)
            dfs(node.right)
        }
    }
    dfs(root)
    return Math.min(...nodeVals.slice(1).map((val, index) => val - nodeVals[index]))
}

export default minDiffInBST
