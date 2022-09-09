import flipAndInvertImage from '../832';

test("832", () => {
    expect(flipAndInvertImage([[1, 1, 0], [1, 0, 1], [0, 0, 0]])).toEqual([[1, 0, 0], [0, 1, 0], [1, 1, 1]])
    expect(flipAndInvertImage([[1, 1, 0, 0], [1, 0, 0, 1], [0, 1, 1, 1], [1, 0, 1, 0]])).toEqual([[1, 1, 0, 0], [0, 1, 1, 0], [0, 0, 0, 1], [1, 0, 1, 0]])
})
