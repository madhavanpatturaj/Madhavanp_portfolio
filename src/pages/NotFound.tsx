import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="mx-auto max-w-2xl px-5 py-32 text-center">
      <p className="chip text-accent">404</p>
      <h1 className="mt-4 font-display text-4xl">That page doesn&rsquo;t exist</h1>
      <Link to="/" className="mt-8 inline-block rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper">
        Back home
      </Link>
    </div>
  )
}
