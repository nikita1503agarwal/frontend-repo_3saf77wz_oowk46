import { Menu, Github, Linkedin, Mail } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-white/60 border-b border-black/5">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-full bg-[#0047FF] text-white grid place-items-center font-bold">YV</div>
          <div className="leading-tight">
            <p className="text-sm text-black/60">Portfolio</p>
            <h1 className="text-base font-semibold">Yashvi Vekariya</h1>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#about" className="hover:text-[#0047FF] transition-colors">About</a>
          <a href="#skills" className="hover:text-[#0047FF] transition-colors">Skills</a>
          <a href="#projects" className="hover:text-[#0047FF] transition-colors">Projects</a>
          <a href="#github" className="hover:text-[#0047FF] transition-colors">GitHub</a>
          <a href="#experience" className="hover:text-[#0047FF] transition-colors">Experience</a>
          <a href="#education" className="hover:text-[#0047FF] transition-colors">Education</a>
          <a href="#contact" className="hover:text-[#0047FF] transition-colors">Contact</a>
        </nav>

        <div className="flex items-center gap-3">
          <a href="https://github.com/Yashvi-Vekariya" target="_blank" rel="noreferrer" className="p-2 rounded-full hover:bg-black/5">
            <Github size={20} />
          </a>
          <a href="https://linkedin.com/in/yashvi-vekariya" target="_blank" rel="noreferrer" className="p-2 rounded-full hover:bg-black/5">
            <Linkedin size={20} />
          </a>
          <a href="mailto:vyashvi304@gmail.com" className="p-2 rounded-full hover:bg-black/5">
            <Mail size={20} />
          </a>
          <button className="md:hidden p-2 rounded-full hover:bg-black/5" aria-label="menu">
            <Menu size={22} />
          </button>
        </div>
      </div>
    </header>
  );
}
