type NumsArray = number[][]

const detectNumsArray = (numsArray1: NumsArray, numsArray2: NumsArray): boolean => {
    if (numsArray1.length !== numsArray2.length) {
        return false
    }
    const items = numsArray1.map(nums => ({
        value: nums.toString(),
        match: false
    }))
    for (const nums of numsArray2) {
        const idx: number = items.findIndex(item => item.value === nums.toString() && item.match === false)
        if (idx === -1) {
            return false
        } else {
            items[idx].match = true
        }
    }
    return true
}

export {
    detectNumsArray
}
