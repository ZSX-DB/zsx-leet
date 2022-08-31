import LetterUtils from "./data_structure/LetterUtils";

const detectCapitalUse = (word: string): boolean => LetterUtils.isLowerWord(word) || LetterUtils.isUpperWord(word) || LetterUtils.isTitleWord(word)

export default detectCapitalUse
