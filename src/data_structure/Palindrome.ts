class Palindrome {
    static is(s: string): boolean {
        let i = 0
        let j = s.length - 1
        while (i < j) {
            if (s[i] !== s[j]) {
                return false
            }
            i++
            j--
        }
        return true
    }
}

export default Palindrome