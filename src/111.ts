// const minDepth = (root: TreeNode | null): number => {
//     if (root === null) {
//         return 0
//     } else if (root.left === null) {
//         return minDepth(root.right) + 1
//     } else if (root.right === null) {
//         return minDepth(root.left) + 1
//     } else {
//         return Math.min(minDepth(root.left), minDepth(root.right)) + 1
//     }
// }

const minDepth = (root: TreeNode | null): number => {
    if (root === null) {
        return 0
    }
    let min = Infinity
    const dfs = (node: TreeNode, depth: number): void => {
        if (depth >= min) {
            return
        }
        if (node.left === null && node.right === null) {
            min = Math.min(min, depth)
            return
        }
        if (node.left !== null) {
            dfs(node.left, depth + 1)
        }
        if (node.right !== null) {
            dfs(node.right, depth + 1)
        }
    }
    dfs(root, 1)
    return min
}

export default minDepth
