class Solution {
    private readonly prefix: number[]
    private readonly sum: number

    constructor(w: number[]) {
        const n = w.length
        const prefix: number[] = Array(n).fill(0)
        prefix[0] = w[0]
        for (let i = 1; i < w.length; i++) {
            prefix[i] = w[i] + prefix[i - 1]
        }
        this.prefix = prefix
        this.sum = prefix[n - 1]
    }

    private binarySearch(x: number): number {
        let low = 0
        let high = this.prefix.length - 1
        while (low < high) {
            const mid = Math.floor((low + high) / 2)
            if (this.prefix[mid] < x) {
                low = mid + 1
            } else {
                high = mid
            }
        }
        return low
    }

    pickIndex(): number {
        return this.binarySearch(Math.ceil(Math.random() * this.sum))
    }
}

export default Solution    
