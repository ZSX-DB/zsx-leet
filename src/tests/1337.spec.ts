import kWeakestRows from '../1337';

test("1337", () => {
    expect(kWeakestRows([
        [1, 1, 0, 0, 0],
        [1, 1, 1, 1, 0],
        [1, 0, 0, 0, 0],
        [1, 1, 0, 0, 0],
        [1, 1, 1, 1, 1]
    ], 3)).toEqual([2, 0, 3])
    expect(kWeakestRows([
        [1, 0, 0, 0],
        [1, 1, 1, 1],
        [1, 0, 0, 0],
        [1, 0, 0, 0]
    ], 2)).toEqual([0, 2])
})
