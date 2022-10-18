import UnionFind from "./data_structure/UnionFind";

const findCircleNum = (isConnected: (0 | 1)[][]): number => {
    const n = isConnected.length
    const unionFind = new UnionFind(n)
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (isConnected[i][j] === 1) {
                unionFind.union(i, j)
            }
        }
    }
    return unionFind.getRecord().reduce((count, item, index) => count += (item === index ? 1 : 0), 0)
}

export default findCircleNum
