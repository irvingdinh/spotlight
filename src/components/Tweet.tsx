import Link from 'next/link'

import { Card } from '@/components/Card'
import { type Tweet, type TwitterUser } from '@/lib/twitter'

function formatTweetText(text: string) {
  let formatted = text.replace(
    /(https?:\/\/[^\s]+)/g,
    '<a href="$1" target="_blank" rel="noopener noreferrer" class="text-teal-500 hover:text-teal-600">$1</a>',
  )

  formatted = formatted.replace(
    /@(\w+)/g,
    '<a href="https://x.com/$1" target="_blank" rel="noopener noreferrer" class="text-teal-500 hover:text-teal-600">@$1</a>',
  )

  formatted = formatted.replace(
    /#(\w+)/g,
    '<a href="https://x.com/hashtag/$1" target="_blank" rel="noopener noreferrer" class="text-teal-500 hover:text-teal-600">#$1</a>',
  )

  return formatted
}

function formatTweetDate(dateString: string): string {
  const date = new Date(dateString)
  const now = new Date()
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000)

  if (diffInSeconds < 60) return 'just now'
  if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m`
  if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}h`
  if (diffInSeconds < 604800) return `${Math.floor(diffInSeconds / 86400)}d`

  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: date.getFullYear() !== now.getFullYear() ? 'numeric' : undefined,
  })
}

export function TweetComponent({
  tweet,
  user,
}: {
  tweet: Tweet
  user: TwitterUser
}) {
  const tweetUrl = `https://x.com/${user.username}/status/${tweet.id}`

  return (
    <Card as="article">
      <Card.Title href={tweetUrl}>
        <span
          dangerouslySetInnerHTML={{ __html: formatTweetText(tweet.text) }}
          className="tweet-content font-normal"
        />
      </Card.Title>

      <Card.Description>
        <time>{formatTweetDate(tweet.created_at)}</time>
      </Card.Description>
    </Card>
  )
}
