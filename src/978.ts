// const maxTurbulenceSize = (arr: number[]): number => {
//     let up = 1
//     let down = 1
//     let maxSize = 1
//     for (let i = 0; i < arr.length - 1; i++) {
//         if (arr[i] > arr[i + 1]) {
//             up = down + 1
//             down = 1
//         } else if (arr[i] < arr[i + 1]) {
//             down = up + 1
//             up = 1
//         } else {
//             up = 1
//             down = 1
//         }
//         maxSize = Math.max(maxSize, up, down)
//     }
//     return maxSize
// }

const maxTurbulenceSize = (arr: number[]): number => {
    let sw: number[] = [arr[0]]
    let maxSize: number = 1
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > sw[sw.length - 1]) {
            if (sw.length === 1) {
                sw.push(arr[i])
            } else {
                if (sw[sw.length - 1] > sw[sw.length - 2]) {
                    sw = [arr[i - 1], arr[i]]
                } else {
                    sw.push(arr[i])
                }
            }
        } else if (arr[i] < sw[sw.length - 1]) {
            if (sw.length === 1) {
                sw.push(arr[i])
            } else {
                if (sw[sw.length - 1] < sw[sw.length - 2]) {
                    sw = [arr[i - 1], arr[i]]
                } else {
                    sw.push(arr[i])
                }
            }
        } else {
            sw = [arr[i]]
        }
        maxSize = Math.max(maxSize, sw.length)
    }
    return maxSize
}

export default maxTurbulenceSize
