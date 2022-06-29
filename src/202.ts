// const isHappy = (n: number): boolean => {
//     const getNext = (num: number): number => num.toString().split('').map(Number).reduce((prev, curr) => prev + curr ** 2, 0)
//     let slow = n
//     let fast = getNext(n)
//     while (slow !== fast) {
//         slow = getNext(slow)
//         fast = getNext(getNext(fast))
//     }
//     return fast === 1
// }

// 硬编码
// const isHappy = (n: number): boolean => {
//     const getNext = (num: number): number => num.toString().split('').map(Number).reduce((prev, curr) => prev + curr ** 2, 0)
//     // 2-9 都会走入这个循环
//     const hardCode = new Set<number>([4, 16, 37, 58, 89, 145, 42, 20])
//     while (n !== 1 && !hardCode.has(n)) {
//         n = getNext(n)
//     }
//     return n === 1
// }

const isHappy = (n: number): boolean => {
    const getNext = (num: number): number => num.toString().split('').map(Number).reduce((prev, curr) => prev + curr ** 2, 0)
    const memo = new Set<number>([n])
    while (true) {
        n = getNext(n)
        if (n === 1) {
            return true
        }
        if (memo.has(n)) {
            break
        }
        memo.add(n)
    }
    return false
}

export default isHappy
