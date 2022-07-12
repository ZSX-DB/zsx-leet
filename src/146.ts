// class LRUCache {
//     private readonly memo: [number, number][] = []
//     private readonly capacity: number
//
//     constructor(capacity: number) {
//         this.capacity = capacity
//     }
//
//     get(key: number): number {
//         for (let i = this.memo.length - 1; i >= 0; i--) {
//             if (this.memo[i][0] === key) {
//                 const [item] = this.memo.splice(i, 1)
//                 this.memo.push(item)
//                 return item[1]
//             }
//         }
//         return -1
//     }
//
//     put(key: number, value: number): void {
//         const sameIdx = this.memo.findIndex(item => item[0] === key)
//         if (sameIdx !== -1) {
//             this.memo.splice(sameIdx, 1)
//             this.memo.push([key, value])
//             return
//         }
//         if (this.memo.length >= this.capacity) {
//             this.memo.shift()
//         }
//         this.memo.push([key, value])
//     }
// }

class LRUCache {
    private readonly memo: Map<number, number> = new Map<number, number>()
    private readonly capacity: number

    constructor(capacity: number) {
        this.capacity = capacity
    }

    get(key: number): number {
        if (this.memo.has(key)) {
            const v = this.memo.get(key)
            this.memo.delete(key)
            this.memo.set(key, v)
            return v
        }
        return -1
    }

    put(key: number, value: number): void {
        if (this.memo.has(key)) {
            this.memo.delete(key)
            this.memo.set(key, value)
            return
        }
        if (this.memo.size === this.capacity) {
            const k = this.memo.keys().next().value
            this.memo.delete(k)
        }
        this.memo.set(key, value)
    }
}

export default LRUCache
