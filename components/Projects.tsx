export default function Projects() {
  const projects = [
    {
      name: 'Job Board MVP',
      description: `A full-stack application displaying 75+
 junior- friendly job opportunities from Hacker News, updated daily.`,
      tech: ['React 19', 'Node.js', 'Redis', 'Vercel', 'Railway'],
      link: 'https://jobboard.yean.me',
      github: 'https://github.com/Kise07/jobBoardMvp',
      highlights: [
        'Full-stack development (React + Express)',
        'Redis caching (95% fewer API calls)',
        '<100ms API response times',
        'Automated daily job fetching with cron',
        'Custom domain with HTTPS/SSL',
      ]
    },
    {
      name: 'Link Bio',
      description: `A simple link aggregator to showcase all your
 important links in one place.`,
      tech: ['HTML', 'CSS', 'JavaScript', 'Vanta.js', 'Vercel'],
      link: 'https://linkbio.yean.me',
      github: 'https://github.com/Kise07/link-in-bio',
      highlights: [
        'Responsive design',
        'Easy to customize',
        'Fast deployment',
        'Animated backgrounds with Vanta.js',
      ]
    }
  ]

  return (
    <section id="projects" className="max-w-4xl mx-auto px-4 sm:px-6
 lg:px-8 py-20">
      <h2 className="text-3xl font-bold text-slate-900 dark:text-white
 mb-12">Projects</h2>
      <div className="space-y-8">
        {projects.map((project, idx) => (
          <div key={idx} className="border border-slate-200
 dark:border-slate-700 rounded-lg p-6 hover:shadow-lg transition
 dark:hover:shadow-slate-700/50">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-2xl font-bold text-slate-900
 dark:text-white">{project.name}</h3>
                <p className="text-slate-600 dark:text-slate-400
 mt-2">{project.description}</p>
              </div>
            </div>

            <ul className="space-y-2 mb-4">
              {project.highlights.map((highlight, i) => (
                <li key={i} className="text-slate-600
 dark:text-slate-400">• {highlight}</li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, i) => (
                <span key={i} className="px-3 py-1 bg-slate-100
 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full
 text-sm">
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              <a href={project.link} target="_blank"
                className="text-blue-600 dark:text-blue-400 hover:underline">
                Live Demo →
              </a>
              {project.github && (
                <a href={project.github} target="_blank"
                  className="text-blue-600 dark:text-blue-400 hover:underline">
                  GitHub →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
