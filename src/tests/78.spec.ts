import subsets from "../78";
import {detectArrayList} from "../utils/detect";

test("78", () => {
    expect(
        detectArrayList<number>(
            subsets([1, 2, 3]),
            [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]
        )
    ).toBeTruthy()
    expect(
        detectArrayList<number>(
            subsets([0]),
            [[], [0]]
        )
    ).toBeTruthy()
})
