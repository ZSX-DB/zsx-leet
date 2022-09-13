const customSortString = (order: string, s: string): string => {
    const record = new Map<string, string>(order.split('').map(char => [char, '']))
    let ret: string = ''
    for (const char of s) {
        if (order.includes(char)) {
            record.set(char, (record.get(char) as string) + char)
        } else {
            ret += char
        }
    }
    record.forEach(value => {
        ret += value
    })
    return ret
}

// const customSortString = (order: string, s: string): string => s.split('').sort((x, y) => order.indexOf(x) - order.indexOf(y)).join('')

export default customSortString
