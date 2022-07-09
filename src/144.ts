// const preorderTraversal = (root: TreeNode | null): number[] => {
//     const nodeNums: number[] = []
//     const traverse = (node: TreeNode | null) => {
//         if (node === null) {
//             return
//         }
//         nodeNums.push(node.val)
//         traverse(node.left)
//         traverse(node.right)
//     }
//     traverse(root)
//     return nodeNums
// }

const preorderTraversal = (root: TreeNode | null): number[] => {
    if (root === null) {
        return []
    }
    const stack: TreeNode[] = [root]
    const nodeNums: number[] = []
    while (stack.length) {
        const node = stack.pop()
        nodeNums.push(node.val)
        if (node.right) {
            stack.push(node.right)
        }
        if (node.left) {
            stack.push(node.left)
        }
    }
    return nodeNums
}

export default preorderTraversal
