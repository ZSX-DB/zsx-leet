class MyCircularQueue {
    private readonly queue: number[] = []
    private readonly k: number

    constructor(k: number) {
        this.k = k
    }

    enQueue(value: number): boolean {
        if (this.queue.length < this.k) {
            this.queue.push(value)
            return true
        }
        return false
    }

    deQueue(): boolean {
        if (this.queue.length) {
            this.queue.shift()
            return true
        }
        return false
    }

    Front(): number {
        return this.queue[0] ?? -1
    }

    Rear(): number {
        return this.queue[this.queue.length - 1] ?? -1
    }

    isEmpty(): boolean {
        return this.queue.length === 0
    }

    isFull(): boolean {
        return this.queue.length === this.k
    }
}

export default MyCircularQueue
