// const findShortestSubArray = (nums: number[]): number => {
//     const record = new Map<number, number>()
//     for (const num of nums) {
//         record.set(num, (record.get(num) ?? 0) + 1)
//     }
//     let max = 0
//     const maxKeys: number[] = []
//     record.forEach((value, key) => {
//         if (value > max) {
//             max = value
//             maxKeys.length = 0
//             maxKeys.push(key)
//         } else if (value === max) {
//             maxKeys.push(key)
//         }
//     })
//     let shortest = Infinity
//     for (const maxKey of maxKeys) {
//         shortest = Math.min(shortest, nums.lastIndexOf(maxKey) - nums.indexOf(maxKey) + 1)
//     }
//     return shortest
// }

const findShortestSubArray = (nums: number[]): number => {
    interface Info {
        count: number
        start: number
        end: number
    }
    const record = new Map<number, Info>()
    let shortest = Infinity
    let maxCount = 0
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i]
        if (record.has(num)) {
            const info = record.get(num) as Info
            info.end = i
            info.count++
        } else {
            record.set(num, {
                count: 1,
                start: i,
                end: i
            })
        }
    }
    record.forEach((value) => {
        if (value.count > maxCount) {
            maxCount = value.count
            shortest = value.end - value.start + 1
        } else if (value.count === maxCount) {
            shortest = Math.min(shortest, value.end - value.start + 1)
        }
    })
    return shortest
}

export default findShortestSubArray
