const findLongestWord = (s: string, dictionary: string[]): string => {
    const detect = (word: string): boolean => {
        let i = 0
        for (let j = 0; j < s.length; j++) {
            if (s[j] === word[i]) {
                i++
            }
        }
        return i >= word.length
    }
    let result: string = ''
    dictionary.sort((x, y) => y.length - x.length)
    for (const word of dictionary) {
        if (word.length < result.length) {
            break
        }
        if (detect(word)) {
            result = word.length > result.length ? word : [word, result].sort()[0]
        }
    }
    return result
}

// const findLongestWord = (s: string, dictionary: string[]): string => {
//     let result: string = ''
//     dictionary.sort((x, y) => y.length !== x.length ? y.length - x.length : x.localeCompare(y))
//     for (const word of dictionary) {
//         if (word.length < result.length) {
//             break
//         }
//         let i = 0
//         for (let j = 0; j < s.length; j++) {
//             if (s[j] === word[i]) {
//                 i++
//             }
//         }
//         if (i === word.length) {
//             result = word
//             break
//         }
//     }
//     return result
// }

export default findLongestWord
