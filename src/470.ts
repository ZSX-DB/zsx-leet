type Rand7 = 1 | 2 | 3 | 4 | 5 | 6 | 7

type Rand10 = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10

const rand7 = (): Rand7 => {
    return Math.ceil(Math.random() * 7) as Rand7
}

const rand10 = (): Rand10 => {
    let r7 = 7
    while (r7 === 7) {
        r7 = rand7()
    }
    let num = rand7()
    while (num > 5) {
        num = rand7()
    }
    return (r7 <= 3 ? num + 5 : num) as Rand10
}

export default rand10
