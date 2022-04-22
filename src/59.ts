const generateMatrix = (n: number): number[][] => {
    const matrix: number[][] = Array.from({length: n}, () => Array(n).fill(0))
    let num: number = 1
    let left: number = 0
    let right: number = n - 1
    let top: number = 0
    let bottom: number = n - 1

    while (left <= right && top <= bottom) {
        for (let i = left; i <= right; i++) {
            matrix[top][i] = num
            num++
        }
        top++
        for (let i = top; i <= bottom; i++) {
            matrix[i][right] = num
            num++
        }
        right--
        for (let i = right; i >= left; i--) {
            matrix[bottom][i] = num
            num++
        }
        bottom--
        for (let i = bottom; i >= top; i--) {
            matrix[i][left] = num
            num++
        }
        left++
    }
    return matrix
}

export default generateMatrix
