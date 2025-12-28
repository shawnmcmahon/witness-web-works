"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[var(--color-primary)] shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group" onClick={closeMenu}>
          <div className="relative">
            <span className="text-2xl md:text-3xl font-bold text-white font-[var(--font-cormorant)]">
              Witness
            </span>
            <span className="absolute -bottom-1 left-0 w-full h-1 bg-[var(--color-accent)] transform origin-left transition-transform duration-300 group-hover:scale-x-110"></span>
          </div>
          <span className="text-lg md:text-xl text-[var(--color-accent)] font-light hidden sm:inline">
            Web Works
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/services"
            className="text-white hover:text-[var(--color-accent)] transition-colors font-medium"
          >
            Explore Plans
          </Link>
          <Link
            href="/meet-the-team"
            className="text-white hover:text-[var(--color-accent)] transition-colors font-medium"
          >
            Meet the Team
          </Link>
          <Link
            href="/contact"
            className="btn btn-primary text-sm py-2 px-6"
          >
            Contact Us
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2 hover:text-[var(--color-accent)] transition-colors"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 top-[60px] bg-[var(--color-primary)] transform transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col items-center justify-center h-full gap-8 p-8">
          <Link
            href="/services"
            className="text-2xl text-white hover:text-[var(--color-accent)] transition-colors font-medium"
            onClick={closeMenu}
          >
            Explore Plans
          </Link>
          <Link
            href="/meet-the-team"
            className="text-2xl text-white hover:text-[var(--color-accent)] transition-colors font-medium"
            onClick={closeMenu}
          >
            Meet the Team
          </Link>
          <Link
            href="/contact"
            className="btn btn-primary text-lg py-3 px-8 mt-4"
            onClick={closeMenu}
          >
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  );
}

