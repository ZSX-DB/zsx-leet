// const containsDuplicate = (nums: number[]): boolean => nums.length !== new Set<number>(nums).size

const containsDuplicate = (nums: number[]): boolean => {
    const memo = new Set<number>()
    for (const num of nums) {
        if (memo.has(num)) {
            return true
        }
        memo.add(num)
    }
    return false
}

export default containsDuplicate
