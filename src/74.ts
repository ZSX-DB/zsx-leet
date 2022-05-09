// const searchMatrix = (matrix: number[][], target: number): boolean => matrix.some(row => row.includes(target))

const searchMatrix = (matrix: number[][], target: number): boolean => {
    const m = matrix.length
    const n = matrix[0].length
    if (target < matrix[0][0] || target > matrix[m - 1][n - 1]) {
        return false
    }
    let low: number = -1
    let high: number = m - 1
    while (low < high) {
        const mid = Math.floor((high - low + 1) / 2) + low
        if (target >= matrix[mid][0]) {
            low = mid
        } else {
            high = mid - 1
        }
    }
    return matrix[low].includes(target)
}

export default searchMatrix
