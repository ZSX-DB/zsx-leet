const pick = 1

const guess = (num: number): -1 | 0 | 1 => {
    if (pick > num) {
        return 1
    } else if (pick < num) {
        return -1
    } else {
        return 0
    }
}

const guessNumber = (n: number): number => {
    let low = 1
    let high = n
    while (low < high) {
        const mid = Math.floor((low + high) / 2)
        const result = guess(mid)
        if (result === 1) {
            low = mid + 1
        } else if (result === -1) {
            high = mid - 1
        } else {
            return mid
        }
    }
    return low
}

export default guessNumber

export {
    pick
}
