import { useState } from 'react';

export default function Contact(){
  const [status, setStatus] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      const backend = import.meta.env.VITE_BACKEND_URL || '';
      const res = await fetch(`${backend}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: e.target.name.value,
          email: e.target.email.value,
          message: e.target.message.value,
        })
      });
      const data = await res.json();
      setStatus(data.ok ? 'Message sent!' : 'Failed to send.');
      if(data.ok) e.target.reset();
    } catch {
      setStatus('Failed to send.');
    }
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-2xl font-semibold mb-8">Contact</h3>
        <form onSubmit={onSubmit} className="grid md:grid-cols-2 gap-6">
          <input name="name" required placeholder="Your name" className="px-4 py-3 rounded-xl border border-black/10" />
          <input name="email" required type="email" placeholder="Your email" className="px-4 py-3 rounded-xl border border-black/10" />
          <textarea name="message" required placeholder="Your message" rows="5" className="md:col-span-2 px-4 py-3 rounded-xl border border-black/10" />
          <div className="md:col-span-2 flex items-center gap-4">
            <button className="px-5 py-3 rounded-full bg-[#0047FF] text-white font-medium hover:opacity-90 transition" type="submit">Send Message</button>
            <span className="text-sm text-black/60">{status}</span>
          </div>
        </form>
      </div>
    </section>
  )
}
