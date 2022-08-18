const numIdenticalPairs = (nums: number[]): number => {
    const record = new Map<number, number>()
    let count = 0
    nums.forEach(num => {
        record.set(num, (record.get(num) ?? 0) + 1)
    })
    record.forEach(value => {
        count += (value * (value - 1) / 2)
    })
    return count
}

export default numIdenticalPairs
