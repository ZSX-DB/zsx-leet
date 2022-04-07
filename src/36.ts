const isValidSudoku = (board: string[][]): boolean => {
    type BlockIdx = readonly [number, number, number, number]
    const checkHasSome = (list: string[]): boolean => list.length !== new Set<string>(list).size
    const checkConvertedItems = (items: string[][]): boolean => items.some(item => checkHasSome(item.filter(it => it !== '.')))
    const blockIdxs: BlockIdx[] = [
        [0, 3, 0, 3], [3, 6, 0, 3], [6, 9, 0, 3],
        [0, 3, 3, 6], [3, 6, 3, 6], [6, 9, 3, 6],
        [0, 3, 6, 9], [3, 6, 6, 9], [6, 9, 6, 9]
    ]
    if (checkConvertedItems(board) ||
        checkConvertedItems(board[0].map((_, index) => index).map(item => board.map(row => row[item]))) ||
        checkConvertedItems(
            blockIdxs.map(item => {
                const temp: string[] = []
                for (let i = item[0]; i < item[1]; i++) {
                    for (let j = item[2]; j < item[3]; j++) {
                        temp.push(board[i][j])
                    }
                }
                return temp
            })
        )) {
        return false
    }
    return true
}
