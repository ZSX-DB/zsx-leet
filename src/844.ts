const backspaceCompare = (s: string, t: string): boolean => {
    const handle = (str: string): string => {
        const stack: string[] = []
        for (const ch of str) {
            if (ch === '#') {
                stack.pop()
            } else {
                stack.push(ch)
            }
        }
        return stack.join('')
    }
    return handle(s) === handle(t)
}

export default backspaceCompare
