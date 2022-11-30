const wordPattern = (pattern: string, s: string): boolean => {
    const words = s.split(' ')
    const n = words.length
    if (n !== pattern.length) {
        return false
    }
    const pMap = new Map<string, string>()
    const sMap = new Map<string, string>()
    for (let i = 0; i < n; i++) {
        if ((pMap.has(pattern[i]) && pMap.get(pattern[i]) !== words[i]) || (sMap.has(words[i]) && sMap.get(words[i]) !== pattern[i])) {
            return false
        }
        pMap.set(pattern[i], words[i])
        sMap.set(words[i], pattern[i])
    }
    return true
}
export default wordPattern
