// const insert = (intervals: [number, number][], newInterval: [number, number]): [number, number][] => {
//     const merge = (intervals: [number, number][]): [number, number][] => {
//         intervals.sort((x, y) => x[0] - y[0])
//         for (let i = 1; i < intervals.length; i++) {
//             const curr = intervals[i]
//             const last = intervals[i - 1]
//             if (curr[0] <= last[1]) {
//                 curr[0] = last[0]
//                 curr[1] = Math.max(curr[1], last[1])
//                 last[1] = Infinity
//             }
//         }
//         return intervals.filter(interval => interval[1] !== Infinity)
//     }
//     return merge(intervals.concat([newInterval]))
// }

const insert = (intervals: [number, number][], newInterval: [number, number]): [number, number][] => {
    intervals.push(newInterval)
    intervals.sort((x, y) => x[0] - y[0])
    for (let i = 1; i < intervals.length; i++) {
        const curr = intervals[i]
        const last = intervals[i - 1]
        if (curr[0] <= last[1]) {
            curr[0] = last[0]
            curr[1] = Math.max(curr[1], last[1])
            last[1] = Infinity
        }
    }
    return intervals.filter(interval => interval[1] !== Infinity)
}

export default insert
