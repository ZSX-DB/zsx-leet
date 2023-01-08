import rand10 from '../470';
import count from '../utils/count';
import { base, limit } from '../utils/rand';

test("470", () => {
    const randNums = Array.from(Array(base)).map(() => rand10())
    count(randNums).forEach((value) => {
        expect(Math.abs(value - base / 10) <= limit).toBe(true)
    })
})