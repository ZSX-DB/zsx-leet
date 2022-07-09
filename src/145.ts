/**
 * 后序遍历：先左子树，再右子树，最后根节点
 * @param root
 */
// const postorderTraversal = (root: TreeNode | null): number[] => {
//     const nodeNums: number[] = []
//     const helper = (node: TreeNode | null): void => {
//         if (node === null) {
//             return
//         }
//         helper(node.left)
//         helper(node.right)
//         nodeNums.push(node.val)
//     }
//     helper(root)
//     return nodeNums
// }

const postorderTraversal = (root: TreeNode | null): number[] => {
    if (root === null) {
        return []
    }
    const nodeNums: number[] = []
    const stack: TreeNode[] = [root]
    while (stack.length) {
        const node = stack.pop()
        nodeNums.unshift(node.val)
        if (node.left) {
            stack.push(node.left)
        }
        if (node.right) {
            stack.push(node.right)
        }
    }
    return nodeNums
}

export default postorderTraversal
