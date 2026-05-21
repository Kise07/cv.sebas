import Link from 'next/link'

export default function Hero() {
  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20
 sm:py-32">
      <div className="space-y-6">
        <h1 className="text-5xl sm:text-7xl font-bold text-slate-900
 dark:text-white">
          Hi, I&apos;m Shabaz Ansari
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400
 max-w-2xl">
          A self-taught full-stack developer passionate about building
          production-ready applications.
          I specialize in React, Node.js, and modern deployment
          practices.
        </p>
        <div className="flex gap-4 pt-4">
          <Link
            href="https://jobboard.yean.me"
            target="_blank"
            className="px-6 py-3 bg-slate-900 text-white rounded-lg
 hover:bg-slate-800 dark:bg-white dark:text-slate-900
 dark:hover:bg-slate-100 transition"
          >
            Latest Projects
          </Link>
          <Link
            href="https://github.com/Kise07"
            target="_blank"
            className="px-6 py-3 border border-slate-900
 text-slate-900 rounded-lg hover:bg-slate-50 dark:border-white
 dark:text-white dark:hover:bg-slate-800 transition"
          >
            GitHub
          </Link>
        </div>
      </div>
    </section>
  )
}
