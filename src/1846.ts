const maximumElementAfterDecrementingAndRearranging = (arr: number[]): number => {
    arr.sort((x, y) => x - y)
    arr[0] = 1
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] - arr[i - 1] > 1) {
            arr[i] = arr[i - 1] + 1
        }
    }
    return arr[arr.length - 1]
}

export default maximumElementAfterDecrementingAndRearranging
