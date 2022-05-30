type ArrayItems<T> = T[][]

const detectArrayList = <T>(arrayItems1: ArrayItems<T>, arrayItems2: ArrayItems<T>): boolean => {
    if (arrayItems1.length !== arrayItems2.length) {
        return false
    }
    const items = arrayItems1.map(arrayItem => ({
        value: arrayItem.toString(),
        match: false
    }))
    for (const arrayItem of arrayItems2) {
        const idx: number = items.findIndex(item => item.value === arrayItem.toString() && item.match === false)
        if (idx === -1) {
            return false
        } else {
            items[idx].match = true
        }
    }
    return true
}

export {
    detectArrayList
}
