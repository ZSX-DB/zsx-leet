class ClosestUtils {
    private readonly sortedNums: number[] = []
    private readonly memo: Map<number, number> = new Map<number, number>()

    constructor(nums: number[]) {
        if (nums.length === 0) {
            throw new Error("The length of the nums cannot be 0")
        } else {
            this.sortedNums = [...nums].sort((x, y) => x - y)
        }
    }

    getClosestNum(num: number): number {
        if (this.memo.has(num) === false) {
            const length = this.sortedNums.length
            let closestIdx = -1
            let left = 0
            let right = length - 1
            while (left <= right) {
                const mid = Math.floor((left + right) / 2)
                if (this.sortedNums[mid] > num) {
                    right = mid - 1
                } else if (this.sortedNums[mid] < num) {
                    left = mid + 1
                } else {
                    closestIdx = mid
                    break
                }
            }
            if (closestIdx === -1) {
                if (left < 0 || left >= length) {
                    closestIdx = right
                } else if (right < 0 || right >= length) {
                    closestIdx = left
                } else {
                    closestIdx = (Math.abs(this.sortedNums[left] - num) < Math.abs(this.sortedNums[right] - num)) ? left : right
                }
            }
            this.memo.set(num, this.sortedNums[closestIdx])
        }
        return this.memo.get(num)
    }

    getClosestNums(nums: number[]): number[] {
        const closestNums: number[] = []
        nums.forEach(num => {
            closestNums.push(this.getClosestNum(num))
        })
        return closestNums
    }

}

export default ClosestUtils
