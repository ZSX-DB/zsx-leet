const generate = (numRows: number): number[][] => {
    const result: number[][] = []
    for (let i = 0; i < numRows; i++) {
        const currList = Array(i + 1).fill(1)
        const lastList = result[i - 1]
        for (let j = 1; j < i; j++) {
            currList[j] = lastList[j - 1] + lastList[j]
        }
        result.push(currList)
    }
    return result
}

export default generate
