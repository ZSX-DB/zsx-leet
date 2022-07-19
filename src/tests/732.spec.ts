import MyCalendarThree from "../732";

test("732", () => {
    const myCalendarThree = new MyCalendarThree()
    expect(myCalendarThree.book(10, 20)).toBe(1)
    expect(myCalendarThree.book(50, 60)).toBe(1)
    expect(myCalendarThree.book(10, 40)).toBe(2)
    expect(myCalendarThree.book(5, 15)).toBe(3)
    expect(myCalendarThree.book(5, 10)).toBe(3)
    expect(myCalendarThree.book(25, 55)).toBe(3)
})
