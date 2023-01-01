const updateMatrix = (mat: (0 | 1)[][]): number[][] => {
    const m = mat.length
    const n = mat[0].length
    const ret = Array.from(Array(m)).map(() => Array(n).fill(-1))
    const directions = [[0, 1], [0, -1], [-1, 0], [1, 0]]
    const queue: [number, number][] = []
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (mat[i][j] === 0) {
                ret[i][j] = 0
                queue.push([i, j])
            }
        }
    }
    while (queue.length) {
        const [row, col] = queue.shift() as [number, number]
        for (const direction of directions) {
            let newI = row + direction[0]
            let newJ = col + direction[1]
            if (newI < 0 || newI >= m || newJ < 0 || newJ >= n || ret[newI][newJ] !== -1) {
                continue
            }
            ret[newI][newJ] = ret[row][col] + 1
            queue.push([newI, newJ])
        }
    }
    return ret
}

export default updateMatrix
