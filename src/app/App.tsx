import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import heroImg from '../imports/hero.jpg';
import logoImg from '../imports/WhatsApp_Image_2026-04-10_at_4.26.19_PM.jpeg';

emailjs.init('sIAURMIM1n67a8qeS');
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
      await emailjs.send('service_togvp1n', 'template_oacoo9o', {
        from_name: formData.name,
        from_email: formData.email,
        program: formData.program || 'General Inquiry',
        message: formData.message,
      });
      setFormStatus('success');
      setFormData({ name: '', email: '', program: '', message: '' });
    } catch {
      setFormStatus('error');
    }
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
                src={logoImg}
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
              <button
                onClick={() => scrollToSection('stepupcanada')}
                className="group relative px-5 py-2 text-xs tracking-widest bg-white text-[#8B0000] border border-[#8B0000] overflow-hidden transition-all duration-300 hover:text-white"
              >
                <span className="relative z-10">STEP UP CANADA</span>
                <div className="absolute inset-0 bg-[#8B0000] translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
              </button>
            </div>

            {/* Animated Hamburger Button */}
            <button
              className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px] group"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span className={`block h-[2px] w-6 transition-all duration-300 ease-in-out origin-center ${
                mobileMenuOpen
                  ? 'rotate-45 translate-y-[7px] bg-[#8B0000]'
                  : `${scrolled ? 'bg-black' : 'bg-white'} group-hover:bg-[#8B0000]`
              }`} />
              <span className={`block h-[2px] transition-all duration-200 ease-in-out ${
                mobileMenuOpen ? 'w-0 opacity-0 bg-[#8B0000]' : `w-6 opacity-100 ${scrolled ? 'bg-black' : 'bg-white'} group-hover:bg-[#8B0000]`
              }`} />
              <span className={`block h-[2px] w-6 transition-all duration-300 ease-in-out origin-center ${
                mobileMenuOpen
                  ? '-rotate-45 -translate-y-[7px] bg-[#8B0000]'
                  : `${scrolled ? 'bg-black' : 'bg-white'} group-hover:bg-[#8B0000]`
              }`} />
            </button>
          </div>
        </div>

        {/* Mobile Menu — slide down */}
        <div className={`md:hidden overflow-hidden transition-all duration-400 ease-in-out ${
          mobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-white border-t border-black/5">
            <div className="px-6 py-4 space-y-1">
              {[
                { label: 'About', id: 'about' },
                { label: 'Why Choose Us', id: 'why-choose-us' },
                { label: 'How It Works', id: 'how-it-works' },
                { label: 'Programs', id: 'programs' },
                { label: 'Contact', id: 'contact' },
              ].map(({ label, id }, i) => (
                <div
                  key={id}
                  className={`transition-all duration-300 ${mobileMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
                  style={{ transitionDelay: mobileMenuOpen ? `${i * 50 + 100}ms` : '0ms' }}
                >
                  <MobileNavLink onClick={() => scrollToSection(id)}>{label}</MobileNavLink>
                </div>
              ))}
              <div
                className={`pt-3 border-t border-black/5 transition-all duration-300 ${mobileMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
                style={{ transitionDelay: mobileMenuOpen ? '350ms' : '0ms' }}
              >
                <button
                  onClick={() => scrollToSection('stepupcanada')}
                  className="block py-2 text-xs tracking-widest text-[#8B0000] font-light hover:opacity-70 transition-opacity"
                >
                  STEP UP CANADA
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section — full screen image */}
      <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background image */}
        <img
          src={heroImg}
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

            {/* Trusted badge — mobile (inline) */}
            <div
              className={`mt-8 md:hidden inline-flex items-center gap-4 bg-white/10 backdrop-blur-sm border border-white/20 px-5 py-4 transition-all duration-1000 delay-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              <div className="h-8 w-px bg-[#8B0000]" />
              <div>
                <div className="text-white/50 text-xs tracking-widest">TRUSTED BY</div>
                <div className="text-white tracking-wide font-light">500+ Students</div>
              </div>
            </div>
          </div>

          {/* Trusted badge — desktop (absolute) */}
          <div
            className={`hidden md:block absolute bottom-12 right-12 bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-5 transition-all duration-1000 delay-1000 ${
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
      <section id="how-it-works" className="py-32 bg-[#F5F5F5] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <AnimateIn>
            <div className="text-center mb-20">
              <div className="inline-block relative">
                <div className="absolute -left-20 top-1/2 w-12 h-px bg-[#8B0000]" />
                <div className="absolute -right-20 top-1/2 w-12 h-px bg-[#8B0000]" />
                <h2 className="tracking-[0.2em] text-[clamp(1.5rem,4vw,2.5rem)] font-light text-black">How It Works</h2>
              </div>
            </div>
          </AnimateIn>

          <div className="space-y-4">
            {[
              { number: '01', title: 'Initial Consultation & Assessment', description: 'We start with a one-on-one session to understand your goals, current level, and specific needs — creating a learning plan aligned with what you want to achieve.', image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80', imagePosition: 'center' },
              { number: '02', title: 'Program Recommendation', description: 'Based on your goals and assessment results, we recommend the most suitable program and structured learning plan tailored to your objectives.', image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80' },
              { number: '03', title: 'Structured Training Sessions', description: 'Attend guided sessions led by experienced instructors, following a strategic and results-oriented approach designed to build real-world skills.', image: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=800&q=80' },
              { number: '04', title: 'Re-Assessment & Development Review', description: 'We conduct follow-up assessments to evaluate your progress and refine your learning plan, ensuring you stay on track toward your goals.', image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80' },
              { number: '05', title: 'Continuous Feedback & Progress Monitoring', description: 'Receive consistent feedback and track your improvement through ongoing performance monitoring, ensuring steady and measurable results.', image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=800&q=80' },
              { number: '06', title: 'Achieve Your Goals', description: 'With the right guidance and structure, you gain the skills, confidence, and readiness needed to succeed in your career, exams, or global opportunities.', image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80' },
            ].map((step, i) => (
              <AnimateIn key={step.number} delay={i * 60} direction={i % 2 === 0 ? 'left' : 'right'}>
                <ProcessStep number={step.number} title={step.title} description={step.description} image={step.image} reverse={i % 2 !== 0} imagePosition={(step as any).imagePosition} />
              </AnimateIn>
            ))}
          </div>

          <AnimateIn delay={200} className="mt-16 text-center">
            <p className="text-base text-black/40 font-light italic tracking-wide">
              Your progress is guided every step of the way — from your first session to achieving real, measurable results.
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

        <div className="max-w-6xl mx-auto">
          <AnimateIn>
            <SectionTitle>Contact Us</SectionTitle>
          </AnimateIn>

          <div className="mt-16 grid md:grid-cols-2 gap-16 items-start">

            {/* Left — Contact Info */}
            <AnimateIn delay={100} direction="left">
              <p className="text-base opacity-60 font-light mb-10">
                Ready to step up your skills and unlock greater opportunities? Get in touch with us to start your journey.
              </p>

              <div className="space-y-8">
                <div>
                  <div className="text-xs tracking-widests text-[#8B0000] mb-3">ADDRESS</div>
                  <p className="text-sm font-light opacity-70 leading-relaxed mb-4">
                    2nd Floor, Unit F Joaquin Dionisio Bldg.<br />
                    Bayuga St. Brgy. Poblacion East<br />
                    Science City of Muñoz, Nueva Ecija<br />
                    Philippines
                  </p>
                  {/* Map embed */}
                  <div className="w-full h-48 overflow-hidden border border-black/10">
                    <iframe
                      title="Step Up PH Location"
                      src="https://www.google.com/maps?q=Science+City+of+Munoz+Nueva+Ecija+Philippines&output=embed"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>

                <div>
                  <div className="text-xs tracking-widest text-[#8B0000] mb-2">LANDLINE</div>
                  <p className="text-sm font-light opacity-70">(044) 950-4443</p>
                </div>

                <div>
                  <div className="text-xs tracking-widest text-[#8B0000] mb-2">MOBILE</div>
                  <p className="text-sm font-light opacity-70">(0927) 947 9290</p>
                  <p className="text-sm font-light opacity-70">(0961) 632 1989</p>
                </div>

                <div>
                  <div className="text-xs tracking-widest text-[#8B0000] mb-2">EMAIL</div>
                  <a href="mailto:admin@stepupcanada.online" className="text-sm font-light opacity-70 hover:opacity-100 hover:text-[#8B0000] transition-all duration-200 block">admin@stepupcanada.online</a>
                  <a href="mailto:info@stepupcanada.online" className="text-sm font-light opacity-70 hover:opacity-100 hover:text-[#8B0000] transition-all duration-200 block">info@stepupcanada.online</a>
                </div>
              </div>
            </AnimateIn>

            {/* Right — Form */}
            <AnimateIn delay={200}>
            <form onSubmit={handleFormSubmit} className="space-y-6">
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
        </div>
      </section>

      {/* Step Up Canada Portal Section */}
      <section id="stepupcanada" className="py-24 px-6 md:px-12 bg-[#F5F5F5]">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <AnimateIn>
            <div className="mb-12">
              <div className="text-xs tracking-widest text-[#8B0000] mb-3">STEP UP CANADA</div>
              <h2 className="text-3xl md:text-4xl tracking-wide font-light">Online Learning Platform</h2>
              <div className="mt-4 h-px w-12 bg-[#8B0000]" />
            </div>
          </AnimateIn>

          {/* Two-column layout: portal info left, sample test right */}
          <div className="grid md:grid-cols-2 gap-6 items-stretch">
            {/* Portal card */}
            <AnimateIn>
              <div className="border border-black/10 bg-white p-10 relative overflow-hidden h-full">
                <div className="absolute top-0 left-0 w-1 h-full bg-[#8B0000]" />
                <div className="pl-4">
                  <div className="text-xs tracking-widest text-[#8B0000] mb-4">STUDENT PORTAL</div>
                  <h3 className="text-xl md:text-2xl tracking-wide font-light mb-4">
                    Step Up Canada — Student Portal
                  </h3>
                  <p className="text-sm opacity-70 font-light leading-relaxed">
                    Access our online test simulation system designed to help you practice and prepare for your exams from anywhere. Track your progress, take mock tests, and sharpen your skills before the real thing.
                  </p>
                  <div className="mt-6 space-y-2 text-sm opacity-50 font-light">
                    <div>✓ Mock exam simulations</div>
                    <div>✓ Progress tracking</div>
                    <div>✓ Practice anytime, anywhere</div>
                    <div>✓ 1 on 1 booking session</div>
                  </div>
                  <div className="mt-8">
                    <a
                      href="https://www.stepupcanada.online/signup"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative inline-flex items-center gap-3 px-8 py-4 bg-[#8B0000] text-white overflow-hidden transition-all duration-300 hover:shadow-lg"
                    >
                      <span className="relative z-10 tracking-widest text-sm">ACCESS PORTAL</span>
                      <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    </a>
                    <div className="mt-3 text-xs opacity-40 tracking-wide">stepupcanada.online</div>
                  </div>
                </div>
              </div>
            </AnimateIn>

            {/* Sample test card */}
            <AnimateIn delay={150}>
              <div className="border border-black/10 bg-white relative overflow-hidden h-full flex flex-col">
                <div className="absolute top-0 left-0 w-1 h-full bg-[#8B0000]" />
                <div className="pl-4 flex flex-col flex-1">
                  <div className="border-b border-black/5 px-6 py-5 flex items-center justify-between">
                    <div>
                      <div className="text-xs tracking-widest text-[#8B0000] mb-1">SAMPLE TEST</div>
                      <div className="text-sm font-light tracking-wide">Grammar &amp; Vocabulary — Quick Assessment</div>
                    </div>
                    <div className="text-xs opacity-30 tracking-widest hidden sm:block">5 QUESTIONS</div>
                  </div>
                  <div className="p-6 flex-1"><MiniTest /></div>
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0A0A0A] text-white">
        <div className="h-px bg-gradient-to-r from-transparent via-[#8B0000] to-transparent" />
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-16">
          <div className="grid md:grid-cols-3 gap-10">
            {/* Brand */}
            <div>
              <div className="text-2xl tracking-[0.25em] font-light text-white mb-1">
                STEP UP <span className="text-[#8B0000]">PH</span>
              </div>
              <div className="text-xs tracking-widest opacity-40 uppercase mb-6">
                by Bridgeway Educational Consultancy Services
              </div>
              <div className="flex flex-wrap gap-x-8 gap-y-3 text-xs tracking-widest opacity-50">
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

            {/* Address */}
            <div>
              <div className="text-xs tracking-widest text-[#8B0000] mb-3">FIND US</div>
              <p className="text-xs opacity-50 font-light leading-relaxed">
                2nd Floor, Unit F Joaquin Dionisio Bldg.<br />
                Bayuga St. Brgy. Poblacion East<br />
                Science City of Muñoz, Nueva Ecija<br />
                Philippines
              </p>
            </div>

            {/* Contact details */}
            <div>
              <div className="text-xs tracking-widest text-[#8B0000] mb-3">CONTACT</div>
              <div className="space-y-1 text-xs opacity-50 font-light">
                <p>(044) 950-4443</p>
                <p>(0927) 947 9290</p>
                <p>(0961) 632 1989</p>
                <div className="pt-2 space-y-1">
                  <a href="mailto:info@stepupcanada.online" className="block hover:text-[#8B0000] hover:opacity-100 transition-all duration-200">info@stepupcanada.online</a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 text-xs">
            <span className="opacity-30">© 2026 Step Up PH. All rights reserved.</span>
            <a
              href="https://www.stepupcanada.online/signup"
              target="_blank"
              rel="noopener noreferrer"
              className="tracking-widest bg-white text-[#8B0000] px-3 py-1 hover:bg-[#8B0000] hover:text-white transition-all duration-200 self-start sm:self-auto"
            >
              STEP UP CANADA
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

function ProcessStep({ number, title, description, image, reverse, imagePosition = 'center' }: { number: string; title: string; description: string; image: string; reverse?: boolean; imagePosition?: string }) {
  return (
    <div className={`group relative flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} h-auto md:h-72 overflow-hidden`}>

      {/* Image side */}
      <div className="relative w-full md:w-1/2 h-56 md:h-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          style={{ objectPosition: imagePosition }}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-all duration-500" />
        {/* Big number watermark on image */}
        <div className={`absolute bottom-0 ${reverse ? 'right-4' : 'left-4'} text-[8rem] font-light text-white/10 leading-none select-none`}>
          {number}
        </div>
        {/* Red corner accent */}
        <div className={`absolute top-0 ${reverse ? 'right-0' : 'left-0'} w-1 h-full bg-[#8B0000]`} />
      </div>

      {/* Content side */}
      <div className="relative w-full md:w-1/2 bg-white p-8 md:p-10 flex flex-col justify-center group-hover:bg-[#fafafa] transition-colors duration-300 border border-black/5">
        <div className="text-xs tracking-[0.3em] text-[#8B0000] mb-4">STEP {number}</div>
        <h3 className="text-black text-xl md:text-2xl font-light tracking-wide mb-4 leading-snug">{title}</h3>
        <div className="w-8 h-px bg-[#8B0000] mb-4" />
        <p className="text-black/50 text-sm leading-relaxed font-light">{description}</p>
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

const MINI_TEST_QUESTIONS = [
  {
    question: "Choose the correct sentence:",
    options: [
      "She don't know the answer.",
      "She doesn't knows the answer.",
      "She doesn't know the answer.",
      "She not know the answer.",
    ],
    answer: 2,
  },
  {
    question: "Select the word closest in meaning to 'diligent':",
    options: ["Lazy", "Hardworking", "Careless", "Restless"],
    answer: 1,
  },
  {
    question: "Which sentence uses the present perfect correctly?",
    options: [
      "I have went to Canada last year.",
      "I went to Canada last year.",
      "I have been to Canada last year.",
      "I have go to Canada before.",
    ],
    answer: 1,
  },
  {
    question: "Choose the correct preposition: 'She is good ___ English.'",
    options: ["in", "on", "at", "for"],
    answer: 2,
  },
  {
    question: "Which word best completes the sentence? 'The instructions were ___; no one understood them.'",
    options: ["clear", "ambiguous", "simple", "brief"],
    answer: 1,
  },
];

function MiniTest() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answers, setAnswers] = useState<(number | null)[]>(Array(MINI_TEST_QUESTIONS.length).fill(null));
  const [submitted, setSubmitted] = useState(false);

  const progress = ((current) / MINI_TEST_QUESTIONS.length) * 100;
  const q = MINI_TEST_QUESTIONS[current];

  function handleSelect(idx: number) {
    if (submitted) return;
    setSelected(idx);
  }

  function handleNext() {
    const updated = [...answers];
    updated[current] = selected;
    setAnswers(updated);
    if (current < MINI_TEST_QUESTIONS.length - 1) {
      setCurrent(current + 1);
      setSelected(updated[current + 1] ?? null);
    } else {
      setSubmitted(true);
    }
  }

  function handleRetry() {
    setCurrent(0);
    setSelected(null);
    setAnswers(Array(MINI_TEST_QUESTIONS.length).fill(null));
    setSubmitted(false);
  }

  if (submitted) {
    const score = answers.filter((a, i) => a === MINI_TEST_QUESTIONS[i].answer).length;
    const pct = (score / MINI_TEST_QUESTIONS.length) * 100;
    let band = "";
    let message = "";
    if (pct === 100) { band = "Excellent"; message = "Outstanding! You're well-prepared for advanced English exams."; }
    else if (pct >= 80) { band = "Proficient"; message = "Great work! A little more practice and you'll be exam-ready."; }
    else if (pct >= 60) { band = "Developing"; message = "Good foundation. Our program can help you reach your target score."; }
    else { band = "Beginner"; message = "No worries — this is exactly where Step Up Canada can help you grow."; }

    return (
      <div className="text-center py-4">
        <div className="text-xs tracking-widest text-[#8B0000] mb-2">YOUR RESULT</div>
        <div className="text-4xl font-light tracking-wide mb-1">{score}<span className="text-lg opacity-40">/{MINI_TEST_QUESTIONS.length}</span></div>
        <div className="text-sm tracking-widest font-light mb-1 text-[#8B0000]">{band}</div>
        <p className="text-sm opacity-60 font-light max-w-sm mx-auto mb-6">{message}</p>
        <div className="w-full bg-black/5 h-1.5 mb-6 rounded-full overflow-hidden">
          <div className="h-full bg-[#8B0000] transition-all duration-700" style={{ width: `${pct}%` }} />
        </div>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button onClick={handleRetry} className="px-6 py-3 border border-black/20 text-xs tracking-widest font-light hover:border-[#8B0000] transition-colors duration-200">
            TRY AGAIN
          </button>
          <a href="https://www.stepupcanada.online/signup" target="_blank" rel="noopener noreferrer"
            className="px-6 py-3 bg-[#8B0000] text-white text-xs tracking-widest font-light hover:bg-black transition-colors duration-200">
            TAKE FULL TEST
          </a>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Progress bar */}
      <div className="flex items-center gap-4 mb-6">
        <div className="flex-1 bg-black/5 h-1 rounded-full overflow-hidden">
          <div className="h-full bg-[#8B0000] transition-all duration-500" style={{ width: `${progress}%` }} />
        </div>
        <span className="text-xs tracking-widest opacity-40">{current + 1}/{MINI_TEST_QUESTIONS.length}</span>
      </div>

      <p className="text-sm font-light leading-relaxed mb-5 tracking-wide">{q.question}</p>

      <div className="space-y-2 mb-6">
        {q.options.map((opt, idx) => (
          <button
            key={idx}
            onClick={() => handleSelect(idx)}
            className={`w-full text-left px-4 py-3 text-sm font-light tracking-wide border transition-all duration-200 ${
              selected === idx
                ? "border-[#8B0000] bg-[#8B0000]/5 text-[#8B0000]"
                : "border-black/10 hover:border-[#8B0000]/40"
            }`}
          >
            <span className="opacity-40 mr-3 text-xs">{String.fromCharCode(65 + idx)}.</span>
            {opt}
          </button>
        ))}
      </div>

      <button
        onClick={handleNext}
        disabled={selected === null}
        className="px-8 py-3 bg-[#8B0000] text-white text-xs tracking-widest font-light disabled:opacity-30 disabled:cursor-not-allowed hover:bg-black transition-colors duration-200"
      >
        {current === MINI_TEST_QUESTIONS.length - 1 ? "SUBMIT" : "NEXT"}
      </button>
    </div>
  );
}
