import { useState } from "react";
import emailjs from "@emailjs/browser";
import { AnimateIn } from "../components/AnimateIn";

type Tab = "jobseeker" | "agency" | "employer";

const TAB_CONFIG: Record<
  Tab,
  { label: string; cta: string; placeholder: string; subject: string }
> = {
  jobseeker: {
    label: "Job Seeker",
    cta: "JOIN UPCOMING BATCH",
    placeholder:
      "Tell us about your career goals and which program interests you...",
    subject: "Job Seeker Inquiry",
  },
  agency: {
    label: "Recruitment Agency",
    cta: "BECOME A PARTNER",
    placeholder: "Tell us about your agency and your partnership interest...",
    subject: "Recruitment Agency Partnership",
  },
  employer: {
    label: "Employer / Hiring Company",
    cta: "REQUEST STAFF",
    placeholder:
      "Tell us about your staffing requirements and the roles you need to fill...",
    subject: "Employer Staffing Inquiry",
  },
};

export default function Contact() {
  const [activeTab, setActiveTab] = useState<Tab>("jobseeker");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    program: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("sending");
    try {
      await emailjs.send(
        "service_togvp1n",
        "template_oacoo9o",
        {
          form_type: TAB_CONFIG[activeTab].label,
          from_name: formData.name,
          from_email: formData.email,
          program: `[${TAB_CONFIG[activeTab].subject}] ${formData.program || formData.company || ""}`,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );
      setFormStatus("success");
      setFormData({
        name: "",
        email: "",
        company: "",
        program: "",
        message: "",
      });
    } catch {
      setFormStatus("error");
    }
  };

  const cfg = TAB_CONFIG[activeTab];

  return (
    <>
      {/* Page Header */}
      <section className="pt-40 pb-20 px-6 md:px-12 bg-[#0A0A0A] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#8B0000]/20 to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="text-xs tracking-[0.3em] text-[#8B0000] mb-4">
            REACH OUT
          </div>
          <h1 className="text-white text-4xl md:text-5xl font-light tracking-wide">
            Contact Us
          </h1>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Left — Info */}
            <AnimateIn direction="left">
              <div className="space-y-8">
                <div>
                  <div className="text-xs tracking-widest text-[#8B0000] mb-3">
                    ADDRESS
                  </div>
                  <p className="text-sm font-light opacity-65 leading-relaxed mb-4">
                    2nd Floor, Unit F Joaquin Dionisio Bldg.
                    <br />
                    Bayuga St. Brgy. Poblacion East
                    <br />
                    Science City of Muñoz, Nueva Ecija
                    <br />
                    Philippines
                  </p>
                  <div className="w-full h-44 overflow-hidden border border-black/10">
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
                  <div className="text-xs tracking-widest text-[#8B0000] mb-2">
                    LANDLINE
                  </div>
                  <p className="text-sm font-light opacity-65">
                    (044) 950-4443
                  </p>
                </div>

                <div>
                  <div className="text-xs tracking-widests text-[#8B0000] mb-2">
                    MOBILE
                  </div>
                  <p className="text-sm font-light opacity-65">
                    (0927) 947 9290
                  </p>
                  <p className="text-sm font-light opacity-65">
                    (0961) 632 1989
                  </p>
                </div>

                <div>
                  <div className="text-xs tracking-widests text-[#8B0000] mb-2">
                    EMAIL
                  </div>
                  <a
                    href="mailto:stepuphilippines@gmail.com"
                    className="text-sm font-light opacity-65 hover:text-[#8B0000] hover:opacity-100 transition-all block"
                  >
                    stepuphilippines@gmail.com
                  </a>

                  <a
                    href="mailto:info@stepupcanada.online"
                    className="text-sm font-light opacity-65 hover:text-[#8B0000] hover:opacity-100 transition-all block"
                  >
                    info@stepupphilippines.online
                  </a>
                </div>
              </div>
            </AnimateIn>

            {/* Right — Form */}
            <AnimateIn delay={100}>
              {/* Inquiry Type Tabs */}
              <div className="mb-8">
                <div className="text-xs tracking-widests opacity-50 mb-3">
                  I AM A...
                </div>
                <div className="flex flex-col sm:flex-row gap-2">
                  {(Object.keys(TAB_CONFIG) as Tab[]).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => {
                        setActiveTab(tab);
                        setFormStatus("idle");
                      }}
                      className={`px-4 py-2.5 text-xs tracking-widest transition-all duration-200 ${
                        activeTab === tab
                          ? "bg-[#8B0000] text-white"
                          : "border border-black/20 hover:border-[#8B0000]"
                      }`}
                    >
                      {TAB_CONFIG[tab].label.toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>

              {formStatus === "success" ? (
                <div className="text-center py-16 border border-black/5 bg-[#F5F5F5]">
                  <div className="text-[#8B0000] tracking-wider text-sm mb-2">
                    Message Sent
                  </div>
                  <p className="text-sm opacity-55 font-light">
                    We'll get back to you shortly.
                  </p>
                  <button
                    onClick={() => setFormStatus("idle")}
                    className="mt-6 text-xs tracking-widests text-[#8B0000] hover:opacity-70 transition-opacity"
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs tracking-widests opacity-50">
                        FULL NAME *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData((p) => ({ ...p, name: e.target.value }))
                        }
                        className="w-full border-b border-black/20 focus:border-[#8B0000] outline-none py-3 text-sm font-light bg-transparent transition-colors"
                        placeholder="Juan dela Cruz"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs tracking-widests opacity-50">
                        EMAIL ADDRESS *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData((p) => ({ ...p, email: e.target.value }))
                        }
                        className="w-full border-b border-black/20 focus:border-[#8B0000] outline-none py-3 text-sm font-light bg-transparent transition-colors"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>

                  {activeTab === "jobseeker" && (
                    <div className="space-y-2">
                      <label className="text-xs tracking-widests opacity-50">
                        PROGRAM OF INTEREST
                      </label>
                      <select
                        value={formData.program}
                        onChange={(e) =>
                          setFormData((p) => ({
                            ...p,
                            program: e.target.value,
                          }))
                        }
                        className="w-full border-b border-black/20 focus:border-[#8B0000] outline-none py-3 text-sm font-light bg-transparent transition-colors appearance-none cursor-pointer"
                      >
                        <option value="">Select a program</option>
                        <option>
                          Job Readiness Intensive Bootcamp (5 days)
                        </option>
                        <option>BPO Career Readiness Program (7 days)</option>
                        <option>
                          Virtual Assistant Career Program (10 days)
                        </option>
                        <option>General Inquiry</option>
                      </select>
                    </div>
                  )}

                  {(activeTab === "agency" || activeTab === "employer") && (
                    <div className="space-y-2">
                      <label className="text-xs tracking-widests opacity-50">
                        COMPANY / AGENCY NAME
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) =>
                          setFormData((p) => ({
                            ...p,
                            company: e.target.value,
                          }))
                        }
                        className="w-full border-b border-black/20 focus:border-[#8B0000] outline-none py-3 text-sm font-light bg-transparent transition-colors"
                        placeholder="Your company or agency name"
                      />
                    </div>
                  )}

                  <div className="space-y-2">
                    <label className="text-xs tracking-widests opacity-50">
                      MESSAGE *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData((p) => ({ ...p, message: e.target.value }))
                      }
                      className="w-full border-b border-black/20 focus:border-[#8B0000] outline-none py-3 text-sm font-light bg-transparent transition-colors resize-none"
                      placeholder={cfg.placeholder}
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={formStatus === "sending"}
                      className="group relative px-12 py-4 bg-[#8B0000] text-white overflow-hidden transition-all duration-300 hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      <span className="relative z-10 tracking-widests text-sm">
                        {formStatus === "sending" ? "SENDING..." : cfg.cta}
                      </span>
                      <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    </button>
                    {formStatus === "error" && (
                      <p className="mt-3 text-sm text-[#8B0000] opacity-70">
                        Something went wrong. Please try again.
                      </p>
                    )}
                  </div>
                </form>
              )}
            </AnimateIn>
          </div>
        </div>
      </section>
    </>
  );
}
