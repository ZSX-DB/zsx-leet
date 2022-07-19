import TreeMap from "./data_structure/TreeMap";

class MyCalendarThree {
    private readonly record: TreeMap<number> = new TreeMap<number>()
    private k: number = -Infinity

    book(start: number, end: number): number {
        this.record.set(start, (this.record.get(start) ?? 0) + 1)
        this.record.set(end, (this.record.get(end) ?? 0) - 1)
        let usedNum: number = 0
        this.record.forEach((value) => {
            usedNum += value
            this.k = Math.max(this.k, usedNum)
        })
        return this.k
    }
}

// class MyCalendarThree {
//     private readonly record: Map<number, number> = new Map<number, number>()
//     private readonly keys: number[] = []
//     private k: number = -Infinity
//
//     private insert(key: number): void {
//         if (this.keys.includes(key)) {
//             return
//         }
//         const index = this.keys.findIndex(k => k > key)
//         if (index === -1) {
//             this.keys.push(key)
//         } else {
//             this.keys.splice(index, 0, key)
//         }
//     }
//
//     book(start: number, end: number): number {
//         this.record.set(start, (this.record.get(start) ?? 0) + 1)
//         this.record.set(end, (this.record.get(end) ?? 0) - 1)
//         this.insert(start)
//         this.insert(end)
//         let usedNum: number = 0
//         for (const key of this.keys) {
//             usedNum += (this.record.get(key) ?? 0)
//             this.k = Math.max(this.k, usedNum)
//         }
//         return this.k
//     }
// }

export default MyCalendarThree
