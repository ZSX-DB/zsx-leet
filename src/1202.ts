import UnionFind from "./data_structure/UnionFind";

const smallestStringWithSwaps = (s: string, pairs: number[][]): string => {
    const length = s.length
    const uf = new UnionFind(length, 'zip')
    const fa: number[] = Array(length).fill(0).map((_, idx) => idx)
    for (let i = 0; i < pairs.length; i++) {
        const x = pairs[i][0]
        const y = pairs[i][1]
        const ux = uf.find(x)
        const uy = uf.find(y)
        if (ux ^ uy) {
            uf.union(ux, uy)
        }
    }
    const vec: string[][] = Array(length).fill(0).map(() => [])
    for (let i = 0; i < length; i++) {
        fa[i] = uf.find(i)
        vec[fa[i]].push(s[i])
    }
    for (let i = 0; i < length; i++) {
        if (vec[i].length > 0) {
            vec[i].sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0))
        }
    }
    const p = Array(length).fill(0)
    const ans: string[] = []
    for (let i = 0; i < length; i++) {
        ans[i] = vec[fa[i]][p[fa[i]]]
        p[fa[i]]++
    }
    return ans.join('')
}

export default smallestStringWithSwaps
