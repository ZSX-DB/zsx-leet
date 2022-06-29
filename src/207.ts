// 如果存在一条有向边 A -> B，则这条边给 A 增加了 1 个出度，给 B 增加了 1 个入度，此题设置为 prerequisites[0] -> prerequisites[1]
const canFinish = (numCourses: number, prerequisites: [number, number][]): boolean => {
    // 构建出度数组
    const outdegreeList: number[] = Array(numCourses).fill(0)
    // map 映射为 后续课程 => 前置课程
    const record = new Map<number, number[]>()
    prerequisites.forEach(prerequisite => {
        outdegreeList[prerequisite[0]]++
        record.set(prerequisite[1], (record.get(prerequisite[1]) ?? []).concat(prerequisite[0]))
    })
    // 获取出度为 0 的索引集合, 出度为 0 代表可能需要依赖其他前置课程
    const queue: number[] = outdegreeList.reduce<number[]>((prev, curr, idx) => curr === 0 ? prev.concat(idx) : prev, [])
    let count = 0
    while (queue.length) {
        const curr = queue.shift() as number
        count++
        // 获取前置课
        const prev = record.get(curr) ?? []
        // 前置课 length 为 0 代表是孤立课程，则可以学
        if (prev.length) {
            prev.forEach(item => {
                // 依赖的前置课出度 - 1
                outdegreeList[item]--
                if (outdegreeList[item] === 0) {
                    queue.push(item)
                }
            })
        }
    }
    return count === numCourses
}

// const canFinish = (numCourses: number, prerequisites: [number, number][]): boolean => {
//     const helper = (): number => {
//         const prevSet = new Set<number>(prerequisites.map(prerequisite => prerequisite[0]))
//         const nextSet = new Set<number>(prerequisites.map(prerequisite => prerequisite[1]))
//         const removeList: number[] = []
//         prevSet.forEach(item => {
//             if (!nextSet.has(item)) {
//                 removeList.push(item)
//             }
//         })
//         prerequisites = prerequisites.filter(prerequisite => !removeList.includes(prerequisite[0]))
//         return prerequisites.length
//     }
//     let beforeLength: number = prerequisites.length
//     let lastLength: number = helper()
//     while (beforeLength !== lastLength) {
//         beforeLength = lastLength
//         lastLength = helper()
//     }
//     return prerequisites.length === 0
// }

export default canFinish
