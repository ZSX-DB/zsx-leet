const findContentChildren = (g: number[], s: number[]): number => {
    g.sort((x, y) => x - y)
    s.sort((x, y) => x - y)
    let i = 0
    let j = 0
    let count = 0
    while (i < g.length && j < s.length) {
        if (s[j] >= g[i]) {
            count++
            i++
        }
        j++
    }
    return count
}

export default findContentChildren
