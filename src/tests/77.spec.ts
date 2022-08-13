import combine from "../77";
import {detectItems} from "../utils/detect";

test("77", () => {
    expect(
        detectItems<number[]>(
            combine(4, 2),
            [
                [1, 2],
                [1, 3],
                [1, 4],
                [2, 3],
                [2, 4],
                [3, 4]
            ]
        )
    ).toBeTruthy()
    expect(combine(1, 1)).toEqual([[1]])
})
