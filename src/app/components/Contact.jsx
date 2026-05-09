"use client";
import { useState } from "react";
import { FaEnvelope, FaLinkedin, FaGithub, FaPaperPlane } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#0f1a2b] px-6 relative">
      <Toaster position="bottom-right" toastOptions={{
        style: {
          background: '#0b1220',
          color: '#fff',
          border: '1px solid rgba(255, 255, 255, 0.08)',
        },
      }} />
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold title inline-block relative">
            Get In Touch
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-12 h-1 accent-bg rounded-full"></div>
          </h2>
          <p className="text-gray-400 mt-6 max-w-xl mx-auto">
            Have a project in mind or just want to say hi? I'd love to hear from you.
          </p>
        </div>

        <div className="bg-white/[0.02] border soft-border rounded-2xl p-8 md:p-12 shadow-2xl">
          <form className="grid gap-6" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-6">
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="p-4 bg-[#0b1220] border soft-border rounded-xl text-white focus:outline-none focus:border-[#c9a86a] transition-colors"
                placeholder="Your Name"
              />
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="p-4 bg-[#0b1220] border soft-border rounded-xl text-white focus:outline-none focus:border-[#c9a86a] transition-colors"
                placeholder="Your Email"
                type="email"
              />
            </div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="p-4 bg-[#0b1220] border soft-border rounded-xl text-white focus:outline-none focus:border-[#c9a86a] transition-colors resize-none"
              rows="5"
              placeholder="Your Message"
            ></textarea>

            <button 
              type="submit" 
              disabled={isLoading}
              className="flex items-center justify-center gap-3 w-full md:w-auto md:justify-self-end px-8 py-4 rounded-xl text-black font-semibold accent-bg hover:shadow-[0_0_20px_rgba(201,168,106,0.4)] transition-all transform hover:-translate-y-1 disabled:opacity-70 disabled:hover:translate-y-0"
            >
              <span>{isLoading ? "Sending..." : "Send Message"}</span>
              <FaPaperPlane className={isLoading ? "animate-pulse" : ""} />
            </button>
          </form>
        </div>

        {/* LINKS */}
        <div className="mt-16 flex flex-col md:flex-row gap-8 justify-center items-center text-sm">
          <a href="mailto:najmunnanjum121@gmail.com" className="group flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
            <div className="p-4 rounded-full bg-white/5 group-hover:bg-[#c9a86a]/20 group-hover:text-[#c9a86a] transition-colors">
              <FaEnvelope className="text-xl" />
            </div>
            <span className="font-medium">Email Me</span>
          </a>

          <a href="https://www.linkedin.com/in/najmunnaharanjum" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
            <div className="p-4 rounded-full bg-white/5 group-hover:bg-[#0077b5]/20 group-hover:text-[#0077b5] transition-colors">
              <FaLinkedin className="text-xl" />
            </div>
            <span className="font-medium">LinkedIn</span>
          </a>

          <a href="https://github.com/nnanjum1" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
            <div className="p-4 rounded-full bg-white/5 group-hover:bg-white/20 transition-colors">
              <FaGithub className="text-xl" />
            </div>
            <span className="font-medium">GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
}
