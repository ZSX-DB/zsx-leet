type Mode = "zip" | "rank"

class UnionFind {
    private readonly record: number[]
    private readonly mode: Mode
    private readonly rank: number[] = []
    constructor(length: number, mode?: Mode) {
        this.record = Array(length).fill(0).map((_, idx) => idx)
        if (mode) {
            this.mode = mode
            if (mode === 'rank') {
                this.rank = Array(length).fill(1)
            }
        }
    }

    find(i: number): number {
        if (this.mode !== 'zip') {
            return this.record[i] === i ? i : this.find(this.record[i])
        }
        // 路径压缩
        if (this.record[i] !== i) {
            this.record[i] = this.find(this.record[i])
        }
        return this.record[i]
    }

    union(i: number, j: number): void {
        if (this.mode !== 'rank') {
            this.record[this.find(i)] = this.find(j)
        } else {
            // 先获取根节点
            const x = this.find(i)
            const y = this.find(j)
            if (this.rank[x] <= this.rank[y]) {
                this.record[x] = y
            } else {
                this.record[y] = x
            }
            // 如果深度相同且根节点不同, 则新的根节点的深度 + 1
            if (this.rank[x] === this.rank[y] && x !== y) {
                this.rank[y]++
            }
        }
    }

    getRecord(): readonly number[] {
        return this.record
    }

}

export default UnionFind