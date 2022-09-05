// aliceSum - x + y = bobSum + x - y 可推出 x = y + (aliceSum - bobSum) / 2
const fairCandySwap = (aliceSizes: number[], bobSizes: number[]): [number, number] => {
    const aliceSum = aliceSizes.reduce((sum, aliceSize) => sum + aliceSize, 0)
    const bobSum = bobSizes.reduce((sum, bobSize) => sum + bobSize, 0)
    const delta = (aliceSum - bobSum) / 2
    const aliceSet = new Set<number>(aliceSizes)
    for (const y of bobSizes) {
        const x = delta + y
        if (aliceSet.has(x)) {
            return [x, y]
        }
    }
    return [0, 0]
}

export default fairCandySwap
