import { useEffect, useRef, useState } from 'react';
import {
  HiOutlineAcademicCap,
  HiOutlineBriefcase,
  HiOutlineGlobeAlt,
  HiOutlineCheckCircle,
  HiOutlineUsers,
  HiOutlineChartBar,
  HiOutlineLightBulb,
  HiOutlineClock,
  HiOutlineShieldCheck,
  HiOutlineClipboardDocumentCheck,
  HiOutlineArrowTrendingUp,
  HiOutlineBars3,
  HiOutlineXMark
} from 'react-icons/hi2';

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); observer.disconnect(); } },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, inView };
}

function AnimateIn({
  children,
  delay = 0,
  direction = 'up',
  className = '',
}: {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'left' | 'right' | 'none';
  className?: string;
}) {
  const { ref, inView } = useInView();
  const translate =
    direction === 'up' ? 'translate-y-10' :
    direction === 'left' ? '-translate-x-10' :
    direction === 'right' ? 'translate-x-10' : '';
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${inView ? 'opacity-100 translate-x-0 translate-y-0' : `opacity-0 ${translate}`} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', program: '', message: '' });
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  useEffect(() => {
    const t = setTimeout(() => setIsVisible(true), 100);
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => { clearTimeout(t); window.removeEventListener('scroll', handleScroll); };
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    try {
      const res = await fetch('https://formspree.io/f/admin@stepupcanada.online', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...formData, _replyto: formData.email }),
      });
      if (res.ok) { setFormStatus('success'); setFormData({ name: '', email: '', program: '', message: '' }); }
      else setFormStatus('error');
    } catch { setFormStatus('error'); }
  };

  return (
    <div className="min-h-screen bg-white text-black">

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between h-20">
            <button onClick={() => scrollToSection('hero')} className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <img
                src="/src/imports/WhatsApp_Image_2026-04-10_at_4.26.19_PM.jpeg"
                alt="Step Up Philippines"
                className="h-16 w-auto object-contain"
              />
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-10">
              {['About', 'Why Choose Us', 'How It Works', 'Programs', 'Contact'].map(label => (
                <NavLink
                  key={label}
                  onClick={() => scrollToSection(label.toLowerCase().replace(/ /g, '-'))}
                  light={!scrolled}
                >
                  {label}
                </NavLink>
              ))}
              <a
                href="https://www.stepupcanada.online/login"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-5 py-2 text-xs tracking-widest bg-white text-[#8B0000] border border-[#8B0000] overflow-hidden transition-all duration-300 hover:text-white"
              >
                <span className="relative z-10">STEP UP CANADA ↗</span>
                <div className="absolute inset-0 bg-[#8B0000] translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className={`md:hidden transition-colors ${scrolled ? 'text-black hover:text-[#8B0000]' : 'text-white hover:text-[#8B0000]'}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <HiOutlineXMark className="w-6 h-6" /> : <HiOutlineBars3 className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-black/5">
            <div className="px-6 py-4 space-y-4">
              {[
                { label: 'About', id: 'about' },
                { label: 'Why Choose Us', id: 'why-choose-us' },
                { label: 'How It Works', id: 'how-it-works' },
                { label: 'Programs', id: 'programs' },
                { label: 'Contact', id: 'contact' },
              ].map(({ label, id }) => (
                <MobileNavLink key={id} onClick={() => scrollToSection(id)}>{label}</MobileNavLink>
              ))}
              <div className="pt-2 border-t border-black/5">
                <a
                  href="https://www.stepupcanada.online/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block py-2 text-xs tracking-widest text-[#8B0000] font-light hover:opacity-70 transition-opacity"
                >
                  STEP UP CANADA ↗
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section — full screen image */}
      <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background image */}
        <img
          src="/src/imports/hero.jpg"
          alt="Step Up Philippines"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/25" />
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/40 to-transparent" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12">
          <div className="max-w-2xl">

            {/* Accent line */}
            <div
              className={`h-px bg-[#8B0000] mb-10 transition-all duration-1000 delay-300 origin-left ${
                isVisible ? 'w-16 opacity-100' : 'w-0 opacity-0'
              }`}
            />

            {/* STEP UP */}
            <h1
              className={`text-white tracking-[0.25em] font-light leading-none mb-3 transition-all duration-1000 delay-400 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ fontSize: 'clamp(3.5rem, 9vw, 6rem)' }}
            >
              STEP UP
            </h1>

            {/* PHILIPPINES */}
            <div
              className={`text-white tracking-[0.4em] font-light mb-10 transition-all duration-1000 delay-600 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ fontSize: 'clamp(1.2rem, 3vw, 2rem)' }}
            >
              PHILIPPINES
            </div>

            {/* Tagline */}
            <p
              className={`text-white/70 text-lg md:text-xl font-light tracking-wide mb-12 transition-all duration-1000 delay-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              Step Up Your Skills. Unlock Greater Opportunities.
            </p>

            {/* Buttons */}
            <div
              className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-900 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              <button
                onClick={() => scrollToSection('programs')}
                className="group relative px-8 py-4 bg-[#8B0000] text-white overflow-hidden transition-all duration-300 hover:shadow-lg"
              >
                <span className="relative z-10 tracking-wider">Explore Programs</span>
                <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="group relative px-8 py-4 border-2 border-white text-white overflow-hidden transition-all duration-300 hover:border-[#8B0000]"
              >
                <span className="relative z-10 tracking-wider">Contact Us</span>
                <div className="absolute inset-0 bg-[#8B0000] translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
              </button>
            </div>
          </div>

          {/* Trusted badge */}
          <div
            className={`absolute bottom-12 right-6 md:right-12 bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-5 transition-all duration-1000 delay-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <div className="text-white/50 text-xs mb-1 tracking-widest">TRUSTED BY</div>
            <div className="text-white tracking-wide text-lg font-light">500+ Students</div>
          </div>
        </div>

      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 md:px-12 bg-[#F5F5F5]">
        <div className="max-w-4xl mx-auto">
          <AnimateIn>
            <SectionTitle>About Us</SectionTitle>
          </AnimateIn>

          <AnimateIn delay={150} className="mt-16 space-y-6 text-lg leading-relaxed opacity-80 font-light">
            <p>
              At Step Up PH, our goal is to equip individuals with the skills, confidence, and qualifications needed to succeed in today's competitive and global environment. Whether you are a new graduate preparing to enter the workforce or a professional aiming to advance your career, our programs are designed to support your growth every step of the way.
            </p>
            <p>
              We deliver results-driven training focused on real-world application, ensuring that what you learn can be directly applied in professional and international settings. Through structured lessons, guided practice, and continuous feedback, we help learners achieve measurable and lasting progress.
            </p>
            <p>
              What sets us apart is our personalized and strategic approach to learning. Each program is carefully designed and supported by experienced instructors, ensuring that every session is purposeful, targeted, and aligned with current industry and global standards.
            </p>
            <p>
              At our core, we are committed to helping individuals move forward—whether in their careers or global opportunities by equipping them with the skills that truly make a difference.
            </p>
            <div className="pt-4 text-base opacity-60">
              <p>Step Up PH is a specialized extension of Bridgeway Educational Consultancy Services, created to equip individuals with the skills and competencies needed to meet global standards and succeed in today's competitive environment.</p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-choose-us" className="py-32 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <AnimateIn>
            <SectionTitle>Why Choose Us</SectionTitle>
          </AnimateIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mt-20">
            {[
              { icon: <HiOutlineChartBar className="w-10 h-10" />, title: 'Outcome-Focused Training', description: 'Our programs are designed with clear, measurable goals—whether it\'s improving communication, achieving target exam scores, or securing better career opportunities.' },
              { icon: <HiOutlineUsers className="w-10 h-10" />, title: 'Learn from Industry Experts', description: 'Train with experienced instructors who bring real-world knowledge and proven expertise into every session.' },
              { icon: <HiOutlineLightBulb className="w-10 h-10" />, title: 'Structured and Personalized Learning', description: 'Each program follows a strategic framework, combined with tailored instruction based on your level, goals, and pace to ensure effective progress.' },
              { icon: <HiOutlineShieldCheck className="w-10 h-10" />, title: 'Real-World Skill Application', description: 'We focus on practical skills you can confidently apply in interviews, the workplace, and everyday communication.' },
              { icon: <HiOutlineClipboardDocumentCheck className="w-10 h-10" />, title: 'Diagnostic Assessment and Progress Monitoring', description: 'Through comprehensive assessments and continuous tracking, we ensure targeted learning and visible improvement over time.' },
              { icon: <HiOutlineArrowTrendingUp className="w-10 h-10" />, title: 'Professional Learning Environment', description: 'A focused, well-structured space designed to support confidence, discipline, and consistent growth.' },
            ].map((card, i) => (
              <AnimateIn key={card.title} delay={i * 80}>
                <FeatureCard icon={card.icon} title={card.title} description={card.description} />
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-32 px-6 md:px-12 bg-[#F5F5F5]">
        <div className="max-w-5xl mx-auto">
          <AnimateIn>
            <SectionTitle>How It Works</SectionTitle>
          </AnimateIn>

          <div className="mt-20 space-y-16">
            {[
              { number: '01', title: 'Initial Consultation & Assessment', description: 'We start with a one-on-one session to understand your goals, current level, and specific needs. This includes a guided assessment to identify strengths and areas for improvement, allowing us to create a learning plan aligned with what you want to achieve.' },
              { number: '02', title: 'Program Recommendation', description: 'Based on your goals and assessment results, we recommend the most suitable program and structured learning plan tailored to your objectives.' },
              { number: '03', title: 'Structured Training Sessions', description: 'Attend guided sessions led by experienced instructors, following a strategic and results-oriented approach designed to build real-world skills.' },
              { number: '04', title: 'Re-Assessment & Development Review', description: 'We conduct follow-up assessments to evaluate your progress and development, allowing us to refine your learning plan and ensure you are on track toward your goals.' },
              { number: '05', title: 'Continuous Feedback & Progress Monitoring', description: 'Receive consistent feedback and track your improvement through ongoing performance monitoring, ensuring steady and measurable results.' },
              { number: '06', title: 'Achieve Your Goals', description: 'With the right guidance and structure, you gain the skills, confidence, and readiness needed to succeed in your career, exams, or global opportunities.' },
            ].map((step, i) => (
              <AnimateIn key={step.number} delay={i * 60} direction="left">
                <ProcessStep number={step.number} title={step.title} description={step.description} />
              </AnimateIn>
            ))}
          </div>

          <AnimateIn delay={200} className="mt-16 text-center">
            <p className="text-lg opacity-70 font-light italic">
              Your progress is guided every step of the way—from your first session to achieving real, measurable results.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Programs */}
      <section id="programs" className="py-32 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <AnimateIn>
            <SectionTitle>Programs</SectionTitle>
          </AnimateIn>

          <AnimateIn delay={100} className="text-center mb-16 mt-6 text-lg opacity-70">
            We offer flexible learning options: In-Center or Hybrid Setup
          </AnimateIn>

          <div className="space-y-20 mt-20">
            {[
              {
                icon: <HiOutlineAcademicCap className="w-8 h-8" />,
                title: 'English Communication',
                programs: [
                  { name: 'Conversational English', subtitle: 'Fluency & Confidence', description: 'Build confidence in speaking through guided, real-life conversations designed to improve fluency, vocabulary, and everyday communication skills.' },
                  { name: 'Pronunciation & Accent Training', subtitle: 'Clarity & Neutral Accent', description: 'Enhance speech clarity and develop a more neutral accent through targeted pronunciation drills and speaking practice.' },
                  { name: 'Business English', subtitle: 'Workplace Communication Skills', description: 'Improve your professional communication skills, including emails, meetings, presentations, and workplace conversations.' },
                ],
              },
              {
                icon: <HiOutlineBriefcase className="w-8 h-8" />,
                title: 'Career & Job Preparation',
                programs: [
                  { name: 'Job Readiness Course', subtitle: 'Interview, Resume & Workplace Skills', description: 'Prepare for job opportunities with structured training in interviews, resume writing, and essential workplace communication skills.' },
                  { name: 'BPO / Call Center Training', subtitle: 'Mock Calls & Hiring Preparation', description: 'Get ready for call center roles through mock calls, script practice, and interview preparation focused on real hiring scenarios.' },
                ],
              },
              {
                icon: <HiOutlineGlobeAlt className="w-8 h-8" />,
                title: 'International & Migration',
                programs: [
                  { name: 'IELTS Review', subtitle: 'Target Score Preparation', description: 'Comprehensive preparation covering all test components with focused strategies and practice to help you achieve your target band score.' },
                  { name: 'CELPIP Review', subtitle: 'Strategy-Based Training', description: 'A structured program designed to improve performance using proven techniques, guided practice, and targeted feedback for each test section.' },
                  { name: 'English for Abroad', subtitle: 'Real-Life & Workplace Communication', description: 'Develop practical English skills for daily life and work abroad, including common conversations, workplace scenarios, and cultural communication.' },
                ],
              },
            ].map((cat, i) => (
              <AnimateIn key={cat.title} delay={i * 100} direction="up">
                <ProgramCategory icon={cat.icon} title={cat.title} programs={cat.programs} />
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Our Center */}
      <section className="py-32 px-6 md:px-12 bg-[#F5F5F5]">
        <div className="max-w-4xl mx-auto">
          <AnimateIn>
            <SectionTitle>Our Center</SectionTitle>
          </AnimateIn>

          <AnimateIn delay={150} className="space-y-8 text-lg leading-relaxed opacity-80 font-light mt-16">
            <p>
              Step Up PH offers a comfortable and well-structured learning space designed to support focus, productivity, and effective learning. Our center is set up for one-on-one, small group, and hybrid sessions, allowing us to provide personalized attention while maintaining flexibility for each learner's needs.
            </p>
            <p>
              We maintain a professional yet welcoming atmosphere where learners can feel confident, motivated, and fully supported throughout their learning journey. Every session is conducted in a space that promotes discipline, comfort, and consistent progress.
            </p>
          </AnimateIn>

          <div className="grid md:grid-cols-2 gap-6 mt-16">
            {[
              'Quiet and focused study space',
              'One-on-one, small group, and hybrid setup',
              'Complete learning materials provided',
              'Comfortable and learner-friendly setting',
            ].map((text, i) => (
              <AnimateIn key={text} delay={i * 80}>
                <CenterFeature text={text} />
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-32 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#8B0000] to-transparent" />

        <div className="max-w-2xl mx-auto">
          <AnimateIn>
            <SectionTitle>Contact Us</SectionTitle>
          </AnimateIn>

          <AnimateIn delay={100} className="mt-6 text-center space-y-2">
            <p className="text-base opacity-60 font-light">Ready to step up your skills and unlock greater opportunities?</p>
            <p className="text-base opacity-60 font-light">Get in touch with us to start your journey.</p>
          </AnimateIn>

          <AnimateIn delay={200}>
            <form onSubmit={handleFormSubmit} className="mt-14 space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs tracking-widest opacity-50">FULL NAME</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={e => setFormData(p => ({ ...p, name: e.target.value }))}
                    className="w-full border-b border-black/20 focus:border-[#8B0000] outline-none py-3 text-sm font-light bg-transparent transition-colors duration-200"
                    placeholder="Juan dela Cruz"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs tracking-widest opacity-50">EMAIL ADDRESS</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={e => setFormData(p => ({ ...p, email: e.target.value }))}
                    className="w-full border-b border-black/20 focus:border-[#8B0000] outline-none py-3 text-sm font-light bg-transparent transition-colors duration-200"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs tracking-widest opacity-50">PROGRAM OF INTEREST</label>
                <select
                  value={formData.program}
                  onChange={e => setFormData(p => ({ ...p, program: e.target.value }))}
                  className="w-full border-b border-black/20 focus:border-[#8B0000] outline-none py-3 text-sm font-light bg-transparent transition-colors duration-200 appearance-none cursor-pointer"
                >
                  <option value="">Select a program</option>
                  <option>Conversational English</option>
                  <option>Pronunciation &amp; Accent Training</option>
                  <option>Business English</option>
                  <option>Job Readiness Course</option>
                  <option>BPO / Call Center Training</option>
                  <option>IELTS Review</option>
                  <option>CELPIP Review</option>
                  <option>English for Abroad</option>
                  <option>General Inquiry</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs tracking-widest opacity-50">MESSAGE</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={e => setFormData(p => ({ ...p, message: e.target.value }))}
                  className="w-full border-b border-black/20 focus:border-[#8B0000] outline-none py-3 text-sm font-light bg-transparent transition-colors duration-200 resize-none"
                  placeholder="Tell us about your goals..."
                />
              </div>

              <div className="pt-4">
                {formStatus === 'success' ? (
                  <div className="text-center py-4">
                    <div className="text-[#8B0000] tracking-wider text-sm mb-1">Message Sent</div>
                    <p className="text-sm opacity-60 font-light">We'll get back to you shortly.</p>
                  </div>
                ) : (
                  <button
                    type="submit"
                    disabled={formStatus === 'sending'}
                    className="group relative w-full sm:w-auto px-12 py-4 bg-[#8B0000] text-white overflow-hidden transition-all duration-300 hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    <span className="relative z-10 tracking-widest text-sm">
                      {formStatus === 'sending' ? 'SENDING...' : 'SEND MESSAGE'}
                    </span>
                    <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  </button>
                )}
                {formStatus === 'error' && (
                  <p className="mt-3 text-sm text-[#8B0000] opacity-70">Something went wrong. Please try again.</p>
                )}
              </div>
            </form>
          </AnimateIn>
        </div>
      </section>

      {/* Step Up Canada Portal Section */}
      <section className="py-24 px-6 md:px-12 bg-[#F5F5F5]">
        <div className="max-w-5xl mx-auto">
          <AnimateIn>
            <div className="border border-black/10 bg-white p-10 md:p-14 relative overflow-hidden">
              {/* Red accent corner */}
              <div className="absolute top-0 left-0 w-1 h-full bg-[#8B0000]" />

              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10 pl-6">
                <div className="flex-1">
                  <div className="text-xs tracking-widest text-[#8B0000] mb-4">ONLINE PLATFORM</div>
                  <h3 className="text-2xl md:text-3xl tracking-wide font-light mb-4">
                    Step Up Canada — Student Portal
                  </h3>
                  <p className="text-base opacity-70 font-light leading-relaxed max-w-xl">
                    Access our online test simulation system designed to help you practice and prepare for your exams from anywhere. Track your progress, take mock tests, and sharpen your skills before the real thing.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-6 text-sm opacity-50 font-light">
                    <span>✓ Mock exam simulations</span>
                    <span>✓ Progress tracking</span>
                    <span>✓ Practice anytime, anywhere</span>
                    <span>✓ 1 on 1 booking session</span>
                  </div>
                </div>

                <div className="flex-shrink-0">
                  <a
                    href="https://www.stepupcanada.online/login"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center gap-3 px-10 py-5 bg-[#8B0000] text-white overflow-hidden transition-all duration-300 hover:shadow-lg"
                  >
                    <span className="relative z-10 tracking-widest text-sm">ACCESS PORTAL</span>
                    <span className="relative z-10 text-lg transition-transform duration-300 group-hover:translate-x-1">↗</span>
                    <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  </a>
                  <div className="mt-3 text-xs opacity-40 text-center tracking-wide">stepupcanada.online</div>
                </div>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0A0A0A] text-white">
        <div className="h-px bg-gradient-to-r from-transparent via-[#8B0000] to-transparent" />
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-16">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10">
            <div>
              <div className="text-2xl tracking-[0.25em] font-light text-white mb-1">
                STEP UP <span className="text-[#8B0000]">PH</span>
              </div>
              <div className="text-xs tracking-widest opacity-40 uppercase">
                by Bridgeway Educational Consultancy Services
              </div>
            </div>
            <div className="flex flex-wrap gap-x-10 gap-y-3 text-xs tracking-widest opacity-50">
              {[
                { label: 'About', id: 'about' },
                { label: 'Programs', id: 'programs' },
                { label: 'How It Works', id: 'how-it-works' },
                { label: 'Contact', id: 'contact' },
              ].map(({ label, id }) => (
                <button key={id} onClick={() => scrollToSection(id)} className="hover:opacity-100 hover:text-[#8B0000] transition-all duration-200">
                  {label.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 text-xs">
            <div className="flex flex-col gap-1">
              <span className="opacity-30">© 2026 Step Up PH. All rights reserved.</span>
              <div className="flex flex-col sm:flex-row gap-1 sm:gap-4 opacity-50">
                <a href="mailto:admin@stepupcanada.online" className="hover:text-[#8B0000] hover:opacity-100 transition-all duration-200">admin@stepupcanada.online</a>
                <a href="mailto:info@stepupcanada.online" className="hover:text-[#8B0000] hover:opacity-100 transition-all duration-200">info@stepupcanada.online</a>
              </div>
            </div>
            <a
              href="https://www.stepupcanada.online/login"
              target="_blank"
              rel="noopener noreferrer"
              className="tracking-widest bg-white text-[#8B0000] px-3 py-1 hover:bg-[#8B0000] hover:text-white transition-all duration-200 self-start sm:self-auto"
            >
              STEP UP CANADA ↗
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function NavLink({ onClick, children, light }: { onClick: () => void; children: React.ReactNode; light?: boolean }) {
  return (
    <button
      onClick={onClick}
      className={`text-sm tracking-wider font-light transition-colors relative group ${
        light ? 'text-white/80 hover:text-white' : 'text-black hover:text-[#8B0000]'
      }`}
    >
      {children}
      <span className={`absolute -bottom-1 left-0 w-0 h-px group-hover:w-full transition-all duration-300 ${light ? 'bg-white' : 'bg-[#8B0000]'}`} />
    </button>
  );
}

function MobileNavLink({ onClick, children }: { onClick: () => void; children: React.ReactNode }) {
  return (
    <button onClick={onClick} className="block w-full text-left py-2 tracking-wider font-light hover:text-[#8B0000] transition-colors">
      {children}
    </button>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-center">
      <div className="inline-block relative">
        <div className="absolute -left-20 top-1/2 w-12 h-px bg-[#8B0000]" />
        <div className="absolute -right-20 top-1/2 w-12 h-px bg-[#8B0000]" />
        <h2 className="tracking-[0.2em] text-[clamp(1.5rem,4vw,2.5rem)] font-light">{children}</h2>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="group relative" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <div className={`absolute -top-4 -left-4 w-full h-full border border-[#8B0000] transition-all duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
      <div className="relative bg-white p-8 border border-black/5 transition-all duration-300 hover:-translate-y-1">
        <div className="text-[#8B0000] mb-6 transition-transform duration-300 group-hover:scale-110">{icon}</div>
        <h3 className="mb-4 tracking-wide">{title}</h3>
        <p className="text-sm leading-relaxed opacity-70 font-light">{description}</p>
      </div>
    </div>
  );
}

function ProcessStep({ number, title, description }: { number: string; title: string; description: string }) {
  return (
    <div className="flex gap-8 group">
      <div className="flex-shrink-0">
        <div className="relative">
          <div className="text-[4rem] font-light text-[#8B0000] opacity-20 leading-none">{number}</div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-[#8B0000] transition-all duration-500 group-hover:w-[200%]" />
        </div>
      </div>
      <div className="flex-1 pt-4">
        <h3 className="mb-3 tracking-wide">{title}</h3>
        <p className="text-base leading-relaxed opacity-70 font-light">{description}</p>
      </div>
    </div>
  );
}

function ProgramCategory({ icon, title, programs }: { icon: React.ReactNode; title: string; programs: Array<{ name: string; subtitle: string; description: string }> }) {
  return (
    <div>
      <div className="flex items-center gap-4 mb-8">
        <div className="text-[#8B0000]">{icon}</div>
        <h3 className="text-2xl tracking-wide">{title}</h3>
      </div>
      <div className="space-y-8 pl-12 border-l border-black/10">
        {programs.map((program, index) => (
          <div key={index} className="relative">
            <div className="absolute -left-12 top-2 w-8 h-px bg-[#8B0000]" />
            <div>
              <div className="mb-1">{program.name}</div>
              <div className="text-sm opacity-50 mb-3 italic">{program.subtitle}</div>
              <p className="text-sm leading-relaxed opacity-70 font-light">{program.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CenterFeature({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3 p-4 border border-black/5 bg-white transition-all duration-300 hover:border-[#8B0000]/30">
      <HiOutlineCheckCircle className="w-5 h-5 text-[#8B0000] flex-shrink-0 mt-0.5" />
      <span className="text-sm opacity-80 font-light">{text}</span>
    </div>
  );
}
