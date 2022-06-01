const isCovered = (ranges: [number, number][], left: number, right: number): boolean => {
    ranges.sort((x, y) => x[0] - y[0])
    for (let i = 0; i < ranges.length - 1; i++) {
        const curr = ranges[i]
        const next = ranges[i + 1]
        if (next[1] <= curr[1]) {
            next[0] = curr[0]
            next[1] = curr[1]
        } else if (next[0] <= curr[1] + 1) {
            next[0] = curr[0]
        }
        if (next[0] <= left && next[1] >= right) {
            return true
        }
    }
    return ranges.length === 1 ? (ranges[0][0] <= left && ranges[0][1] >= right) : false
}

// const isCovered = (ranges: [number, number][], left: number, right: number): boolean => {
//     ranges.sort((x, y) => x[0] - y[0])
//     for (let i = 0; i < ranges.length - 1; i++) {
//         const curr = ranges[i]
//         const next = ranges[i + 1]
//         if (next[1] <= curr[1]) {
//             next[0] = curr[0]
//             next[1] = curr[1]
//         } else if (next[0] <= curr[1] + 1) {
//             next[0] = curr[0]
//         }
//     }
//     return ranges.some(range => range[0] <= left && range[1] >= right)
// }

// 差分数组
// const isCovered = (ranges: [number, number][], left: number, right: number): boolean => {
//     const diffArray = Array(52).fill(0)
//     ranges.forEach(([start, end]) => {
//         diffArray[start]++
//         diffArray[end + 1]--
//     })
//     let flag = 0
//     for (let i = 0; i < 52; i++) {
//         flag += diffArray[i]
//         if (left <= i && right >= i && flag <= 0) {
//             return false
//         }
//     }
//     return true
// }

export default isCovered
