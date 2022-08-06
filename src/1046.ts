const lastStoneWeight = (stones: number[]): number => {
    stones.sort((x, y) => y - x)
    while (stones.length > 1) {
        const x = stones.shift() as number
        const y = stones.shift() as number
        if (x !== y) {
            const surplusStone = x - y
            const idx = stones.findIndex(stone => stone <= surplusStone)
            if (idx === -1) {
                stones.push(surplusStone)
            } else {
                stones.splice(idx, 0, surplusStone)
            }
        }
    }
    return stones[0] ?? 0
}

export default lastStoneWeight
