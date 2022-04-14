// const myPow = (x: number, n: number): number => x ** n

// const myPow = (x: number, n: number): number => Math.pow(x, n)

const myPow = (x: number, n: number): number => {
    const quickMul = (x: number, n: number): number => {
        let res: number = 1
        let copyX: number = x
        while (n) {
            if (n % 2) {
                res *= copyX
            }
            copyX *= copyX
            n = Math.floor(n / 2)
        }
        return res
    }
    return n < 0 ? (1 / quickMul(x, -n)) : quickMul(x, n)
}

export default myPow
