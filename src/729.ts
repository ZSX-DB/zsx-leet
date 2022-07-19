// class MyCalendar {
//     private readonly used: Set<number> = new Set<number>()
//
//     book(start: number, end: number): boolean {
//         for (let i = start; i < end; i++) {
//             if (this.used.has(i)) {
//                 return false
//             }
//         }
//         for (let i = start; i < end; i++) {
//             this.used.add(i)
//         }
//         return true
//     }
// }

class MyCalendar {
    private readonly used: [number, number][] = []

    book(start: number, end: number): boolean {
        end--
        let left = 0
        let right = this.used.length
        while (left < right) {
            const mid = Math.floor((left + right) / 2)
            const [s, e] = this.used[mid]
            if (start > e) {
                left = mid + 1
            } else if (end < s) {
                right = mid
            } else {
                return false
            }
        }
        this.used.splice(left, 0, [start, end])
        return true
    }
}

export default MyCalendar
