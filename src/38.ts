const countAndSay = (n: number): string => {
    const collect: Map<number, number[]> = new Map<number, number[]>([[1, [1]]])
    const convert = (nums: number[]): number[] => {
        const result: number[] = []
        for (let i = 0; i < nums.length; i++) {
            let j = i
            while (nums[j + 1] === nums[i]) {
                j++
            }
            result.push(j - i + 1, nums[i] as number)
            i = j
        }
        return result
    }
    for (let i = 2; i <= n; i++) {
        collect.set(i, convert(collect.get(i - 1) as number[]))
    }
    return (collect.get(n) as number[]).join('')
}
