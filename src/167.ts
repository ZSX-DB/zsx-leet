// const twoSum = (numbers: number[], target: number): [number, number] => {
//     let left = 0
//     let right = numbers.length - 1
//     while (left < right) {
//         const sum = numbers[left] + numbers[right]
//         if (sum > target) {
//             right--
//         } else if (sum < target) {
//             left++
//         } else {
//             return [left + 1, right + 1]
//         }
//     }
//     return [-1, -1]
// }

const twoSum = (numbers: number[], target: number): [number, number] => {
    const memo = new Map<number, number>()
    for (let i = 0; i < numbers.length; i++) {
        if (memo.has(target - numbers[i])) {
            return [(memo.get(target - numbers[i]) as number) + 1, i + 1]
        }
        memo.set(numbers[i], i)
    }
    return [-1, -1]
}

export default twoSum
