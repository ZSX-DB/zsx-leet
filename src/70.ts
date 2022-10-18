// const climbStairs = (n: number): number => {
//     if (n === 1) {
//         return 1
//     } else if (n === 2) {
//         return 2
//     } else {
//         return climbStairs(n - 1) + climbStairs(n - 2)
//     }
// }

// 递归转迭代
// const climbStairs = (n: number): number => {
//     const record: number[] = [0, 1, 2]
//     for (let i = 3; i <= n; i++) {
//         record.push(record[i - 1] + record[i - 2])
//     }
//     return record[n]
// }

// const climbStairs = (n: number): number => {
//     const memo: Map<number, number> = new Map<number, number>([[1, 1], [2, 2]])
//     const helper = (n: number): number => {
//         if (memo.has(n)) {
//             return memo.get(n) as number
//         } else {
//             const result: number = helper(n - 1) + helper(n - 2)
//             memo.set(n, result)
//             return result
//         }
//     }
//     return helper(n)
// }

// 转化成 01 背包问题
const climbStairs = (n: number): number => {
    const dp = Array(n + 1).fill(0)
    const steps = [1, 2]
    dp[0] = 1
    for (let i = 1; i <= n; i++) {
        steps.forEach(step => {
            dp[i] += dp[i - step] ?? 0
        })
    }
    return dp[n]
}


export default climbStairs
