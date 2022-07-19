class MyCalendarTwo {
    private readonly record: Map<number, number> = new Map<number, number>()
    private readonly keys: number[] = []

    private insert(key: number): void {
        if (this.keys.includes(key)) {
            return
        }
        const index = this.keys.findIndex(k => k > key)
        if (index === -1) {
            this.keys.push(key)
        } else {
            this.keys.splice(index, 0, key)
        }
    }

    book(start: number, end: number): boolean {
        this.record.set(start, (this.record.get(start) ?? 0) + 1)
        this.record.set(end, (this.record.get(end) ?? 0) - 1)
        this.insert(start)
        this.insert(end)
        let usedNum: number = 0
        for (const key of this.keys) {
            usedNum += (this.record.get(key) ?? 0)
            if (usedNum === 3) {
                this.record.set(start, this.record.get(start) - 1)
                this.record.set(end, this.record.get(end) + 1)
                return false
            }
        }
        return true
    }
}

export default MyCalendarTwo
