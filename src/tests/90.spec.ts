import subsetsWithDup from "../90";
import {detectArrayList} from "../utils/detect";

test("90", () => {
    expect(
        detectArrayList<number>(
            subsetsWithDup([1, 2, 2]), [[], [1], [1, 2], [1, 2, 2], [2], [2, 2]]
        )
    ).toBeTruthy()
    expect(
        detectArrayList<number>(
            subsetsWithDup([0]), [[], [0]]
        )
    ).toBeTruthy()
})
