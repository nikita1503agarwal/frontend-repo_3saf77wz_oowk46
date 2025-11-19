import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative overflow-hidden" id="top">
      <div className="relative min-h-[86vh] w-full bg-white">
        {/* Background grid + gradient aura for depth */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,71,255,0.12),transparent_55%),radial-gradient(circle_at_70%_60%,rgba(0,0,0,0.06),transparent_50%)]" />
          <div className="absolute inset-0 opacity-[0.06]" style={{
            backgroundImage:
              "linear-gradient(to right, rgba(0,0,0,0.6) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.6) 1px, transparent 1px)",
            backgroundSize: '36px 36px',
          }} />
        </div>

        {/* Spline scene */}
        <div className="absolute inset-0 -z-10">
          <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex flex-col md:flex-row items-center justify-center gap-10 py-20">
          <div className="max-w-2xl text-center md:text-left">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-black/10 bg-white/80 text-xs tracking-wide">
              <span className="inline-block w-2 h-2 rounded-full bg-[#0047FF]" />
              Available for internships & freelance
            </span>
            <h2 className="mt-5 text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.05]">
              Building agentic AI systems that ship
            </h2>
            <p className="mt-5 text-lg md:text-xl text-black/70">
              I design and develop multi-agent workflows, RAG pipelines, and data-driven AI products that turn ideas into outcomes.
            </p>
            <div className="mt-8 flex items-center gap-4 justify-center md:justify-start">
              <a href="#projects" className="px-5 py-3 rounded-full bg-[#0047FF] text-white font-medium hover:opacity-90 transition">View Projects</a>
              <a href="/Yashvi_Vekariya_Resume.pdf" className="px-5 py-3 rounded-full border border-black/10 hover:border-black/20 font-medium">Download Resume</a>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-4 text-sm text-black/60">
              <div className="p-4 rounded-xl border border-black/10 bg-white/70">
                <p className="text-black font-semibold">LLM Agents</p>
                <p>LangGraph · Tools</p>
              </div>
              <div className="p-4 rounded-xl border border-black/10 bg-white/70">
                <p className="text-black font-semibold">RAG</p>
                <p>Embeddings · VDB</p>
              </div>
              <div className="p-4 rounded-xl border border-black/10 bg-white/70">
                <p className="text-black font-semibold">Analytics</p>
                <p>BI · A/B · SQL</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="w-44 h-44 md:w-60 md:h-60 rounded-2xl bg-gradient-to-br from-[#0047FF] to-black/80 shadow-2xl ring-8 ring-white/50 overflow-hidden">
              <div className="w-full h-full grid place-items-center text-white/80 text-sm">
                Photo / Avatar
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-16 h-16 rounded-xl bg-white/70 backdrop-blur border border-black/10 grid place-items-center text-xs">2+ yrs</div>
          </div>
        </div>

        {/* bottom accent curve */}
        <svg className="block w-full" viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path fill="#ffffff" d="M0,64L60,72C120,80,240,96,360,106.7C480,117,600,123,720,112C840,101,960,75,1080,69.3C1200,64,1320,80,1380,88L1440,96L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z" />
        </svg>
      </div>
    </section>
  );
}
