export default function About() {
  return (
    <section id="about" className="py-24 bg-[#0b1220] px-6 relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="text-center md:text-left mb-12">
          <h2 className="text-4xl font-bold title inline-block relative">
            About Me
            <div className="absolute -bottom-3 left-0 w-12 h-1 accent-bg rounded-full"></div>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <p className="text-gray-300 leading-relaxed text-lg">
              I am a <span className="text-[#c9a86a] font-semibold">Full Stack Web Developer</span> passionate about building modern, responsive, and user-focused web applications. My journey into programming started with a curiosity about how the web works, which led me to pursue a B.Sc in Computer Science & Engineering.
            </p>
            <p className="text-gray-400 leading-relaxed">
              I specialize in creating clean UI experiences and functional backend systems using technologies like <span className="text-white">Next.js, React, JavaScript, and PHP with MySQL</span>. I enjoy transforming complex problems into simple, beautiful, and intuitive designs.
            </p>
            <p className="text-gray-400 leading-relaxed">
              I have hands-on experience developing real-world projects such as eCommerce systems, issue tracking dashboards, and full-stack management applications with features like authentication, role-based access, and API integration.
            </p>
          </div>

          <div className="space-y-8 bg-white/[0.02] p-8 rounded-2xl border soft-border">
            <div>
              <h3 className="text-[#c9a86a] font-bold text-xl mb-4 uppercase tracking-wider text-sm">Programming Journey</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Started my journey in 2022 during my B.Sc studies. Since then, I've fallen in love with the process of building things from scratch and seeing them come to life on the screen.
              </p>
            </div>

            <div>
              <h3 className="text-[#c9a86a] font-bold text-xl mb-4 uppercase tracking-wider text-sm">What I Enjoy</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                I enjoy the intersection of design and logic. Building smooth animations with Framer Motion or GSAP is as exciting to me as architecting a robust backend API.
              </p>
            </div>

            <div>
              <h3 className="text-[#c9a86a] font-bold text-xl mb-4 uppercase tracking-wider text-sm">Hobbies & Interests</h3>
              <div className="flex flex-wrap gap-3">
                {["Painting", "Traveling", "Exploring New Tech"].map((hobby) => (
                  <span key={hobby} className="px-4 py-1 bg-white/5 border soft-border rounded-full text-xs text-gray-300">
                    {hobby}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

