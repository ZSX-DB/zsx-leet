// const toGoatLatin = (sentence: string): string => sentence.split(' ').map((word, index) => (['a', 'e', 'i', 'o', 'u'].includes(word[0].toLowerCase()) ? word : word.slice(1) + word[0]) + 'ma' + Array(index + 1).fill('a').join('')).join(' ')

const toGoatLatin = (sentence: string): string => {
    const words: string[] = sentence.split(' ')
    const vowels: Set<string> = new Set<string>(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'])
    const rangeA = (num: number): string => Array(num).fill('a').join('')
    return words.map((word, index) => {
        if (vowels.has(word[0])) {
            return word + 'ma' + rangeA(index + 1)
        } else {
            return word.slice(1) + word[0] + 'ma' + rangeA(index + 1)
        }
    }).join(' ')
}

export default toGoatLatin
