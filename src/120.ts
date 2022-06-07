const minimumTotal = (triangle: number[][]): number => {
    const dp: number[][] = [triangle[0]]
    for (let i = 1; i < triangle.length; i++) {
        const curr: number[] = triangle[i]
        const length: number = curr.length
        dp.push(Array.from({length}, (_, j) => {
            if (j === 0) {
                return dp[i - 1][0] + curr[0]
            } else if (j === length - 1) {
                return dp[i - 1][length - 2] + curr[length - 1]
            } else {
                return curr[j] + Math.min(dp[i - 1][j - 1], dp[i - 1][j])
            }
        }))
    }
    return Math.min(...dp[dp.length - 1])
}

export default minimumTotal
