// 如果左节点不为空，且左节点没有左右孩子，那么这个节点就是左叶子
// const sumOfLeftLeaves = (root: TreeNode): number => {
//     let sum: number = 0
//     const helper = (node: TreeNode | null, direction: 'left' | 'right'): void => {
//         if (node === null) {
//             return
//         }
//         if (direction === 'left' && node.left === null && node.right === null) {
//             sum += node.val
//         }
//         helper(node.left, 'left')
//         helper(node.right, 'right')
//     }
//     helper(root.left, 'left')
//     helper(root.right, 'right')
//     return sum
// }

const sumOfLeftLeaves = (root: TreeNode): number => {
    const isLeaf = (node: TreeNode): boolean => node.left === null && node.right === null
    const helper = (node: TreeNode): number => {
        let sum: number = 0
        if (node.left !== null) {
            sum += (isLeaf(node.left) ? node.left.val : helper(node.left))
        }
        if (node.right !== null && isLeaf(node.right) === false) {
            sum += helper(node.right)
        }
        return sum
    }
    return helper(root)
}

export default sumOfLeftLeaves
