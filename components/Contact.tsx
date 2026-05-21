import Link from 'next/link'

export default function Contact() {
  return (
    <section id="contact" className="max-w-4xl mx-auto px-4 sm:px-6
 lg:px-8 py-20">
      <h2 className="text-3xl font-bold text-slate-900 dark:text-white
 mb-12">Get in Touch</h2>
      <div className="space-y-6">
        <p className="text-xl text-slate-600 dark:text-slate-400">
          I&apos;m always interested in hearing about new opportunities and
          projects. Feel free to reach out!
        </p>
        <div className="flex flex-col gap-4">
          <Link
            href="mailto:kaiazmi1412@gmail.com"
            className="text-blue-600 dark:text-blue-400
 hover:underline text-lg"
          >
            ✉️ Email: kise@email.com
          </Link>
          <Link
            href="https://linkedin.com/in/kise07"
            target="_blank"
            className="text-blue-600 dark:text-blue-400
 hover:underline text-lg"
          >
            💼 LinkedIn
          </Link>
          <Link
            href="https://github.com/Kise07"
            target="_blank"
            className="text-blue-600 dark:text-blue-400
 hover:underline text-lg"
          >
            🔗 GitHub
          </Link>
          <Link
            href="https://x.com/sebas_azmi07"
            target="_blank"
            className="text-blue-600 dark:text-blue-400
 hover:underline text-lg"
          >
            𝕏 Twitter
          </Link>
        </div>
      </div>
    </section>
  )
}
