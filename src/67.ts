const addBinary = (a: string, b: string): string => {
    const len: number = Math.max(a.length, b.length)
    const aList: number[] = (a.length < len ? Array(len - a.length).fill(0) : []).concat(a.split('').map(Number))
    const bList: number[] = (b.length < len ? Array(len - b.length).fill(0) : []).concat(b.split('').map(Number))
    let last: number = 0
    let result: string = ''
    for (let i = len - 1; i >= 0; i--) {
        const sum = aList[i] + bList[i] + last
        if (sum >= 2) {
            result = `${sum - 2}${result}`
            last = 1
        } else {
            result = `${sum}${result}`
            last = 0
        }
    }
    return last === 1 ? `1${result}` : result
}

export default addBinary
