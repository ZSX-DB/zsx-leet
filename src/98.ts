const isValidBST = (root: TreeNode): boolean => {
    const vals: number[] = []
    const dfs = (node: TreeNode | null): void => {
        if (node !== null) {
            dfs(node.left)
            vals.push(node.val)
            dfs(node.right)
        }
    }
    dfs(root)
    for (let i = 1; i < vals.length; i++) {
        if (vals[i] <= vals[i - 1]) {
            return false
        }
    }
    return true
}

// const isValidBST = (root: TreeNode): boolean => {
//     const helper = (node: TreeNode | null, lower: number, upper: number): boolean => {
//         if (node === null) {
//             return true
//         }
//         if (node.val > lower && node.val < upper) {
//             return helper(node.left, lower, node.val) && helper(node.right, node.val, upper)
//         }
//         return false
//     }
//     return helper(root, -Infinity, Infinity)
// }

export default isValidBST
