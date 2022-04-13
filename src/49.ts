const groupAnagrams = (strs: string[]): string[][] => {
    const memo = new Map<string, string[]>()
    strs.forEach(str => {
        const counts = Array(26).fill(0)
        for (const ch of str) {
            counts[ch.codePointAt(0) as number - 97]++
        }
        const key = counts.toString()
        if (memo.has(key)) {
            (memo.get(key) as string[]).push(str)
        } else {
            memo.set(key, [str])
        }
    })
    return [...memo.values()]
}

export default groupAnagrams
