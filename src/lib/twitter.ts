import { unstable_cache } from 'next/cache'

export interface Tweet {
  id: string
  text: string
  created_at: string
  public_metrics: {
    retweet_count: number
    reply_count: number
    like_count: number
    quote_count: number
  }
  author_id: string
}

export interface TwitterUser {
  id: string
  name: string
  username: string
}

async function fetchTweets(): Promise<{
  tweets: Tweet[]
  user: TwitterUser
} | null> {
  const token = process.env.X_API_TOKEN

  if (!token) {
    console.error('X_API_TOKEN not found in environment variables')
    return null
  }

  try {
    const user: TwitterUser = {
      id: '93406680',
      name: 'zenkilies',
      username: 'zenkilies',
    }

    const tweetsResponse = await fetch(
      `https://api.twitter.com/2/users/${user.id}/tweets?max_results=10&tweet.fields=created_at,public_metrics`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    )

    if (!tweetsResponse.ok) {
      console.error('Failed to fetch tweets:', tweetsResponse.status)
      return null
    }

    const tweetsData = await tweetsResponse.json()

    return {
      tweets: tweetsData.data || [],
      user,
    }
  } catch (error) {
    console.error('Error fetching tweets:', error)
    return null
  }
}

export const getTweets = unstable_cache(fetchTweets, ['tweets'], {
  revalidate: 60 * 60,
})
