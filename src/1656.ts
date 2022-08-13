class OrderedStream {
    private readonly n: number
    private readonly strs: string[] = []
    private point: number = 1

    constructor(n: number) {
        this.n = n
    }

    insert(idKey: number, value: string): string[] {
        this.strs[idKey] = value
        const result: string[] = []
        while (this.strs[this.point] !== undefined) {
            result.push(this.strs[this.point])
            this.point++
        }
        return result
    }
}

export default OrderedStream