// const reverseString = (s: string[]): void => {
//     s.reverse()
// }

const reverseString = (s: string[]): void => {
    let left = 0
    let right = s.length - 1
    while (left < right) {
        [s[left], s[right]] = [s[right], s[left]];
        left++
        right--
    }
}

export default reverseString
