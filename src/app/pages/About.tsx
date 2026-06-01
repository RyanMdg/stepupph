import { AnimateIn } from '../components/AnimateIn';
import { HiOutlineChartBar, HiOutlineLightBulb, HiOutlineUsers, HiOutlineShieldCheck } from 'react-icons/hi2';

export default function About() {
  return (
    <>
      {/* Page Header */}
      <section className="pt-40 pb-20 px-6 md:px-12 bg-[#0A0A0A] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#8B0000]/20 to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="text-xs tracking-[0.3em] text-[#8B0000] mb-4">COMPANY</div>
          <h1 className="text-white text-4xl md:text-5xl font-light tracking-wide leading-snug">
            About Us
          </h1>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-3xl mx-auto">
          <AnimateIn>
            <div className="text-xs tracking-[0.3em] text-[#8B0000] mb-6">OUR MISSION</div>
          </AnimateIn>

          <AnimateIn delay={100} className="space-y-6 text-base font-light leading-relaxed opacity-70">
            <p>
              Step Up PH was established under Bridgeway Educational Consultancy Services, an organization with experience supporting learners, professionals, and workforce initiatives in both the Philippines and Canada. Through these experiences, our founder observed a recurring challenge: many Filipinos possess the qualifications needed to pursue career opportunities but often struggle to translate those credentials into workplace-ready skills.
            </p>
            <p>
              This realization inspired the creation of Step Up PH — a workforce development and partnership ecosystem dedicated to bridging the gap between education, employability, and career growth.
            </p>
            <p>
              Our mission is to help Filipino talent become more competitive through industry-aligned training, practical assessments, and career-focused development. We prepare individuals to communicate effectively, perform confidently in interviews, and meet the expectations of today's workplace.
            </p>
            <p>
              We believe stronger workforce outcomes are achieved when talent, recruiters, and employers are connected. Through our growing partnership ecosystem, job seekers gain greater exposure to career opportunities, recruitment partners gain access to pre-assessed talent, and employers gain access to a network of workforce solutions.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-20 px-6 md:px-12 bg-[#F5F5F5]">
        <div className="max-w-4xl mx-auto">
          <AnimateIn>
            <div className="text-xs tracking-[0.3em] text-[#8B0000] mb-10 text-center">WHAT WE STAND FOR</div>
          </AnimateIn>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: <HiOutlineChartBar className="w-6 h-6" />, title: 'Workforce Development Mission', desc: 'Bridging the gap between education, employability, and career growth for Filipino talent.' },
              { icon: <HiOutlineLightBulb className="w-6 h-6" />, title: 'Industry-Aligned Training', desc: 'Programs built to match real employer expectations and hiring standards.' },
              { icon: <HiOutlineUsers className="w-6 h-6" />, title: 'Partnership Ecosystem', desc: 'Connecting talent, recruiters, and employers through a collaborative network.' },
              { icon: <HiOutlineShieldCheck className="w-6 h-6" />, title: 'Canada + PH Credibility', desc: 'Backed by experience supporting workforce initiatives across the Philippines and Canada.' },
            ].map((item, i) => (
              <AnimateIn key={item.title} delay={i * 80}>
                <div className="flex items-start gap-4 bg-white p-6 border border-black/5">
                  <div className="text-[#8B0000] flex-shrink-0 mt-0.5">{item.icon}</div>
                  <div>
                    <h4 className="tracking-wide mb-2 text-sm">{item.title}</h4>
                    <p className="text-sm font-light opacity-60 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>

          <AnimateIn delay={200} className="mt-10">
            <div className="bg-white border border-black/5 p-8 text-sm font-light opacity-55 leading-relaxed text-center max-w-2xl mx-auto">
              Step Up PH is a specialized division of Bridgeway Educational Consultancy Services, created to equip individuals with the skills and competencies needed to meet global standards and succeed in today's competitive environment.
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
