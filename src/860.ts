type Bill = 5 | 10 | 20

// const lemonadeChange = (bills: Bill[]): boolean => {
//     const wallet: Map<Bill, number> = new Map<Bill, number>([[5, 0], [10, 0]])
//     for (const bill of bills) {
//         if (bill === 5) {
//             wallet.set(5, wallet.get(5) + 1)
//         } else if (bill === 10) {
//             if (wallet.get(5) >= 1) {
//                 wallet.set(5, wallet.get(5) - 1).set(10, wallet.get(10) + 1)
//             } else {
//                 return false
//             }
//         } else {
//             if (wallet.get(10) >= 1) {
//                 if (wallet.get(5) >= 1) {
//                     wallet.set(5, wallet.get(5) - 1).set(10, wallet.get(10) - 1)
//                 } else {
//                     return false
//                 }
//             } else {
//                 if (wallet.get(5) >= 3) {
//                     wallet.set(5, wallet.get(5) - 3)
//                 } else {
//                     return false
//                 }
//             }
//         }
//     }
//     return true
// }

const lemonadeChange = (bills: Bill[]): boolean => {
    const fives: Array<5> = []
    const tens: Array<10> = []
    for (const bill of bills) {
        if (bill === 5) {
            fives.push(5)
        } else if (bill === 10) {
            tens.push(10)
        }
        let change = bill - 5
        while (change > 0) {
            if (change >= 10 && tens.length) {
                change -= tens.pop()
            } else if (change >= 5 && fives.length) {
                change -= fives.pop()
            } else {
                return false
            }
        }
    }
    return true
}

export default lemonadeChange
