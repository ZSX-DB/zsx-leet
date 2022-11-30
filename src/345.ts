const reverseVowels = (s: string): string => {
    const vowelsSet = new Set<string>(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'])
    const vowels: string[] = []
    for (const char of s) {
        if (vowelsSet.has(char)) {
            vowels.push(char)
        }
    }
    let ret = ''
    for (const char of s) {
        ret += vowelsSet.has(char) ? vowels.pop() : char
    }
    return ret
}

export default reverseVowels
