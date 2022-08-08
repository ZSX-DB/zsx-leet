import allPathsSourceTarget from '../797';
import { detectArrayList } from '../utils/detect';

test("797", () => {
    expect(detectArrayList<number>(
        allPathsSourceTarget([[1, 2], [3], [3], []]),
        [[0, 1, 3], [0, 2, 3]]
    )).toBeTruthy()
    expect(detectArrayList<number>(
        allPathsSourceTarget([[4, 3, 1], [3, 2, 4], [3], [4], []]),
        [[0, 4], [0, 3, 4], [0, 1, 3, 4], [0, 1, 2, 3, 4], [0, 1, 4]]
    )).toBeTruthy()
})
