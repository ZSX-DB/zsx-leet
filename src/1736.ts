const maximumTime = (time: string): string => {
    let hour = ''
    let minute = ''
    if (time[0] === '?' && time[1] === '?') {
        hour = '23'
    } else if (time[0] === '?' && time[1] !== '?') {
        hour = (Number(time[1]) <= 3 ? '2' : '1') + time[1]
    } else if (time[0] !== '?' && time[1] === '?') {
        hour = time[0] + (Number(time[0]) <= 1 ? '9' : '3')
    } else {
        hour = time[0] + time[1]
    }
    if (time[3] === '?' && time[4] === '?') {
        minute = '59'
    } else if (time[3] === '?' && time[4] !== '?') {
        minute = '5' + time[4]
    } else if (time[3] !== '?' && time[4] === '?') {
        minute = time[3] + '9'
    } else {
        minute = time[3] + time[4]
    }
    return `${hour}:${minute}`
}

export default maximumTime
