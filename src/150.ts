// const evalRPN = (tokens: string[]): number => {
//     const nums: number[] = []
//     tokens.forEach(token => {
//         if (['+', '-', '*', '/'].includes(token)) {
//             const num1: number = nums.pop()
//             const num2: number = nums.pop()
//             switch (token as MathSign) {
//                 case "+":
//                     nums.push(num2 + num1)
//                     break
//                 case "-":
//                     nums.push(num2 - num1)
//                     break
//                 case "*":
//                     nums.push(num2 * num1)
//                     break
//                 case "/":
//                     const remainder = num2 % num1
//                     nums.push(Math.floor((num2 - remainder) / num1))
//                     break
//             }
//         } else {
//             nums.push(Number(token))
//         }
//     })
//     return nums.pop()
// }


const evalRPN = (tokens: string[]): number => {
    const signOperation = new Map<MathSign, (x: number, y: number) => number>([
        ['+', (x, y) => x + y],
        ['-', (x, y) => x - y],
        ['*', (x, y) => x * y],
        ['/', (x, y) => Math.trunc(x / y)]
    ])
    const nums: number[] = []
    for (const token of tokens) {
        if (signOperation.has(token as MathSign)) {
            const num1: number = nums.pop()
            const num2: number = nums.pop()
            nums.push(signOperation.get(token as MathSign)(num2, num1))
        } else {
            nums.push(Number(token))
        }
    }
    return nums[0]
}

export default evalRPN
