const addStrings = (num1: string, num2: string): string => {
    const padZero = (str: string, count: number): string => Array(count).fill('0').join('') + str
    const n = Math.max(num1.length, num2.length)
    num1 = padZero(num1, n - num1.length)
    num2 = padZero(num2, n - num2.length)
    const ret: number[] = []
    let carry: 0 | 1 = 0
    for (let i = n - 1; i >= 0; i--) {
        const sum = Number(num1[i]) + Number(num2[i]) + carry
        if (sum >= 10) {
            ret.push(sum - 10)
            carry = 1
        } else {
            ret.push(sum)
            carry = 0
        }
    }
    if (carry === 1) {
        ret.push(1)
    }
    return ret.reverse().join('')
}

export default addStrings
