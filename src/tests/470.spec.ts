import rand10 from '../470';
import count from '../data_structure/count';

test("470", () => {
    const randNums = Array.from(Array(100000)).map(() => rand10())
    count(randNums).forEach((value) => {
        expect(Math.abs(value - 10000) <= 500).toBe(true)
    })
})