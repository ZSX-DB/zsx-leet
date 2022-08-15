const sumOddLengthSubarrays = (arr: number[]): number => {
    const prefixSums: number[] = [0]
    for (let i = 0; i < arr.length; i++) {
        prefixSums[i + 1] = prefixSums[i] + arr[i]
    }
    let sum = 0
    for (let i = 1; i <= arr.length; i += 2) {
        for (let j = i; j < prefixSums.length; j++) {
            sum += (prefixSums[j] - prefixSums[j - i])
        }
    }
    return sum
}

// const sumOddLengthSubarrays = (arr: number[]): number => arr.reduce<number>((sum, num, index) => {
//     const left = index + 1
//     const right = arr.length - index
//     const leftEven = Math.ceil(left / 2)
//     const rightEven = Math.ceil(right / 2)
//     const leftOdd = Math.floor(left / 2)
//     const rightOdd = Math.floor(right / 2)
//     return sum + (leftEven * rightEven + leftOdd * rightOdd) * num
// }, 0)

export default sumOddLengthSubarrays
