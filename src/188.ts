const maxProfit = (k: number, prices: number[]): number => {
    const buys: number[] = Array(k).fill(-prices[0])
    const sells: number[] = Array(k).fill(0)
    for (let i = 1; i < prices.length; i++) {
        for (let j = 0; j < k; j++) {
            buys[j] = Math.max(buys[j], (sells[j - 1] ?? 0) - prices[i])
            sells[j] = Math.max(sells[j], buys[j] + prices[i])
        }
    }
    return sells[k - 1] ?? 0
}

export default maxProfit
