// const grayCode = (n: number): number[] => Array.from(Array(2 ** n)).map((_, index) => index ^ Math.floor(index / 2))

const grayCode = (n: number): number[] => {
    const result = [0]
    const len = 2 ** n
    for (let i = 1; i < len; i++) {
        result[i] = i ^ Math.floor(i / 2)
    }
    return result
}

export default grayCode
