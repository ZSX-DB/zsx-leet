const findOrder = (numCourses: number, prerequisites: number[][]): number[] => {
    const indegreeList: number[] = Array(numCourses).fill(0)
    const record = new Map<number, number[]>()
    prerequisites.forEach(prerequisite => {
        indegreeList[prerequisite[0]]++
        record.set(prerequisite[1], (record.get(prerequisite[1]) ?? []).concat(prerequisite[0]))
    })
    // 入度为 0 代表可以学
    const queue: number[] = indegreeList.reduce<number[]>((prev, curr, idx) => curr === 0 ? prev.concat(idx) : prev, [])
    const alreadyRead: number[] = [...queue]
    while (queue.length) {
        const curr = queue.shift() as number
        (record.get(curr) ?? []).forEach(item => {
            indegreeList[item]--
            if (indegreeList[item] === 0) {
                queue.push(item)
                alreadyRead.push(item)
            }
        })
    }
    return alreadyRead.length === numCourses ? alreadyRead : []
}

export default findOrder
