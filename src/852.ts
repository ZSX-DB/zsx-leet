// const peakIndexInMountainArray = (arr: number[]): number => {
//     let left = 1
//     let right = arr.length - 2
//     while (left <= right) {
//         const mid = Math.floor((left + right) / 2)
//         if (arr[mid] > arr[mid - 1] && arr[mid] > arr[mid + 1]) {
//             return mid
//         }
//         if (arr[mid] > arr[mid - 1]) {
//             left = mid + 1
//         } else {
//             right = mid - 1
//         }
//     }
//     return -1
// }

const peakIndexInMountainArray = (arr: number[]): number => arr.indexOf(Math.max(...arr))

export default peakIndexInMountainArray
