type ChMemo = Map<string, Array<readonly [number, number]>>

// const findWords = (board: string[][], words: string[]): string[] => {
//     const m: number = board.length
//     const n: number = board[0].length
//     const buildChMemo = (): ChMemo => {
//         const memo: ChMemo = new Map<string, Array<readonly [number, number]>>()
//         for (let i = 0; i < m; i++) {
//             for (let j = 0; j < n; j++) {
//                 const curr = board[i][j]
//                 if (memo.has(curr)) {
//                     memo.set(curr, memo.get(curr).concat([[i, j]]))
//                 } else {
//                     memo.set(curr, [[i, j]])
//                 }
//             }
//         }
//         return memo
//     }
//     const chMemo: ChMemo = buildChMemo()
//     const result: string[] = []
//     const detect = (word: string, i: number, j: number, used: boolean[][]): boolean => {
//         if (used[i][j]) {
//             return false
//         }
//         if (word.length === 1) {
//             return word[0] === board[i][j]
//         }
//         if (board[i][j] !== word[0]) {
//             return false
//         }
//         used[i][j] = true
//         const next = word.slice(1)
//         const origin = JSON.stringify(used)
//         if ((j - 1 >= 0) && detect(next, i, j - 1, JSON.parse(origin))) {
//             return true
//         }
//         if ((j + 1 < n) && detect(next, i, j + 1, JSON.parse(origin))) {
//             return true
//         }
//         if ((i - 1 >= 0) && detect(next, i - 1, j, JSON.parse(origin))) {
//             return true
//         }
//         return (i + 1 < m) && detect(next, i + 1, j, JSON.parse(origin))
//     }
//     words.forEach(word => {
//         for (const ch of word) {
//             if (!chMemo.has(ch)) {
//                 return
//             }
//         }
//         const indexes = chMemo.get(word[0])
//         for (const [i, j] of indexes) {
//             if (detect(word, i, j, Array.from({length: m}, () => Array(n).fill(false)))) {
//                 result.push(word)
//                 return
//             }
//         }
//     })
//     return result
// }

const findWords = (board: string[][], words: string[]): string[] => {
    const root: TrieRoot = {}
    // 构建字典树
    words.forEach(word => {
        let temp: TrieRoot = root
        for (const ch of word) {
            if (temp[ch] === undefined) {
                temp[ch] = {}
            }
            temp = temp[ch]
        }
        temp.end = {}
    })
    const m: number = board.length
    const n: number = board[0].length
    const wordSet = new Set<string>()
    const directions: Array<readonly [number, number]> = [[-1, 0], [1, 0], [0, -1], [0, 1]]
    const dfs = (node: TrieRoot, word: string, i: number, j: number) => {
        if (node.hasOwnProperty('end')) {
            wordSet.add(word)
        }
        let temp = board[i][j]
        board[i][j] = '#'
        directions.forEach(direction => {
            const _i = i + direction[0]
            const _j = j + direction[1]
            if (_i >= 0 && _i < m && _j >= 0 && _j < n && board[_i][_j] !== '#' && node[board[_i][_j]]) {
                dfs(node[board[_i][_j]], word + board[_i][_j], _i, _j)
            }
        })
        board[i][j] = temp
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (root[board[i][j]]) {
                dfs(root[board[i][j]], board[i][j], i, j)
            }
        }
    }
    return Array.from(wordSet)
}

export default findWords
