import Heap from "./data_structure/Heap";

const nthUglyNumber = (n: number): number => {
    const factors = [2, 3, 5]
    const seen = new Set<number>([1])
    const minHeap = new Heap<number>((nodeA, nodeB) => nodeA > nodeB)
    minHeap.add(1)
    let ugly = 1
    for (let i = 0; i < n; i++) {
        ugly = minHeap.pop()
        factors.forEach(factor => {
            const next = ugly * factor
            if (seen.has(next) === false) {
                seen.add(next)
                minHeap.add(next)
            }
        })
    }
    return ugly
}

// const nthUglyNumber = (n: number): number => {
//     const dp = Array(n + 1).fill(0)
//     dp[1] = 1
//     let p2 = 1
//     let p3 = 1
//     let p5 = 1
//     for (let i = 2; i <= n; i++) {
//         const num2 = dp[p2] * 2
//         const num3 = dp[p3] * 3
//         const num5 = dp[p5] * 5
//         dp[i] = Math.min(num2, num3, num5)
//         if (num2 === dp[i]) {
//             p2++
//         }
//         if (num3 === dp[i]) {
//             p3++
//         }
//         if (num5 === dp[i]) {
//             p5++
//         }
//     }
//     return dp[n]
// }

export default nthUglyNumber
