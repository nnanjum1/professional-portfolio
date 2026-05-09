import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      title: "SunCart – Summer Essentials Store",
      description: "A modern summer eCommerce web application where users can browse and purchase seasonal products like sunglasses, outfits, skincare, and beach accessories. Includes authentication and protected routes.",
      features: [
        "Product listing with cards (image, price, rating)",
        "Protected product details page",
        "User authentication (Email + Google Login)",
        "User registration system",
        "My Profile page",
        "Fully responsive design",
      ],
      techStack: ["Next.js", "React", "Tailwind CSS", "DaisyUI", "React Hook Form", "React Icons", "React Hot Toast", "Better Auth", "Animate.css"],
      liveLink: "https://suncart-summer-sale.vercel.app",
      githubLink: "https://github.com/nnanjum1/suncart-summer-sale.git"
    },
    {
      title: "KeenKeeper",
      description: "This project was built as part of a web development assignment. The main idea is to help users manage their friendships in a more thoughtful way by tracking communication history. It includes a timeline system and stats dashboard to visualize interactions.",
      features: [
        "Friend List with clean card UI",
        "Status system (On-Track, Almost Due, Overdue)",
        "Friend detail view",
        "Timeline tracking (Call, Text, Video logs)",
        "Filter timeline by interaction type",
        "Stats dashboard with pie chart",
        "Interactive charts with hover effects"
      ],
      techStack: ["React.js", "Vite", "React Router DOM", "Tailwind CSS", "DaisyUI", "Recharts", "React Icons", "React Toastify"],
      liveLink: "https://assignment7-sigma-rose.vercel.app/",
      githubLink: "https://github.com/nnanjum1/assignment7.git"
    },
    {
      title: "Github Issue Tracker",
      description: "This project is a responsive Issue Tracking Dashboard developed as part of a web development assignment. It provides an intuitive interface for managing and monitoring issues based on different statuses such as Open, Closed, and All.",
      features: [
        "Secure login system with admin authentication",
        "Dashboard layout with search and tab-based filtering",
        "Dynamic issue filtering (All, Open, Closed views)",
        "Responsive 4-column card layout for issue display",
        "Detailed issue cards with modal view",
        "Real-time search functionality",
        "Status-based visual indicators (Green/Purple borders)"
      ],
      techStack: ["HTML", "CSS", "Tailwind CSS", "DaisyUI", "JavaScript (Vanilla)"],
      liveLink: "https://nnanjum1.github.io/b13_assignment_5/",
      githubLink: "https://github.com/nnanjum1/b13_assignment_5.git"
    },
    {
      title: "Stationery Solutions Web Application",
      description: "A full-stack stationery management web application developed as an academic backend project. It handles product listings, cart functionality, and order processing for a stationery shop system. Note: This project runs locally for development and does not have a live deployment.",
      features: [
        "User registration and login system",
        "Admin and user role management",
        "Product management (Add, Edit, Delete, View)",
        "Shopping cart system with quantity control",
        "Order placement and tracking",
        "Inventory quantity update after order placement"
      ],
      techStack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Bootstrap"],
      liveLink: null,
      githubLink: "https://github.com/nnanjum1/stationery-solutions-web.git"
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold title inline-block relative">
            Featured Projects
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-12 h-1 accent-bg rounded-full"></div>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-12">
          {projects.map((project, index) => (
            <div key={index} className="bg-[#0f1a2b] border soft-border rounded-2xl p-8 hover:border-[#c9a86a]/30 transition-all duration-300 hover:shadow-2xl hover:shadow-[#c9a86a]/5">

              <div className="flex flex-col space-y-6">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-lg">{project.description}</p>
                </div>

                {project.features && (
                  <ul className="grid md:grid-cols-2 gap-3 py-2">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-gray-300">
                        <span className="text-[#c9a86a] text-lg leading-none mt-0.5">▹</span>
                        <span className="leading-tight">{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.techStack.map((tech, idx) => (
                    <span key={idx} className="px-4 py-1.5 bg-white/[0.03] border soft-border rounded-full text-xs font-medium text-[#c9a86a]">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-4 pt-6 border-t soft-border mt-4">
                  {project.liveLink && (
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-2.5 rounded-lg accent-bg text-black hover:opacity-90 transition-opacity font-semibold">
                      <FaExternalLinkAlt className="text-sm" /> Live Demo
                    </a>
                  )}
                  {project.githubLink && (
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-2.5 rounded-lg bg-white/5 text-white hover:bg-white/10 transition-colors font-semibold border soft-border">
                      <FaGithub className="text-lg" /> Source Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
