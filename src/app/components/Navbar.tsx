import { useEffect, useState, useRef } from "react";
import { Link, useLocation } from "react-router";
import logoImg from "../../imports/WhatsApp_Image_2026-04-10_at_4.26.19_PM.jpeg";
import { HiChevronDown } from "react-icons/hi2";

const NAV = [
  { label: "Home", to: "/" },
  {
    label: "Job Seekers",
    to: "/job-seekers",
  },
  {
    label: "For Business",
    children: [
      { label: "Recruitment Agencies", to: "/recruitment-agencies" },
      { label: "Employers", to: "/employers" },
    ],
  },
  {
    label: "Company",
    children: [
      { label: "About Us", to: "/about" },
      { label: "Partner Network", to: "/partner-network" },
    ],
  },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const location = useLocation();
  const isHome = location.pathname === "/";
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const light = isHome && !scrolled;

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || !isHome
          ? "bg-white/95 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center hover:opacity-80 transition-opacity mt-3"
          >
            <img
              src={logoImg}
              alt="Step Up PH"
              className="h-16 w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV.map((item) => {
              if (item.children) {
                const isOpen = openDropdown === item.label;
                return (
                  <div key={item.label} className="relative">
                    <button
                      onClick={() =>
                        setOpenDropdown(isOpen ? null : item.label)
                      }
                      className={`flex items-center gap-1 text-sm tracking-wider font-light transition-colors ${
                        light
                          ? "text-white/80 hover:text-white"
                          : "text-black hover:text-[#8B0000]"
                      }`}
                    >
                      {item.label}
                      <HiChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                      />
                    </button>

                    {isOpen && (
                      <div className="absolute top-full left-0 mt-3 w-52 bg-white shadow-lg border border-black/5 py-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.to}
                            to={child.to}
                            className="block px-5 py-3 text-sm font-light tracking-wide hover:bg-[#F5F5F5] hover:text-[#8B0000] transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.to}
                  to={item.to!}
                  className={`text-sm tracking-wider font-light transition-colors relative group ${
                    light
                      ? "text-white/80 hover:text-white"
                      : "text-black hover:text-[#8B0000]"
                  } ${location.pathname === item.to ? (light ? "text-white" : "text-[#8B0000]") : ""}`}
                >
                  {item.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-px transition-all duration-300 group-hover:w-full ${
                      location.pathname === item.to ? "w-full" : "w-0"
                    } ${light ? "bg-white" : "bg-[#8B0000]"}`}
                  />
                </Link>
              );
            })}
          </div>

          {/* Hamburger */}
          <button
            className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px] group"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block h-[2px] w-6 transition-all duration-300 origin-center ${mobileOpen ? "rotate-45 translate-y-[7px] bg-[#8B0000]" : `${light ? "bg-white" : "bg-black"} group-hover:bg-[#8B0000]`}`}
            />
            <span
              className={`block h-[2px] transition-all duration-200 ${mobileOpen ? "w-0 opacity-0" : `w-6 opacity-100 ${light ? "bg-white" : "bg-black"} group-hover:bg-[#8B0000]`}`}
            />
            <span
              className={`block h-[2px] w-6 transition-all duration-300 origin-center ${mobileOpen ? "-rotate-45 -translate-y-[7px] bg-[#8B0000]" : `${light ? "bg-white" : "bg-black"} group-hover:bg-[#8B0000]`}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${mobileOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="bg-white border-t border-black/5 px-6 py-4 space-y-1">
          {NAV.map((item) => {
            if (item.children) {
              const expanded = mobileExpanded === item.label;
              return (
                <div key={item.label}>
                  <button
                    onClick={() =>
                      setMobileExpanded(expanded ? null : item.label)
                    }
                    className="flex items-center justify-between w-full py-3 text-sm tracking-wider font-light hover:text-[#8B0000] transition-colors"
                  >
                    {item.label}
                    <HiChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
                    />
                  </button>
                  {expanded && (
                    <div className="pl-4 pb-2 space-y-1 border-l-2 border-[#8B0000]/20">
                      {item.children.map((child) => (
                        <Link
                          key={child.to}
                          to={child.to}
                          className="block py-2 text-sm font-light opacity-70 hover:opacity-100 hover:text-[#8B0000] transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }
            return (
              <Link
                key={item.to}
                to={item.to!}
                className="block py-3 text-sm tracking-wider font-light hover:text-[#8B0000] transition-colors"
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
