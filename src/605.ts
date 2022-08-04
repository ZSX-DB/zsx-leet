const canPlaceFlowers = (flowerbed: (0 | 1)[], n: number): boolean => {
    let count: number = 0
    flowerbed = [0, ...flowerbed, 0]
    for (let i = 1; i < flowerbed.length - 1; i++) {
        if (flowerbed[i] === 1) {
            continue
        }
        if (flowerbed[i - 1] === 0 && flowerbed[i + 1] === 0) {
            flowerbed[i] = 1
            count++
        }
        if (count === n) {
            return true
        }
    }
    return n === 0
}

export default canPlaceFlowers
