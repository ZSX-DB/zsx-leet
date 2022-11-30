type Count = {
    (data: string): Map<string, number>
    (data: string[]): Map<string, number>
    (data: number[]): Map<number, number>
}

const count: Count = (data: any): any => {
    const isStringArray = (data: string[] | number[]): data is string[] => data.some(item => typeof item === 'string')
    if (typeof data === 'string' || isStringArray(data)) {
        const record = new Map<string, number>()
        for (const str of data) {
            record.set(str, (record.get(str) ?? 0) + 1)
        }
        return record
    }
    const record = new Map<number, number>()
    for (const num of data) {
        record.set(num, (record.get(num) ?? 0) + 1)
    }
    return record
}

export default count
