const findComplement = (num: number): number => num
    .toString(2)
    .split('')
    .reverse()
    .map((char, index) => char === '1' ? 0 : 2 ** index)
    .reduce((sum, num) => sum + num, 0)

export default findComplement
