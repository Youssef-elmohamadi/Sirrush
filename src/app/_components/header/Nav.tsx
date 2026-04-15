import Image from "next/image";
import Link from "next/link";
import NavLink from "./NavLinks"; // تأكد من اسم الملف NavLink.jsx

const Nav = () => {
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
    <header className="sticky top-0 z-50 backdrop-blur-md">
      <div className="container-lg py-3 flex items-center justify-between overflow-hidden h-20">
        {/* Logo Section */}
        <Link
          href="/"
          className="flex items-center gap-2 group transition-opacity hover:opacity-90"
        >
          {/* الحاوية (الحدود) */}
          <div className="relative w-10 h-24 overflow-hidden flex items-center justify-center bg-white">
            <Image
              src="/logo.png"
              alt="Sirrush Logo"
              fill
              /* التعديل السحري هنا */
              className="object-cover scale-[1.8] transform"
            />
          </div>

          <div className="text-xl font-black flex items-center flex-col text-deep-navy uppercase">
            <div>
              SIRRUSH<span className="text-deep-navy">.</span>
            </div>
            <div className="text-xs font-bold text-deep-navy tracking-wide">
              Software Solutions
            </div>
          </div>
        </Link>

        {/* Navigation - Centered Menu */}
        <nav className="hidden md:block border border-deep-navy rounded-full px-2 py-1 shadow-sm backdrop-blur-sm">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => (
              <NavLink key={link.href} href={link.href}>
                {link.name}
              </NavLink>
            ))}
          </ul>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          {/* Arabic Toggle */}
          <button className="hidden sm:flex items-center gap-1.5 px-4 py-2 border border-deep-navy text-ant-gold text-xs font-bold rounded-full hover:bg-royal-gold/10 transition-all duration-300">
            <span className="w-2 h-2 rounded-full bg-saudi-green"></span>
            العربية
          </button>

          <button className="relative px-6 py-3 bg-deep-navy text-ant-gold text-sm font-bold rounded-full overflow-hidden group transition-all duration-300 ease-out hover:-translate-y-1 active:scale-95">
            {/* Shine */}
            <span className="absolute inset-0 overflow-hidden rounded-full">
              <span className="absolute left-[-100%] top-0 h-full w-[200%] bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-25deg] transition-all duration-700 group-hover:left-[100%]" />
            </span>

            {/* Glow */}
            <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition duration-300 bg-ant-gold/10 blur-md" />

            <span className="relative z-10">Free Consulting</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Nav;
