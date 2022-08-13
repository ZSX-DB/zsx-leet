interface CheckItem {
    value: string
    match: boolean
}

/**
 * 适用于答案为数组，但顺序不固定的题目
 * @param items1
 * @param items2
 * @returns
 */
const detectItems = <T>(items1: T[], items2: T[]): boolean => {
    if (items1.length !== items2.length) {
        return false
    }
    const checkItems: CheckItem[] = items1.map(item => ({value: String(item), match: false}))
    for (const item of items2) {
        const idx: number = checkItems.findIndex(checkItem => checkItem.value === String(item) && checkItem.match === false)
        if (idx === -1) {
            return false
        } else {
            checkItems[idx].match = true
        }
    }
    return true
}

export {
    detectItems
}
