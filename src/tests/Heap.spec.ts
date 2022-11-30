import Heap from "../data_structure/Heap";

const detectMaxHeap = (nodes: number[]): boolean => {
    for (let i = 0; i < nodes.length; i++) {
        const leftChild = nodes[i * 2 + 1] ?? -Infinity
        const rightChild = nodes[i * 2 + 2] ?? -Infinity
        if (nodes[i] <= leftChild || nodes[i] <= rightChild) {
            return false
        }
    }
    return true
}

const detectMinHeap = (nodes: number[]): boolean => {
    for (let i = 0; i < nodes.length; i++) {
        const leftChild = nodes[i * 2 + 1] ?? Infinity
        const rightChild = nodes[i * 2 + 2] ?? Infinity
        if (nodes[i] >= leftChild || nodes[i] >= rightChild) {
            return false
        }
    }
    return true
}

test("Heap", () => {
    // 大顶堆
    const maxHeap = new Heap<number>((nodeA, nodeB) => nodeA < nodeB)
    maxHeap.add(99)
    maxHeap.add(3)
    maxHeap.add(1)
    maxHeap.add(5)
    maxHeap.add(7)
    maxHeap.add(4)
    maxHeap.add(6)
    expect(detectMaxHeap(maxHeap.nodes)).toBe(true)

    // 小顶堆
    const minHeap = new Heap<number>((nodeA, nodeB) => nodeA > nodeB)
    minHeap.add(99)
    minHeap.add(3)
    minHeap.add(1)
    minHeap.add(5)
    minHeap.add(7)
    minHeap.add(4)
    minHeap.add(6)
    expect(detectMinHeap(minHeap.nodes)).toBe(true)
})