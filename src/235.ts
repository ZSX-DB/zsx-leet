/**
 * root 是二叉搜索树
 * 1. 左孩子比父节点小，右孩子比父节点大
 * 2. 中序遍历可以让结点有序
 * @param root
 * @param p
 * @param q
 */
const lowestCommonAncestor = (root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null => {
    if (root.val > p.val && root.val > q.val) {
        return lowestCommonAncestor(root.left, p, q)
    }
    if (root.val < p.val && root.val < q.val) {
        return lowestCommonAncestor(root.right, p, q)
    }
    return root
}

export default lowestCommonAncestor
