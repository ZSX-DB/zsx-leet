const checkInclusion = (s1: string, s2: string): boolean => {
    const cnt1 = Array(26).fill(0)
    const cnt2 = Array(26).fill(0)
    const n = s1.length
    for (let i = 0; i < n; i++) {
        cnt1[s1.charCodeAt(i) - 97]++
        cnt2[s2.charCodeAt(i) - 97]++
    }
    const c1 = cnt1.toString()
    if (c1 === cnt2.toString()) {
        return true
    }
    for (let i = n; i < s2.length; i++) {
        cnt2[s2.charCodeAt(i) - 97]++
        cnt2[s2.charCodeAt(i - n) - 97]--
        if (c1 === cnt2.toString()) {
            return true
        }
    }
    return false
}

export default checkInclusion
