const subarraySum = (nums: number[], k: number): number => {
    let result: number = 0
    let sum: number = 0
    const record = new Map<number, number>([[0, 1]])
    for (const num of nums) {
        sum += num
        result += (record.get(sum - k) ?? 0)
        record.set(sum, (record.get(sum) ?? 0) + 1)
    }
    return result
}

export default subarraySum
