// const isSameTree = (p: TreeNode | null, q: TreeNode | null): boolean => {
//     if (p === null && q === null) {
//         return true
//     } else if ([p, q].includes(null)) {
//         return false
//     }
//     let result: boolean = true
//     const helper = (p: TreeNode, q: TreeNode) => {
//         const conditions: boolean[] = [
//             p.val !== q.val,
//             (p.left === null && q.left !== null) || (p.left !== null && q.left === null),
//             (p.right === null && q.right !== null) || (p.right !== null && q.right === null)
//         ]
//         if (conditions.includes(true)) {
//             result = false
//             return
//         }
//         if (p.left !== null && q.left !== null) {
//             helper(p.left, q.left)
//         }
//         if (p.right !== null && q.right !== null) {
//             helper(p.right, q.right)
//         }
//     }
//     helper(p, q)
//     return result
// }

const isSameTree = (p: TreeNode | null, q: TreeNode | null): boolean => {
    if (p === null && q === null) {
        return true
    }
    if (p === null || q === null) {
        return false
    }
    return p.val === q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
}

export default isSameTree
