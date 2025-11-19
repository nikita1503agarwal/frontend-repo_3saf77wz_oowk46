export default function Experience(){
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-2xl font-semibold mb-8">Experience</h3>
        <div className="space-y-6">
          <div className="rounded-2xl border border-black/10 p-6 bg-white/80">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
              <h4 className="font-semibold">Data Analyst Intern – Codexial Technologies</h4>
              <p className="text-sm text-black/60">Apr–Jul 2025</p>
            </div>
            <ul className="mt-3 text-sm text-black/70 space-y-1 list-disc pl-5">
              <li>Designed A/B tests → +22% engagement</li>
              <li>Automated dashboards → −40% reporting time</li>
              <li>Built data-driven product insights</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-black/10 p-6 bg-white/80">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
              <h4 className="font-semibold">Accenture Data Analytics Virtual Internship</h4>
            </div>
            <ul className="mt-3 text-sm text-black/70 space-y-1 list-disc pl-5">
              <li>Modeled datasets for content strategy</li>
              <li>Used Python + SQL for social engagement insights</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
