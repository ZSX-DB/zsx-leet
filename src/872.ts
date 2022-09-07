const leafSimilar = (root1: TreeNode, root2: TreeNode): boolean => {
    const values1: number[] = []
    const values2: number[] = []
    const helper = (node: TreeNode | null, values: number[]): void => {
        if (node !== null) {
            if (node.left === null && node.right === null) {
                values.push(node.val)
            } else {
                helper(node.left, values)
                helper(node.right, values)
            }
        }
    }
    helper(root1, values1)
    helper(root2, values2)
    return values1.length === values2.length ? values1.every((value, index) => value === values2[index]) : false
}

export default leafSimilar
