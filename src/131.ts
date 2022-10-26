const partition = (s: string): string[][] => {
    const n = s.length
    const ret: string[][] = []
    const isPalindrome = (start: number, end: number): boolean => {
        while (start <= end) {
            if (s[start] !== s[end]) {
                return false
            }
            start++
            end--
        }
        return true
    }
    const dfs = (temp: string[], start: number): void => {
        if (start === n) {
            ret.push([...temp])
        } else {
            for (let i = start; i < n; i++) {
                if (isPalindrome(start, i)) {
                    temp.push(s.substring(start, i + 1))
                    dfs(temp, i + 1)
                    temp.pop()
                }
            }
        }
    }
    dfs([], 0)
    return ret
}

export default partition
