import { FaExternalLinkAlt, FaGithub, FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold title inline-block relative">
            Featured Projects
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-12 h-1 accent-bg rounded-full"></div>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-16">
          {projects.map((project, index) => (
            <div key={project.id} className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-10 items-center`}>

              {/* IMAGE */}
              <div className="flex-1 w-full group relative overflow-hidden rounded-2xl border soft-border shadow-2xl">
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b1220]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <Link href={`/projects/${project.id}`} className="px-6 py-2 bg-[#c9a86a] text-black rounded-full font-bold text-sm">
                      View Details
                    </Link>
                  </div>
                </div>
              </div>

              {/* CONTENT */}
              <div className="flex-1 space-y-6">
                <h3 className="text-3xl md:text-5xl font-bold text-white mb-3">{project.title}</h3>

                <div className="flex pt-4">
                  <Link href={`/projects/${project.id}`} className="px-8 py-3 rounded-full bg-[#c9a86a] text-black font-bold hover:shadow-[0_0_20px_rgba(201,168,106,0.4)] transition-all">
                    View Details
                  </Link>
                </div>
              </div>


            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


