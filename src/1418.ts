const displayTable = (orders: [string, string, string][]): string[][] => {
    const tables: string[] = []
    const menu: string[] = []
    const record = new Map<string, number[]>()
    const memo = new Map<string, number>()
    const tableInfo: string[][] = []
    orders.forEach(([_, tableNumber, foodItem]) => {
        if (tables.includes(tableNumber) === false) {
            tables.push(tableNumber)
        }
        if (menu.includes(foodItem) === false) {
            menu.push(foodItem)
        }
    })
    tables.map(Number).sort((x, y) => x - y).forEach(table => {
        record.set(String(table), Array(menu.length).fill(0))
    })
    menu.sort().forEach((foodItem, index) => {
        memo.set(foodItem, index)
    })
    orders.forEach(([_, tableNumber, foodItem]) => {
        const nums = record.get(tableNumber) as number[]
        nums[memo.get(foodItem)]++
    })
    record.forEach((value, key) => {
        tableInfo.push([key].concat(value.map(String)))
    })
    return [["Table"].concat(menu)].concat(tableInfo)
}

export default displayTable
