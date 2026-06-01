import { Link } from "react-router";
import { AnimateIn } from "../components/AnimateIn";
import { HiOutlineCheckCircle, HiOutlineArrowRight } from "react-icons/hi2";

const PROGRAMS = [
  {
    days: 5,
    name: "Job Readiness Intensive Bootcamp",
    target: "Grade 12 students, fresh graduates, first-time job seekers",
    description:
      "Today, a degree alone is no longer enough. Employers look for candidates who can communicate professionally, present themselves confidently, and stand out during the hiring process.",
    includes: [
      "Resume building & job application strategies",
      "Interview coaching & mock interviews",
      "Workplace communication skills",
      "Professional presentation skills",
    ],
    note: "Program completers are directly endorsed to our network of legitimate recruitment and hiring partners, with priority interview opportunities.",
  },
  {
    days: 7,
    name: "BPO Career Readiness Program",
    target: "Individuals preparing for customer service & BPO careers",
    description:
      "The BPO industry is highly competitive. We help prepare you for real hiring standards through mock interviews, communication drills, and industry-aligned assessments.",
    includes: [
      "Mock interviews & communication drills",
      "Client-facing scenario training",
      "Accent neutralization basics",
      "BPO culture & industry-aligned assessments",
    ],
    note: "Program completers are directly endorsed to our network of legitimate recruitment and hiring partners, with priority interview opportunities.",
  },
  {
    days: 10,
    name: "Virtual Assistant Career Program",
    target: "Individuals exploring work-from-home & VA opportunities",
    description:
      "Remote employers look for VAs who can communicate professionally, manage tasks independently, and confidently navigate digital tools and client expectations.",
    includes: [
      "Core VA skills & industry tools orientation",
      "Client communication & task management",
      "Remote work readiness",
      "Interview preparation for online roles",
    ],
    note: "Program completers are directly endorsed to our network of legitimate recruitment and hiring partners, with priority interview opportunities.",
  },
];

const PATHWAY = [
  "Choose a Program",
  "Enroll",
  "Complete Training & Assessments",
  "Endorsement to Hiring Partners",
  "Priority Interviews & Job Opportunities",
];

export default function JobSeekers() {
  return (
    <>
      {/* Page Header */}
      <section className="pt-40 pb-20 px-6 md:px-12 bg-[#0A0A0A] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#8B0000]/20 to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="text-xs tracking-[0.3em] text-[#8B0000] mb-4">
            FOR JOB SEEKERS
          </div>
          <h1 className="text-white text-4xl md:text-5xl font-light tracking-wide leading-snug mb-6">
            Training Programs
          </h1>
          <p className="text-white/60 text-lg font-light leading-relaxed max-w-xl">
            100% online. Small batch learning. Direct endorsement to hiring
            partners upon completion.
          </p>
        </div>
      </section>

      {/* Delivery Info Strip */}
      <div className="bg-[#8B0000] py-4 px-6">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row gap-4 sm:gap-10 text-white text-xs tracking-widest">
          <span>✓ 100% Online</span>
          <span>✓ Max 15 Participants Per Batch</span>
          <span>✓ Direct Endorsement to Hiring Partners</span>
        </div>
      </div>

      {/* Programs */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-4xl mx-auto space-y-10">
          {PROGRAMS.map((p, i) => (
            <AnimateIn key={p.name} delay={i * 80}>
              <div className="border border-black/5 overflow-hidden">
                <div className="grid grid-cols-[80px_1fr] md:grid-cols-[100px_1fr]">
                  {/* Day count */}
                  <div className="bg-[#8B0000] flex flex-col items-center justify-center p-4 text-white">
                    <div className="text-3xl font-light leading-none">
                      {p.days}
                    </div>
                    <div className="text-[10px] tracking-widest opacity-80 mt-1">
                      DAYS
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <div className="text-xs tracking-[0.3em] text-[#8B0000] mb-2">
                      PROGRAM {i + 1}
                    </div>
                    <h3 className="text-xl font-light tracking-wide mb-1">
                      {p.name}
                    </h3>
                    <p className="text-xs opacity-40 tracking-wide mb-4 italic">
                      {p.target}
                    </p>
                    <p className="text-sm font-light opacity-65 leading-relaxed mb-5">
                      {p.description}
                    </p>

                    <div className="grid sm:grid-cols-2 gap-2 mb-5">
                      {p.includes.map((item) => (
                        <div key={item} className="flex items-start gap-2">
                          <HiOutlineCheckCircle className="w-4 h-4 text-[#8B0000] flex-shrink-0 mt-0.5" />
                          <span className="text-sm font-light opacity-65">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>

                    <p className="text-xs font-light opacity-45 italic">
                      {p.note}
                    </p>
                  </div>
                </div>
              </div>
            </AnimateIn>
          ))}

          {/* Coming Soon */}
          <AnimateIn delay={250}>
            <div className="border border-dashed border-[#8B0000]/30 p-8 text-center bg-[#F5F5F5]">
              <div className="text-xs tracking-[0.3em] text-[#8B0000] mb-2">
                COMING SOON
              </div>
              <h3 className="text-lg font-light tracking-wide mb-2">
                BPO & VA Specialization Tracks
              </h3>
              <p className="text-sm font-light opacity-55 max-w-xl mx-auto">
                Advanced tracks for individuals aiming for specialized and
                higher-paying roles in BPO and virtual assistance.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Success Pathway */}
      <section className="py-20 px-6 md:px-12 bg-[#F5F5F5]">
        <div className="max-w-4xl mx-auto">
          <AnimateIn>
            <div className="text-xs tracking-[0.3em] text-[#8B0000] mb-4 text-center">
              YOUR PATH TO EMPLOYMENT
            </div>
            <h2 className="text-2xl font-light tracking-wide text-center mb-12">
              Success Pathway
            </h2>
          </AnimateIn>
          <AnimateIn delay={100}>
            <div className="flex flex-col md:flex-row items-stretch gap-0">
              {PATHWAY.map((step, i) => (
                <div
                  key={step}
                  className="flex md:flex-col items-center flex-1"
                >
                  <div className="flex-1 md:flex-none">
                    <div className="bg-white border border-black/5 p-4 text-center text-sm font-light tracking-wide leading-snug min-h-[70px] flex items-center justify-center">
                      {step}
                      {i < PATHWAY.length - 1 && (
                        <div className="flex-shrink-0 mx-2 md:mx-auto md:my-2">
                          <HiOutlineArrowRight className="w-4 h-4 text-[#8B0000]" />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 md:px-12 bg-white text-center">
        <AnimateIn>
          <div className="text-xs tracking-[0.3em] text-[#8B0000] mb-4">
            READY TO START?
          </div>
          <h2 className="text-2xl font-light tracking-wide mb-8">
            Join an Upcoming Batch
          </h2>
          <Link
            to="/contact"
            className="group relative inline-block px-12 py-4 bg-[#8B0000] text-white overflow-hidden transition-all duration-300 hover:shadow-lg text-sm tracking-widest"
          >
            <span className="relative z-10">INQUIRE NOW</span>
            <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </Link>
        </AnimateIn>
      </section>
    </>
  );
}
