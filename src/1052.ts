// const maxSatisfied = (customers: number[], grumpy: (0 | 1)[], minutes: number): number => {
//     const total = customers.reduce((prev, curr, idx) => prev + (grumpy[idx] === 0 ? curr : 0), 0)
//     const n = customers.length
//     let increase = 0
//     for (let i = 0; i < minutes; i++) {
//         increase += customers[i] * grumpy[i]
//     }
//     let maxIncrease = increase
//     for (let i = minutes; i < n; i++) {
//         increase = increase - customers[i - minutes] * grumpy[i - minutes] + customers[i] * grumpy[i]
//         maxIncrease = Math.max(maxIncrease, increase)
//     }
//     return total + maxIncrease;
// }

const maxSatisfied = (customers: number[], grumpy: (0 | 1)[], minutes: number): number => {
    let maxExtra = 0
    let start = 0
    let end = minutes - 1
    while (end < customers.length) {
        let currExtra = 0
        for (let i = start; i <= end; i++) {
            if (grumpy[i] === 1) {
                currExtra += customers[i]
            }
        }
        maxExtra = Math.max(maxExtra, currExtra)
        start++
        end++
    }
    return customers.reduce((prev, curr, idx) => prev + (grumpy[idx] === 0 ? curr : 0), 0) + maxExtra
}

export default maxSatisfied
