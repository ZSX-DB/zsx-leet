import subsets from "../78";
import {detectItems} from "../utils/detect";

test("78", () => {
    expect(
        detectItems<number[]>(
            subsets([1, 2, 3]),
            [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]
        )
    ).toBeTruthy()
    expect(
        detectItems<number[]>(
            subsets([0]),
            [[], [0]]
        )
    ).toBeTruthy()
})
