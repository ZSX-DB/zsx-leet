class Solution {
    private readonly nums: number[]

    constructor(nums: number[]) {
        this.nums = nums
    }

    reset(): number[] {
        return this.nums
    }

    shuffle(): number[] {
        const copy = [...this.nums]
        let end = copy.length - 1
        while (end >= 0) {
            const rand = Math.floor(Math.random() * (end + 1));
            [copy[end], copy[rand]] = [copy[rand], copy[end]]
            end--
        }
        return copy
    }

}

export default Solution
