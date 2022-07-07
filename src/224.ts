const calc = (s: string): number => {
    if (s[0] === '-' || s[0] === '+') {
        s = '0' + s
    }
    s = s.replace(/--/g, '+') + '+0'
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
    s = '(' + s.replace(/ /g, '') + ')'
    const stack: string[] = []
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== ')') {
            stack.push(s[i])
            continue
        }
        let str = ''
        while (stack.length > 0) {
            const ch = stack.pop() as string
            if (ch === '(') {
                stack.push(String(calc(str)))
                break
            } else {
                str = ch + str
            }
        }
    }
    return Number(stack[0])
}

export default calculate
