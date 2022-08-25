const prefixesDivBy5 = (nums: (0 | 1)[]): boolean[] => {
    const result: boolean[] = []
    let sum: number = 0
    for (const num of nums) {
        sum = (2 * sum + num) % 5
        result.push(sum === 0)
    }
    return result
}

export default prefixesDivBy5
