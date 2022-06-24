class NumArray {
    private readonly prefixSums: number[] = []

    constructor(nums: number[]) {
        nums.forEach((num, index) => {
            if (index === 0) {
                this.prefixSums.push(num)
            } else {
                this.prefixSums.push(this.prefixSums[index - 1] + num)
            }
        })
    }

    sumRange(left: number, right: number): number {
        return this.prefixSums[right] - (this.prefixSums[left - 1] ?? 0)
    }
}

export default NumArray
