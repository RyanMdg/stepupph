import { useEffect, useState } from "react";
import { Link } from "react-router";
import { AnimateIn } from "../components/AnimateIn";
import homeImg from "../../imports/jobinterview.jpg";
import {
  HiOutlineArrowRight,
  HiOutlineCheckCircle,
  HiOutlineUsers,
  HiOutlineBriefcase,
  HiOutlineGlobeAlt,
} from "react-icons/hi2";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0A0A0A]">
        {/* Background image */}
        <img
          src={homeImg}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: "40% 30%" }}
        />
        {/* Dark overlay — heavier on left so text stays readable */}
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12 py-32">
          <div className="max-w-3xl">
            {/* <div
              className={`h-px bg-[#8B0000] mb-10 transition-all duration-1000 delay-200 origin-left ${
                isVisible ? "w-16 opacity-100" : "w-0 opacity-0"
              }`}
            /> */}
            <div
              className={`text-xs tracking-[0.3em] text-[#ffffff] mb-4 transition-all duration-700 delay-300 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              Workforce Development & Talent Solutions
            </div>
            <h1
              className={`text-white tracking-wide font-light leading-tight mb-6 transition-all duration-1000 delay-400 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ fontSize: "clamp(2.2rem, 6vw, 4rem)" }}
            >
              Building Workforce-Ready Talent and Stronger Hiring Partnerships
            </h1>
            <p
              className={`text-white/60 text-lg font-light leading-relaxed mb-12 transition-all duration-700 delay-600 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              Step Up PH provides career training for job seekers, candidate
              support for recruitment agencies, and manpower solutions for
              growing businesses.
            </p>

            {/* 3 CTA buttons */}
            <div
              className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              <Link
                to="/job-seekers"
                className="group relative px-8 py-4 bg-[#8B0000] text-white overflow-hidden transition-all duration-300 hover:shadow-lg text-sm tracking-wider text-center"
              >
                <span className="relative z-10">I'm a Job Seeker</span>
                <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </Link>
              <Link
                to="/recruitment-agencies"
                className="group relative px-8 py-4 border border-white/40 text-white overflow-hidden transition-all duration-300 text-sm tracking-wider text-center"
              >
                <span className="relative z-10">
                  I'm a Recruitment & Staffing Partner
                </span>
                <div className="absolute inset-0 bg-[#8B0000] translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
              </Link>
              <Link
                to="/employers"
                className="group relative px-8 py-4 border border-white/40 text-white overflow-hidden transition-all duration-300 text-sm tracking-wider text-center"
              >
                <span className="relative z-10">I'm an employer</span>
                <div className="absolute inset-0 bg-[#8B0000] translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT IS STEP UP PH ── */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-5xl mx-auto">
          <AnimateIn>
            <div className="text-center mb-12">
              <div className="text-xs tracking-[0.3em] text-[#8B0000] mb-3">
                WHAT IS STEP UP PH?
              </div>
              <h2 className="text-3xl md:text-4xl font-light tracking-wide leading-snug max-w-2xl mx-auto">
                A Workforce Development & Partnership Ecosystem
              </h2>
            </div>
          </AnimateIn>

          <AnimateIn
            delay={100}
            className="max-w-2xl mx-auto text-center text-base font-light leading-relaxed opacity-65 mb-14"
          >
            Step Up PH is a division of Bridgeway Educational Consultancy
            Services focused on talent development, recruitment support, and HR
            ecosystem solutions — connecting job seekers, recruitment partners,
            and businesses through a fast-growing professional network.
          </AnimateIn>

          {/* Core Functions */}
          <div className="grid md:grid-cols-3 gap-6 mb-14">
            {[
              {
                icon: <HiOutlineUsers className="w-7 h-7" />,
                title: "Talent Development",
                desc: "Industry-aligned training programs in customer service, BPO, virtual assistance, and workplace readiness.",
              },
              {
                icon: <HiOutlineBriefcase className="w-7 h-7" />,
                title: "Recruitment Support",
                desc: "Trained candidates, endorsed talent pipelines, and workforce-ready applicants for recruitment firms.",
              },
              {
                icon: <HiOutlineGlobeAlt className="w-7 h-7" />,
                title: "HR Ecosystem Solutions",
                desc: "Manpower coordination and recruitment partnerships for local and international businesses.",
              },
            ].map((item, i) => (
              <AnimateIn key={item.title} delay={i * 80}>
                <div className="relative bg-[#F5F5F5] p-8 h-full">
                  <div className="absolute top-0 left-0 w-1 h-full bg-[#8B0000]" />
                  <div className="pl-4">
                    <div className="text-[#8B0000] mb-4">{item.icon}</div>
                    <h3 className="tracking-wide mb-2 text-sm font-normal">
                      {item.title}
                    </h3>
                    <p className="text-sm font-light opacity-60 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>

          {/* 3 Audience Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                label: "Job Seekers",
                desc: "Career-ready training with direct endorsement to hiring partners.",
                to: "/job-seekers",
                cta: "View Programs",
              },
              {
                label: "Recruitment Agencies",
                desc: "Access trained candidates and expand your client pipeline.",
                to: "/recruitment-agencies",
                cta: "Learn More",
              },
              {
                label: "Employers",
                desc: "Source qualified Filipino talent for local and remote roles.",
                to: "/employers",
                cta: "Request Staff",
              },
            ].map((card, i) => (
              <AnimateIn key={card.label} delay={i * 80}>
                <Link
                  to={card.to}
                  className="group block relative bg-white border border-black/8 p-8 hover:border-[#8B0000]/30 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="absolute top-0 left-0 w-1 h-full bg-[#8B0000]" />
                  <div className="pl-4">
                    <h3 className="tracking-wide mb-3 text-base">
                      {card.label}
                    </h3>
                    <p className="text-sm font-light opacity-60 leading-relaxed mb-5">
                      {card.desc}
                    </p>
                    <div className="flex items-center gap-2 text-xs tracking-widest text-[#8B0000]">
                      {card.cta}
                      <HiOutlineArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── STAT STRIP ── */}
      <section className="py-14 px-6 md:px-12 bg-[#8B0000]">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-3 gap-8 text-center">
            {[
              { value: "3", label: "Training Programs" },
              { value: "3", label: "Ecosystem Pillars" },
              { value: "100%", label: "Online Delivery" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-4xl font-light text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-xs tracking-widest text-white/60">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROGRAMS SNAPSHOT ── */}
      <section className="py-24 px-6 md:px-12 bg-[#F5F5F5]">
        <div className="max-w-5xl mx-auto">
          <AnimateIn>
            <div className="text-center mb-12">
              <div className="text-xs tracking-[0.3em] text-[#8B0000] mb-3">
                FOR JOB SEEKERS
              </div>
              <h2 className="text-3xl font-light tracking-wide">
                Training Programs
              </h2>
              <div className="mt-4 h-px w-12 bg-[#8B0000] mx-auto" />
            </div>
          </AnimateIn>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {[
              {
                days: "5",
                name: "Job Readiness Intensive Bootcamp",
                desc: "For fresh graduates and first-time job seekers. Resume, interviews, and workplace communication.",
              },
              {
                days: "7",
                name: "BPO Career Readiness Program",
                desc: "For individuals entering the BPO and customer service industry. Mock calls, communication drills, and assessments.",
              },
              {
                days: "10",
                name: "Virtual Assistant Career Program",
                desc: "For those exploring work-from-home and VA roles. Core VA skills, digital tools, and client communication.",
              },
            ].map((p, i) => (
              <AnimateIn key={p.name} delay={i * 80}>
                <div className="bg-white border border-black/5 overflow-hidden h-full">
                  <div className="bg-[#8B0000] text-white px-6 py-4 flex items-baseline gap-2">
                    <span className="text-3xl font-light">{p.days}</span>
                    <span className="text-xs tracking-widest opacity-80">
                      DAYS
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-sm tracking-wide mb-3 leading-snug">
                      {p.name}
                    </h3>
                    <p className="text-sm font-light opacity-55 leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>

          <AnimateIn delay={150} className="text-center">
            <Link
              to="/job-seekers"
              className="group relative inline-block px-10 py-4 border border-[#8B0000] text-[#8B0000] overflow-hidden transition-all duration-300 text-sm tracking-widest"
            >
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                VIEW ALL PROGRAMS
              </span>
              <div className="absolute inset-0 bg-[#8B0000] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </Link>
          </AnimateIn>
        </div>
      </section>

      {/* ── FOR BUSINESS SNAPSHOT ── */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-5xl mx-auto">
          <AnimateIn>
            <div className="text-center mb-12">
              <div className="text-xs tracking-[0.3em] text-[#8B0000] mb-3">
                FOR BUSINESS
              </div>
              <h2 className="text-3xl font-light tracking-wide">
                Recruitment & Workforce Solutions
              </h2>
              <div className="mt-4 h-px w-12 bg-[#8B0000] mx-auto" />
            </div>
          </AnimateIn>

          <div className="grid md:grid-cols-2 gap-8 mb-10">
            {[
              {
                label: "Recruitment & Manpower Agencies",
                items: [
                  "Access to pre-trained candidates",
                  "Candidate endorsement support",
                  "Additional referral income opportunities",
                  "Co-branded promotions",
                ],
                cta: "Become a Partner",
                to: "/recruitment-agencies",
              },
              {
                label: "Direct Hiring Companies",
                items: [
                  "Blue-collar & operational roles",
                  "Corporate & support roles",
                  "Workforce sourcing assistance",
                  "Access to pre-screened candidates",
                ],
                cta: "Request Staff",
                to: "/employers",
              },
            ].map((block, i) => (
              <AnimateIn key={block.label} delay={i * 80}>
                <div className="relative bg-[#F5F5F5] p-10 h-full">
                  <div className="absolute top-0 left-0 w-1 h-full bg-[#8B0000]" />
                  <div className="pl-4">
                    <h3 className="tracking-wide mb-5 text-base">
                      {block.label}
                    </h3>
                    <ul className="space-y-2 mb-8">
                      {block.items.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <HiOutlineCheckCircle className="w-4 h-4 text-[#8B0000] flex-shrink-0 mt-0.5" />
                          <span className="text-sm font-light opacity-65">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      to={block.to}
                      className="flex items-center gap-2 text-xs tracking-widest text-[#8B0000] group"
                    >
                      {block.cta.toUpperCase()}
                      <HiOutlineArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT SNIPPET ── */}
      <section className="py-20 px-6 md:px-12 bg-[#0A0A0A]">
        <div className="max-w-4xl mx-auto">
          <AnimateIn>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="text-xs tracking-[0.3em] text-[#8B0000] mb-4">
                  ABOUT STEP UP PH
                </div>
                <h2 className="text-2xl md:text-3xl font-light text-white tracking-wide leading-snug mb-6">
                  Bridging the Gap Between Education and Employment
                </h2>
                <p className="text-white/50 font-light text-sm leading-relaxed mb-8">
                  Established under Bridgeway Educational Consultancy Services,
                  Step Up PH was created to help Filipino talent become more
                  competitive through industry-aligned training, practical
                  assessments, and a growing partnership ecosystem.
                </p>
                <Link
                  to="/about"
                  className="flex items-center gap-2 text-xs tracking-widest text-[#8B0000] group"
                >
                  READ OUR STORY
                  <HiOutlineArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              <div className="space-y-4">
                {[
                  "Industry-aligned training programs",
                  "Direct endorsement to hiring partners",
                  "Partnership ecosystem for agencies & employers",
                  "Canada + Philippines credibility & experience",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="w-1 h-3 bg-[#8B0000] flex-shrink-0 mt-1.5" />
                    <span className="text-white/50 text-sm font-light">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <AnimateIn>
            <div className="text-xs tracking-[0.3em] text-[#8B0000] mb-4">
              GET STARTED TODAY
            </div>
            <h2 className="text-3xl font-light tracking-wide mb-6">
              Ready to step up?
            </h2>
            <p className="text-base font-light opacity-60 leading-relaxed mb-10">
              Whether you're looking for a career, a stronger talent pipeline,
              or qualified staff — we have a solution for you.
            </p>
            <Link
              to="/contact"
              className="group relative inline-block px-12 py-4 bg-[#8B0000] text-white overflow-hidden transition-all duration-300 hover:shadow-lg text-sm tracking-widest"
            >
              <span className="relative z-10">GET IN TOUCH</span>
              <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </Link>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
