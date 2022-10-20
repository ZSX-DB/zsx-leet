const restoreIpAddresses = (s: string): string[] => {
    const n = s.length
    if (n < 4 || n > 12) {
        return []
    }
    const addresses: string[] = []
    const helper = (nums: number[], sum: number) => {
        if (nums.length < 4) {
            helper(nums.concat(1), sum + 1)
            helper(nums.concat(2), sum + 2)
            helper(nums.concat(3), sum + 3)
        } else if (nums.length === 4) {
            if (sum === n) {
                const addressBlocks: string[] = []
                let idx = 0
                for (const num of nums) {
                    const block = s.substring(idx, idx + num)
                    const val = Number(block)
                    if ((val < 10 && block.length > 1) || (val < 100 && block.length > 2) || val > 255) {
                        break
                    }
                    addressBlocks.push(block)
                    idx += num
                }
                if (addressBlocks.length === 4) {
                    addresses.push(addressBlocks.join('.'))
                }
            }
        }
    }
    helper([], 0)
    return addresses
}

export default restoreIpAddresses
