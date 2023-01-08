const findMaxLength = (nums: (0 | 1)[]): number => {
    const newNums = nums.map(num => num === 0 ? -1 : 1)
    const prefix: number[] = [newNums[0]]
    for (let i = 1; i < newNums.length; i++) {
        prefix.push(newNums[i] + prefix[i - 1])
    }
    let ret = prefix.includes(0) ? prefix.lastIndexOf(0) + 1 : 0
    const record = new Map<number, number>()
    for (let i = 0; i < prefix.length; i++) {
        if (record.has(prefix[i])) {
            ret = Math.max(ret, i - (record.get(prefix[i]) as number))
        } else {
            record.set(prefix[i], i)
        }
    }
    return ret
}

export default findMaxLength
