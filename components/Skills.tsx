
export default function Skills() {
  const skills = {
    'Frontend': ['React 19', 'Vite', 'Tailwind CSS', 'TypeScript',
      'JavaScript'],
    'Backend': ['Node.js', 'Express.js', 'REST APIs', 'Redis', 'Cron Jobs'],
    'Deployment': ['Vercel', 'Railway', 'Custom Domains', 'HTTPS/SSL',
      'Environment Variables'],
    'Tools': ['Git/GitHub', 'npm', 'Responsive Design', 'Problem Solving']
  }

  return (
    <section id="skills" className="max-w-4xl mx-auto px-4 sm:px-6
 lg:px-8 py-20 bg-slate-50 dark:bg-slate-800">
      <h2 className="text-3xl font-bold text-slate-900 dark:text-white
 mb-12">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {Object.entries(skills).map(([category, items], idx) => (
          <div key={idx}>
            <h3 className="text-xl font-semibold text-slate-900
 dark:text-white mb-4">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {items.map((skill, i) => (
                <span key={i} className="px-4 py-2 bg-white
 dark:bg-slate-700 rounded-lg text-slate-700 dark:text-slate-300">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
