const findPoisonedDuration = (timeSeries: number[], duration: number): number => {
    const n = timeSeries.length
    if (n === 0) {
        return 0
    } else if (n === 1) {
        return duration
    }
    let count = 0
    for (let i = 0; i < n - 1; i++) {
        count += ((timeSeries[i] + duration - 1) >= timeSeries[i + 1]) ? (timeSeries[i + 1] - timeSeries[i]) : duration
    }
    return count + duration
}

export default findPoisonedDuration
