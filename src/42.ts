const trap = (height: number[]): number => {
    if ([0, 1, 2].includes(height.length)) {
        return 0
    }
    const stack: number[] = []
    let count: number = 0
    height.forEach(h => {
        while (stack.length && h >= stack[0]) {
            count += stack[0] - stack.pop()
        }
        stack.push(h)
    })
    return count + trap(stack.reverse())
}

export default trap