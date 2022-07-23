const divide = (dividend: number, divisor: number): number => {
    if (dividend === divisor) {
        return 1
    }
    const getValue = (dend: number, sor: number, value: number): number => {
        if (dend < sor) {
            return value
        } else {
            let tmp: number = 0
            for (let i = 0; (dend >> i) >= sor; i++) {
                tmp = i
            }
            value += 2 ** tmp
            return getValue(dend - (sor << tmp), sor, value)
        }
    }
    const isOverflow = (num: number): boolean => !(num < -(2 ** 31) || num > 2 ** 31 - 1)
    const sign: number = (dividend > 0 && divisor < 0) || (dividend < 0 && divisor > 0) ? -1 : 1
    const result: number = getValue(Math.abs(dividend), Math.abs(divisor), 0) * sign
    return isOverflow(result) ? result : 2 ** 31 - 1
}


export default divide
