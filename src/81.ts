const search = (nums: number[], target: number): boolean => {
    let left = 0
    let right = nums.length - 1
    while (right - left > 1) {
        const mid = Math.floor((left + right) / 2)
        if (nums[mid] > nums[left]) /** 左递增 */ {
            if (target >= nums[left] && target <= nums[mid]) {
                right = mid
            } else {
                left = mid
            }
        } else if (nums[right] > nums[mid]) /** 右递增 */ {
            if (target >= nums[mid] && target <= nums[right]) {
                left = mid
            } else {
                right = mid
            }
        } else if (nums[mid] === nums[left]) {
            if (nums.slice(left, mid + 1).some(num => num !== nums[mid])) /** 左波峰 */ {
                right = mid
            } else {
                left = mid
            }
        } else if (nums[mid] === nums[right]) {
            if (nums.slice(mid, right + 1).some(num => num !== nums[mid])) /** 右波峰 */ {
                left = mid
            } else {
                right = mid
            }
        }
    }
    return nums[left] === target || nums[right] === target
}

export default search
