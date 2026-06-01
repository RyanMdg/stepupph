import { Link } from 'react-router';
import { AnimateIn } from '../components/AnimateIn';
import { HiOutlineCheckCircle, HiOutlineArrowRight } from 'react-icons/hi2';

const FREE_BENEFITS = [
  'Access to pre-trained candidates',
  'Candidate endorsement support',
  'Improved interview readiness of endorsed applicants',
  'Additional referral income opportunities',
  'Co-branded online and on-site promotions',
];

const PAID_SERVICES = [
  'Business development support',
  'Direct company lead generation',
  'Partnership expansion assistance',
  'Local and international client sourcing for blue-collar and white-collar hiring requirements',
];

const PATHWAY = ['Partner', 'Receive Pre-Trained Candidates', 'Expand Client Reach'];

export default function RecruitmentAgencies() {
  return (
    <>
      {/* Page Header */}
      <section className="pt-40 pb-20 px-6 md:px-12 bg-[#0A0A0A] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#8B0000]/20 to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="text-xs tracking-[0.3em] text-[#8B0000] mb-4">FOR RECRUITMENT & MANPOWER AGENCIES</div>
          <h1 className="text-white text-4xl md:text-5xl font-light tracking-wide leading-snug mb-6">
            Partnership Program
          </h1>
          <p className="text-white/60 text-lg font-light leading-relaxed max-w-xl">
            Partner with Step Up PH and access a growing workforce ecosystem built to support recruitment firms, manpower agencies, and hiring partners.
          </p>
        </div>
      </section>

      {/* Core Message */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <AnimateIn>
            <blockquote className="border-l-4 border-[#8B0000] pl-8 py-4">
              <p className="text-xl font-light italic opacity-70 leading-relaxed">
                "Access pre-trained applicants and expand your client pipeline."
              </p>
            </blockquote>
          </AnimateIn>

          <AnimateIn delay={100} className="mt-10 text-base font-light opacity-65 leading-relaxed max-w-2xl">
            <p>Strengthen your candidate pipeline, improve endorsement success rates, and expand your client network through a scalable and collaborative partnership with Step Up PH.</p>
          </AnimateIn>
        </div>
      </section>

      {/* Partnership Tiers */}
      <section className="py-10 pb-24 px-6 md:px-12 bg-white">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Free */}
          <AnimateIn>
            <div className="relative bg-[#F5F5F5] p-10 h-full">
              <div className="absolute top-0 left-0 w-1 h-full bg-[#8B0000]" />
              <div className="pl-4">
                <div className="text-xs tracking-[0.3em] text-[#8B0000] mb-1">FREE</div>
                <h3 className="text-lg font-light tracking-wide mb-5">Partnership Benefits</h3>
                <ul className="space-y-3">
                  {FREE_BENEFITS.map(item => (
                    <li key={item} className="flex items-start gap-3">
                      <HiOutlineCheckCircle className="w-4 h-4 text-[#8B0000] flex-shrink-0 mt-0.5" />
                      <span className="text-sm font-light opacity-70">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </AnimateIn>

          {/* Paid */}
          <AnimateIn delay={100}>
            <div className="relative bg-[#F5F5F5] p-10 h-full">
              <div className="absolute top-0 left-0 w-1 h-full bg-black/30" />
              <div className="pl-4">
                <div className="text-xs tracking-[0.3em] text-black/40 mb-1">OPTIONAL PAID</div>
                <h3 className="text-lg font-light tracking-wide mb-5">Partnership Services</h3>
                <ul className="space-y-3">
                  {PAID_SERVICES.map(item => (
                    <li key={item} className="flex items-start gap-3">
                      <HiOutlineArrowRight className="w-4 h-4 text-black/30 flex-shrink-0 mt-0.5" />
                      <span className="text-sm font-light opacity-60">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Success Pathway */}
      <section className="py-20 px-6 md:px-12 bg-[#F5F5F5]">
        <div className="max-w-4xl mx-auto">
          <AnimateIn>
            <div className="text-xs tracking-[0.3em] text-[#8B0000] mb-4 text-center">HOW IT WORKS</div>
            <h2 className="text-2xl font-light tracking-wide text-center mb-12">Agency Partnership Pathway</h2>
          </AnimateIn>
          <AnimateIn delay={100}>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              {PATHWAY.map((step, i) => (
                <div key={step} className="flex items-center gap-4">
                  <div className="bg-white border border-black/5 px-8 py-4 text-sm font-light tracking-wide text-center">{step}</div>
                  {i < PATHWAY.length - 1 && <HiOutlineArrowRight className="w-4 h-4 text-[#8B0000] flex-shrink-0 hidden md:block" />}
                </div>
              ))}
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 md:px-12 bg-white text-center">
        <AnimateIn>
          <div className="text-xs tracking-[0.3em] text-[#8B0000] mb-4">INTERESTED IN PARTNERING?</div>
          <h2 className="text-2xl font-light tracking-wide mb-8">Become a Recruitment Partner</h2>
          <Link
            to="/contact"
            className="group relative inline-block px-12 py-4 bg-[#8B0000] text-white overflow-hidden transition-all duration-300 hover:shadow-lg text-sm tracking-widest"
          >
            <span className="relative z-10">BECOME A PARTNER</span>
            <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </Link>
        </AnimateIn>
      </section>
    </>
  );
}
