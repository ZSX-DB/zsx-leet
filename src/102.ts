// const levelOrder = (root: TreeNode | null): number[][] => {
//     if (root === null) {
//         return []
//     }
//     const queue: TreeNode[] = [root]
//     const result: number[][] = []
//     while (queue.length) {
//         const length = queue.length
//         const nodeVals: number[] = []
//         for (let i = 0; i < length; i++) {
//             const node: TreeNode = queue.shift() as TreeNode
//             nodeVals.push(node.val)
//             if (node.left) {
//                 queue.push(node.left)
//             }
//             if (node.right) {
//                 queue.push(node.right)
//             }
//         }
//         result.push(nodeVals)
//     }
//     return result
// }

const levelOrder = (root: TreeNode | null): number[][] => {
    if (root === null) {
        return []
    }
    const result: number[][] = []
    const dfs = (node: TreeNode, depth: number) => {
        if (result[depth] === undefined) {
            result[depth] = [] as number[]
        }
        result[depth].push(node.val)
        if (node.left) {
            dfs(node.left, depth + 1)
        }
        if (node.right) {
            dfs(node.right, depth + 1)
        }
    }
    dfs(root, 0)
    return result
}

export default levelOrder
