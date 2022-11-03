// const findMin = (nums: number[]): number => Math.min(...nums)

const findMin = (nums: number[]): number => {
    let low = 0
    let high = nums.length - 1
    while (low < high) {
        const pivot = Math.floor((low + high) / 2)
        if (nums[pivot] < nums[high]) {
            high = pivot
        } else {
            low = pivot + 1
        }
    }
    return nums[low]
}

export default findMin
