const findMiddleIndex = (nums: number[]): number => {
    const prefixSums = [0]
    for (const num of nums) {
        prefixSums.push(prefixSums[prefixSums.length - 1] + num)
    }
    for (let i = 1; i < prefixSums.length; i++) {
        if (prefixSums[i - 1] === prefixSums[prefixSums.length - 1] - prefixSums[i]) {
            return i - 1
        }
    }
    return -1
}

export default findMiddleIndex
