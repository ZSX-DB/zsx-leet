const isIsomorphic = (s: string, t: string): boolean => {
    const sSet = new Set<string>(s.split(''))
    const tSet = new Set<string>(t.split(''))
    if (sSet.size !== tSet.size) {
        return false
    }
    const record = new Map<string, string>()
    const sIterator = sSet.values()
    const tIterator = tSet.values()
    for (let i = 0; i < sSet.size; i++) {
        record.set(sIterator.next().value, tIterator.next().value)
    }
    let str = ''
    for (let i = 0; i < s.length; i++) {
        str += record.get(s[i])
    }
    return str === t
}

// const isIsomorphic = (s: string, t: string): boolean => {
//     const sMap = new Map<string, string>()
//     const tMap = new Map<string, string>()
//     for (let i = 0; i < s.length; i++) {
//         if (sMap.has(s[i]) && sMap.get(s[i]) !== t[i]) {
//             return false
//         }
//         if (tMap.has(t[i]) && tMap.get(t[i]) !== s[i]) {
//             return false
//         }
//         sMap.set(s[i], t[i])
//         tMap.set(t[i], s[i])
//     }
//     return true
// }

export default isIsomorphic
