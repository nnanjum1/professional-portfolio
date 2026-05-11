import { FaHtml5, FaCss3Alt, FaNodeJs, FaReact } from "react-icons/fa";
import { SiJavascript, SiNextdotjs, SiTailwindcss, SiMongodb, SiBootstrap, SiPhp, SiMysql } from "react-icons/si";

export default function TechStack() {
  const technologies = [
    { name: "HTML5", icon: <FaHtml5 className="text-[#E34F26] text-4xl" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-[#1572B6] text-4xl" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E] text-4xl" /> },
    { name: "React", icon: <FaReact className="text-[#61DAFB] text-4xl" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-white text-4xl" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4] text-4xl" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-[#339933] text-4xl" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-[#47A248] text-4xl" /> },
    { name: "Bootstrap", icon: <SiBootstrap className="text-[#7952B3] text-4xl" /> },
    { name: "PHP", icon: <SiPhp className="text-[#777BB4] text-4xl" /> },
    { name: "MySQL", icon: <SiMysql className="text-[#4479A1] text-4xl" /> },
  ];

  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-[#0b1220] to-[#0f1a2b] px-6 relative">

      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold title inline-block relative">
            Tech Stack
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-12 h-1 accent-bg rounded-full"></div>
          </h2>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Tools and technologies I use to bring ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {technologies.map((tech) => (
            <div key={tech.name} className="group p-6 bg-white/[0.02] border soft-border rounded-2xl flex flex-col items-center gap-4 hover:bg-white/[0.05] hover:border-[#c9a86a]/30 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-[#c9a86a]/5">
              <div className="transform group-hover:scale-110 transition-transform duration-300">
                {tech.icon}
              </div>
              <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}