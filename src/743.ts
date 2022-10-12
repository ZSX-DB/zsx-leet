const networkDelayTime = (times: [number, number, number][], n: number, k: number): number => {
    const memo = Array.from(Array(n)).map(() => Array(n).fill(Infinity))
    for (const [start, end, time] of times) {
        memo[start - 1][end - 1] = time
    }
    const dist = Array(n).fill(Infinity)
    const used = Array(n).fill(false)
    dist[k - 1] = 0
    for (let i = 0; i < n; i++) {
        let x = -1
        for (let y = 0; y < n; y++) {
            if (used[y] === false && (x === -1 || dist[y] < dist[x])) {
                x = y
            }
        }
        used[x] = true
        for (let y = 0; y < n; y++) {
            dist[y] = Math.min(dist[y], dist[x] + memo[x][y])
        }
    }
    const ans = Math.max(...dist)
    return ans === Infinity ? -1 : ans
}

export default networkDelayTime
