class MyHashMap {
    private readonly base: number = 736
    private readonly data: [number, number][][]
    constructor() {
        this.data = Array.from(Array(this.base)).map(() => Array())
    }

    private hash(key: number): number {
        return key % this.base
    }

    put(key: number, value: number): void {
        const h = this.hash(key)
        const index = this.data[h].findIndex(([k]) => k === key)
        if (index === -1) {
            this.data[h].push([key, value])
        } else {
            this.data[h][index][1] = value
        }
    }

    get(key: number): number {
        const h = this.hash(key)
        return this.data[h].find(([k]) => k === key)?.[1] ?? -1
    }

    remove(key: number): void {
        const h = this.hash(key)
        this.data[h] = this.data[h].filter(([k]) => k !== key)
    }
}

export default MyHashMap    
