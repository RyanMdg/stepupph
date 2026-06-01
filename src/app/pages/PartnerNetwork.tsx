import { Link } from 'react-router';
import { AnimateIn } from '../components/AnimateIn';

export default function PartnerNetwork() {
  return (
    <>
      {/* Page Header */}
      <section className="pt-40 pb-20 px-6 md:px-12 bg-[#0A0A0A] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#8B0000]/20 to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="text-xs tracking-[0.3em] text-[#8B0000] mb-4">COMPANY</div>
          <h1 className="text-white text-4xl md:text-5xl font-light tracking-wide leading-snug mb-6">
            Partner Network
          </h1>
          <p className="text-white/60 text-lg font-light leading-relaxed max-w-xl">
            Our growing ecosystem of recruitment agencies, manpower providers, and direct hiring companies.
          </p>
        </div>
      </section>

      {/* Partner Grid */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10">

            {/* Recruitment & Manpower Partners */}
            <AnimateIn>
              <div className="border border-black/5 p-10 h-full">
                <div className="text-xs tracking-[0.3em] text-[#8B0000] mb-6">RECRUITMENT & MANPOWER PARTNERS</div>
                <div className="min-h-64 flex items-center justify-center border border-dashed border-black/10 bg-[#F5F5F5]">
                  <p className="text-sm font-light opacity-40 text-center px-6">
                    Partner logos and company names<br />will be displayed here.
                  </p>
                </div>
                <div className="mt-8">
                  <Link
                    to="/contact"
                    className="group relative inline-flex px-8 py-3 border border-[#8B0000] text-[#8B0000] overflow-hidden transition-all duration-300 text-xs tracking-widest"
                  >
                    <span className="relative z-10">BECOME A RECRUITMENT PARTNER</span>
                    <div className="absolute inset-0 bg-[#8B0000] translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                    <span className="relative z-10 group-hover:text-white transition-colors duration-300 absolute inset-0 flex items-center justify-center text-xs tracking-widest">BECOME A RECRUITMENT PARTNER</span>
                  </Link>
                </div>
              </div>
            </AnimateIn>

            {/* Direct Hiring Companies */}
            <AnimateIn delay={100}>
              <div className="border border-black/5 p-10 h-full">
                <div className="text-xs tracking-[0.3em] text-[#8B0000] mb-6">DIRECT HIRING COMPANIES</div>
                <div className="min-h-64 flex items-center justify-center border border-dashed border-black/10 bg-[#F5F5F5]">
                  <p className="text-sm font-light opacity-40 text-center px-6">
                    Partner logos and company names<br />will be displayed here.
                  </p>
                </div>
                <div className="mt-8">
                  <Link
                    to="/contact"
                    className="group relative inline-flex px-8 py-3 border border-[#8B0000] text-[#8B0000] overflow-hidden transition-all duration-300 text-xs tracking-widest"
                  >
                    <span className="relative z-10">PARTNER WITH US</span>
                    <div className="absolute inset-0 bg-[#8B0000] translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                    <span className="relative z-10 group-hover:text-white transition-colors duration-300 absolute inset-0 flex items-center justify-center text-xs tracking-widest">PARTNER WITH US</span>
                  </Link>
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>
    </>
  );
}
