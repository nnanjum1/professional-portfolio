import { projects } from "../../data/projects";
import { FaExternalLinkAlt, FaGithub, FaArrowLeft } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default async function ProjectPage({ params }) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);


  if (!project) {
    return (
      <div className="min-h-screen bg-[#0b1220] flex items-center justify-center text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link href="/" className="text-[#c9a86a] hover:underline flex items-center gap-2 justify-center">
            <FaArrowLeft /> Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#0b1220] min-h-screen text-white">
      <Navbar />

      <main className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <Link href="/#projects" className="inline-flex items-center gap-2 text-gray-400 hover:text-[#c9a86a] transition-colors mb-8 group">
            <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" /> Back to Projects
          </Link>

          <div className="space-y-12">
            {/* HEADER */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">{project.title}</h1>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, idx) => (
                    <span key={idx} className="px-4 py-1.5 bg-[#c9a86a]/10 border border-[#c9a86a]/20 rounded-full text-xs font-medium text-[#c9a86a]">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap items-center gap-4 pt-4">
                  {project.liveLink && (
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-2.5 rounded-xl accent-bg text-black font-bold hover:opacity-90 transition-opacity">
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  )}
                  {project.githubLink && (
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-white/5 border soft-border text-white font-bold hover:bg-white/10 transition-colors">
                      <FaGithub /> Source Code
                    </a>
                  )}
                </div>
              </div>
              <div className="relative aspect-video rounded-2xl overflow-hidden border soft-border shadow-2xl">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* CONTENT */}
            <div className="grid md:grid-cols-3 gap-12 pt-12 border-t soft-border">
              <div className="md:col-span-2 space-y-12">
                <section>
                  <h2 className="text-2xl font-bold mb-4 text-[#c9a86a]">Brief Description</h2>
                  <p className="text-gray-400 leading-relaxed text-lg">
                    {project.description}
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4 text-[#c9a86a]">Key Features</h2>
                  <ul className="grid sm:grid-cols-2 gap-4">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-300 bg-white/[0.02] p-4 rounded-xl border soft-border">
                        <span className="text-[#c9a86a] mt-1.5">▹</span>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                <div className="grid sm:grid-cols-2 gap-8">
                  <section>
                    <h2 className="text-xl font-bold mb-4 text-[#c9a86a]">Challenges Faced</h2>
                    <p className="text-gray-400 leading-relaxed text-sm">
                      {project.challenges}
                    </p>
                  </section>

                  <section>
                    <h2 className="text-xl font-bold mb-4 text-[#c9a86a]">Potential Improvements & Future Plans</h2>
                    <p className="text-gray-400 leading-relaxed text-sm">
                      {project.futurePlans}
                    </p>
                  </section>
                </div>
              </div>

              {/* SIDEBAR */}




            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

