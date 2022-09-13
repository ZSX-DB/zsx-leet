const numJewelsInStones = (jewels: string, stones: string): number => stones.split('').reduce((total, stone) => total + (jewels.includes(stone) ? 1 : 0), 0)

export default numJewelsInStones
