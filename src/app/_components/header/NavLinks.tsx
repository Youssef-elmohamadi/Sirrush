// components/NavLink.jsx
"use client";
import { Link, usePathname } from "@/i18n/navigation";

const NavLink = ({ href, children }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <li className="relative overflow-hidden group rounded-full">
      <Link
        href={href}
        className={`
          relative block px-3 py-3 md:text-[15px] lg:text-[16px] font-bold transition-all duration-300
          ${
            isActive
              ? "text-ant-gold bg-deep-navy shadow-lg"
              : "text-deep-navy hover:text-ant-gold hover:bg-deep-navy"
          }
        `}
      >
        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shine" />

        <span className="relative z-10">{children}</span>
      </Link>
    </li>
  );
};

export default NavLink;

