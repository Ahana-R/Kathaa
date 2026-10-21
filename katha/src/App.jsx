import { Link, Route, Routes, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { epics, stories } from './data/stories'

function Home() {
  return (
    <div className="mx-auto max-w-3xl px-5 pb-16">
      <header className="pt-7 text-xl font-semibold">Katha</header>

      <motion.h1
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mt-14 mb-4 text-4xl font-semibold leading-tight sm:text-5xl"
      >
        The Ramayana and the Mahabharata, one story at a time.
      </motion.h1>
      <p className="max-w-prose text-slate-600">
        Short retellings of the great Indian epics, with quizzes and games to test what you remember.
      </p>

      <div className="mt-14 grid gap-10 sm:grid-cols-2">
        {epics.map((epic) => (
          <section key={epic.id}>
            <h2 className="text-2xl font-semibold">{epic.name}</h2>
            <p className="mb-4 text-sm text-slate-500">{epic.blurb}</p>
            <ul className="divide-y divide-slate-200 border-y border-slate-200">
              {stories
                .filter((s) => s.epic === epic.id)
                .map((s) => (
                  <li key={s.id}>
                    <Link to={`/story/${s.id}`} className="block py-3 hover:text-indigo-700">
                      <span className="font-medium">{s.title}</span>
                      <span className="block text-sm text-slate-500">{s.summary}</span>
                    </Link>
                  </li>
                ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  )
}
function Story() {
  const { id } = useParams()
  const story = stories.find((s) => s.id === id)

  if (!story) {
    return (
      <div className="mx-auto max-w-3xl px-5 pt-14">
        <p>Story not found.</p>
        <Link to="/" className="underline">Back to all stories</Link>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-3xl px-5 pb-16">
      <header className="pt-7 text-xl font-semibold">
        <Link to="/">Katha</Link>
      </header>

      <motion.article
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mt-14"
      >
        <h1 className="mb-6 text-4xl font-semibold">{story.title}</h1>
        {story.text.map((paragraph, i) => (
          <p key={i} className="mb-4 max-w-prose text-lg leading-8">
            {paragraph}
          </p>
        ))}
        <Link to="/" className="mt-6 inline-block underline">
          Back to all stories
        </Link>
      </motion.article>
    </div>
  )
}
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/story/:id" element={<Story />} />
    </Routes>
  )
}