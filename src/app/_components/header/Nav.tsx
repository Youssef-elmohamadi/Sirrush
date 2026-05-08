"use client";
import { useState } from "react";
import Image from "next/image";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { useLocale, useTranslations } from "next-intl";
import NavLink from "./NavLinks";
import MobileMenu from "./MobileMenu";
import { GiHamburgerMenu } from "react-icons/gi";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const navLinks = [
    { name: t("home"), href: "/" },
    { name: t("about"), href: "/about" },
    { name: t("team"), href: "/team" },
    { name: t("services"), href: "/services" },
    { name: t("projects"), href: "/projects" },
    { name: t("contact"), href: "/contact" },
    { name: t("blog"), href: "/blog" },
  ];

  const toggleLocale = () => {
    const nextLocale = locale === "en" ? "ar" : "en";
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <div>
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/70">
        <div className="container-lg py-3 flex items-center justify-between overflow-hidden h-20">
          {/* Logo Section */}
          <Link
            href="/"
            className="flex items-center gap-2 group transition-opacity hover:opacity-90"
          >
            <div
              className={`relative w-10 h-24 overflow-hidden flex items-center justify-center bg-white ${locale === "ar" ? "-scale-x-100" : "scale-x-100"}`}
            >
              <Image
                src="/logo.png"
                alt="Sirrush Logo"
                fill
                className="object-cover scale-[1.8] transform"
              />
            </div>

            <div className="hidden lg:flex font-black items-center flex-col text-ant-gold uppercase">
              <div className="md:text-xl text-lg tracking-wide">
                SIRRUSH<span className="text-ant-gold">.</span>
              </div>
              <div className="text-sm font-bold text-deep-navy tracking-wide">
                {t("tagline")}
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
            <button
              onClick={toggleLocale}
              className="hidden lg:flex items-center gap-1.5 px-4 py-2 border border-deep-navy text-ant-gold text-sm font-bold rounded-full hover:bg-royal-gold/10 transition-all duration-300"
            >
              {t("switch_locale")}
            </button>

            <Link 
              href="https://wa.me/201507839478?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%20%D9%81%D8%B1%D9%8A%D9%82%20%D8%B3%D9%8A%D8%B1%D9%88%D8%B4%D8%8C%20%D8%A3%D9%88%D8%AF%20%D8%A7%D9%84%D8%AD%D8%B5%D9%88%D9%84%20%D8%B9%D9%84%D9%89%20%D8%A7%D8%B3%D8%AA%D8%B4%D8%A7%D8%B1%D8%A9%20%D9%85%D8%AC%D8%A7%D9%86%D9%8A%D8%A9."
              target="_blank"
              className="relative px-3 py-3 bg-deep-navy text-ant-gold text-sm font-bold rounded-full hidden md:block group"
            >
              <span className="relative z-10">{t("free_consulting")}</span>
            </Link>

            {/* Hamburger Menu Toggle */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-md text-dark-navy hover:bg-gray-200 transition-colors"
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
