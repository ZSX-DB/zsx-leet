// const lengthOfLastWord = (s: string): number => {
//     s = s.trimEnd()
//     let length: number = 0
//     for (let i = s.length - 1; i >= 0; i--) {
//         if (s[i] === ' ') {
//             return length
//         } else {
//             length++
//         }
//     }
//     return length
// }

const lengthOfLastWord = (s: string): number => s.trimEnd().length - s.trimEnd().lastIndexOf(' ') - 1

export default lengthOfLastWord
