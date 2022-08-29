// class RecentCounter {
//     private readonly times: number[] = []

//     ping(t: number): number {
//         this.times.push(t)
//         while (this.times.length) {
//             if (this.times[0] >= (t - 3000)) {
//                 break
//             }
//             this.times.shift()
//         }
//         return this.times.length
//     }
// }

class RecentCounter {
    private readonly times: number[] = []

    ping(t: number): number {
        this.times.push(t)
        let left = 0
        let right = this.times.length
        while (left < right) {
            const mid = Math.floor((left + right) / 2)
            if (this.times[mid] < (t - 3000)) {
                left = mid + 1
            } else {
                right = mid
            }
        }
        return this.times.length - left
    }
}

export default RecentCounter    
