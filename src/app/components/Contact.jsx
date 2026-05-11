"use client";
import { FaEnvelope, FaLinkedin, FaGithub, FaPhone, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#0f1a2b] px-6 relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold title inline-block relative">
            Get In Touch
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-12 h-1 accent-bg rounded-full"></div>
          </h2>
          <p className="text-gray-400 mt-6 max-w-xl mx-auto">
            Feel free to reach out through any platform below — I’m always open to connecting.
          </p>
        </div>

        {/* CONTACT ICONS */}
        <div className="mt-12 flex flex-wrap gap-8 justify-center items-center text-sm">

          {/* EMAIL */}
          <a
            href="mailto:najmunnanjum121@gmail.com"
            className="group flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
          >
            <div className="p-4 rounded-full bg-white/5 group-hover:bg-[#c9a86a]/20 
            group-hover:text-[#c9a86a] transition-colors">
              <FaEnvelope className="text-xl" />
            </div>
            <span className="font-medium">Email</span>
          </a>

          {/* PHONE */}
          <a
            href="tel:+8801746710577"
            className="group flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
          >
            <div className="p-4 rounded-full bg-white/5 group-hover:bg-[#c9a86a]/20 
            group-hover:text-[#c9a86a] transition-colors">
              <FaPhone className="text-xl" />
            </div>
            <span className="font-medium">Call</span>
          </a>

          {/* WHATSAPP */}
          <a
            href="https://wa.me/8801746710577"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
          >
            <div className="p-4 rounded-full bg-white/5 group-hover:bg-[#25D366]/20 
            group-hover:text-[#25D366] transition-colors">
              <FaWhatsapp className="text-xl" />
            </div>
            <span className="font-medium">WhatsApp</span>
          </a>

          {/* LINKEDIN */}
          <a
            href="https://www.linkedin.com/in/najmunnaharanjum"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
          >
            <div className="p-4 rounded-full bg-white/5 group-hover:bg-[#0077B5]/20 
            group-hover:text-[#0077B5] transition-colors">
              <FaLinkedin className="text-xl" />
            </div>
            <span className="font-medium">LinkedIn</span>
          </a>

          {/* GITHUB */}
          <a
            href="https://github.com/nnanjum1"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
          >
            <div className="p-4 rounded-full bg-white/5 group-hover:bg-[#c9a86a]/20 
            group-hover:text-[#c9a86a] transition-colors">
              <FaGithub className="text-xl" />
            </div>
            <span className="font-medium">GitHub</span>
          </a>

        </div>
      </div>
    </section>
  );
}