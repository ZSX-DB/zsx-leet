const invertTree = (root: TreeNode | null): TreeNode | null => root === null ? null : {
    val: root.val,
    left: invertTree(root.right),
    right: invertTree(root.left)
}

export default invertTree
