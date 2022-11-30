// const kthSmallest = (matrix: number[][], k: number): number => matrix.flat(1).sort((x, y) => x - y)[k - 1]

const kthSmallest = (matrix: number[][], k: number): number => {
    const n = matrix.length
    const check = (mid: number): boolean => {
        let i = n - 1
        let j = 0
        let num = 0
        while (i >= 0 && j < n) {
            if (matrix[i][j] <= mid) {
                num += (i + 1)
                j++
            } else {
                i--
            }
        }
        return num >= k
    }
    let left = matrix[0][0]
    let right = matrix[n - 1][n - 1]
    while (left < right) {
        const mid = Math.floor((left + right) / 2)
        if (check(mid)) {
            right = mid
        } else {
            left = mid + 1
        }
    }
    return left
}

export default kthSmallest
