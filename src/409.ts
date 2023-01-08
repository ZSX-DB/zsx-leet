import count from "./utils/count";

const longestPalindrome = (s: string): number => {
    let ret = 0
    let existOdd = false
    count(s).forEach((value) => {
        if (value % 2 === 1) {
            existOdd = true
            ret += value - 1
        } else {
            ret += value
        }
    })
    return ret + (existOdd ? 1 : 0)
}

export default longestPalindrome
