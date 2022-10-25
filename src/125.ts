import LetterUtils from "./data_structure/LetterUtils";

const isPalindrome = (s: string): boolean => {
    const isNumber = (char: string) => Array.from(Array(10)).map((_, index) => String(index)).includes(char)
    const words = s.split('').map(char => {
        if (isNumber(char)) {
            return char
        } else if (LetterUtils.isLetter(char)) {
            return char.toLowerCase()
        } else {
            return ''
        }
    }).filter(char => char !== '')
    let left = 0
    let right = words.length - 1
    while (left <= right) {
        if (words[left] !== words[right]) {
            return false
        }
        left++
        right--
    }
    return true
}

export default isPalindrome
