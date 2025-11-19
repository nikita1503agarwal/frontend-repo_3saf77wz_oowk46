export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10 items-start">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-semibold">About</h3>
            <p className="mt-4 text-black/70 leading-relaxed">
              Yashvi Vekariya is an AI Engineer specializing in LLM-powered agentic systems, multi-agent orchestration, RAG pipelines, and data analytics. She builds scalable, intelligent solutions using Python, LangChain, LangGraph, vector databases, and cloud integration. With strong foundations in ML, analytics, research automation, and product-focused AI systems, she designs AI that solves real business problems.
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-6">
              <div className="p-5 rounded-xl border border-black/10">
                <p className="text-sm text-black/50">Location</p>
                <p className="font-medium">India</p>
              </div>
              <div className="p-5 rounded-xl border border-black/10">
                <p className="text-sm text-black/50">Email</p>
                <a className="font-medium text-[#0047FF]" href="mailto:vyashvi304@gmail.com">vyashvi304@gmail.com</a>
              </div>
              <div className="p-5 rounded-xl border border-black/10">
                <p className="text-sm text-black/50">LinkedIn</p>
                <a className="font-medium text-[#0047FF]" href="https://linkedin.com/in/yashvi-vekariya" target="_blank" rel="noreferrer">in/yashvi-vekariya</a>
              </div>
              <div className="p-5 rounded-xl border border-black/10">
                <p className="text-sm text-black/50">GitHub</p>
                <a className="font-medium text-[#0047FF]" href="https://github.com/Yashvi-Vekariya" target="_blank" rel="noreferrer">github.com/Yashvi-Vekariya</a>
              </div>
              <div className="p-5 rounded-xl border border-black/10 sm:col-span-2">
                <p className="text-sm text-black/50">Portfolio</p>
                <a className="font-medium text-[#0047FF]" href="https://yashviivekariya.site" target="_blank" rel="noreferrer">yashviivekariya.site</a>
              </div>
            </div>
          </div>

          <div className="md:col-span-1">
            <div className="p-6 rounded-2xl border border-black/10 bg-black/[0.03]">
              <p className="text-sm text-black/50">Focus Areas</p>
              <ul className="mt-3 space-y-2 text-sm">
                <li>LLM Integration • Agentic Workflows</li>
                <li>Multi-Agent Systems • Tool Use</li>
                <li>RAG Pipelines • Vector DBs</li>
                <li>Analytics • Research Automation</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
