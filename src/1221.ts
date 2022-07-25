const balancedStringSplit = (s: string): number => {
    let flag = 0
    let count = 0
    for (const ch of s) {
        if (ch === 'R') {
            flag++
        } else if (ch === 'L') {
            flag--
        }
        if (flag === 0) {
            count++
        }
    }
    return count
}

export default balancedStringSplit
