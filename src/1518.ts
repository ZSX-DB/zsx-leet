// const numWaterBottles = (numBottles: number, numExchange: number): number => {
//     let surplus = numBottles
//     let count = numBottles
//     while (surplus >= numExchange) {
//         const num = Math.floor(surplus / numExchange)
//         count += num
//         surplus = surplus % numExchange + num
//     }
//     return count
// }

const numWaterBottles = (numBottles: number, numExchange: number): number =>
    numBottles >= numExchange ?
        Math.floor((numBottles - numExchange) / (numExchange - 1)) + 1 + numBottles : numBottles

export default numWaterBottles
