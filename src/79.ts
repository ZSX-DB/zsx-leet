const exist = (board: string[][], word: string): boolean => {
    const m = board.length
    const n = board[0].length
    const used = Array.from(Array(m)).map(() => Array(n).fill(false))
    const dfs = (i: number, j: number, wordIndex: number): boolean => {
        if (i < 0 || i >= m || j < 0 || j >= n || used[i][j] || word[wordIndex] !== board[i][j]) {
            return false
        }
        if (wordIndex === word.length - 1) {
            return true
        }
        used[i][j] = true
        let top = false
        let bottom = false
        let left = false
        let right = false
        if (i - 1 >= 0) {
            top = dfs(i - 1, j, wordIndex + 1)
        }
        if (i + 1 < m) {
            bottom = dfs(i + 1, j, wordIndex + 1)
        }
        if (j - 1 >= 0) {
            left = dfs(i, j - 1, wordIndex + 1)
        }
        if (j + 1 < n) {
            right = dfs(i, j + 1, wordIndex + 1)
        }
        used[i][j] = false
        return top || bottom || left || right
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === word[0] && dfs(i, j, 0)) {
                return true
            }
        }
    }
    return false
}

export default exist
