import { Link } from 'react-router';
import { AnimateIn } from '../components/AnimateIn';
import { HiOutlineCheckCircle, HiOutlineArrowRight } from 'react-icons/hi2';

const PATHWAY = ['Request Staff', 'Candidate Matching', 'Interview Coordination'];

export default function Employers() {
  return (
    <>
      {/* Page Header */}
      <section className="pt-40 pb-20 px-6 md:px-12 bg-[#0A0A0A] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#8B0000]/20 to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="text-xs tracking-[0.3em] text-[#8B0000] mb-4">FOR EMPLOYERS / DIRECT HIRING COMPANIES</div>
          <h1 className="text-white text-4xl md:text-5xl font-light tracking-wide leading-snug mb-6">
            Workforce Solutions
          </h1>
          <p className="text-white/60 text-lg font-light leading-relaxed max-w-xl">
            Gain access to workforce sourcing support through our growing network of trained candidates, recruitment partners, and manpower providers.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <AnimateIn className="text-base font-light opacity-65 leading-relaxed max-w-2xl">
            We support local and international companies looking to hire Filipino talent for onsite and remote roles across both blue-collar and white-collar workforce requirements.
          </AnimateIn>
        </div>
      </section>

      {/* Role Types */}
      <section className="pb-16 px-6 md:px-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <AnimateIn className="mb-2">
            <div className="text-xs tracking-[0.3em] text-[#8B0000] mb-6">HIRING SUPPORT SERVICES</div>
          </AnimateIn>
          <div className="grid md:grid-cols-2 gap-6">
            <AnimateIn>
              <div className="relative bg-[#F5F5F5] p-8 h-full">
                <div className="absolute top-0 left-0 w-1 h-full bg-[#8B0000]" />
                <div className="pl-4">
                  <h3 className="text-base tracking-wide mb-3">Blue-Collar & Operational Roles</h3>
                  <p className="text-sm font-light opacity-60 leading-relaxed">
                    Servers, promodisers, delivery drivers, factory workers, retail staff, and other operational workforce requirements.
                  </p>
                </div>
              </div>
            </AnimateIn>

            <AnimateIn delay={80}>
              <div className="relative bg-[#F5F5F5] p-8 h-full">
                <div className="absolute top-0 left-0 w-1 h-full bg-[#8B0000]" />
                <div className="pl-4">
                  <h3 className="text-base tracking-wide mb-3">Corporate & Support Roles</h3>
                  <p className="text-sm font-light opacity-60 leading-relaxed">
                    Administrative and office staff, BPO staffing support, virtual assistants, customer service, supervisorial, and executive-level roles.
                  </p>
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-16 px-6 md:px-12 bg-[#F5F5F5]">
        <div className="max-w-4xl mx-auto">
          <AnimateIn>
            <div className="text-xs tracking-[0.3em] text-[#8B0000] mb-6">FREE PARTNERSHIP BENEFITS</div>
          </AnimateIn>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              'Workforce sourcing assistance',
              'Access to trained and pre-screened candidates',
              'Coordination with recruitment and manpower partners based on hiring requirements',
            ].map((item, i) => (
              <AnimateIn key={item} delay={i * 60}>
                <div className="flex items-start gap-3 bg-white p-6 border border-black/5">
                  <HiOutlineCheckCircle className="w-5 h-5 text-[#8B0000] flex-shrink-0 mt-0.5" />
                  <span className="text-sm font-light opacity-70 leading-relaxed">{item}</span>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Success Pathway */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <AnimateIn>
            <div className="text-xs tracking-[0.3em] text-[#8B0000] mb-4 text-center">HOW IT WORKS</div>
            <h2 className="text-2xl font-light tracking-wide text-center mb-12">Employer Hiring Pathway</h2>
          </AnimateIn>
          <AnimateIn delay={100}>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              {PATHWAY.map((step, i) => (
                <div key={step} className="flex items-center gap-4">
                  <div className="bg-[#F5F5F5] border border-black/5 px-8 py-4 text-sm font-light tracking-wide text-center">{step}</div>
                  {i < PATHWAY.length - 1 && <HiOutlineArrowRight className="w-4 h-4 text-[#8B0000] flex-shrink-0 hidden md:block" />}
                </div>
              ))}
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 md:px-12 bg-[#F5F5F5] text-center">
        <AnimateIn>
          <div className="text-xs tracking-[0.3em] text-[#8B0000] mb-4">LOOKING FOR STAFF?</div>
          <h2 className="text-2xl font-light tracking-wide mb-8">Request Staff Now</h2>
          <Link
            to="/contact"
            className="group relative inline-block px-12 py-4 bg-[#8B0000] text-white overflow-hidden transition-all duration-300 hover:shadow-lg text-sm tracking-widest"
          >
            <span className="relative z-10">REQUEST STAFF</span>
            <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </Link>
        </AnimateIn>
      </section>
    </>
  );
}
