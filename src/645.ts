import count from "./data_structure/count"

const findErrorNums = (nums: number[]): number[] => {
    let duplicate = -1
    let miss = -1
    const record = count(nums)
    Array.from(Array(nums.length)).map((_, index) => index + 1).forEach(num => {
        if (record.has(num) === false) {
            miss = num
        } else if (record.get(num) === 2) {
            duplicate = num
        }
    })
    return [duplicate, miss]
}

export default findErrorNums
