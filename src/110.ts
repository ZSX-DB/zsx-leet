

const isBalanced = (root: TreeNode | null): boolean => {
    if (root === null) {
        return true
    }
    const dfs = (node: TreeNode | null, depth: number): number => node === null ? depth : Math.max(dfs(node.left, depth + 1), dfs(node.right, depth + 1))
    return Math.abs(dfs(root.left, 0) - dfs(root.right, 0)) <= 1 && isBalanced(root.left) && isBalanced(root.right)
}

// const isBalanced = (root: TreeNode | null): boolean => {
//     const height = (node: TreeNode | null): number => {
//         if (node === null) {
//             return 0
//         }
//         const leftHeight = height(node.left)
//         if (leftHeight === -1) {
//             return -1
//         }
//         const rightHeight = height(node.right)
//         if (rightHeight === -1 || Math.abs(leftHeight - rightHeight) > 1) {
//             return -1
//         }
//         return Math.max(leftHeight, rightHeight) + 1
//     }
//     return height(root) >= 0
// }

export default isBalanced
