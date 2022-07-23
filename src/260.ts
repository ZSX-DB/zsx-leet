const singleNumber = (nums: number[]): number[] => {
    const record: Map<number, number> = new Map()
    const result: number[] = []
    for (const num of nums) {
        if (record.has(num)) {
            record.set(num, record.get(num) + 1)
        } else {
            record.set(num, 1)
        }
    }
    record.forEach(((value, key) => {
        if (value === 1) {
            result.push(key)
        }
    }))
    return result
}

export default singleNumber
