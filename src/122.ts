// const maxProfit = (prices: number[]): number => {
//     // 表示第 i 天没有股票的最大值
//     const dp1: number[] = [0]
//     // 表示第 i 天有股票的最大值
//     const dp2: number[] = [-prices[0]]
//     const n = prices.length
//     for (let i = 1; i < n; i++) {
//         dp1[i] = Math.max(dp1[i - 1], prices[i] + dp2[i - 1])
//         dp2[i] = Math.max(dp2[i - 1], dp1[i - 1] - prices[i])
//     }
//     return dp1[n - 1]
// }

const maxProfit = (prices: number[]): number => {
    let profit = 0
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] > prices[i - 1]) {
            profit += (prices[i] - prices[i - 1])
        }
    }
    return profit
}

export default maxProfit
