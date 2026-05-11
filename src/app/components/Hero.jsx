"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";

import { FaGithub, FaLinkedin, FaTwitter, FaFacebook, FaDownload } from "react-icons/fa";

export default function Hero() {
  const imageRef = useRef(null);
  const blob1Ref = useRef(null);
  const blob2Ref = useRef(null);

  useEffect(() => {
    // GSAP parallax and floating effects
    const tl = gsap.timeline({ repeat: -1, yoyo: true });
    tl.to(imageRef.current, { y: -15, duration: 2, ease: "power1.inOut" });

    gsap.to(blob1Ref.current, {
      x: 30,
      y: 30,
      scale: 1.1,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    gsap.to(blob2Ref.current, {
      x: -30,
      y: -30,
      scale: 1.1,
      duration: 5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden">

      {/* Background glowing effects */}
      <div ref={blob1Ref} className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#c9a86a]/10 rounded-full blur-[100px] -z-10"></div>
      <div ref={blob2Ref} className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] -z-10"></div>

      <div className="max-w-5xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12 w-full">

        {/* TEXT */}
        <div className="flex-1 text-center md:text-left space-y-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[#c9a86a] font-medium uppercase text-sm"
          >
            Welcome to my portfolio
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-7xl font-bold"
          >
            Hi, I'm <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#c9a86a] to-[#f4e0b3]">
              Najmun Nahar Anjum
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col gap-2"
          >
            <h2 className="text-xl md:text-2xl text-gray-300 font-medium">
              Full Stack Web Developer
            </h2>
            <p className="text-gray-400 max-w-lg mx-auto md:mx-0 leading-relaxed">
              Building clean, scalable, and beautifully designed digital experiences with modern technologies.
            </p>
          </motion.div>


          {/* ACTION BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-4 pt-4 justify-center md:justify-start"
          >
            <a href="#projects" className="px-8 py-3 rounded-full text-black font-semibold bg-[#c9a86a] hover:shadow-[0_0_20px_rgba(201,168,106,0.4)] transition-all">
              View Projects
            </a>
            <a href="/resume.pdf" target="_blank" className="flex items-center gap-2 px-8 py-3 rounded-full border border-[#c9a86a] text-[#c9a86a] hover:bg-[#c9a86a]/10 transition-all font-semibold">
              <FaDownload /> Resume
            </a>
          </motion.div>

          {/* SOCIAL LINKS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex gap-6 justify-center md:justify-start pt-6"
          >
            <a href="https://github.com/nnanjum1" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#c9a86a] transition-colors text-2xl">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/najmunnaharanjum" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#c9a86a] transition-colors text-2xl">
              <FaLinkedin />
            </a>
            <a href="https://www.facebook.com/share/16os9p6gKK/" className="text-gray-400 hover:text-[#c9a86a] transition-colors text-2xl">
              <FaFacebook />
            </a>
          </motion.div>
        </div>

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 flex justify-center md:justify-end"
        >
          <div ref={imageRef} className="relative w-64 h-64 md:w-96 md:h-96">

            <div className="absolute inset-0 rounded-full border-2 border-[#c9a86a]/30 animate-spin-slow"></div>

            <div className="absolute inset-4 rounded-full overflow-hidden border border-white/10 bg-gray-300">
              <Image
                src="/profile.png"
                alt="Najmun Nahar Anjum"
                fill
                className="object-cover"
                priority
              />
            </div>

          </div>
        </motion.div>

      </div>
    </section>

  );
}