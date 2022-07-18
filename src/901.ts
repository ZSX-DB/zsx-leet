// class StockSpanner {
//     private readonly prices: number[] = []
//
//     next(price: number): number {
//         this.prices.push(price)
//         let result: number = 1
//         for (let i = this.prices.length - 2; i >= 0; i--) {
//             if (this.prices[i] > price) {
//                 break
//             }
//             result++
//         }
//         return result
//     }
// }

class StockSpanner {
    private readonly prices: [number, number][] = [[Infinity, 0]]

    next(price: number): number {
        const prices: [number, number][] = this.prices
        let result: number = 1
        while (prices[prices.length - 1][0] <= price) {
            result += prices.pop()[1]
        }
        prices.push([price, result])
        return result
    }
}

export default StockSpanner
