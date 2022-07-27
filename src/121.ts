// const maxProfit = (prices: number[]): number => {
//     let profit = 0
//     prices.forEach((price, idx) => {
//         while (idx + 1 < prices.length) {
//             idx++
//             if (prices[idx] > price) {
//                 profit = Math.max(profit, prices[idx] - price)
//             }
//         }
//     })
//     return profit
// }

const maxProfit = (prices: number[]): number => {
    let buy = -prices[0]
    let sell = 0
    for (let i = 1; i < prices.length; i++) {
        buy = Math.max(buy, -prices[i])
        sell = Math.max(sell, prices[i] + buy)
    }
    return sell
}

export default maxProfit
