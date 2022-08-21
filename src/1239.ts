const maxLength = (arr: string[]): number => {
    const record = new Map<number, number[]>()
    const memo: string[][] = arr.map(str => [...str]).filter(list => list.length === new Set<string>(list).size)
    const length = memo.length
    for (let i = 0; i < length; i++) {
        for (let j = i + 1; j < length; j++) {
            if ((memo[i].length + memo[j].length) !== new Set<string>(memo[i].concat(memo[j])).size) {
                record.set(i, (record.get(i) ?? []).concat(j)).set(j, (record.get(j) ?? []).concat(i))
            }
        }
    }
    let max = 0
    const helper = (indexes: number[], index: number): void => {
        if (index === length) {
            max = Math.max(max, indexes.map(index => memo[index].length).reduce((total, num) => total + num, 0))
            return
        }
        helper(indexes, index + 1)
        const value = record.get(index)
        if (value === undefined || value.some(item => indexes.includes(item)) === false) {
            helper(indexes.concat(index), index + 1)
        }
    }
    helper([], 0)
    return max
}

export default maxLength
