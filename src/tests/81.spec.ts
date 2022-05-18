import search from "../81";

test("81", () => {
    expect(search([2, 5, 6, 0, 0, 1, 2], 0)).toBeTruthy()
    expect(search([2, 5, 6, 0, 0, 1, 2], 3)).toBeFalsy()
})
