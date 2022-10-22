const isSymmetric = (root: TreeNode): boolean => {
    const detect = (node1: TreeNode | null, node2: TreeNode | null): boolean => {
        if (node1 === null && node2 === null) {
            return true
        } else if (node1 !== null && node2 !== null) {
            return node1.val === node2.val && detect(node1.left, node2.right) && detect(node1.right, node2.left)
        } else {
            return false
        }
    }
    return detect(root.left, root.right)
}
export default isSymmetric
