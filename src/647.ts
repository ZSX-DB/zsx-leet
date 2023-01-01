const countSubstrings = (s: string): number => {
    const n = s.length
    let count = n
    const helper = (left: number, right: number) => {
        while (s[left] && s[right] && s[left] === s[right]) {
            left--
            right++
            count++
        }
    }
    for (let i = 0; i < n; i++) {
        helper(i - 1, i + 1)
        helper(i - 1, i)
    }
    return count
}

export default countSubstrings
