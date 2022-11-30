import count from "./data_structure/count";
import LetterUtils from "./data_structure/LetterUtils";

// const findTheDifference = (s: string, t: string): string => {
//     const sMap = count(s)
//     const tMap = count(t)
//     let ret = ''
//     tMap.forEach((value, key) => {
//         if (sMap.has(key) === false || value > sMap.get(key)) {
//             ret = key
//         }
//     })
//     return ret
// }

const findTheDifference = (s: string, t: string): string => {
    const getSum = (str: string): number => str.split('').map(char => LetterUtils.getASCII(char)).reduce((sum, code) => sum + code, 0)
    return LetterUtils.getCharByASCII(getSum(t) - getSum(s))
}

export default findTheDifference
