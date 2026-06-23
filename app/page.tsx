import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="bg-animated"></div>
      <div className="bg-grid"></div>

      <main className="relative min-h-screen flex flex-col items-center justify-start py-12 px-6 sm:px-12 max-w-2xl mx-auto w-full z-10 text-white pb-24">
        
        {/* HERO / PROFILE AREA */}
        <section className="flex flex-col items-center text-center w-full mb-12">
          <div className="relative w-32 h-32 mb-6 flex items-center justify-center">
             {/* Rotating border effect */}
             <div className="absolute inset-0 rounded-full border-[3px] border-[#00f0ff] border-b-transparent border-l-transparent shadow-[0_0_20px_rgba(0,240,255,0.4)] animate-[spin_4s_linear_infinite]"></div>
             <div className="absolute inset-0 rounded-full border-[2px] border-[#8a2be2] border-t-transparent border-r-transparent shadow-[0_0_20px_rgba(138,43,226,0.3)] animate-[spin_6s_linear_infinite_reverse]"></div>
             
             {/* Actual Image */}
             <div className="absolute inset-1.5 rounded-full overflow-hidden bg-zinc-800">
               <Image 
                 src="/avatar.jpg" 
                 alt="Berke Süleyman Avatar" 
                 fill
                 className="object-cover object-[50%_75%]"
                 priority
               />
             </div>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 tracking-tight">Berke Süleyman</h1>
          
          <div className="inline-block px-3 py-1 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-xs font-semibold mb-6">
            Available for projects
          </div>

          <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-zinc-200">Frontend Developer / Creative Developer</h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-8 max-w-lg">
            Modern, hızlı ve mobil uyumlu web arayüzleri geliştiriyorum. Kişisel projeler, yaratıcı arayüzler ve kullanıcı deneyimi odaklı işler üzerinde çalışıyorum.
          </p>
        </section>

        {/* QUICK LINKS / BIO LINK BUTTONS */}
        <section className="w-full flex flex-col gap-4 mb-14">
          <a href="#" className="glass-button w-full py-4 px-6 rounded-2xl flex items-center justify-between text-lg font-medium group" aria-label="CV'mi Gör">
            <span>CV'mi Gör</span>
            <svg className="w-5 h-5 opacity-50 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </a>
          <a href="#projects" className="glass-button w-full py-4 px-6 rounded-2xl flex items-center justify-between text-lg font-medium group" aria-label="Projelerim">
            <span>Projelerim</span>
            <svg className="w-5 h-5 opacity-50 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </a>
          <a href="https://github.com/bakkalgazii" target="_blank" rel="noopener noreferrer" className="glass-button w-full py-4 px-6 rounded-2xl flex items-center justify-between text-lg font-medium group" aria-label="GitHub">
            <span>GitHub</span>
            <svg className="w-5 h-5 opacity-50 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="glass-button w-full py-4 px-6 rounded-2xl flex items-center justify-between text-lg font-medium group" aria-label="LinkedIn">
            <span>LinkedIn</span>
            <svg className="w-5 h-5 opacity-50 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
          </a>
          <a href="mailto:majerlayne@icloud.com" className="glass-button w-full py-4 px-6 rounded-2xl flex items-center justify-between text-lg font-medium group" aria-label="Mail Gönder">
            <span>Mail Gönder</span>
            <svg className="w-5 h-5 opacity-50 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
          </a>
        </section>

        {/* SKILLS */}
        <section className="w-full mb-14">
          <h3 className="text-xl font-bold mb-6 text-zinc-100 tracking-wide text-center sm:text-left">Yetenekler</h3>
          <div className="flex flex-wrap justify-center sm:justify-start gap-3">
            {["React", "Next.js", "TypeScript", "Tailwind CSS", "UI Design", "Responsive Design", "Git & GitHub"].map((skill) => (
              <span key={skill} className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm text-zinc-300 font-medium tracking-wide">
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="w-full mb-16">
          <h3 className="text-xl font-bold mb-6 text-zinc-100 tracking-wide text-center sm:text-left">Projeler</h3>
          <div className="flex flex-col gap-6">
            
            {/* Project Card A */}
            <div className="glass-card p-6 rounded-2xl flex flex-col transition-all hover:border-[#8a2be2]/40">
              <h4 className="text-lg font-bold mb-2 text-white">Neon Portfolio</h4>
              <p className="text-zinc-400 text-sm mb-4">Modern ve mobil uyumlu kişisel portfolio arayüzü.</p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="text-xs px-2 py-1 bg-purple-500/20 text-purple-300 rounded-md">Next.js</span>
                <span className="text-xs px-2 py-1 bg-purple-500/20 text-purple-300 rounded-md">Tailwind</span>
                <span className="text-xs px-2 py-1 bg-purple-500/20 text-purple-300 rounded-md">TypeScript</span>
              </div>
              <div className="mt-auto flex gap-3">
                <a href="#" className="flex-1 py-2 text-center bg-white/10 hover:bg-white/20 rounded-lg text-sm font-medium transition-colors">Demo</a>
                <a href="#" className="flex-1 py-2 text-center bg-white/10 hover:bg-white/20 rounded-lg text-sm font-medium transition-colors">GitHub</a>
              </div>
            </div>

            {/* Project Card B */}
            <div className="glass-card p-6 rounded-2xl flex flex-col transition-all hover:border-[#00f0ff]/40">
              <h4 className="text-lg font-bold mb-2 text-white">Bio Link Page</h4>
              <p className="text-zinc-400 text-sm mb-4">Instagram bio için hızlı ve şık bağlantı sayfası.</p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="text-xs px-2 py-1 bg-cyan-500/20 text-cyan-300 rounded-md">React</span>
                <span className="text-xs px-2 py-1 bg-cyan-500/20 text-cyan-300 rounded-md">Tailwind</span>
                <span className="text-xs px-2 py-1 bg-cyan-500/20 text-cyan-300 rounded-md">Responsive UI</span>
              </div>
              <div className="mt-auto flex gap-3">
                <a href="#" className="flex-1 py-2 text-center bg-white/10 hover:bg-white/20 rounded-lg text-sm font-medium transition-colors">Demo</a>
                <a href="#" className="flex-1 py-2 text-center bg-white/10 hover:bg-white/20 rounded-lg text-sm font-medium transition-colors">GitHub</a>
              </div>
            </div>

            {/* Project Card C */}
            <div className="glass-card p-6 rounded-2xl flex flex-col transition-all hover:border-[#8a2be2]/40">
              <h4 className="text-lg font-bold mb-2 text-white">Dashboard Concept</h4>
              <p className="text-zinc-400 text-sm mb-4">Koyu tema odaklı modern dashboard arayüz konsepti.</p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="text-xs px-2 py-1 bg-purple-500/20 text-purple-300 rounded-md">UI Design</span>
                <span className="text-xs px-2 py-1 bg-purple-500/20 text-purple-300 rounded-md">Components</span>
                <span className="text-xs px-2 py-1 bg-purple-500/20 text-purple-300 rounded-md">CSS</span>
              </div>
              <div className="mt-auto flex gap-3">
                <a href="#" className="flex-1 py-2 text-center bg-white/10 hover:bg-white/20 rounded-lg text-sm font-medium transition-colors">Demo</a>
                <a href="#" className="flex-1 py-2 text-center bg-white/10 hover:bg-white/20 rounded-lg text-sm font-medium transition-colors">GitHub</a>
              </div>
            </div>

          </div>
        </section>

        {/* CONTACT / FOOTER */}
        <section className="w-full text-center">
          <p className="text-zinc-400 mb-6 text-sm">
            Yeni projeler, iş birlikleri ve yaratıcı fikirler için bana ulaşabilirsin.
          </p>
          <div className="flex justify-center gap-4 mb-10">
            <a href="mailto:majerlayne@icloud.com" aria-label="Email" className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-colors text-zinc-300 hover:text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            </a>
            <a href="https://github.com/bakkalgazii" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-colors text-zinc-300 hover:text-white">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-colors text-zinc-300 hover:text-white">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>
            </a>
          </div>
          <p className="text-xs text-zinc-600">© {new Date().getFullYear()} Berke Süleyman. Tüm hakları saklıdır.</p>
        </section>

      </main>
    </>
  );
}
