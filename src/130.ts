type Board = ('X' | 'O')[][]

const solve = (board: Board): void => {
    const m = board.length
    const n = board[0].length
    const memo = new Set<`${number}_${number}`>()
    const dfs = (i: number, j: number): void => {
        if (i < 0 || i >= m || j < 0 || j >= n || board[i][j] === 'X' || memo.has(`${i}_${j}`)) {
            return
        }
        memo.add(`${i}_${j}`)
        dfs(i - 1, j)
        dfs(i + 1, j)
        dfs(i, j + 1)
        dfs(i, j - 1)
    }
    for (let j = 0; j < n; j++) {
        if (board[0][j] === 'O') {
            dfs(0, j)
        }
        if (board[m - 1][j] === 'O') {
            dfs(m - 1, j)
        }
    }
    for (let i = 1; i < m - 1; i++) {
        if (board[i][0] === 'O') {
            dfs(i, 0)
        }
        if (board[i][n - 1] === 'O') {
            dfs(i, n - 1)
        }
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === 'O' && memo.has(`${i}_${j}`) === false) {
                board[i][j] = 'X'
            }
        }
    }
}

export default solve

export type { Board }
