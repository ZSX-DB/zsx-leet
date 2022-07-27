const maxProfit = (prices: number[], fee: number): number => {
    // 表示第 i 天没有股票的最大值
    const dp1: number[] = [0]
    // 表示第 i 天有股票的最大值
    const dp2: number[] = [-prices[0]]
    const n = prices.length
    for (let i = 1; i < n; i++) {
        dp1[i] = Math.max(dp1[i - 1], prices[i] + dp2[i - 1] - fee)
        dp2[i] = Math.max(dp2[i - 1], dp1[i - 1] - prices[i])
    }
    return dp1[n - 1]
}

export default maxProfit
