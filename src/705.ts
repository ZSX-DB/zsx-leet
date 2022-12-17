class MyHashSet {
    private readonly base: number = 736
    private readonly data: number[][]
    constructor() {
        this.data = Array.from(Array(this.base)).map(() => Array())
    }

    private hash(key: number): number {
        return key % this.base
    }

    add(key: number): void {
        const h = this.hash(key)
        if (this.data[h].every(num => num !== key)) {
            this.data[h].push(key)
        }
    }

    remove(key: number): void {
        const h = this.hash(key)
        this.data[h] = this.data[h].filter(num => num !== key)
    }

    contains(key: number): boolean {
        return this.data[this.hash(key)].some(num => num === key)
    }
}

export default MyHashSet    
