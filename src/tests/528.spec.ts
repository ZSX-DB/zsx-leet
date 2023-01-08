import Solution from '../528';
import count from '../utils/count';
import { base, limit } from '../utils/rand';

test("528", () => {
    const w = [1, 3, 8]
    const sum = w.reduce((total, num) => total + num, 0)
    const solution = new Solution(w)
    const pickedIndexes = Array.from(Array(base)).map(() => solution.pickIndex())
    count(pickedIndexes).forEach((value, key) => {
        expect(value - (w[key] / sum) * base <= limit).toBe(true)
    })
})
