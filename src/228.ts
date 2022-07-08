const summaryRanges = (nums: number[]): string[] => {
    const result: string[] = []
    for (let i = 0; i < nums.length; i++) {
        let j = i
        while (nums[j + 1] === nums[j] + 1) {
            j++
        }
        result.push(i === j ? `${nums[i]}` : `${nums[i]}->${nums[j]}`)
        i = j
    }
    return result
}

export default summaryRanges
