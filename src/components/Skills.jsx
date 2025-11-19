const SkillGroup = ({ title, items }) => (
  <div className="p-6 rounded-2xl border border-black/10">
    <h4 className="font-semibold mb-3">{title}</h4>
    <div className="flex flex-wrap gap-2">
      {items.map((i) => (
        <span key={i} className="px-3 py-1.5 rounded-full bg-black/[0.04] border border-black/10 text-sm">{i}</span>
      ))}
    </div>
  </div>
);

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-2xl font-semibold mb-8">Skills</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <SkillGroup title="AI & ML" items={[
            'LLM Integration','Multi-Agent Systems','Tool-Augmented Agents','RAG Pipelines','Scikit-Learn','TensorFlow','Embeddings','Vector DBs','Agentic Workflows','Hyperparameter Tuning'
          ]} />
          <SkillGroup title="Programming" items={[
            'Python (Advanced)','SQL (Advanced)','R','Java'
          ]} />
          <SkillGroup title="Frameworks" items={[
            'LangChain','LangGraph','HuggingFace','Streamlit'
          ]} />
          <SkillGroup title="Data & Analytics" items={[
            'Power BI','Tableau','Excel','A/B Testing','Predictive Analytics'
          ]} />
          <SkillGroup title="Engineering" items={[
            'ETL Pipelines','Google BigQuery','MongoDB','MySQL','APIs (OpenAI, AWS, Notion, Gmail)'
          ]} />
        </div>
      </div>
    </section>
  );
}
