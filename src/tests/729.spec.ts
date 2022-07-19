import MyCalendar from "../729";

test("729", () => {
    const myCalendar = new MyCalendar()
    expect(myCalendar.book(10, 20)).toBeTruthy()
    expect(myCalendar.book(15, 25)).toBeFalsy()
    expect(myCalendar.book(20, 30)).toBeTruthy()
})
