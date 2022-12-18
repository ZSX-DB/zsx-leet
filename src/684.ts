import UnionFind from "./data_structure/UnionFind";

// const findRedundantConnection = (edges: [number, number][]): [number, number] => {
//     const relation = new Map<number, Set<number>>()
//     const redundantConnections: [number, number][] = []
//     for (const edge of edges) {
//         const [nodeA, nodeB] = edge
//         const setA = relation.get(nodeA) ?? new Set<number>()
//         const setB = relation.get(nodeB) ?? new Set<number>()
//         if (setA.has(nodeB) || setB.has(nodeA)) {
//             redundantConnections.push(edge)
//             continue
//         }
//         const nodes = [...setA, ...setB, nodeA, nodeB]
//         const mergeSet = new Set<number>(nodes).add(nodeA).add(nodeB)
//         for (const node of nodes) {
//             relation.set(node, mergeSet)
//         }
//     }
//     return redundantConnections[redundantConnections.length - 1]
// }

const findRedundantConnection = (edges: [number, number][]): [number, number] => {
    const redundantConnections: [number, number][] = []
    const unionFind = new UnionFind(edges.reduce((nodesSet, edge) => nodesSet.add(edge[0]).add(edge[1]), new Set<number>()).size, 'zip')
    for (const edge of edges) {
        const [nodeA, nodeB] = edge
        const indexA = nodeA - 1
        const indexB = nodeB - 1
        const parentA = unionFind.find(indexA)
        const parentB = unionFind.find(indexB)
        if (parentA === parentB) {
            redundantConnections.push(edge)
        } else {
            unionFind.union(indexA, indexB)
        }
    }
    return redundantConnections[redundantConnections.length - 1]
}

export default findRedundantConnection
