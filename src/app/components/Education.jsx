export default function Education() {
  return (
    <section id="edu" className="py-24 bg-[#0f1a2b] px-6 relative">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold title inline-block relative">
            Education
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-12 h-1 accent-bg rounded-full"></div>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-8 bg-white/[0.02] border soft-border rounded-2xl hover:border-[#c9a86a]/30 transition-all duration-300 hover:shadow-xl hover:shadow-[#c9a86a]/5 hover:-translate-y-1">
            <h3 className="text-xl font-bold text-white mb-2">B.Sc in Computer Science & Engineering</h3>
            <p className="text-[#c9a86a] font-medium text-sm mb-3">2022 - 2026</p>
            <p className="text-gray-400 text-sm leading-relaxed">Leading University, Sylhet, Bangladesh</p>
          </div>

          <div className="p-8 bg-white/[0.02] border soft-border rounded-2xl hover:border-[#c9a86a]/30 transition-all duration-300 hover:shadow-xl hover:shadow-[#c9a86a]/5 hover:-translate-y-1">
            <h3 className="text-xl font-bold text-white mb-2">Higher Secondary Certificate (HSC)</h3>
            <p className="text-[#c9a86a] font-medium text-sm mb-3">2020</p>
            <p className="text-gray-400 text-sm leading-relaxed">Chhatak Government College, Chhatak, Sunamganj</p>
          </div>

          <div className="p-8 bg-white/[0.02] border soft-border rounded-2xl hover:border-[#c9a86a]/30 transition-all duration-300 hover:shadow-xl hover:shadow-[#c9a86a]/5 hover:-translate-y-1">
            <h3 className="text-xl font-bold text-white mb-2">Secondary School Certificate (SSC)</h3>
            <p className="text-[#c9a86a] font-medium text-sm mb-3">2018</p>
            <p className="text-gray-400 text-sm leading-relaxed">Islampur High School, Chhatak, Sunamganj</p>
          </div>
        </div>
      </div>
    </section>
  );
}
