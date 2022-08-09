// 1 <= n <= 10 ** 7
const checkPowersOfThree = (n: number): boolean => {
    let power = 15
    while (n > 0 && power > 0) {
        power--
        const num = 3 ** power
        if (n >= num) {
            n -= num
        }
    }
    return n === 0
}

// const checkPowersOfThree = (n: number): boolean => (n).toString(3).split('').every(ch => ch === '0' || ch === '1')

export default checkPowersOfThree