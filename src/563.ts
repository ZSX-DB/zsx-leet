const findTilt = (root: TreeNode | null): number => {
    let ret = 0
    const dfs = (node: TreeNode | null): number => {
        if (node === null) {
            return 0
        }
        const leftSum = dfs(node.left)
        const rightSum = dfs(node.right)
        ret += Math.abs(leftSum - rightSum)
        return node.val + leftSum + rightSum
    }
    dfs(root)
    return ret
}

export default findTilt
