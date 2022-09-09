const largeGroupPositions = (s: string): [number, number][] => {
    const ret: [number, number][] = []
    for (let i = 1; i < s.length - 1; i++) {
        if (s[i] === s[i - 1] && s[i] === s[i + 1]) {
            let j = i
            while (s[j + 1] === s[i]) {
                j++
            }
            ret.push([i - 1, j])
            i = j + 1
        }
    }
    return ret
}

export default largeGroupPositions
