import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] text-white">
      <div className="h-px bg-gradient-to-r from-transparent via-[#8B0000] to-transparent" />
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-16">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <div className="text-2xl tracking-[0.25em] font-light text-white mb-1">
              STEP UP <span className="text-[#8B0000]">PH</span>
            </div>
            <div className="text-xs tracking-widest opacity-40 uppercase mb-6">
              by Bridgeway Educational Consultancy Services
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-3 text-xs tracking-widest opacity-50">
              {[
                { label: "Home", to: "/" },
                { label: "Job Seekers", to: "/job-seekers" },
                { label: "Recruitment Agencies", to: "/recruitment-agencies" },
                { label: "Employers", to: "/employers" },
                { label: "About Us", to: "/about" },
                { label: "Partner Network", to: "/partner-network" },
                { label: "Contact", to: "/contact" },
              ].map(({ label, to }) => (
                <Link
                  key={to}
                  to={to}
                  className="hover:opacity-100 hover:text-[#8B0000] transition-all duration-200"
                >
                  {label.toUpperCase()}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="text-xs tracking-widest text-[#8B0000] mb-3">
              FIND US
            </div>
            <p className="text-xs opacity-50 font-light leading-relaxed">
              2nd Floor, Unit F Joaquin Dionisio Bldg.
              <br />
              Bayuga St. Brgy. Poblacion East
              <br />
              Science City of Muñoz, Nueva Ecija
              <br />
              Philippines
            </p>
          </div>

          <div>
            <div className="text-xs tracking-widest text-[#8B0000] mb-3">
              CONTACT
            </div>
            <div className="space-y-1 text-xs opacity-50 font-light">
              <p>(044) 950-4443</p>
              <p>(0927) 947 9290</p>
              <p>(0961) 632 1989</p>
              <div className="pt-2 space-y-1">
                <a
                  href="mailto:info@stepupcanada.online"
                  className="block hover:text-[#8B0000] hover:opacity-100 transition-all duration-200"
                >
                  info@stepupphilippines.online
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 text-xs">
          <span className="opacity-30">
            © 2026 Step Up PH. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
