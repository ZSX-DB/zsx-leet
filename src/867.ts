const transpose = (matrix: number[][]): number[][] => matrix[0].map((_, i) => matrix.map(row => row[i]))


export default transpose
