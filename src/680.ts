const validPalindrome = (s: string): boolean => {
    const verify = (direction: "left" | "right"): boolean => {
        let left: number = 0
        let right: number = s.length - 1
        let count: number = 0
        while (left < right) {
            if (s[left] === s[right]) {
                left++
                right--
            } else {
                count++
                if (count > 1) {
                    return false
                }
                if (direction === "left") {
                    left++
                } else {
                    right--
                }
            }
        }
        return count <= 1
    }
    return verify("left") || verify("right")
}

export default validPalindrome