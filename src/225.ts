class MyStack {
    private readonly list: Array<number | null> = []
    // [索引，值]
    private record: [number, number] = [-1, NaN]

    private resetLastNum(idx: number): void {
        if (idx >= 0 && idx < this.list.length) {
            for (let i = idx; i >= 0; i--) {
                if (this.list[i] !== null) {
                    this.record = [i, this.list[i] as number]
                    return
                }
            }
        }
        this.record = [-1, NaN]
    }

    push(x: number): void {
        this.list.push(x)
        this.record = [this.list.length - 1, x]
    }

    pop(): number {
        if (this.record[0] !== -1) {
            const idx = this.record[0]
            const num = this.list[idx] as number
            this.list[idx] = null
            this.resetLastNum(idx - 1)
            return num
        } else {
            return NaN
        }
    }

    top(): number {
        return this.record[1]
    }

    empty(): boolean {
        return this.record[0] === -1
    }
}

// class MyStack {
//     private queue: Array<number> = []
//
//     push(x: number): void {
//         this.queue.unshift(x)
//     }
//
//     pop(): number {
//         return this.queue.shift() ?? NaN
//     }
//
//     top(): number {
//         return this.queue[0]
//     }
//
//     empty(): boolean {
//         return this.queue.length === 0
//     }
// }

export default MyStack
