"use client";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Tech", href: "#tech" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#edu" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed w-full top-0 bg-[#0b1220]/90 backdrop-blur-md border-b soft-border z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-xl font-bold title text-[#c9a86a]">Anjum</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 text-sm text-gray-300 font-medium">
          {links.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-white transition">
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-300 hover:text-white focus:outline-none p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden bg-[#0b1220] border-b soft-border absolute w-full left-0 top-[100%] flex flex-col items-center py-6 gap-6 shadow-2xl animate-fade-in-up">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-gray-300 hover:text-[#c9a86a] transition font-medium text-lg"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
