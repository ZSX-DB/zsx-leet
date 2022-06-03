// const maxIceCream = (costs: number[], coins: number): number => {
//     let count = 0
//     costs.sort((x, y) => x - y)
//     for (let i = 0; i < costs.length; i++) {
//         if (coins < costs[i]) {
//             break
//         }
//         count++
//         coins -= costs[i]
//     }
//     return count
// }

const maxIceCream = (costs: number[], coins: number): number => {
    const freq = Array(100001).fill(0)
    let count = 0
    costs.forEach(cost => {
        freq[cost]++
    })
    for (let i = 1; i <= 100000; i++) {
        if (freq[i] === 0) {
            continue
        } else if (coins >= i) {
            const buyAmount = Math.min(freq[i], Math.floor(coins / i))
            coins -= i * buyAmount
            count += buyAmount
        } else {
            break
        }
    }
    return count
}

export default maxIceCream