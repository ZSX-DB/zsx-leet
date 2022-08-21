const equalSubstring = (s: string, t: string, maxCost: number): number => {
    const diffs: number[] = Array(s.length).fill(0).map((_, i) => Math.abs(s[i].charCodeAt(0) - t[i].charCodeAt(0)))
    const sw: number[] = []
    let sum = 0
    let max = 0
    for (let i = 0; i < diffs.length; i++) {
        if (diffs[i] > maxCost) {
            sw.length = 0
            sum = 0
            continue
        }
        while (sum + diffs[i] > maxCost) {
            sum -= sw.shift()
        }
        sw.push(diffs[i])
        sum += diffs[i]
        max = Math.max(max, sw.length)
    }
    return max
}

export default equalSubstring
