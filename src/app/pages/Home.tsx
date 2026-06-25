import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
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
import FeatureBanner from "../../imports/featuredPartner.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Bianca1 from "../../imports/Showcase1.jpg";
import Bianca2 from "../../imports/showcase2.jpg";
import Bianca3 from "../../imports/showcase3.jpg";
import Bianca4 from "../../imports/showcase4.jpg";
import BiancaLogo from "../../imports/BiancaPascual.jpeg";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const posts = [Bianca1, Bianca2, Bianca3, Bianca4];
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsLoading(true);

    try {
      await emailjs.send(
        "service_togvp1n",
        "template_nupd5cr",
        {
          name: formData.name,
          email: formData.email,
          time: new Date().toLocaleString(),
        },
        "sIAURMIM1n67a8qeS",
      );

      alert("Request sent successfully!");

      setFormData({
        name: "",
        email: "",
      });

      setShowModal(false);
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    } finally {
      setIsLoading(false);
    }
  };

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
                <span className="relative z-10">I'm an Employer</span>
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

      {/* FEATURED PARTNER */}
      <section className=" pt-10 pb-20 bg-[#faf9f7]">
        <div className="max-w-7xl mx-auto px-5">
          {/* Carousel */}

          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden p-8 h-full flex flex-col">
              {/* Corner Ribbon */}
              <div className="absolute top-8 -left-16 rotate-[-45deg] bg-gradient-to-r from-[#FFD54F] to-[#F4C430] text-[#7A0F18] font-extrabold uppercase tracking-wider text-sm px-20 py-2 shadow-lg z-20">
                20–30% OFF
              </div>

              {/* Header */}
              <div className="flex items-center gap-5 mt-6">
                <img
                  src={BiancaLogo}
                  alt="Bianca Pascual"
                  className="w-20 h-20 rounded-2xl object-cover shadow-md"
                />

                <div>
                  <p className="uppercase tracking-[5px] text-[#9B111E] text-xs font-bold">
                    Featured Partner
                  </p>

                  <h2 className="text-4xl font-bold text-gray-900 mt-1">
                    Bianca Pascual
                  </h2>

                  <p className="text-gray-500 text-lg">
                    International Abstract Artist
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div className="w-24 h-1 bg-[#9B111E] rounded-full my-8"></div>

              {/* Description */}
              <p className="text-gray-600 leading-8 text-lg">
                Own a masterpiece by internationally recognized artist
                <span className="font-semibold text-black">
                  {" "}
                  Bianca Pascual.
                </span>
                <br />
                <br />
                As a valued member of the Step Up Philippines Network, enjoy an
                exclusive{" "}
                <span className="font-bold text-[#9B111E]">
                  20%–30% discount
                </span>{" "}
                on selected artworks while supporting an artist whose work has
                inspired collectors both locally and internationally.
              </p>

              {/* Achievement Cards */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-[#F8F8F8] rounded-xl p-5 border">
                  <h3 className="font-bold text-lg">World Record</h3>
                  <p className="text-gray-500 text-sm mt-1">
                    Talent Record Book 2025
                  </p>
                </div>

                <div className="bg-[#F8F8F8] rounded-xl p-5 border">
                  <h3 className="font-bold text-lg">International</h3>
                  <p className="text-gray-500 text-sm mt-1">
                    Featured Exhibitions
                  </p>
                </div>

                <div className="bg-[#F8F8F8] rounded-xl p-5 border">
                  <h3 className="font-bold text-lg">Contemporary</h3>
                  <p className="text-gray-500 text-sm mt-1">
                    Abstract Paintings
                  </p>
                </div>

                <div className="bg-[#F8F8F8] rounded-xl p-5 border">
                  <h3 className="font-bold text-lg">Collected</h3>
                  <p className="text-gray-500 text-sm mt-1">Local & Abroad</p>
                </div>
              </div>

              {/* Quote */}
              <div className="mt-8 border-l-4 border-[#9B111E] pl-5">
                <p className="italic text-gray-500">
                  "I express myself fully in my painting."
                </p>

                <p className="mt-2 text-[#9B111E] font-semibold">
                  — Bianca Pascual
                </p>
              </div>

              {/* CTA */}
              <button
                onClick={() => setShowModal(true)}
                className="mt-10 bg-gradient-to-r from-[#9B111E] to-[#C4162A]
               hover:from-[#870d17] hover:to-[#9B111E]
               transition-all duration-300
               text-white py-4 rounded-xl text-lg font-semibold
               shadow-lg hover:shadow-xl hover:scale-[1.02]"
              >
                Claim Member Discount
              </button>
            </div>
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              navigation
              pagination={{ clickable: true }}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
              loop
              slidesPerView={1}
              spaceBetween={0}
              className="w-[500px] lg:w-[470px]"
            >
              {posts.map((post, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={post}
                    alt={`Partner ${index + 1}`}
                    className="w-full h-[550px] object-cover rounded-xl"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
      {showModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-md shadow-2xl w-[90%] max-w-lg p-8 relative">
            {/* Close */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-2xl text-gray-400 hover:text-red-700"
            >
              ✕
            </button>

            {/* Header */}

            <div className="text-center">
              <h2 className="text-3xl font-bold mt-5">
                Claim Your Member Discount
              </h2>

              <p className="text-gray-500 mt-2">
                Fill out the form below and our team will contact you regarding
                Bianca Pascual's exclusive
                <span className="font-bold text-[#9B111E]">
                  {" "}
                  20–30% OFF
                </span>{" "}
                offer.
              </p>
            </div>

            {/* Form */}

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div className=" flex flex-col">
                <label className="font-medium">Full Name</label>

                <input
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="..."
                />
              </div>

              <div className=" flex flex-col">
                <label className="font-medium">Email Address</label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="..."
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className={`w-full py-4 rounded-xl text-lg font-semibold transition-all duration-300
    ${
      isLoading
        ? "bg-gray-400 cursor-not-allowed"
        : "bg-[#9B111E] hover:bg-[#7b0f18] text-white"
    }`}
              >
                {isLoading ? (
                  <div className="flex items-center justify-center gap-3">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending Request...</span>
                  </div>
                ) : (
                  "Send Request"
                )}
              </button>
            </form>
          </div>
        </div>
      )}

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
