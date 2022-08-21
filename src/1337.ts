const kWeakestRows = (mat: (0 | 1)[][], k: number): number[] =>
    mat.map((row, index) => ({
        key: index,
        value: row.reduce<number>((total, num) => total + num, 0)
    })).sort((x, y) => x.value - y.value).slice(0, k).map(row => row.key)

export default kWeakestRows
