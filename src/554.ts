import count from "./data_structure/count"

const leastBricks = (wall: number[][]): number => {
    const items: number[] = []
    const width = wall[0].reduce((sum, block) => sum + block, 0)
    const height = wall.length
    for (const row of wall) {
        let base = 0
        for (const block of row) {
            base += block
            items.push(base)
        }
    }
    const record = count(items.filter(item => item !== width))
    if (record.size === 0) {
        return height
    }
    let maxSpace = -Infinity
    record.forEach((value) => {
        maxSpace = Math.max(maxSpace, value)
    })
    return wall.length - maxSpace
}

export default leastBricks
