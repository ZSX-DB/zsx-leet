// const countPairs = (deliciousness: number[]): number => {
//     if (deliciousness.length <= 1) {
//         return 0
//     }
//     const MOD = 1000000007
//     const record = new Map<number, number>()
//     for (let i = 0; i < deliciousness.length; i++) {
//         record.set(deliciousness[i], (record.get(deliciousness[i]) ?? 0) + 1)
//     }
//     const keys: number[] = []
//     record.forEach((_, key) => {
//         keys.push(key)
//     })
//     const twoPowers = new Set<number>([1])
//     let base = 1
//     while (base <= 20) {
//         twoPowers.add(2 ** base)
//         base++
//     }
//     let count = 0
//     for (let i = 0; i < keys.length; i++) {
//         if (twoPowers.has(keys[i] + keys[i])) {
//             const value = record.get(keys[i]) as number
//             count += ((value * (value - 1)) / 2)
//         }
//         for (let j = i + 1; j < keys.length; j++) {
//             if (twoPowers.has(keys[i] + keys[j])) {
//                 count += ((record.get(keys[i]) as number) * (record.get(keys[j]) as number))
//             }
//         }
//     }
//     return count % MOD
// }

const countPairs = (deliciousness: number[]): number => {
    const MOD = 1000000007
    const maxSum = Math.max(...deliciousness) * 2
    const record = new Map<number, number>()
    let pairs = 0
    for (let i = 0; i < deliciousness.length; i++) {
        const num = deliciousness[i]
        for (let sum = 1; sum <= maxSum; sum *= 2) {
            pairs = pairs + (record.get(sum - num) ?? 0)
        }
        record.set(num, (record.get(num) ?? 0) + 1)
    }
    return pairs % MOD
}

export default countPairs
