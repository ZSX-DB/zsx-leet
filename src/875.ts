const minEatingSpeed = (piles: number[], h: number): number => {
    let left: number = 1
    let right: number = Math.max(...piles)
    let result: number = right
    const detectEat = (speed: number): boolean => {
        let hours = 0
        piles.forEach(pile => {
            hours += Math.ceil(pile / speed)
        })
        return hours <= h
    }
    while (left <= right) {
        const mid = Math.floor((left + right) / 2)
        if (detectEat(mid)) {
            result = mid
            right = mid - 1
        } else {
            left = mid + 1
        }
    }
    return result
}

export default minEatingSpeed
