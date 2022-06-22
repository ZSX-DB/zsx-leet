// const numEquivDominoPairs = (dominoes: [number, number][]): number => {
//     const nums: number[] = []
//     dominoes.forEach(domino => {
//         if (domino[0] >= domino[1]) {
//             nums.push(domino[0] * 10 + domino[1])
//         } else {
//             nums.push(domino[1] * 10 + domino[0])
//         }
//     })
//     let result: number = 0
//     nums.sort((x, y) => x - y)
//     for (let i = 0; i < nums.length; i++) {
//         const num = nums[i]
//         let currIdx = i
//         while (nums[i + 1] === num) {
//             i += 1
//         }
//         if (currIdx !== i) {
//             result += ((i - currIdx + 1) * (i - currIdx) / 2)
//         }
//     }
//     return result
// }

const numEquivDominoPairs = (dominoes: [number, number][]): number => {
    let result: number = 0
    const nums: number[] = Array(100).fill(0)
    dominoes.forEach(domino => {
        const idx = domino[0] >= domino[1] ? (domino[0] * 10 + domino[1]) : (domino[1] * 10 + domino[0])
        result += nums[idx]
        nums[idx]++
    })
    return result
}

export default numEquivDominoPairs
