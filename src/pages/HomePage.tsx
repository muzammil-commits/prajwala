import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Eye,
  Target,
  Star,
  GraduationCap,
  HeartPulse,
  Users,
  Home,
  Baby,
  Scale,
  Trees,
  Briefcase,
  Award,
  Heart,
  CheckCircle2,
  Sparkles,
  Maximize2,
  ShieldCheck,
} from 'lucide-react';
import {
  ORG_INFO,
  ABOUT_TEXT,
  VISION_MISSION_VALUES,
  OBJECTIVES,
  ACTIVITIES,
  TARGET_BENEFICIARIES,
  IMPACT_METRICS,
  AWARDS,
  FUTURE_PLANS,
  GALLERY_ITEMS,
  WHY_SUPPORT_US,
} from '../data/pcdsData';
import {
  ScrollReveal,
  StaggerGrid,
  StaggerItem,
  CountUpNumber,
} from '../components/MotionPrimitives';
import {
  DonateModal,
  SectionPreviewModal,
  PreviewModalData,
  LightboxModal,
} from '../components/Modals';

const HERO_SLIDES = [
  {
    eyebrow: 'Together for a Better Tomorrow',
    title: 'Prajwala Community Development Society',
    badge: 'Guntur • Estd. 03 August 2019',
    tagline: 'Serving Humanity with Compassion, Dignity & Hope',
    motto: 'SERVE • EMPOWER • TRANSFORM',
    description:
      'A non-profit organization committed to improving the quality of life of underprivileged communities through sustainable social development initiatives.',
  },
  {
    eyebrow: 'Dignity & Care for Senior Citizens',
    title: 'PCDS Old Age Home & Community Healthcare',
    badge: '25 Residents • 46+ Senior Citizens Supported',
    tagline: 'Safe Shelter, Nutritious Food, Medical Care & Emotional Support',
    motto: 'CARE • RESPECT • BELONGING',
    description:
      'Operating our Old Age Home in Guntur alongside free medical camps, voluntary blood donation drives, and hair donation campaigns for cancer patients.',
  },
  {
    eyebrow: 'Empowering Women, Youth & Children',
    title: 'Education, Self-Defence & Legal Awareness',
    badge: '320+ Women Trained • 3,000+ Students Reached',
    tagline: 'Building Self-Reliant, Safe and Inclusive Communities',
    motto: 'LEARN • PROTECT • LEAD',
    description:
      'Driving women’s empowerment, child protection awareness (112 & 1098), free legal aid, vocational tailoring, and 6,515+ tree plantations.',
  },
];

const OBJECTIVE_ICONS: Record<string, React.ReactNode> = {
  GraduationCap: <GraduationCap className="w-6 h-6" />,
  HeartPulse: <HeartPulse className="w-6 h-6" />,
  Users: <Users className="w-6 h-6" />,
  Home: <Home className="w-6 h-6" />,
  Baby: <Baby className="w-6 h-6" />,
  Scale: <Scale className="w-6 h-6" />,
  Trees: <Trees className="w-6 h-6" />,
  Briefcase: <Briefcase className="w-6 h-6" />,
};

export const HomePage: React.FC = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [donateOpen, setDonateOpen] = useState(false);
  const [previewData, setPreviewData] = useState<PreviewModalData | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const currentSlide = HERO_SLIDES[slideIndex];

  return (
    <div className="space-y-0">
      {/* SECTION 01 — HERO SLIDER */}
      <section className="relative overflow-hidden min-h-[600px] md:min-h-[540px] lg:min-h-[580px] flex items-start md:items-center">
        {/* Desktop Hero Background (image copy 2.png) with animation */}
        <div className="hidden md:block absolute inset-0 -z-10 overflow-hidden">
          <img
            src="/assets/backgrounds/hero-desktop.png"
            alt="Prajwala Community Development Society Happy Children"
            className="w-full h-full object-cover object-right animate-hero-pan"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent w-[65%]" />
        </div>

        {/* Mobile Hero Background (image copy 3.png) with bright look in mobile view only */}
        <div className="block md:hidden absolute inset-0 -z-10 overflow-hidden">
          <img
            src="/assets/backgrounds/hero-mobile.png"
            alt="Prajwala Community Development Society Mobile Hero"
            className="w-full h-full object-cover object-bottom brightness-110 saturate-110 animate-hero-pan"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/65 to-transparent h-[65%]" />
        </div>

        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-64 md:py-16">
          <div className="max-w-xl lg:max-w-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={slideIndex}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4 }}
              >
                <p className="text-sm sm:text-base font-semibold italic text-[#078B3B]">
                  {currentSlide.eyebrow}
                </p>
                <h1 className="mt-1.5 text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#082F70] leading-[1.15] tracking-tight">
                  {currentSlide.title}
                </h1>
                <div className="mt-3 inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#078B3B] text-white text-xs sm:text-sm font-bold shadow-sm">
                  <span>{currentSlide.badge}</span>
                </div>
                <p className="mt-3 text-base sm:text-lg font-bold text-[#082F70]">
                  {currentSlide.tagline}
                </p>
                <p className="text-xs sm:text-sm font-extrabold tracking-widest text-[#0753A6] uppercase mt-0.5">
                  {currentSlide.motto}
                </p>
                <p className="mt-2.5 text-sm sm:text-base text-[#14294A] leading-relaxed max-w-lg">
                  {currentSlide.description}
                </p>
              </motion.div>
            </AnimatePresence>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#082F70] hover:bg-[#0753A6] text-white text-sm font-semibold shadow-md hover:shadow-lg transition-all"
              >
                <Users className="w-4 h-4" />
                <span>Get Involved</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <button
                onClick={() => setDonateOpen(true)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#D71920] hover:bg-[#b5141a] text-white text-sm font-semibold shadow-md hover:shadow-lg transition-all cursor-pointer"
              >
                <Heart className="w-4 h-4 fill-white" />
                <span>Donate Now</span>
              </button>
              <Link
                to="/organization/about-us"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-white/90 hover:bg-white text-[#082F70] border border-[#082F70]/25 text-sm font-semibold shadow-sm transition-all"
              >
                <span>Learn More</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Slider Controls */}
        <button
          type="button"
          onClick={() => setSlideIndex((i) => (i - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)}
          aria-label="Previous slide"
          className="hidden sm:flex absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/35 hover:bg-[#082F70] text-white items-center justify-center transition-colors cursor-pointer"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          type="button"
          onClick={() => setSlideIndex((i) => (i + 1) % HERO_SLIDES.length)}
          aria-label="Next slide"
          className="hidden sm:flex absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/35 hover:bg-[#082F70] text-white items-center justify-center transition-colors cursor-pointer"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
          {HERO_SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setSlideIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2.5 rounded-full transition-all cursor-pointer ${
                idx === slideIndex ? 'w-7 bg-[#082F70]' : 'w-2.5 bg-[#082F70]/35 hover:bg-[#082F70]/60'
              }`}
            />
          ))}
        </div>
      </section>

      {/* SECTION 02 — ABOUT US */}
      <section className="py-16 md:py-20 bg-white/85 backdrop-blur-sm border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <ScrollReveal direction="left" className="lg:col-span-4">
            <div className="rounded-3xl overflow-hidden shadow-lg border border-slate-200/80 aspect-[4/3]">
              <img
                src="/assets/gallery/about-sapling.svg"
                alt="Growing Together Since 2019 - PCDS Guntur"
                className="w-full h-full object-cover"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.08} className="lg:col-span-4 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#078B3B]">
              <span className="w-6 h-0.5 bg-[#078B3B]" />
              <span>About Us</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#082F70] leading-tight">
              Prajwala Community Development Society
            </h2>
            <p className="text-sm sm:text-base text-[#14294A] leading-relaxed">
              {ABOUT_TEXT.intro}
            </p>
            <div className="flex flex-wrap gap-3 pt-1">
              <Link
                to="/organization/about-us"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#082F70] hover:bg-[#0753A6] text-white text-sm font-semibold shadow-sm transition-all"
              >
                <span>Know More</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <button
                onClick={() =>
                  setPreviewData({
                    title: 'About Prajwala Community Development Society',
                    category: 'Established 03 August 2019 • Guntur',
                    image: '/assets/gallery/about-sapling.svg',
                    description: `${ABOUT_TEXT.intro} ${ABOUT_TEXT.missionParagraph}`,
                    bullets: [
                      'Registered Non-Profit Society (Regd. No: 240/2019)',
                      '12A & 80G Tax-Exempted & CSR-1 Registered',
                      'Operating PCDS Old Age Home in Sangadi Gunta, Guntur',
                    ],
                    route: '/organization/about-us',
                    routeLabel: 'Open About Us Page',
                  })
                }
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-[#EDF8EF] text-[#078B3B] hover:bg-[#078B3B] hover:text-white text-sm font-semibold transition-colors cursor-pointer"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span>Quick Preview</span>
              </button>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.14} className="lg:col-span-4">
            <div className="bg-gradient-to-br from-[#EDF8EF] to-[#F3F8FC] rounded-3xl p-6 border border-[#078B3B]/20 shadow-sm space-y-5">
              <div className="flex items-start gap-3.5">
                <div className="w-11 h-11 rounded-2xl bg-white shadow-sm flex items-center justify-center text-[#078B3B] shrink-0">
                  <Eye className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#082F70]">Our Vision</h3>
                  <p className="mt-1 text-sm text-[#14294A] leading-relaxed">
                    {VISION_MISSION_VALUES.vision}
                  </p>
                </div>
              </div>
              <div className="h-px bg-[#078B3B]/15" />
              <div className="flex items-start gap-3.5">
                <div className="w-11 h-11 rounded-2xl bg-white shadow-sm flex items-center justify-center text-[#078B3B] shrink-0">
                  <Target className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#082F70]">Our Mission</h3>
                  <p className="mt-1 text-sm text-[#14294A] leading-relaxed line-clamp-4">
                    {VISION_MISSION_VALUES.mission}
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* SECTION 03 — VISION, MISSION & CORE VALUES */}
      <section className="py-16 md:py-20 bg-[#F3F8FC]/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#078B3B]">
              Guiding Principles
            </span>
            <h2 className="mt-1 text-3xl sm:text-4xl font-bold text-[#082F70]">
              Vision, Mission &amp; Core Values
            </h2>
          </ScrollReveal>

          <StaggerGrid className="grid grid-cols-1 md:grid-cols-3 gap-7">
            <StaggerItem>
              <div className="h-full bg-white rounded-3xl p-7 shadow-md border border-slate-100 hover:shadow-xl transition-shadow flex flex-col">
                <div className="w-14 h-14 rounded-2xl bg-[#EDF8EF] text-[#078B3B] flex items-center justify-center mb-5">
                  <Eye className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-[#082F70] mb-3">Our Vision</h3>
                <p className="text-sm sm:text-base text-[#14294A] leading-relaxed flex-1">
                  “{VISION_MISSION_VALUES.vision}”
                </p>
                <Link
                  to="/organization/vision-mission"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#078B3B] hover:text-[#082F70]"
                >
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="h-full bg-white rounded-3xl p-7 shadow-md border border-slate-100 hover:shadow-xl transition-shadow flex flex-col">
                <div className="w-14 h-14 rounded-2xl bg-[#F3F8FC] text-[#0753A6] flex items-center justify-center mb-5">
                  <Target className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-[#082F70] mb-3">Our Mission</h3>
                <p className="text-sm sm:text-base text-[#14294A] leading-relaxed flex-1">
                  “{VISION_MISSION_VALUES.mission}”
                </p>
                <Link
                  to="/organization/vision-mission"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#078B3B] hover:text-[#082F70]"
                >
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="h-full bg-white rounded-3xl p-7 shadow-md border border-slate-100 hover:shadow-xl transition-shadow flex flex-col">
                <div className="w-14 h-14 rounded-2xl bg-[#EDF8EF] text-[#078B3B] flex items-center justify-center mb-5">
                  <Star className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-[#082F70] mb-3">Our Core Values</h3>
                <ul className="space-y-2 text-sm text-[#14294A] flex-1">
                  {VISION_MISSION_VALUES.coreValues.map((val) => (
                    <li key={val.name} className="flex items-center gap-2 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-[#078B3B] shrink-0" />
                      <span>{val.name}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/organization/vision-mission"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#078B3B] hover:text-[#082F70]"
                >
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </StaggerItem>
          </StaggerGrid>
        </div>
      </section>

      {/* SECTION 04 — OBJECTIVES */}
      <section className="py-16 md:py-20 bg-white/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <ScrollReveal>
              <span className="text-xs font-bold uppercase tracking-wider text-[#078B3B]">
                Core Focus Areas
              </span>
              <h2 className="mt-1 text-3xl sm:text-4xl font-bold text-[#082F70]">
                Our Key Objectives
              </h2>
            </ScrollReveal>
            <Link
              to="/organization/objectives"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#082F70] hover:bg-[#0753A6] text-white text-sm font-semibold self-start md:self-auto transition-all"
            >
              <span>Explore All Objectives</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {OBJECTIVES.map((obj) => (
              <StaggerItem key={obj.id}>
                <Link
                  to="/organization/objectives"
                  className="group block h-full bg-[#F3F8FC] hover:bg-white rounded-2xl p-5 border border-[#0753A6]/10 hover:border-[#078B3B]/40 hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-white text-[#078B3B] group-hover:bg-[#078B3B] group-hover:text-white flex items-center justify-center shadow-sm transition-colors mb-4">
                    {OBJECTIVE_ICONS[obj.icon]}
                  </div>
                  <h3 className="text-base font-bold text-[#082F70] mb-1.5">{obj.title}</h3>
                  <p className="text-xs sm:text-sm text-[#63738B] leading-relaxed">
                    {obj.description}
                  </p>
                </Link>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* SECTION 05 — MAJOR ACTIVITIES (11 Cards) */}
      <section className="py-16 md:py-20 bg-[#EDF8EF]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <ScrollReveal>
              <span className="text-xs font-bold uppercase tracking-wider text-[#078B3B]">
                Major Activities
              </span>
              <h2 className="mt-1 text-3xl sm:text-4xl font-bold text-[#082F70]">
                Our 11 Key Community Initiatives
              </h2>
              <p className="mt-2 text-sm sm:text-base text-[#63738B] max-w-2xl">
                Click Quick Preview to inspect highlights in a popup, or Explore More to open each dedicated activity page.
              </p>
            </ScrollReveal>
            <Link
              to="/major-activities"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#078B3B] hover:bg-[#082F70] text-white text-sm font-semibold self-start md:self-auto transition-all"
            >
              <span>View All 11 Activities</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ACTIVITIES.map((act) => (
              <StaggerItem key={act.slug}>
                <div className="group h-full bg-white rounded-3xl overflow-hidden shadow-md border border-slate-100 hover:shadow-xl transition-all flex flex-col">
                  <div className="relative h-52 overflow-hidden bg-slate-100">
                    <img
                      src={act.image}
                      alt={act.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#082F70]/85 text-white text-xs font-semibold backdrop-blur-sm">
                      {act.category}
                    </span>
                    <button
                      onClick={() =>
                        setPreviewData({
                          title: act.title,
                          category: act.category,
                          image: act.image,
                          description: act.fullDescription.join(' '),
                          bullets: act.highlights,
                          metrics: act.metrics,
                          route: `/activities/${act.slug}`,
                          routeLabel: `Open ${act.shortTitle} Page`,
                        })
                      }
                      aria-label={`Quick preview ${act.title}`}
                      className="absolute top-3 right-3 p-2 rounded-full bg-white/90 hover:bg-[#078B3B] text-[#082F70] hover:text-white shadow-sm transition-colors cursor-pointer"
                    >
                      <Maximize2 className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="p-5 flex-1 flex flex-col">
                    <h3 className="text-lg font-bold text-[#082F70] mb-2 leading-snug">
                      {act.title}
                    </h3>
                    <p className="text-sm text-[#63738B] leading-relaxed flex-1">
                      {act.summary}
                    </p>
                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                      <button
                        onClick={() =>
                          setPreviewData({
                            title: act.title,
                            category: act.category,
                            image: act.image,
                            description: act.fullDescription.join(' '),
                            bullets: act.highlights,
                            metrics: act.metrics,
                            route: `/activities/${act.slug}`,
                            routeLabel: `Open ${act.shortTitle} Page`,
                          })
                        }
                        className="text-xs font-semibold text-[#0753A6] hover:text-[#082F70] cursor-pointer"
                      >
                        Quick Preview
                      </button>
                      <Link
                        to={`/activities/${act.slug}`}
                        className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#082F70] hover:bg-[#078B3B] text-white text-xs font-semibold transition-colors"
                      >
                        <span>Explore More</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* SECTION 06 — TARGET BENEFICIARIES */}
      <section className="py-16 md:py-20 bg-white/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <ScrollReveal>
              <span className="text-xs font-bold uppercase tracking-wider text-[#078B3B]">
                Who We Serve
              </span>
              <h2 className="mt-1 text-3xl sm:text-4xl font-bold text-[#082F70]">
                14 Target Beneficiary Groups
              </h2>
            </ScrollReveal>
            <Link
              to="/organization/target-beneficiaries"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#082F70] hover:bg-[#0753A6] text-white text-sm font-semibold self-start md:self-auto"
            >
              <span>Explore All Beneficiaries</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <StaggerGrid className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3.5">
            {TARGET_BENEFICIARIES.map((b) => (
              <StaggerItem key={b.id}>
                <Link
                  to="/organization/target-beneficiaries"
                  className="h-full flex flex-col items-center text-center p-4 rounded-2xl bg-[#F3F8FC] hover:bg-[#EDF8EF] border border-[#0753A6]/10 hover:border-[#078B3B]/35 transition-all"
                >
                  <span className="w-8 h-8 rounded-full bg-[#082F70] text-white text-xs font-bold flex items-center justify-center mb-2.5">
                    {b.id}
                  </span>
                  <span className="text-xs font-semibold text-[#14294A] leading-snug">
                    {b.label}
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* SECTION 07 — ONGOING PROJECTS */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-[#F3F8FC] to-[#EDF8EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <ScrollReveal direction="left" className="lg:col-span-6">
            <div className="rounded-3xl overflow-hidden shadow-xl border border-white">
              <img
                src="/assets/activities/old-age-home.svg"
                alt="PCDS Old Age Home Ongoing Project"
                loading="lazy"
                className="w-full h-72 sm:h-80 object-cover"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" className="lg:col-span-6 space-y-4">
            <span className="inline-block px-3.5 py-1 rounded-full bg-[#078B3B] text-white text-xs font-bold uppercase tracking-wider">
              Current Major Programme
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#082F70]">
              PCDS Old Age Home — Guntur
            </h2>
            <p className="text-sm sm:text-base text-[#14294A] leading-relaxed">
              PCDS is currently operating an Old Age Home, providing shelter, nutritious food, clothing, healthcare, emotional support, and a safe, dignified living environment for senior citizens in need.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-1">
              <div className="bg-white rounded-2xl p-4 shadow-sm border border-[#078B3B]/15">
                <div className="text-2xl font-extrabold text-[#082F70]">25</div>
                <div className="text-xs text-[#63738B] font-medium">Senior Citizens Currently Residing</div>
              </div>
              <div className="bg-white rounded-2xl p-4 shadow-sm border border-[#078B3B]/15">
                <div className="text-2xl font-extrabold text-[#078B3B]">46+</div>
                <div className="text-xs text-[#63738B] font-medium">Senior Citizens Supported Since Inception</div>
              </div>
            </div>
            <div className="pt-2 flex flex-wrap gap-3">
              <Link
                to="/ongoing-projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#082F70] hover:bg-[#0753A6] text-white text-sm font-semibold shadow-md"
              >
                <span>View Project</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <button
                onClick={() =>
                  setPreviewData({
                    title: 'PCDS Old Age Home (Ongoing Project)',
                    category: 'Current Major Programme',
                    image: '/assets/activities/old-age-home.svg',
                    description:
                      'Since its establishment, the Old Age Home has provided shelter, food, clothing, healthcare, and emotional support to 46 senior citizens. Currently, 25 senior citizens are residing in the Home, receiving continuous care and support.',
                    bullets: [
                      'Safe & dignified residential shelter at Sangadi Gunta Area, Guntur',
                      'Nutritious daily meals, clothing, and regular physician visits',
                      'Emotional care, companionship, and community respect',
                    ],
                    metrics: [
                      { label: 'Currently Residing', value: '25' },
                      { label: 'Supported Since Inception', value: '46+' },
                    ],
                    route: '/ongoing-projects',
                    routeLabel: 'Open Ongoing Projects Page',
                  })
                }
                className="inline-flex items-center gap-1.5 px-5 py-3 rounded-full bg-white text-[#082F70] border border-[#082F70]/20 text-sm font-semibold hover:bg-slate-50 cursor-pointer"
              >
                <Maximize2 className="w-4 h-4" />
                <span>Quick Preview</span>
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* SECTION 08 — IMPACT & ACHIEVEMENTS */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-[#082F70] via-[#0753A6] to-[#078B3B] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <ScrollReveal>
              <span className="text-xs font-bold uppercase tracking-wider text-[#FFE082]">
                Verified Impact At A Glance
              </span>
              <h2 className="mt-1 text-3xl sm:text-4xl font-bold">
                Our Impact &amp; Achievements
              </h2>
              <p className="mt-2 text-sm sm:text-base text-white/85 max-w-2xl">
                Transforming Lives. Building Communities. Creating a Better Tomorrow.
              </p>
            </ScrollReveal>
            <Link
              to="/organization/impact-achievements"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-[#082F70] hover:bg-[#EDF8EF] text-sm font-bold self-start md:self-auto transition-colors"
            >
              <span>View All Achievements</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <StaggerGrid className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {IMPACT_METRICS.map((m) => (
              <StaggerItem key={m.id}>
                <div className="h-full bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 sm:p-5 text-center hover:bg-white/15 transition-colors">
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#FFE082]">
                    <CountUpNumber target={m.number} suffix={m.suffix} />
                  </div>
                  <div className="mt-1.5 text-xs sm:text-sm font-bold text-white leading-snug">
                    {m.label}
                  </div>
                  <div className="mt-1 text-[11px] text-white/75">{m.detail}</div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* SECTION 09 — AWARDS & RECOGNITIONS */}
      <section className="py-16 md:py-20 bg-white/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <ScrollReveal>
              <span className="text-xs font-bold uppercase tracking-wider text-[#078B3B]">
                Honours &amp; Accolades
              </span>
              <h2 className="mt-1 text-3xl sm:text-4xl font-bold text-[#082F70]">
                Awards &amp; Recognitions
              </h2>
            </ScrollReveal>
            <Link
              to="/organization/awards"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#082F70] hover:bg-[#0753A6] text-white text-sm font-semibold self-start md:self-auto"
            >
              <span>Explore Awards</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <StaggerGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {AWARDS.slice(0, 6).map((award) => (
              <StaggerItem key={award.id}>
                <button
                  onClick={() =>
                    setPreviewData({
                      title: award.title,
                      category: award.year,
                      description: award.description,
                      bullets: [`Presented / Recognised by: ${award.presenter}`],
                      route: '/organization/awards',
                      routeLabel: 'View All 7 Awards',
                    })
                  }
                  className="text-left w-full h-full bg-[#F3F8FC] hover:bg-white rounded-2xl p-6 border border-[#0753A6]/15 hover:border-[#078B3B]/40 hover:shadow-lg transition-all flex flex-col cursor-pointer"
                >
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-[#082F70] text-[#FFE082] flex items-center justify-center">
                      <Award className="w-5 h-5" />
                    </div>
                    <span className="px-3 py-1 rounded-full bg-[#EDF8EF] text-[#078B3B] text-xs font-bold">
                      {award.year}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-[#082F70] mb-1.5">{award.title}</h3>
                  <p className="text-xs font-semibold text-[#0753A6] mb-2">{award.presenter}</p>
                  <p className="text-xs sm:text-sm text-[#63738B] leading-relaxed flex-1">
                    {award.description}
                  </p>
                </button>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* SECTION 10 — FUTURE PLANS */}
      <section className="py-16 md:py-20 bg-[#F3F8FC]/85">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <ScrollReveal>
              <span className="text-xs font-bold uppercase tracking-wider text-[#078B3B]">
                Vision Ahead (Future Initiatives)
              </span>
              <h2 className="mt-1 text-3xl sm:text-4xl font-bold text-[#082F70]">
                Our 10 Future Plans
              </h2>
            </ScrollReveal>
            <Link
              to="/future-plans"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#078B3B] hover:bg-[#082F70] text-white text-sm font-semibold self-start md:self-auto"
            >
              <span>View Future Plans</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <StaggerGrid className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {FUTURE_PLANS.map((plan) => (
              <StaggerItem key={plan.number}>
                <Link
                  to="/future-plans"
                  className="flex items-start gap-4 bg-white rounded-2xl p-5 border border-slate-100 hover:border-[#078B3B]/40 hover:shadow-md transition-all h-full"
                >
                  <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#082F70] to-[#078B3B] text-white font-bold text-sm flex items-center justify-center shrink-0">
                    {plan.number}
                  </span>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-[#082F70]">{plan.title}</h3>
                    <p className="mt-1 text-xs sm:text-sm text-[#63738B] leading-relaxed">
                      {plan.description}
                    </p>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* SECTION 11 — GALLERY PREVIEW */}
      <section className="py-16 md:py-20 bg-white/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <ScrollReveal>
              <span className="text-xs font-bold uppercase tracking-wider text-[#078B3B]">
                Moments of Change
              </span>
              <h2 className="mt-1 text-3xl sm:text-4xl font-bold text-[#082F70]">
                Gallery Preview
              </h2>
            </ScrollReveal>
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#082F70] hover:bg-[#0753A6] text-white text-sm font-semibold self-start md:self-auto"
            >
              <span>View Complete Gallery</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {GALLERY_ITEMS.slice(0, 6).map((item, idx) => (
              <StaggerItem key={item.id}>
                <button
                  onClick={() => setLightboxIndex(idx)}
                  className="group relative w-full h-60 rounded-2xl overflow-hidden shadow-md cursor-pointer text-left"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#082F70]/85 via-[#082F70]/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#078B3B] text-[11px] font-semibold mb-1">
                      {item.category}
                    </span>
                    <div className="font-bold text-base">{item.title}</div>
                  </div>
                </button>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* SECTION 12 — WHY SUPPORT US */}
      <section className="py-16 md:py-20 bg-[#EDF8EF]/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <ScrollReveal direction="left" className="lg:col-span-6 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#078B3B]">
              Our Appeal — Why Support Us?
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#082F70]">
              Join Hands to Expand Our Impact
            </h2>
            <p className="text-sm sm:text-base text-[#14294A] leading-relaxed">
              {WHY_SUPPORT_US.paragraphs[0]}
            </p>
            <p className="text-sm sm:text-base text-[#14294A] leading-relaxed">
              {WHY_SUPPORT_US.paragraphs[3]}
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <button
                onClick={() => setDonateOpen(true)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#D71920] hover:bg-[#b5141a] text-white text-sm font-semibold shadow-md cursor-pointer"
              >
                <Heart className="w-4 h-4 fill-white" />
                <span>Donate Now</span>
              </button>
              <Link
                to="/organization/why-support-us"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#082F70] hover:bg-[#0753A6] text-white text-sm font-semibold"
              >
                <span>Read Full Appeal</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" className="lg:col-span-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg border border-[#078B3B]/20">
              <h3 className="text-lg font-bold text-[#082F70] mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#078B3B]" />
                <span>Your Support Will Help Us To:</span>
              </h3>
              <ul className="space-y-2.5 text-sm text-[#14294A]">
                {WHY_SUPPORT_US.helpList.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-[#078B3B] shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* SECTION 13 — DONATION CTA BANNER */}
      <section className="py-14 md:py-16 bg-gradient-to-r from-[#082F70] to-[#078B3B] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <ScrollReveal>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight">
              “Your Support Can Transform Lives and Build a Better Tomorrow.”
            </h2>
            <p className="mt-3 text-sm sm:text-base text-white/90 max-w-2xl mx-auto">
              Every contribution—financial, material, technical, or voluntary—directly supports senior citizens, women, children, and vulnerable families in Guntur.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <button
                onClick={() => setDonateOpen(true)}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#D71920] hover:bg-[#b5141a] text-white font-bold shadow-xl transition-all cursor-pointer"
              >
                <Heart className="w-5 h-5 fill-white" />
                <span>Donate Now</span>
              </button>
              <Link
                to="/donate"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-[#082F70] hover:bg-[#EDF8EF] font-bold shadow-lg transition-all"
              >
                <span>Bank &amp; UPI Details</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <DonateModal isOpen={donateOpen} onClose={() => setDonateOpen(false)} />
      <SectionPreviewModal data={previewData} onClose={() => setPreviewData(null)} />
      <LightboxModal
        items={GALLERY_ITEMS}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onChangeIndex={(i) => setLightboxIndex(i)}
      />
    </div>
  );
};
