const isSubsequence = (s: string, t: string): boolean => {
    let si = 0
    let ti = 0
    while (si < s.length && ti < t.length) {
        if (s[si] === t[ti]) {
            si++
            ti++
        } else {
            ti++
        }
    }
    return si === s.length
}

export default isSubsequence
