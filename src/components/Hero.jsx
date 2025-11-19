import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative overflow-hidden" id="top">
      <div className="relative h-[78vh] min-h-[520px] w-full bg-white">
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex flex-col md:flex-row items-center justify-center gap-10">
          <div className="max-w-2xl text-center md:text-left">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-black">
              AI Engineer & Machine Learning Developer
            </h2>
            <p className="mt-5 text-lg md:text-xl text-black/70">
              I build intelligent agentic systems, automate workflows, and turn data into decisions.
            </p>
            <div className="mt-8 flex items-center gap-4 justify-center md:justify-start">
              <a href="#projects" className="px-5 py-3 rounded-full bg-[#0047FF] text-white font-medium hover:opacity-90 transition">View Projects</a>
              <a href="/Yashvi_Vekariya_Resume.pdf" className="px-5 py-3 rounded-full border border-black/10 hover:border-black/20 font-medium">Download Resume</a>
            </div>
          </div>

          <div className="w-40 h-40 md:w-56 md:h-56 rounded-full bg-gradient-to-br from-[#0047FF] to-black/80 shadow-2xl ring-8 ring-white/60 overflow-hidden">
            <div className="w-full h-full grid place-items-center text-white/80 text-sm">
              Photo / Avatar
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,71,255,0.08),transparent_60%)]" />
      </div>
    </section>
  );
}
