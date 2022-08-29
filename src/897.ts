const increasingBST = (root: TreeNode | null): TreeNode | null => {
    if (root === null) {
        return null
    }
    const nodeVals: number[] = []
    const helper = (node: TreeNode | null) => {
        if (node !== null) {
            helper(node.left)
            nodeVals.push(node.val)
            helper(node.right)
        }
    }
    helper(root)
    let result: TreeNode = {
        val: -1,
        left: null,
        right: null
    }
    let dummy = result
    nodeVals.forEach(nodeVal => {
        const currNode = {
            val: nodeVal,
            left: null,
            right: null
        }
        dummy.right = currNode
        dummy = currNode
    })
    return result.right
}

export default increasingBST
