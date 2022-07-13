// class BSTIterator {
//     private readonly nodeVals: number[] = []
//     private idx: number = -1
//
//     constructor(root: TreeNode | null) {
//         const helper = (node: TreeNode | null) => {
//             if (node !== null) {
//                 helper(node.left)
//                 this.nodeVals.push(node.val)
//                 helper(node.right)
//             }
//         }
//         helper(root)
//     }
//
//     next(): number {
//         this.idx++
//         return this.nodeVals[this.idx] ?? NaN
//     }
//
//     hasNext(): boolean {
//         return this.idx + 1 < this.nodeVals.length
//     }
// }

class BSTIterator {
    private readonly stack: TreeNode[] = []
    private curr: TreeNode | null = null

    constructor(root: TreeNode | null) {
        this.curr = root
    }

    next(): number {
        while (this.curr !== null) {
            this.stack.push(this.curr)
            this.curr = this.curr.left
        }
        this.curr = this.stack.pop()
        const result = this.curr.val
        this.curr = this.curr.right
        return result
    }

    hasNext(): boolean {
        return !!(this.curr !== null || this.stack.length)
    }
}

export default BSTIterator
