const restoreArray = (adjacentPairs: [number, number][]): number[] => {
    const record = new Map<number, number[]>()
    const result: number[] = []
    const n = adjacentPairs.length + 1
    for (let i = 0; i < n - 1; i++) {
        const [u, v] = adjacentPairs[i]
        record.set(u, (record.get(u) ?? []).concat(i))
        record.set(v, (record.get(v) ?? []).concat(i))
    }
    const idx = adjacentPairs.findIndex(([u, v]) => (record.get(u) as number[]).length === 1 || (record.get(v) as number[]).length === 1)
    const [u, v] = adjacentPairs[idx]
    if ((record.get(u) as number[]).length === 1) {
        result.push(u, v)
    } else if ((record.get(v) as number[]).length === 1) {
        result.push(v, u)
    }
    record.set(u, (record.get(u) as number[]).filter(i => i !== idx))
    record.set(v, (record.get(v) as number[]).filter(i => i !== idx))
    while (result.length !== n) {
        const last = result[result.length - 1]
        const idx = (record.get(last) as number[])[0]
        const [u, v] = adjacentPairs[idx]
        result.push(u === last ? v : u)
        record.set(u, (record.get(u) as number[]).filter(i => i !== idx))
        record.set(v, (record.get(v) as number[]).filter(i => i !== idx))
    }
    return result
}

// const restoreArray = (adjacentPairs: [number, number][]): number[] => {
//     const n = adjacentPairs.length + 1
//     const record = adjacentPairs.reduce((total, [x, y]) => {
//         total.set(x, total.has(x) ? [...total.get(x), y] : [y])
//         total.set(y, total.has(y) ? [...total.get(y), x] : [x])
//         return total
//     }, new Map<number, number[]>())
//     const getKey = (): number => {
//         for (const [key, value] of record.entries()) {
//             if (value.length === 1) {
//                 return key
//             }
//         }
//         return NaN
//     }
//     let key = getKey()
//     const result = [key]
//     while (result.length !== n) {
//         const value = record.get(key)
//         for (const val of value) {
//             if (record.has(val)) {
//                 result.push(val)
//                 record.delete(key)
//                 key = val
//             }
//         }
//     }
//     return result
// }

export default restoreArray