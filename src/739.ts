const dailyTemperatures = (temperatures: number[]): number[] => {
    const ret: number[] = Array(temperatures.length).fill(0)
    const stack: number[] = []
    for (let i = 0; i < temperatures.length; i++) {
        while (stack.length && temperatures[i] > temperatures[stack[stack.length - 1]]) {
            const idx = stack.pop() as number
            ret[idx] = i - idx
        }
        stack.push(i)
    }
    return ret
}

export default dailyTemperatures
