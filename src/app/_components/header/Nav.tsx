"use client";
import { useState } from "react"; // ضيف الـ state
import Image from "next/image";
import Link from "next/link";
import NavLink from "./NavLinks";
import MobileMenu from "./MobileMenu"; // استيراد الكمبوننت الجديد
import { GiHamburgerMenu } from "react-icons/gi";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Team", href: "/team" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <div>
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/70">
      <div className="container-lg py-3 flex items-center justify-between overflow-hidden h-20">
        {/* Logo Section */}
        <Link
          href="/"
          className="flex items-center gap-2 group transition-opacity hover:opacity-90"
        >
          <div className="relative w-10 h-24 overflow-hidden flex items-center justify-center bg-white">
            <Image
              src="/logo.png"
              alt="Sirrush Logo"
              fill
              className="object-cover scale-[1.8] transform"
            />
          </div>
          <div className="hidden lg:flex font-black items-center flex-col text-deep-navy uppercase">
            <div className="md:text-xl text-lg tracking-wide">
              SIRRUSH<span className="text-deep-navy">.</span>
            </div>
            <div className="text-xs font-bold text-deep-navy tracking-wide">
              Software Solutions
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block border border-deep-navy rounded-full px-2 py-1 shadow-sm backdrop-blur-sm">
          <ul className="flex items-center gap-1 ">
            {navLinks.map((link) => (
              <NavLink key={link.href} href={link.href}>
                {link.name}
              </NavLink>
            ))}
          </ul>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <button className="hidden lg:flex items-center gap-1.5 px-4 py-2 border border-deep-navy text-ant-gold text-xs font-bold rounded-full hover:bg-royal-gold/10 transition-all duration-300">
            العربية
          </button>

          <button className="relative px-3 py-3 bg-deep-navy text-ant-gold text-sm font-bold rounded-full hidden md:block group">
            <span className="relative z-10">Free Consulting</span>
          </button>

          {/* Hamburger Menu Toggle */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-deep-navy hover:bg-gray-200 transition-colors"
          >
            <GiHamburgerMenu size={30} />
          </button>
        </div>
      </div>

      {/* الـ Mobile Menu Component */}
    </header>
      <MobileMenu isOpen={isOpen} toggleMenu={toggleMenu} navLinks={navLinks} />
      </div>
  );
};

export default Nav;
