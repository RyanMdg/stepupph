import { Link } from "react-router";
import { AnimateIn } from "../components/AnimateIn";
import Talento from "../../imports/talento.jpeg";
import Rsd from "../../imports/rsd.jpeg";
import Garuda from "../../imports/garuda.jpeg";
import Seveneleven from "../../imports/711.jpeg";
import BreadAndBerry from "../../imports/bread&berry.jpeg";
import MoonBakes from "../../imports/moon_bakes.jpeg";
import RggLogo from "../../imports/rggLogo.png";
import ReInforce from "../../imports/reenforce.jpeg";
import SanMig from "../../imports/sanmig.jpeg";
import Scads from "../../imports/scads.jpeg";
import Nexus from "../../imports/nexus.jpeg";
import BiancaPascual from "../../imports/BiancaPascual.jpeg";
import RisingBusiness from "../../imports/rising_business.jpeg";
import Episode8 from "../../imports/episode_8.jpeg";
import PacificCross from "../../imports/pacificCross.jpeg";
export default function PartnerNetwork() {
  const RecruitmentAgency = [
    {
      src: Talento,
      alt: "Talento-logo-img",
    },
    {
      src: Rsd,
      alt: "Rsd-logo-img",
    },
    {
      src: Garuda,
      alt: "Garuda-logo-img",
    },
    {
      src: ReInforce,
      alt: "ReInforce-logo-img",
    },
    {
      src: RggLogo,
      alt: "Rgg-logo-img",
    },
    {
      src: Scads,
      alt: "Scads-logo-img",
    },
    {
      src: Nexus,
      alt: "Nexus-logo-img",
    },
    {
      src: RisingBusiness,
      alt: "Rising-Business-logo-img",
    },
  ];

  const DirectHiringCompanies = [
    {
      src: Seveneleven,
      alt: "Garuda-logo-img",
    },
    {
      src: BreadAndBerry,
      alt: "BreadAndBerry-logo-img",
    },
    {
      src: MoonBakes,
      alt: "MoonBakes-logo-img",
    },
    {
      src: SanMig,
      alt: "Sanmig-logo-img",
    },
    {
      src: PacificCross,
      alt: "Pacific-Cross-logo-img",
    },
  ];

  const BenefitPartners = [
    {
      src: BiancaPascual,
      alt: "BiancaPascual-logo-img",
    },
    {
      src: Episode8,
      alt: "Episode8-logo-img",
    },
  ];
  return (
    <>
      {/* Page Header */}
      <section className="pt-40 pb-20 px-6 md:px-12 bg-[#0A0A0A] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#8B0000]/20 to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="text-xs tracking-[0.3em] text-[#8B0000] mb-4">
            COMPANY
          </div>
          <h1 className="text-white text-4xl md:text-5xl font-light tracking-wide leading-snug mb-6">
            Partner Network
          </h1>
          <p className="text-white/60 text-lg font-light leading-relaxed max-w-xl">
            Our growing ecosystem of recruitment agencies, manpower providers,
            and direct hiring companies.
          </p>
        </div>
      </section>

      {/* Partner Grid */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className=" mx-auto">
          <div className="grid md:grid-cols-3 gap-5">
            {/* Recruitment & Manpower Partners */}
            <AnimateIn>
              <div className="border border-black/5 p-10 h-full">
                <div className="text-xs tracking-[0.3em] text-[#8B0000] mb-6">
                  RECRUITMENT & MANPOWER PARTNERS
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  {RecruitmentAgency.map((logo) => (
                    <div
                      key={logo.alt}
                      className=" flex items-center justify-center  "
                    >
                      <img
                        src={logo.src}
                        alt={logo.alt}
                        className="w-full max-w-[320px] h-auto object-contain"
                      />
                    </div>
                  ))}
                </div>

                {/* <div className="mt-8 text-center">
                  <Link
                    to="/contact"
                    className="group relative inline-flex px-8 py-3 border border-[#8B0000] text-[#8B0000] overflow-hidden transition-all duration-300 text-xs tracking-widest"
                  >
                    <div className="absolute inset-0 bg-[#8B0000] translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                    <span className="relative z-10 group-hover:text-white transition-colors duration-300 absolute inset-0 flex items-center justify-center text-xs tracking-widest">
                      BECOME A RECRUITMENT PARTNER
                    </span>
                  </Link>
                </div> */}
              </div>
            </AnimateIn>

            {/* Direct Hiring Companies */}
            <AnimateIn delay={100}>
              <div className="border border-black/5 p-10 h-full">
                <div className="text-xs uppercase tracking-[0.3em] text-[#8B0000] mb-6">
                  Industry Partners
                </div>
                <div className="min-h-64 flex items-center justify-center ">
                  <div className="grid gap-5 sm:grid-cols-2">
                    {DirectHiringCompanies.map((logo) => (
                      <div
                        key={logo.alt}
                        className=" flex items-center justify-center  "
                      >
                        <img
                          src={logo.src}
                          alt={logo.alt}
                          className="w-full max-w-[320px] h-auto object-contain"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimateIn>
            <AnimateIn delay={100}>
              <div className="border border-black/5 p-10 h-full">
                <div className="text-xs tracking-[0.3em] text-[#8B0000] mb-6">
                  BENEFITS PARTNERS
                </div>
                <div className="min-h-64 flex items-center justify-center ">
                  <div className="grid gap-5 sm:grid-cols-2">
                    {BenefitPartners.map((logo) => (
                      <div
                        key={logo.alt}
                        className=" flex items-center justify-center  "
                      >
                        <img
                          src={logo.src}
                          alt={logo.alt}
                          className="w-full max-w-[320px] h-auto object-contain"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimateIn>
          </div>
          <div className="mt-8 text-center">
            <Link
              to="/contact"
              className="group relative inline-flex px-8 py-3 border border-[#8B0000] text-[#8B0000] overflow-hidden transition-all duration-300 text-xs tracking-widest"
            >
              <div className="absolute inset-0 bg-[#8B0000] translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
              <span className="relative z-10 group-hover:text-white transition-colors duration-300 absolute inset-0 flex items-center justify-center text-xs tracking-widest">
                PARTNER WITH US
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
