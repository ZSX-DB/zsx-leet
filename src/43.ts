// const multiply = (num1: string, num2: string): string => String(BigInt(num1) * BigInt(num2))

const multiply = (num1: string, num2: string): string => {
    if (num1 === '0' || num2 === '0') {
        return '0'
    }
    const l1: number = num1.length
    const l2: number = num2.length
    const list: number[] = Array(l1 + l2).fill(0)
    for (let i = l1 - 1; i >= 0; i--) {
        for (let j = l2 - 1; j >= 0; j--) {
            const tmp = Number(num1[i]) * Number(num2[j]) + list[i + j + 1]
            list[i + j + 1] = tmp % 10
            list[i + j] += 0 | tmp / 10
        }
    }
    while (list[0] === 0) {
        list.shift()
    }
    return list.join('')
}

export default multiply
