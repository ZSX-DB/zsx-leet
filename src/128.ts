const longestConsecutive = (nums: number[]): number => {
    const numsSet = new Set<number>(nums)
    let longestStreak = 0
    numsSet.forEach((num) => {
        if (!numsSet.has(num - 1)) {
            let currStreak = 1
            while (numsSet.has(num + 1)) {
                num++
                currStreak++
            }
            longestStreak = Math.max(longestStreak, currStreak)
        }
    })
    return longestStreak
}

export default longestConsecutive
