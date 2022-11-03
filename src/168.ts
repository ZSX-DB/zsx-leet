const convertToTitle = (columnNumber: number): string => {
    const mod26 = (num: number): number[] => {
        if (num <= 26) {
            return [num]
        }
        return (num % 26) ? mod26(Math.floor(num / 26)).concat([num % 26]) : mod26((num / 26) - 1).concat([26])
    }
    return mod26(columnNumber).map(n => String.fromCharCode(n + 64)).join('')
}

export default convertToTitle
