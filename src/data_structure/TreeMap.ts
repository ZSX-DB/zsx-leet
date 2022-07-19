class TreeMap<V> extends Map<number, V> {
    // 保证 key 的唯一性
    private readonly keysSet: number[] = []

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

    forEach(callbackfn: (value: V, key: number, map: Map<number, V>) => void): void {
        const keysSet = this.keysSet
        for (let i = 0; i < keysSet.length; i++) {
            callbackfn(super.get(keysSet[i]) as V, keysSet[i], this)
        }
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

    getKeysSet(): readonly number[] {
        return this.keysSet
    }

}

export default TreeMap
