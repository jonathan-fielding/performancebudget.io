import { Fragment } from 'react'

const navigation = [
  { name: 'Performance Budget Calculator', href: '/' },
  { name: 'Performance Resources', href: '/resources' },
]

export default function Footer({
}) {
  return (
    <div className="mx-auto max-w-7xl p-8 text-center">
      <p>&copy; Copyright Jonathan Fielding <a href="https://www.twitter.com/jonthanfielding">@jonthanfielding</a></p>
    </div>
  )
}
