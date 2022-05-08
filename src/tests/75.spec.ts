import sortColors, {Color} from "../75";

test("75", () => {
    const colors1: Color[] = [2, 0, 2, 1, 1, 0]
    const colors2: Color[] = [2, 0, 1]
    sortColors(colors1)
    sortColors(colors2)
    expect(colors1).toEqual([0, 0, 1, 1, 2, 2])
    expect(colors2).toEqual([0, 1, 2])
})
