const serialize = (root: TreeNode | null): string => {
    const helper = (node: TreeNode | null, str: string = '') => {
        if (node === null) {
            str += 'None,'
        } else {
            str += `${node.val},`
            str = helper(node.left, str)
            str = helper(node.right, str)
        }
        return str
    }
    return helper(root)
}

const deserialize = (data: string): TreeNode | null => {
    const dataArray = data.split(',')
    const helper = (dataList: string[]) => {
        if (dataList[0] === 'None') {
            dataList.shift()
            return null
        }
        const root = new TreeNode(parseInt(dataList[0]))
        dataList.shift()
        root.left = helper(dataList)
        root.right = helper(dataList)
        return root
    }
    return helper(dataArray)
}

export {
    serialize,
    deserialize
}
