import dayOfTheWeek from "../1185";

test("1185", () => {
    expect(dayOfTheWeek(31, 8, 2019)).toBe("Saturday")
    expect(dayOfTheWeek(18, 7, 1999)).toBe("Sunday")
    expect(dayOfTheWeek(15, 8, 1993)).toBe("Sunday")
})
