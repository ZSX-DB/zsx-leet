const corpFlightBookings = (bookings: [number, number, number][], n: number): number[] => {
    const record = Array(n).fill(0)
    for (const [start, end, bookingNum] of bookings) {
        record[start - 1] += bookingNum
        if (end < n) {
            record[end] -= bookingNum
        }
    }
    for (let i = 1; i < n; i++) {
        record[i] += record[i - 1]
    }
    return record
}

export default corpFlightBookings
