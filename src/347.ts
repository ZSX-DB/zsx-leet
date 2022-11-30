import count from "./data_structure/count";
import Heap from "./data_structure/Heap";

const topKFrequent = (nums: number[], k: number): number[] => {
    const record = count(nums)
    const valueMap = new Map<number, number[]>()
    const values: number[] = []
    record.forEach((value, key) => {
        valueMap.set(value, (valueMap.get(value) ?? []).concat(key))
        if (values.includes(value) === false) {
            values.push(value)
        }
    })
    values.sort((x, y) => x - y)
    const ret: number[] = []
    while (ret.length < k) {
        const value = values.pop() as number
        const keys = valueMap.get(value) as number[]
        ret.push(...keys)
    }
    return ret
}

// const topKFrequent = (nums: number[], k: number): number[] => {
//     const record = new Map<number, number>()
//     nums.forEach(num => {
//         record.set(num, (record.get(num) ?? 0) + 1)
//     })
//     const minHeap = new Heap<[number, number]>((nodeA, nodeB) => nodeA[1] > nodeB[1])
//     record.forEach((value, key) => {
//         if (minHeap.nodes.length < k) {
//             minHeap.add([key, value])
//         } else if (value > minHeap.nodes[0][1]) {
//             minHeap.nodes[0] = [key, value]
//             minHeap.down(0)
//         }
//     })
//     return minHeap.nodes.map(item => item[0])
// }

export default topKFrequent
