// const videoStitching = (clips: [number, number][], time: number): number => {
//     const dp = Array(time + 1).fill(Infinity)
//     dp[0] = 0
//     for (let i = 0; i <= time; i++) {
//         clips.forEach(([start, end]) => {
//             if (i > start && i <= end) {
//                 dp[i] = Math.min(dp[i], dp[start] + 1)
//             }
//         })
//     }
//     return dp[time] === Infinity ? -1 : dp[time]
// }

const videoStitching = (clips: [number, number][], time: number): number => {
    const stack: [number, number][] = []
    clips.sort((x, y) => x[0] !== y[0] ? x[0] - y[0] : x[1] - y[1]).forEach(clip => {
        if (stack.length === 0) {
            stack.push(clip)
        } else {
            const [s1, e1] = stack[stack.length - 1]
            const [s2, e2] = clip
            if (e1 < e2) {
                if (s1 === s2) {
                    stack.pop()
                }
                stack.push([s2, e2])
            }
        }
    })
    const dp = Array(time + 1).fill(Infinity)
    dp[0] = 0
    for (let i = 0; i <= time; i++) {
        for (const [start, end] of stack) {
            if (i > start && i <= end) {
                dp[i] = Math.min(dp[i], dp[start] + 1)
            }
        }
    }
    return dp[time] === Infinity ? -1 : dp[time]
}

export default videoStitching
