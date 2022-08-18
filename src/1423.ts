const maxScore = (cardPoints: number[], k: number): number => {
    const n: number = cardPoints.length
    const leftCardPoints: number[] = cardPoints.slice(0, k)
    const rightCardPoints: number[] = cardPoints.slice(n - k, n)
    const newCardPoints: number[] = rightCardPoints.concat(leftCardPoints)
    let sum: number = rightCardPoints.reduce((cardPoint, total) => total + cardPoint, 0)
    let max: number = sum
    for (let i = k; i < 2 * k; i++) {
        sum = sum + newCardPoints[i] - newCardPoints[i - k]
        max = Math.max(max, sum)
    }
    return max
}

export default maxScore
