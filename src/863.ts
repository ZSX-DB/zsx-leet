// const distanceK = (root: TreeNode, target: TreeNode, k: number): number[] => {
//     const parents = new Map<TreeNode, TreeNode>()
//     const ret: number[] = []
//     const findParents = (node: TreeNode): void => {
//         if (node.left !== null) {
//             parents.set(node.left, node)
//             findParents(node.left)
//         }
//         if (node.right !== null) {
//             parents.set(node.right, node)
//             findParents(node.right)
//         }
//     }
//     const findChild = (node: TreeNode | null, k: number, childDirection?: 'left' | 'right'): void => {
//         if (node === null) {
//             return
//         }
//         if (k === 0) {
//             ret.push(node.val)
//         } else {
//             if (childDirection === 'left') {
//                 findChild(node.right, k - 1)
//             } else if (childDirection === 'right') {
//                 findChild(node.left, k - 1)
//             } else {
//                 findChild(node.left, k - 1)
//                 findChild(node.right, k - 1)
//             }
//         }
//     }
//     findParents(root)
//     findChild(target, k)
//     let parent: TreeNode = target
//     while (k > 0) {
//         if (parents.get(parent) === undefined) {
//             break
//         }
//         const val = parent.val
//         parent = parents.get(parent) as TreeNode
//         k--
//         if (parent.left !== null && parent.right !== null) {
//             findChild(parent, k, parent.left.val === val ? 'left' : 'right')
//         }
//     }
//     if (k === 0 && ret.includes(parent.val) === false) {
//         ret.push(parent.val)
//     }
//     return ret
// }

const distanceK = (root: TreeNode, target: TreeNode, k: number): number[] => {
    const parents = new Map<number, TreeNode>()
    const ret: number[] = []
    const findParents = (node: TreeNode): void => {
        if (node.left !== null) {
            parents.set(node.left.val, node)
            findParents(node.left)
        }
        if (node.right !== null) {
            parents.set(node.right.val, node)
            findParents(node.right)
        }
    }
    const dfs = (node: TreeNode | null, from: TreeNode | null, depth: number): void => {
        if (node === null) {
            return
        }
        if (depth === k) {
            ret.push(node.val)
            return
        }
        if (node.left !== from) {
            dfs(node.left, node, depth + 1)
        }
        if (node.right !== from) {
            dfs(node.right, node, depth + 1)
        }
        const parent = parents.get(node.val)
        if (parent !== undefined && parent !== from) {
            dfs(parent, node, depth + 1)
        }
    }
    findParents(root)
    dfs(target, null, 0)
    return ret
}

export default distanceK
