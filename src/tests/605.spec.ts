import canPlaceFlowers from '../605';

test("605", () => {
    expect(canPlaceFlowers([1, 0, 0, 0, 1], 1)).toBeTruthy()
    expect(canPlaceFlowers([1, 0, 0, 0, 1], 2)).toBeFalsy()
})
