class Twitter {
    private tweet: Map<number, { tweetId: number, timeId: number }[]>
    private timeId: number
    private followerMap: Map<number, number[]>

    constructor() {
        this.tweet = new Map()
        this.followerMap = new Map()
        this.timeId = 1
    }

    postTweet(userId: number, tweetId: number): void {
        this.timeId++
        const tweetItem = {
            tweetId,
            timeId: this.timeId
        }
        if (this.tweet.has(userId)) {
            this.tweet.set(userId, [...this.tweet.get(userId), tweetItem])
        } else {
            this.tweet.set(userId, [tweetItem])
        }
    }

    getNewsFeed(userId: number): number[] {
        const collect = [...(this.tweet.get(userId) || [])]
        const follower = this.followerMap.get(userId) || []
        for (const followee of follower) {
            collect.push(...(this.tweet.get(followee) || []))
        }
        return collect
            .sort((x, y) => y.timeId - x.timeId)
            .slice(0, 10)
            .map(item => item.tweetId)
    }

    follow(followerId: number, followeeId: number): void {
        if (this.followerMap.has(followerId)) {
            if (this.followerMap.get(followerId).includes(followeeId) === false) {
                this.followerMap.set(followerId, [...this.followerMap.get(followerId), followeeId])
            }
        } else {
            this.followerMap.set(followerId, [followeeId])
        }
    }

    unfollow(followerId: number, followeeId: number): void {
        this.followerMap.set(followerId, (this.followerMap.get(followerId) || []).filter(item => item !== followeeId))
    }
}

export default Twitter
