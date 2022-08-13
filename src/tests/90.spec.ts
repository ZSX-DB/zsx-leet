import subsetsWithDup from "../90";
import {detectItems} from "../utils/detect";

test("90", () => {
    expect(
        detectItems<number[]>(
            subsetsWithDup([1, 2, 2]), [[], [1], [1, 2], [1, 2, 2], [2], [2, 2]]
        )
    ).toBeTruthy()
    expect(
        detectItems<number[]>(
            subsetsWithDup([0]), [[], [0]]
        )
    ).toBeTruthy()
})
