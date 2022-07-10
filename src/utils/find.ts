/**
 * root 的每一个节点的 val 都不相同
 * @param root
 * @param val
 */
const findNodeByVal = (root: TreeNode | null, val: number): TreeNode | null => {
    if (root === null) {
        return null
    }
    let result: TreeNode = root
    const helper = (node: TreeNode): void => {
        if (node.val === val) {
            result = node
            return
        }
        if (node.left) {
            helper(node.left)
        }
        if (node.right) {
            helper(node.right)
        }
    }
    helper(root)
    return result
}

export {
    findNodeByVal
}
