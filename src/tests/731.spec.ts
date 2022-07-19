import MyCalendarTwo from "../731";

test("731", () => {
    const myCalendarTwo = new MyCalendarTwo()
    expect(myCalendarTwo.book(10, 20)).toBeTruthy()
    expect(myCalendarTwo.book(50, 60)).toBeTruthy()
    expect(myCalendarTwo.book(10, 40)).toBeTruthy()
    expect(myCalendarTwo.book(5, 15)).toBeFalsy()
    expect(myCalendarTwo.book(5, 10)).toBeTruthy()
    expect(myCalendarTwo.book(25, 55)).toBeTruthy()
})
