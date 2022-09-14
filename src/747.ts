// const dominantIndex = (nums: number[]): number => {
//     if (nums.length < 2) {
//         return 0
//     }
//     const first = Math.max(...nums)
//     const second = Math.max(...nums.filter(num => num !== first))
//     return first >= second * 2 ? nums.indexOf(first) : -1
// }

const dominantIndex = (nums: number[]): number => {
    const max = Math.max(...nums)
    for (const num of nums.filter(num => num !== max)) {
        if (max / num < 2) {
            return -1
        }
    }
    return nums.indexOf(max)
}

export default dominantIndex
