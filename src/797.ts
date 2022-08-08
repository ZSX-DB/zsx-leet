// const allPathsSourceTarget = (graph: number[][]): number[][] => {
//     const n = graph.length
//     const items: number[][] = []
//     const record = new Map<number, number[]>()
//     for (let i = 0; i < n; i++) {
//         record.set(i, graph.reduce<number[]>((prev, curr, index) => {
//             if (curr.includes(i)) {
//                 prev.push(index)
//             }
//             return prev
//         }, []))
//     }
//     const helper = (key: number, list: number[]): void => {
//         if (key === 0) {
//             items.push(list)
//             return
//         }
//         const nums: number[] = record.get(key) as number[]
//         for (const num of nums) {
//             helper(num, [num].concat(list))
//         }
//     }
//     helper(n - 1, [n - 1])
//     return items
// }

const allPathsSourceTarget = (graph: number[][]): number[][] => {
    const n = graph.length
    const items: number[][] = []
    const helper = (idx: number, path: number[]): void => {
        if (idx === n - 1) {
            items.push([...path])
        } else {
            for (const num of graph[idx]) {
                path.push(num)
                helper(num, path)
                path.pop()
            }
        }
    }
    helper(0, [0])
    return items
}

export default allPathsSourceTarget