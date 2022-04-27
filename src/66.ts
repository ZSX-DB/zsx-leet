const plusOne = (digits: number[]): number[] => {
    let last: number = 1
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] === 9) {
            digits[i] = 0
            last = 1
        } else {
            digits[i] += last
            return digits
        }
    }
    return [1].concat(digits)
}

export default plusOne
