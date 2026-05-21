import Link from 'next/link'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b
 border-slate-200 bg-white/80 backdrop-blur dark:border-slate-700
 dark:bg-slate-900/80">
      <nav className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4
 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-slate-900
 dark:text-white">
          Sebas@
        </Link>
        <div className="flex gap-6">
          <Link href="#projects" className="text-slate-600
 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white">
            Projects
          </Link>
          <Link href="#skills" className="text-slate-600
 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white">
            Skills
          </Link>
          <Link href="#contact" className="text-slate-600
 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white">
            Contact
          </Link>
        </div>
      </nav>
    </header>
  )
}

