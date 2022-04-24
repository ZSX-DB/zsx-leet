// const uniquePaths = (m: number, n: number): number => (m === 1 || n === 1) ? 1 : uniquePaths(m - 1, n) + uniquePaths(m, n - 1)

const uniquePaths = (m: number, n: number): number => {
    const memo: Map<string, number> = new Map<string, number>()
    const helper = (i: number, j: number): number => {
        const key: string = `${i}_${j}`
        if (i === 1 || j === 1) {
            return 1
        } else if (memo.has(key)) {
            return memo.get(key) as number
        } else {
            const result: number = helper(i - 1, j) + helper(i, j - 1)
            memo.set(key, result)
            return result
        }
    }
    return helper(m, n)
}

export default uniquePaths
