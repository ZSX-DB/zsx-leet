const maxAreaOfIsland = (grid: (0 | 1)[][]): number => {
    const m = grid.length
    const n = grid[0].length
    const area = { value: 0 }
    const dfs = (i: number, j: number): void => {
        if (i < 0 || i >= m || j < 0 || j >= n || grid[i][j] === 0) {
            return
        }
        grid[i][j] = 0
        area.value++
        dfs(i - 1, j)
        dfs(i + 1, j)
        dfs(i, j - 1)
        dfs(i, j + 1)
    }
    let maxArea = 0
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                area.value = 0
                dfs(i, j)
                maxArea = Math.max(maxArea, area.value)
            }
        }
    }
    return maxArea
}

export default maxAreaOfIsland
