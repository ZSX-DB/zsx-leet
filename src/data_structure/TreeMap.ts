class TreeMap<V> extends Map<number, V> {
    // 保证 key 的唯一性
    private readonly keysSet: number[] = []

    constructor(entries?: readonly (readonly [number, V])[] | null) {
        super()
        for (const [key, value] of (entries ?? [])) {
            this.set(key, value)
        }
    }

    private insertKey(key: number): void {
        if (this.keysSet.includes(key)) {
            return
        }
        const index = this.keysSet.findIndex(k => k > key)
        if (index === -1) {
            this.keysSet.push(key)
        } else {
            this.keysSet.splice(index, 0, key)
        }
    }

    private deleteKey(key: number): void {
        const index = this.keysSet.findIndex(k => k === key)
        if (index !== -1) {
            this.keysSet.splice(index, 1)
        }
    }

    private clearKeys(): void {
        this.keysSet.length = 0
    }

    set(key: number, value: V): this {
        this.insertKey(key)
        return super.set(key, value)
    }

    delete(key: number): boolean {
        if (this.has(key)) {
            this.deleteKey(key)
        }
        return super.delete(key)
    }

    forEach(callbackfn: (value: V, key: number, map: Map<number, V>) => void): void {
        const keysSet = this.keysSet
        for (let i = 0; i < keysSet.length; i++) {
            callbackfn(super.get(keysSet[i]) as V, keysSet[i], this)
        }
    }

    getKeysSet(): readonly number[] {
        return this.keysSet
    }

    keys(): IterableIterator<number> {
        return this.keysSet.values()
    }

    values(): IterableIterator<V> {
        return this.keysSet.map(set => super.get(set) as V).values()
    }

    entries(): IterableIterator<[number, V]> {
        return this.keysSet.map((set: number): [number, V] => [set, super.get(set) as V]).values()
    }

    clear(): void {
        this.clearKeys();
        super.clear()
    }

}

export default TreeMap
