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
              I am a <span className="text-[#c9a86a] font-semibold">Full Stack Web Developer</span> who enjoys learning and building practical solutions through real projects. My interest in web development grew during my CSE studies, where I became curious about how websites and applications actually work behind the scenes.
            </p>

            <p className="text-gray-400 leading-relaxed">
              Over time, I have gained hands-on experience with <span className="text-white">Next.js, React, JavaScript, and PHP with MySQL</span>. I focus on writing clean, simple code and creating user-friendly interfaces. I am still growing as a developer, but I enjoy improving my skills step by step and turning ideas into working applications.
            </p>

            <p className="text-gray-400 leading-relaxed">
              I have built several real-world academic and personal projects, including management systems, eCommerce-style product pages, and apps with features like authentication, product handling, cart systems, and form-based interactions. These projects have helped me understand both frontend and basic backend development in a practical way.
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

