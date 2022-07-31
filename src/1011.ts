const detectShip = (weights: number[], days: number, ship: number): boolean => {
    let copyShip = ship
    let useDays = 1
    weights.forEach(weight => {
        if (copyShip >= weight) {
            copyShip -= weight
        } else {
            useDays++
            copyShip = ship - weight
        }
    })
    return useDays <= days
}

// const shipWithinDays = (weights: number[], days: number): number => {
//     let ship = Math.max(...weights)
//     while (true) {
//         if (detectShip(weights, days, ship)) {
//             return ship
//         } else {
//             ship++
//         }
//     }
// }

const shipWithinDays = (weights: number[], days: number): number => {
    let left = Math.max(...weights)
    let right = weights.reduce((total, weight) => total + weight, 0)
    let result: number = right
    while (left <= right) {
        const mid = Math.floor((left + right) / 2)
        if (detectShip(weights, days, mid)) {
            result = mid
            right = mid - 1
        } else {
            left = mid + 1
        }
    }
    return result
}

export default shipWithinDays
