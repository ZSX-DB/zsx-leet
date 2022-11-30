const maxProfit = (prices: number[]): number => {
    // 有股票
    let buy = -prices[0]
    // 没股票，接下来是冷冻期
    let freeze = 0
    // 没股票，接下来不是冷冻期
    let sell = 0
    for (let i = 1; i < prices.length; i++) {
        const newBuy = Math.max(buy, sell - prices[i])
        const newFreeze = buy + prices[i]
        const newSell = Math.max(freeze, sell)
        buy = newBuy
        freeze = newFreeze
        sell = newSell
    }
    return Math.max(freeze, sell)
}

export default maxProfit
