const getRow = (rowIndex: number): number[] => {
    const triangle = [[1]]
    for (let i = 1; i <= rowIndex; i++) {
        const row = [1]
        for (let j = 0; j < i - 1; j++) {
            row.push(triangle[i - 1][j] + triangle[i - 1][j + 1])
        }
        row.push(1)
        triangle.push(row)
    }
    return triangle[rowIndex]
}

export default getRow
