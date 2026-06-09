export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 py-24 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          For SRE &amp; DevOps Teams
        </span>
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
          Turn Postmortems Into<br />
          <span className="text-[#58a6ff]">Actionable Decision Trees</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-2xl mx-auto mb-10">
          Upload your incident postmortems and instantly generate interactive flowchart decision trees your team can follow the next time a similar incident strikes.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold text-lg px-10 py-4 rounded-lg transition-colors duration-200"
        >
          Get Started — $49/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">Cancel anytime. No lock-in.</p>

        {/* Feature highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 text-left">
          {[
            { icon: "📄", title: "Upload Postmortems", desc: "Paste or upload any postmortem document in plain text or markdown." },
            { icon: "🤖", title: "AI Extraction", desc: "AI identifies key decision points, triggers, and resolution paths automatically." },
            { icon: "🌳", title: "Interactive Trees", desc: "Browse and share flowchart decision trees your team can follow in real time." }
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="text-3xl mb-3">{f.icon}</div>
              <h3 className="text-white font-semibold text-lg mb-2">{f.title}</h3>
              <p className="text-[#8b949e] text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold text-white mb-10">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8">
          <p className="text-[#58a6ff] font-semibold uppercase tracking-widest text-sm mb-2">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$49<span className="text-xl font-normal text-[#8b949e]">/mo</span></p>
          <p className="text-[#8b949e] text-sm mb-8">Everything you need for your team</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited postmortem uploads",
              "AI-powered decision tree generation",
              "Interactive flowchart viewer",
              "Export to PNG, PDF, or JSON",
              "Team sharing & collaboration",
              "Priority email support"
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-[#c9d1d9] text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>{item}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors duration-200"
          >
            Start Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-white text-center mb-10">FAQ</h2>
        <div className="space-y-6">
          {[
            {
              q: "What format do postmortems need to be in?",
              a: "Any plain text or markdown format works. The AI handles unstructured documents and extracts decision points regardless of your team's postmortem template."
            },
            {
              q: "Can I share decision trees with my whole team?",
              a: "Yes. Every generated tree gets a shareable link. Team members can view and navigate the interactive flowchart without needing an account."
            },
            {
              q: "Is my incident data kept private?",
              a: "Absolutely. Your postmortem data is encrypted at rest and never used to train AI models. You can delete your data at any time."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">{item.q}</h3>
              <p className="text-[#8b949e] text-sm">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center py-10 text-[#8b949e] text-sm border-t border-[#21262d]">
        © {new Date().getFullYear()} Incident Response Decision Tree Generator. All rights reserved.
      </footer>
    </main>
  )
}
