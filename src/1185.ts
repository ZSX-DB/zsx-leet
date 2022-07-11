const weeks = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"] as const

type Week = typeof weeks[number]

const dayOfTheWeek = (day: number, month: number, year: number): Week => weeks[new Date(year, month - 1, day).getDay()]

export default dayOfTheWeek
