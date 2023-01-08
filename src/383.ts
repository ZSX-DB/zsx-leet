import count from "./utils/count";

const canConstruct = (ransomNote: string, magazine: string): boolean => {
    const record = count(magazine)
    for (const char of ransomNote) {
        if (record.has(char)) {
            if (record.get(char) <= 0) {
                return false
            }
            record.set(char, record.get(char) - 1)
        } else {
            return false
        }
    }
    return true
}

export default canConstruct
