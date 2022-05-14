import subsets from "../78";
import {detectNumsArray} from "../utils/detect";

test("78", () => {
    expect(
        detectNumsArray(
            subsets([1, 2, 3]),
            [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]
        )
    ).toBeTruthy()
    expect(
        detectNumsArray(
            subsets([0]),
            [[], [0]]
        )
    ).toBeTruthy()
})
