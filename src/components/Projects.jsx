const projects = [
  {
    title: 'AxonVash – Personal AI with Long-Term Memory (Private)',
    desc: 'A multi-agent personal AI system using vector embeddings, Gmail/Notion/Calendar integration, long-term memory, and autonomous workflows.',
  },
  {
    title: 'Notion Multi-Agent MCP',
    desc: 'Framework for automating Notion workflows using MCP, LangGraph, and a supervisor-agent architecture.'
  },
  {
    title: 'Autonomous Product Analyst – AI Agent Suite',
    desc: 'A fully autonomous product analyst that performs research, data cleaning, visualization, insight extraction, and report generation.'
  },
  {
    title: 'Smart Research Assistant',
    desc: 'AI-powered research automation tool that generates structured research reports 70% faster.'
  },
  {
    title: 'NeuroGenesis',
    desc: 'Self-evolving AI agent that uses meta-learning to improve its own intelligence.'
  },
  {
    title: 'Code Explainer & Optimizer',
    desc: 'Agent that explains code, finds bugs, and optimizes performance.'
  },
  {
    title: 'ConstructIQ',
    desc: 'AI platform for construction cost estimation and interior design suggestions using ML + CV.'
  },
  {
    title: 'FundNavigator',
    desc: 'ML-based mutual-fund recommendation system using investment profile + clustering models.'
  },
];

function ProjectCard({ title, desc }){
  return (
    <div className="rounded-2xl border border-black/10 p-6 hover:shadow-xl transition bg-white/80">
      <h4 className="font-semibold">{title}</h4>
      <p className="mt-2 text-sm text-black/70">{desc}</p>
    </div>
  )
}

export default function Projects(){
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-8">
          <h3 className="text-2xl font-semibold">Featured Projects</h3>
          <a href="https://github.com/Yashvi-Vekariya" target="_blank" rel="noreferrer" className="text-sm text-[#0047FF]">View all</a>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(p => <ProjectCard key={p.title} {...p} />)}
        </div>
      </div>
    </section>
  )
}
