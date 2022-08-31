import Letters from "./data_structure/Letters"

const detectCapitalUse = (word: string): boolean => Letters.isLowerWord(word) || Letters.isUpperWord(word) || Letters.isTitleWord(word)

export default detectCapitalUse
