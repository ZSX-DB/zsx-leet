// const clumsy = (n: number): number => {
//     if (n <= 4) {
//         return [0, 1, 2, 6, 7][n]
//     } else if (n % 4 === 0) {
//         return n + 1
//     } else if (n % 4 <= 2) {
//         return n + 2
//     } else {
//         return n - 1
//     }
// }

const clumsy = (n: number): number => {
    const memo: number[] = [0, 1, 2, 6]
    if (n <= 3) {
        return memo[n]
    }
    let sum = Math.floor((n * (n - 1) / (n - 2))) + n - 3
    n -= 4
    while (n >= 4) {
        sum += -Math.floor((n * (n - 1) / (n - 2))) + n - 3
        n -= 4
    }
    return sum - memo[n]
}

// const clumsy = (n: number): number => {
//     const signs: MathSign[] = ['*', '/', '+', '-',]
//     let signIdx = 0
//     const stack: (number | MathSign)[] = [n]
//     for (let i = n - 1; i > 0; i--) {
//         const sign = signs[signIdx]
//         if (sign === '*') {
//             stack.push((stack.pop() as number) * i)
//         } else if (sign === '/') {
//             stack.push(Math.floor((stack.pop() as number) / i))
//         } else {
//             stack.push(sign, i)
//         }
//         signIdx = (signIdx === 3) ? 0 : signIdx + 1
//     }
//     return stack.map((item, index) => {
//         if (item === '+' || item === '-') {
//             return item
//         } else {
//             return (item as number) * (stack[index - 1] === '-' ? -1 : 1)
//         }
//     }).filter(item => item !== '+' && item !== '-').reduce<number>((prev, curr) => prev + (curr as number), 0)
// }

export default clumsy
