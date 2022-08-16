// const unhappyFriends = (n: number, preferences: number[][], pairs: [number, number][]): number => {
//     const record = pairs.reduce((prev, [x, y]) => prev.set(x, y).set(y, x), new Map<number, number>())
//     const unhappySet = new Set<number>()
//     const detect = (x: number, y: number): void => {
//         const preference = preferences[x]
//         const idx = preference.findIndex(rank => rank === y)
//         for (let i = 0; i < idx; i++) {
//             const person = record.get(preference[i])
//             const ranks = preferences[preference[i]]
//             if (ranks.findIndex(rank => rank === x) < ranks.findIndex(rank => rank === person)) {
//                 unhappySet.add(x)
//             }
//         }
//     }
//     pairs.forEach(pair => {
//         detect(pair[0], pair[1])
//         detect(pair[1], pair[0])
//     })
//     return unhappySet.size
// }


const unhappyFriends = (n: number, preferences: number[][], pairs: [number, number][]): number => {
    const match: number[] = Array(n).fill(0)
    const order: number[][] = match.map(() => Array(n).fill(0))
    let count = 0
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - 1; j++) {
            order[i][preferences[i][j]] = j
        }
    }
    for (const pair of pairs) {
        match[pair[0]] = pair[1]
        match[pair[1]] = pair[0]
    }
    for (let x = 0; x < n; x++) {
        const y = match[x]
        for (const u of preferences[x]) {
            if (u === y) {
                break
            }
            const v = match[u]
            if (order[u][x] < order[u][v]) {
                count++
                break
            }
        }
    }
    return count
}

export default unhappyFriends
