"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { mainNavigation } from "@/data/navigation";
import { ChevronDown, Menu, X, Phone } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      {/* Top Bar */}
      <div className={`hidden lg:block transition-all duration-300 ${isScrolled ? "h-0 overflow-hidden" : "bg-primary text-white text-sm py-2"}`}>
        <div className="container-custom flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span>Seit 1920 – Über 100 Jahre Handwerkskunst</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:+499832683100" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Phone size={14} />
              <span>09832 68310-0</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container-custom">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img 
              src="/images/logo-stark.svg" 
              alt="Stark Inspiration" 
              className={`h-14 w-auto transition-all ${isScrolled ? "brightness-0" : ""}`}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {mainNavigation.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={`flex items-center gap-1 px-4 py-2 font-medium transition-colors ${
                    isScrolled
                      ? "text-gray-700 hover:text-primary"
                      : "text-white/90 hover:text-white"
                  }`}
                >
                  {item.label}
                  {item.children && <ChevronDown size={16} />}
                </Link>

                {/* Dropdown */}
                {item.children && openDropdown === item.label && (
                  <div className="absolute top-full left-0 w-64 bg-white rounded-xl shadow-xl py-3 animate-slide-down">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block px-5 py-2.5 text-gray-700 hover:bg-light hover:text-primary transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* CTA Button */}
            <Link
              href="/kontakt"
              className={`ml-4 px-6 py-2.5 rounded-lg font-medium transition-all ${
                isScrolled
                  ? "bg-primary text-white hover:bg-primary-600"
                  : "bg-accent text-gray-900 hover:bg-accent-600"
              }`}
            >
              Kontakt
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 ${isScrolled ? "text-gray-900" : "text-white"}`}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 bg-white z-40 overflow-y-auto animate-fade-in">
            <div className="container-custom pt-24 pb-6">
              {mainNavigation.map((item) => (
                <div key={item.label} className="border-b border-gray-100">
                  <Link
                    href={item.href}
                    className="block py-4 text-lg font-medium text-gray-900"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <div className="pb-4 pl-4 space-y-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block py-2 text-gray-600"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-6">
                <Link
                  href="/kontakt"
                  className="btn-primary w-full text-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Kontakt aufnehmen
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
