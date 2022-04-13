const permuteUnique = (nums: number[]): number[][] => {
    const len: number = nums.length
    const vis: boolean[] = Array(len).fill(false)
    const result: number[][] = []
    const helper = (path: number[], currLen: number): void => {
        if (currLen === len) {
            result.push(path)
            return
        }
        for (let i = 0; i < len; i++) {
            if (vis[i] || (i > 0 && nums[i] === nums[i - 1] && !vis[i - 1])) {
                continue
            }
            path.push(nums[i])
            vis[i] = true
            helper([...path], currLen + 1)
            path.pop()
            vis[i] = false
        }
    }
    nums.sort((x, y) => x - y)
    helper([], 0)
    return result
}

export default permuteUnique
