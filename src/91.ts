const numDecodings = (s: string): number => {
    if (s[0] === '0') {
        return 0
    }
    const chars: string[] = []
    for (let i = 0; i < s.length; i++) {
        if (s[i + 1] === '0') {
            if (['1', '2'].includes(s[i])) {
                chars.push(s[i] + s[i + 1])
                i++
            } else {
                return 0
            }
        } else {
            if (s[i] === '0') {
                return 0
            }
            chars.push(s[i])
        }
    }
    if (chars.length === 1) {
        return 1
    }
    const dp: number[] = Array(chars.length).fill(0)
    dp[0] = 1
    dp[1] = Number(chars[0] + chars[1]) <= 26 ? 2 : 1
    for (let i = 2; i < chars.length; i++) {
        if (Number(chars[i - 1] + chars[i]) <= 26) {
            dp[i] = dp[i - 1] + dp[i - 2]
        } else {
            dp[i] = dp[i - 1]
        }
    }
    return dp[chars.length - 1]
}

export default numDecodings
