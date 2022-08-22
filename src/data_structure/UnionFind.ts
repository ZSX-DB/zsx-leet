type Mode = "zip" | "rank"

class UnionFind {
    private readonly parent: number[]
    private readonly mode: Mode
    private readonly rank: number[] = []
    constructor(length: number, mode?: Mode) {
        this.parent = Array(length).fill(0).map((_, idx) => idx)
        if (mode) {
            this.mode = mode
            if (mode === 'rank') {
                this.rank = Array(length).fill(1)
            }
        }
    }

    find(i: number): number {
        if (this.mode !== 'zip') {
            return this.parent[i] === i ? i : this.find(this.parent[i])
        }
        // 路径压缩
        if (this.parent[i] !== i) {
            this.parent[i] = this.find(this.parent[i])
        }
        return this.parent[i]
    }

    union(i: number, j: number): void {
        if (this.mode !== 'rank') {
            this.parent[this.find(i)] = this.find(j)
        } else {
            // 先获取根节点
            const x = this.find(i)
            const y = this.find(j)
            if (this.rank[x] <= this.rank[y]) {
                this.parent[x] = y
            } else {
                this.parent[y] = x
            }
            // 如果深度相同且根节点不同, 则新的根节点的深度 + 1
            if (this.rank[x] === this.rank[y] && x !== y) {
                this.rank[y]++
            }
        }
    }

}

export default UnionFind