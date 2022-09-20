/**
 * 三色标记法
 * 白色（用 0 表示）：该节点尚未被访问
 * 灰色（用 1 表示）：该节点位于递归栈中，或者在某个环上
 * 黑色（用 2 表示）：该节点搜索完毕，是一个安全节点
 * @param graph 
 * @returns 
 */
const eventualSafeNodes = (graph: number[][]): number[] => {
    const ret: number[] = []
    const colors: (0 | 1 | 2)[] = Array(graph.length).fill(0)
    const safe = (index: number): boolean => {
        if (colors[index] > 0) {
            return colors[index] === 2
        }
        colors[index] = 1
        for (const path of graph[index]) {
            if (safe(path) === false) {
                return false
            }
        }
        colors[index] = 2
        return true
    }
    for (let i = 0; i < graph.length; i++) {
        if (safe(i)) {
            ret.push(i)
        }
    }
    return ret
}

// const eventualSafeNodes = (graph: number[][]): number[] => {
//     const n = graph.length
//     const inMemo = Array.from(Array(n)).map<number[]>(() => []);
//     const inDeg = graph.map(node => node.length)
//     const getNonzeroIndexes = (nums: number[]): number[] => nums.map((num, index) => (num === 0 ? index : -1)).filter(num => num !== -1)
//     graph.forEach((node, index) => {
//         node.forEach(path => {
//             inMemo[path].push(index)
//         })
//     })
//     const queue = getNonzeroIndexes(inDeg)
//     while (queue.length) {
//         const y = queue.shift() as number
//         for (const x of inMemo[y]) {
//             inDeg[x]--
//             if (inDeg[x] === 0) {
//                 queue.push(x)
//             }
//         }
//     }
//     return getNonzeroIndexes(inDeg)
// }

// const eventualSafeNodes = (graph: number[][]): number[] => {
//     const ret: number[] = []
//     let infos = graph.map((node, index) => ({ node, index }))
//     while (infos.some(({ node }) => node.length === 0)) {
//         ret.push(...infos.filter(({ node }) => node.length === 0).map(({ index }) => index))
//         infos = infos.filter(({ node }) => node.length !== 0).map(({ node, index }) => ({ node: node.filter(path => ret.includes(path) === false), index }))
//     }
//     return ret.sort((x, y) => x - y)
// }

export default eventualSafeNodes
