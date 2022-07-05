const rob = (root: TreeNode | null): number => {
    // f(o) 表示选择 o 节点的情况下，o 节点的子树上被选择的节点的最大权值和
    const f = new Map<TreeNode, number>()
    // g(o) 表示不选择 o 节点的情况下，o 节点的子树上被选择的节点的最大权值和
    const g = new Map<TreeNode, number>()
    const getSum = (node: TreeNode | null, map: Map<TreeNode, number>): number => {
        if (node === null) {
            return 0
        }
        if (map.has(node)) {
            return map.get(node) as number
        }
        return 0
    }
    const dfs = (node: TreeNode | null) => {
        if (node === null) {
            return
        }
        dfs(node.left)
        dfs(node.right)
        f.set(node, node.val + getSum(node.left, g) + getSum(node.right, g))
        g.set(node, Math.max(getSum(node.left, f), getSum(node.left, g)) + Math.max(getSum(node.right, f), getSum(node.right, g)))
    }
    dfs(root)
    return root === null ? 0 : Math.max(f.get(root) ?? 0, g.get(root) ?? 0)
}

export default rob
