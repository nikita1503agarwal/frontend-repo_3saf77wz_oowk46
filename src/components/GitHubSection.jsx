import { useEffect, useState } from 'react';

const pinned = [
  'multimodal-coding-agent',
  'multimodel-design-agent',
  'AgentForge-OS',
  'DreamForge-AI',
  'Autonomous-Product-Analyst-AI-Agent-Suite',
  'smart-research-assistant',
  'Price_Optimization',
  'AB-Testing',
  'Zerodha_TradeBot',
  'YouTube-Data-Harvesting',
  'Mutual-Fund-Predictive-Analytics',
  'Portfolio',
  'Air-Quality-Index',
];

function RepoCard({ repo }){
  return (
    <a href={repo.html_url} target="_blank" rel="noreferrer" className="block rounded-2xl border border-black/10 p-5 hover:shadow-xl transition bg-white/80">
      <div className="flex items-center justify-between">
        <h4 className="font-semibold">{repo.name}</h4>
        <span className="text-xs px-2 py-1 rounded-full bg-black/[0.04] border border-black/10">★ {repo.stargazers_count}</span>
      </div>
      <p className="mt-2 text-sm text-black/70 line-clamp-2">{repo.description || 'No description'}</p>
      <div className="mt-3 text-xs text-black/50">Updated: {new Date(repo.updated_at).toLocaleDateString()}</div>
    </a>
  );
}

export default function GitHubSection(){
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/Yashvi-Vekariya/repos?per_page=100&sort=updated')
      .then(r => r.json())
      .then(data => {
        const map = new Map(data.map(d => [d.name, d]));
        const ordered = pinned.map(name => map.get(name)).filter(Boolean);
        setRepos(ordered);
      })
      .catch(() => setRepos([]));
  }, []);

  return (
    <section id="github" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-2xl font-semibold mb-8">GitHub</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repos.map(r => <RepoCard key={r.id} repo={r} />)}
        </div>
      </div>
    </section>
  )
}
