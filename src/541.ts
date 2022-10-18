const reverseStr = (s: string, k: number): string => {
    let ret = ''
    let isReverse = true
    for (let i = 0; i < s.length; i += k) {
        ret += (isReverse ? s.slice(i, i + k).split('').reverse().join('') : s.slice(i, i + k))
        isReverse = !isReverse
    }
    return ret
}

export default reverseStr
