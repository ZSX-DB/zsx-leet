const calcProduct = (s: string): number => {
    s = s + '*1'
    let product: number = 1
    let sign: string = '*'
    let str: string = ''
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== '*' && s[i] !== '/') {
            str += s[i]
            continue
        }
        if (sign === '*') {
            product *= Number(str)
        } else {
            product = Math.floor(product / Number(str))
        }
        str = ''
        sign = s[i]
    }
    return product
}

const calcSum = (s: string): number => {
    s = s + '+0'
    let sum: number = 0
    let sign: string = '+'
    let str: string = ''
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== '+' && s[i] !== '-') {
            str += s[i]
            continue
        }
        if (sign === '+') {
            sum += Number(str)
        } else {
            sum -= Number(str)
        }
        str = ''
        sign = s[i]
    }
    return sum
}

const calculate = (s: string): number => {
    s = s.replace(/ /g, '')
    const signs = ['+', '-', '*', '/']
    const stack: string[] = []
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '*' || s[i] === '/') {
            let str = ''
            while (stack.length) {
                const last = stack[stack.length - 1]
                if (last === '+' || last === '-') {
                    break
                }
                str = stack.pop() + str
            }
            str += s[i]
            while (i < s.length) {
                if (signs.includes(s[i + 1]) || s[i + 1] === undefined) {
                    break
                }
                i++
                str = str + s[i]
            }
            stack.push(String(calcProduct(str)))
        } else {
            stack.push(s[i])
        }
    }
    return calcSum(stack.join(''))
}

export default calculate
