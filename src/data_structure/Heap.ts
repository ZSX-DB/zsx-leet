class Heap<T> {
    public readonly nodes: T[] = []
    private readonly rule: (nodeA: T, nodeB: T) => boolean

    constructor(rule: (nodeA: T, nodeB: T) => boolean) {
        this.rule = rule
    }

    swap(i: number, j: number): void {
        [this.nodes[i], this.nodes[j]] = [this.nodes[j], this.nodes[i]]
    }

    up(index: number): void {
        const parentIdx = Math.floor((index - 1) / 2)
        if (this.nodes[parentIdx] && this.rule(this.nodes[parentIdx], this.nodes[index])) {
            this.swap(index, parentIdx)
            this.up(parentIdx)
        }
    }

    down(index: number): void {
        let to = index
        const left = index * 2 + 1
        const right = index * 2 + 2
        if (this.nodes[left] && this.rule(this.nodes[to], this.nodes[left])) {
            to = left
        }
        if (this.nodes[right] && this.rule(this.nodes[to], this.nodes[right])) {
            to = right
        }
        if (to !== index) {
            this.swap(index, to)
            this.down(to)
        }
    }

    add(value: T): void {
        this.nodes.push(value)
        this.up(this.nodes.length - 1)
    }

    pop(): T {
        this.nodes[0] = this.nodes.pop() as T
        this.down(0)
        return this.nodes[0]
    }

}


export default Heap