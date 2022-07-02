const countPrimes = (n: number): number => {
    if (n < 3) {
        return 0
    }
    const primeFlag: boolean[] = Array(n).fill(true)
    let count: number = 1
    // += 2 跳过偶数
    for (let i = 3; i < n; i += 2) {
        if (primeFlag[i]) {
            count++
            // 加 2 * i，eg: 一个数加其本身必为偶数，因此乘以 2
            for (let j = i; j < n; j += 2 * i) {
                primeFlag[j] = false
            }
        }
    }
    return count
}

export default countPrimes
