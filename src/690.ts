// const getImportance = (employees: Employee[], id: number): number => {
//     const memo = new Map<number, Employee>()
//     for (const employee of employees) {
//         memo.set(employee.id, employee)
//     }
//     const target = memo.get(id) as Employee
//     const importance = {
//         value: target.importance
//     }
//     const dfs = (subordinates: number[]) => {
//         subordinates.forEach(subordinate => {
//             const employee = memo.get(subordinate) as Employee
//             importance.value += employee.importance
//             if (employee.subordinates.length) {
//                 dfs(employee.subordinates)
//             }
//         })
//     }
//     dfs(target.subordinates)
//     return importance.value
// }

const getImportance = (employees: Employee[], id: number): number => {
    const target = employees.find(employee => employee.id === id) as Employee
    return target.subordinates.reduce((importance, subordinate) => importance + getImportance(employees, subordinate), 0) + target.importance
}

export default getImportance
