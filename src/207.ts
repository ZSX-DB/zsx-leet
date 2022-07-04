// 如果存在一条有向边 A -> B，则这条边给 A 增加了 1 个出度，给 B 增加了 1 个入度，此题设置为 prerequisites[1] -> prerequisites[0]
// const canFinish = (numCourses: number, prerequisites: [number, number][]): boolean => {
//     const inDegreeList: number[] = Array(numCourses).fill(0)
//     // map 映射为 前置课程 => 后续课程
//     const record = new Map<number, number[]>()
//     prerequisites.forEach(prerequisite => {
//         // 记录入度
//         inDegreeList[prerequisite[0]]++
//         record.set(prerequisite[1], (record.get(prerequisite[1]) ?? []).concat(prerequisite[0]))
//     })
//     // 获取入度为 0 的索引集合, 入度为 0 代表不需要依赖其他前置课程，代表可学
//     const queue: number[] = inDegreeList.reduce<number[]>((prev, curr, idx) => curr === 0 ? prev.concat(idx) : prev, [])
//     let count = 0
//     while (queue.length) {
//         const curr = queue.shift() as number
//         count++
//         // 获取后续课程
//         (record.get(curr) ?? []).forEach(item => {
//             // 依赖的后续课程入度 - 1
//             inDegreeList[item]--
//             // 入度为 0，代表可学
//             if (inDegreeList[item] === 0) {
//                 queue.push(item)
//             }
//         })
//     }
//     return count === numCourses
// }

const canFinish = (numCourses: number, prerequisites: [number, number][]): boolean => {
    const helper = (): number => {
        const nextSet = new Set<number>(prerequisites.map(prerequisite => prerequisite[0]))
        const prevSet = new Set<number>(prerequisites.map(prerequisite => prerequisite[1]))
        const removeList: number[] = []
        // 前置课程没有在后置课程出现过，说明该前置课程可学
        prevSet.forEach(item => {
            if (!nextSet.has(item)) {
                removeList.push(item)
            }
        })
        prerequisites = prerequisites.filter(prerequisite => !removeList.includes(prerequisite[1]))
        return prerequisites.length
    }
    let beforeLength: number = prerequisites.length
    let lastLength: number = helper()
    while (beforeLength !== lastLength) {
        beforeLength = lastLength
        lastLength = helper()
    }
    return prerequisites.length === 0
}

export default canFinish
