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
  Building2,
  HandHeart,
  Stethoscope,
  Droplet,
  Utensils,
  PackageCheck,
  Shield,
  Droplets,
  BookOpen,
} from 'lucide-react';
import {
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

const IMPACT_ICONS: Record<string, React.ReactNode> = {
  Users: <Users className="w-6 h-6" />,
  Home: <Home className="w-6 h-6" />,
  Utensils: <Utensils className="w-6 h-6" />,
  PackageCheck: <PackageCheck className="w-6 h-6" />,
  Shield: <Shield className="w-6 h-6" />,
  Droplets: <Droplets className="w-6 h-6" />,
  Sparkles: <Sparkles className="w-6 h-6" />,
  Heart: <Heart className="w-6 h-6" />,
  Droplet: <Droplet className="w-6 h-6" />,
  Stethoscope: <Stethoscope className="w-6 h-6" />,
  Award: <Award className="w-6 h-6" />,
  Trees: <Trees className="w-6 h-6" />,
  GraduationCap: <GraduationCap className="w-6 h-6" />,
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

      {/* SECTION 02 — ABOUT US (Grand Design matching image copy 6.png) */}
      <section className="relative py-16 md:py-20 overflow-hidden bg-white/75 backdrop-blur-sm border-y border-slate-200/60">
        <div className="absolute inset-0 -z-10 pointer-events-none opacity-25 overflow-hidden">
          <img
            src="/assets/sections/about-banner.png"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover animate-bg-float"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <ScrollReveal direction="left" className="lg:col-span-4">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] group">
                <img
                  src="/assets/sections/about-banner.png"
                  alt="Growing Together Since 2019 - PCDS Guntur"
                  className="w-full h-full object-cover object-left group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.08} className="lg:col-span-4 space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#EDF8EF] border border-[#078B3B]/25 text-xs font-bold uppercase tracking-wider text-[#078B3B]">
                <span>ABOUT US</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#082F70] leading-tight">
                Prajwala Community Development <span className="text-[#078B3B]">Society</span>
              </h2>
              <p className="text-sm sm:text-base text-[#14294A] leading-relaxed">
                {ABOUT_TEXT.intro}
              </p>
              <div className="flex flex-wrap gap-3 pt-1">
                <Link
                  to="/organization/about-us"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#078B3B] hover:bg-[#082F70] text-white text-sm font-semibold shadow-md transition-all"
                >
                  <span>Know More</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <button
                  onClick={() =>
                    setPreviewData({
                      title: 'About Prajwala Community Development Society',
                      category: 'Established 03 August 2019 • Guntur',
                      image: '/assets/sections/about-banner.png',
                      description: `${ABOUT_TEXT.intro} ${ABOUT_TEXT.missionParagraph}`,
                      bullets: [
                        'Registered Non-Profit Society (Regd. No: 240/2019)',
                        '12A & 80G Tax-Exempted & CSR-1 Registered (CSR00108210)',
                        'Operating PCDS Old Age Home in Sangadi Gunta Area, Guntur',
                      ],
                      route: '/organization/about-us',
                      routeLabel: 'Open About Us Page',
                    })
                  }
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-white text-[#078B3B] border border-[#078B3B]/40 hover:bg-[#EDF8EF] text-sm font-semibold shadow-sm transition-colors cursor-pointer"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Quick Preview</span>
                </button>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.14} className="lg:col-span-4 space-y-4">
              <div className="bg-white/95 rounded-2xl p-5 border border-[#078B3B]/20 shadow-lg flex items-start gap-3.5 hover:shadow-xl transition-shadow">
                <div className="w-11 h-11 rounded-full bg-[#078B3B] text-white flex items-center justify-center shrink-0 shadow-sm">
                  <Eye className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#078B3B]">Our Vision</h3>
                  <p className="mt-1 text-xs sm:text-sm text-[#14294A] leading-relaxed">
                    {VISION_MISSION_VALUES.vision}
                  </p>
                </div>
              </div>

              <div className="bg-white/95 rounded-2xl p-5 border border-[#082F70]/20 shadow-lg flex items-start gap-3.5 hover:shadow-xl transition-shadow">
                <div className="w-11 h-11 rounded-full bg-[#078B3B] text-white flex items-center justify-center shrink-0 shadow-sm">
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#078B3B]">Our Mission</h3>
                  <p className="mt-1 text-xs sm:text-sm text-[#14294A] leading-relaxed line-clamp-4">
                    {VISION_MISSION_VALUES.mission}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* 4 Bottom Pillars matching image copy 6.png */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-[#078B3B]/15">
            {[
              { label: 'Education for All', icon: <BookOpen className="w-6 h-6" />, to: '/activities/child-welfare' },
              { label: 'Better Healthcare', icon: <HeartPulse className="w-6 h-6" />, to: '/activities/healthcare' },
              { label: 'Empowered Communities', icon: <Users className="w-6 h-6" />, to: '/activities/women-empowerment' },
              { label: 'Greener Tomorrow', icon: <Trees className="w-6 h-6" />, to: '/activities/environment' },
            ].map((p) => (
              <Link
                key={p.label}
                to={p.to}
                className="flex items-center justify-center gap-3 bg-white/90 hover:bg-[#EDF8EF] px-4 py-3.5 rounded-2xl shadow-sm border border-[#078B3B]/15 transition-all group"
              >
                <span className="text-[#078B3B] group-hover:scale-110 transition-transform">{p.icon}</span>
                <span className="text-xs sm:text-sm font-bold text-[#082F70]">{p.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 03 — VISION, MISSION & CORE VALUES (Grand Look + Popups - image copy 8.png) */}
      <section className="py-16 md:py-20 bg-[#F3F8FC]/65 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block px-3.5 py-1 rounded-full bg-[#EDF8EF] text-[#078B3B] text-xs font-bold uppercase tracking-wider">
              Guiding Principles
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-[#082F70]">
              Vision, Mission &amp; Core Values
            </h2>
          </ScrollReveal>

          <StaggerGrid className="grid grid-cols-1 md:grid-cols-3 gap-7">
            <StaggerItem>
              <div className="h-full bg-white/95 rounded-3xl p-7 shadow-lg border-t-4 border-[#078B3B] hover:shadow-2xl transition-all flex flex-col">
                <div className="flex items-center justify-between mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-[#EDF8EF] text-[#078B3B] flex items-center justify-center">
                    <Eye className="w-7 h-7" />
                  </div>
                  <button
                    onClick={() =>
                      setPreviewData({
                        title: 'Our Vision — PCDS',
                        category: 'Guiding Principles',
                        description: VISION_MISSION_VALUES.vision,
                        bullets: [
                          'Equal opportunity & human dignity for every individual',
                          'Inclusive social justice & sustainable well-being',
                        ],
                        route: '/organization/vision-mission',
                        routeLabel: 'Open Vision & Mission Page',
                      })
                    }
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#F3F8FC] hover:bg-[#082F70] text-[#082F70] hover:text-white text-xs font-semibold transition-colors cursor-pointer"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>Preview</span>
                  </button>
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
              <div className="h-full bg-white/95 rounded-3xl p-7 shadow-lg border-t-4 border-[#0753A6] hover:shadow-2xl transition-all flex flex-col">
                <div className="flex items-center justify-between mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-[#F3F8FC] text-[#0753A6] flex items-center justify-center">
                    <Target className="w-7 h-7" />
                  </div>
                  <button
                    onClick={() =>
                      setPreviewData({
                        title: 'Our Mission — PCDS',
                        category: 'Guiding Principles',
                        description: VISION_MISSION_VALUES.mission,
                        bullets: [
                          'Education, healthcare, women empowerment & child welfare',
                          'Senior citizen support, legal aid & environmental protection',
                        ],
                        route: '/organization/vision-mission',
                        routeLabel: 'Open Vision & Mission Page',
                      })
                    }
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#F3F8FC] hover:bg-[#082F70] text-[#082F70] hover:text-white text-xs font-semibold transition-colors cursor-pointer"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>Preview</span>
                  </button>
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
              <div className="h-full bg-white/95 rounded-3xl p-7 shadow-lg border-t-4 border-[#078B3B] hover:shadow-2xl transition-all flex flex-col">
                <div className="flex items-center justify-between mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-[#EDF8EF] text-[#078B3B] flex items-center justify-center">
                    <Star className="w-7 h-7" />
                  </div>
                  <button
                    onClick={() =>
                      setPreviewData({
                        title: 'Our 6 Core Values — PCDS',
                        category: 'Guiding Principles',
                        description:
                          'Every programme at Prajwala Community Development Society is rooted in six core ethical values.',
                        bullets: VISION_MISSION_VALUES.coreValues.map(
                          (v) => `${v.name}: ${v.description}`
                        ),
                        route: '/organization/vision-mission',
                        routeLabel: 'Open Core Values Page',
                      })
                    }
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#F3F8FC] hover:bg-[#082F70] text-[#082F70] hover:text-white text-xs font-semibold transition-colors cursor-pointer"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>Preview</span>
                  </button>
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
      <section className="py-16 md:py-20 bg-white/75 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <ScrollReveal>
              <span className="text-xs font-bold uppercase tracking-wider text-[#078B3B]">
                Core Focus Areas
              </span>
              <h2 className="mt-1 text-3xl sm:text-4xl font-extrabold text-[#082F70]">
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
                <button
                  onClick={() =>
                    setPreviewData({
                      title: `Objective 0${obj.id}: ${obj.title}`,
                      category: 'PCDS Core Objectives',
                      description: obj.description,
                      route: '/organization/objectives',
                      routeLabel: 'Open Objectives Page',
                    })
                  }
                  className="text-left group block w-full h-full bg-white/95 hover:bg-[#EDF8EF] rounded-2xl p-5 border border-[#0753A6]/15 hover:border-[#078B3B]/45 shadow-sm hover:shadow-xl transition-all cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#EDF8EF] text-[#078B3B] group-hover:bg-[#078B3B] group-hover:text-white flex items-center justify-center shadow-sm transition-colors mb-4">
                    {OBJECTIVE_ICONS[obj.icon]}
                  </div>
                  <h3 className="text-base font-bold text-[#082F70] mb-1.5">{obj.title}</h3>
                  <p className="text-xs sm:text-sm text-[#63738B] leading-relaxed">
                    {obj.description}
                  </p>
                </button>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* SECTION 05 — MAJOR ACTIVITIES (11 Grand Cards with Custom HD Images) */}
      <section className="py-16 md:py-20 bg-[#EDF8EF]/60 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <ScrollReveal>
              <span className="text-xs font-bold uppercase tracking-wider text-[#078B3B]">
                Major Activities
              </span>
              <h2 className="mt-1 text-3xl sm:text-4xl font-extrabold text-[#082F70]">
                Our 11 Key Community Initiatives
              </h2>
              <p className="mt-2 text-sm sm:text-base text-[#14294A] max-w-2xl">
                Click Quick Preview to inspect highlights in a popup, or Explore More to open each dedicated activity webpage.
              </p>
            </ScrollReveal>
            <Link
              to="/major-activities"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#078B3B] hover:bg-[#082F70] text-white text-sm font-semibold self-start md:self-auto shadow-md transition-all"
            >
              <span>View All 11 Activities</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {ACTIVITIES.map((act) => (
              <StaggerItem key={act.slug}>
                <div className="group h-full bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100 hover:shadow-2xl hover:-translate-y-1 transition-all flex flex-col">
                  <div className="relative aspect-[3/2] overflow-hidden bg-slate-100">
                    <img
                      src={act.image}
                      alt={act.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#082F70]/90 text-white text-xs font-semibold backdrop-blur-sm shadow">
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
                      className="absolute top-3 right-3 p-2 rounded-full bg-white/95 hover:bg-[#078B3B] text-[#082F70] hover:text-white shadow-md transition-colors cursor-pointer"
                    >
                      <Maximize2 className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-lg font-bold text-[#082F70] mb-2 leading-snug">
                      {act.title}
                    </h3>
                    <p className="text-sm text-[#63738B] leading-relaxed flex-1">
                      {act.summary}
                    </p>
                    <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
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
                        className="text-xs font-bold text-[#0753A6] hover:text-[#082F70] cursor-pointer"
                      >
                        Quick Preview
                      </button>
                      <Link
                        to={`/activities/${act.slug}`}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#082F70] hover:bg-[#078B3B] text-white text-xs font-semibold shadow-sm transition-colors"
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

      {/* SECTION 06 — TARGET BENEFICIARIES (Grand Look - image copy 21.png) */}
      <section className="py-16 md:py-20 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <ScrollReveal>
              <span className="inline-block px-3.5 py-1 rounded-full bg-[#EDF8EF] text-[#078B3B] text-xs font-bold uppercase tracking-wider">
                Who We Serve
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-[#082F70]">
                14 Target Beneficiary Groups
              </h2>
            </ScrollReveal>
            <Link
              to="/organization/target-beneficiaries"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#082F70] hover:bg-[#0753A6] text-white text-sm font-semibold shadow-md self-start md:self-auto"
            >
              <span>Explore All Beneficiaries</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <StaggerGrid className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {TARGET_BENEFICIARIES.map((b) => (
              <StaggerItem key={b.id}>
                <button
                  onClick={() =>
                    setPreviewData({
                      title: `Beneficiary Group ${b.id}: ${b.label}`,
                      category: 'Target Beneficiaries',
                      description: `Prajwala Community Development Society (PCDS) is committed to serving ${b.label.toLowerCase()} across Guntur and surrounding rural mandals through dedicated welfare, legal, healthcare, and livelihood programmes.`,
                      route: '/organization/target-beneficiaries',
                      routeLabel: 'View All 14 Beneficiary Groups',
                    })
                  }
                  className="w-full h-full flex flex-col items-center text-center p-4 rounded-2xl bg-gradient-to-b from-white to-[#F3F8FC] hover:to-[#EDF8EF] border border-[#0753A6]/15 hover:border-[#078B3B]/50 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all cursor-pointer"
                >
                  <span className="w-10 h-10 rounded-full bg-gradient-to-br from-[#082F70] to-[#078B3B] text-white text-xs font-extrabold flex items-center justify-center mb-3 shadow-sm">
                    {b.id}
                  </span>
                  <span className="text-xs font-bold text-[#14294A] leading-snug">
                    {b.label}
                  </span>
                </button>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* SECTION 07 — ONGOING PROJECTS (Grand Look matching image copy 23.png) */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-[#F3F8FC]/90 to-[#EDF8EF]/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/95 rounded-3xl p-6 sm:p-10 shadow-2xl border border-[#078B3B]/15 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <ScrollReveal direction="left" className="lg:col-span-6">
              <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white aspect-[16/10] group">
                <img
                  src="/assets/sections/ongoing-project.png"
                  alt="PCDS Old Age Home Ongoing Project"
                  loading="lazy"
                  className="w-full h-full object-cover object-left group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" className="lg:col-span-6 space-y-4">
              <span className="inline-block px-4 py-1 rounded-full bg-[#078B3B] text-white text-xs font-bold uppercase tracking-wider shadow-sm">
                Current Major Programme
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#082F70]">
                PCDS Old Age Home – Guntur
              </h2>
              <p className="text-sm sm:text-base text-[#14294A] leading-relaxed">
                PCDS is currently operating an Old Age Home, providing shelter, nutritious food, clothing, healthcare, emotional support, and a safe, dignified living environment for senior citizens in need.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-1">
                <div className="bg-[#F3F8FC] rounded-2xl p-4 shadow-sm border border-[#0753A6]/15">
                  <div className="text-3xl font-extrabold text-[#082F70]">
                    <CountUpNumber target={25} />
                  </div>
                  <div className="text-xs text-[#63738B] font-semibold mt-0.5">
                    Senior Citizens Currently Residing
                  </div>
                </div>
                <div className="bg-[#EDF8EF] rounded-2xl p-4 shadow-sm border border-[#078B3B]/20">
                  <div className="text-3xl font-extrabold text-[#078B3B]">
                    <CountUpNumber target={46} suffix="+" />
                  </div>
                  <div className="text-xs text-[#63738B] font-semibold mt-0.5">
                    Senior Citizens Supported Since Inception
                  </div>
                </div>
              </div>
              <div className="pt-2 flex flex-wrap gap-3">
                <Link
                  to="/ongoing-projects"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#082F70] hover:bg-[#0753A6] text-white text-sm font-semibold shadow-md transition-all"
                >
                  <span>View Project</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <button
                  onClick={() =>
                    setPreviewData({
                      title: 'PCDS Old Age Home (Ongoing Project)',
                      category: 'Current Major Programme',
                      image: '/assets/activities/old-age-home.png',
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
                  className="inline-flex items-center gap-1.5 px-5 py-3 rounded-full bg-white text-[#082F70] border border-[#082F70]/25 text-sm font-semibold hover:bg-[#F3F8FC] cursor-pointer"
                >
                  <Maximize2 className="w-4 h-4" />
                  <span>Quick Preview</span>
                </button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* SECTION 08 — IMPACT & ACHIEVEMENTS (Grand White Cards matching image copy 25.png) */}
      <section className="relative py-16 md:py-20 bg-gradient-to-r from-[#082F70] via-[#0753A6] to-[#078B3B] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <img
            src="/assets/sections/impact-banner.png"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <ScrollReveal>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white text-[#082F70] text-xs font-extrabold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-[#078B3B]" />
                <span>Verified Impact At A Glance</span>
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold">
                Our Impact &amp; <span className="text-[#FFE082]">Achievements</span>
              </h2>
              <p className="mt-2 text-sm sm:text-base text-white/90 max-w-2xl">
                Transforming Lives. Building Communities. Creating a Better Tomorrow.
              </p>
            </ScrollReveal>
            <Link
              to="/organization/impact-achievements"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#082F70] hover:bg-[#EDF8EF] text-sm font-bold shadow-lg self-start md:self-auto transition-colors"
            >
              <span>View All Achievements</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {IMPACT_METRICS.map((m, idx) => (
              <StaggerItem key={m.id}>
                <button
                  onClick={() =>
                    setPreviewData({
                      title: `${m.number.toLocaleString('en-IN')}${m.suffix} — ${m.label}`,
                      category: 'Verified PCDS Impact Metric',
                      description: `${m.label}: ${m.detail}. Verified from the official 24-page Prajwala Community Development Society Profile.`,
                      metrics: [{ label: m.detail, value: `${m.number.toLocaleString('en-IN')}${m.suffix}` }],
                      route: '/organization/impact-achievements',
                      routeLabel: 'Open Full Achievements Page',
                    })
                  }
                  className="w-full h-full bg-white/95 hover:bg-white rounded-2xl p-4 shadow-lg hover:shadow-2xl hover:-translate-y-0.5 transition-all flex items-center gap-3.5 text-left cursor-pointer"
                >
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${
                      idx % 2 === 0
                        ? 'bg-[#E3F2FD] text-[#0753A6]'
                        : 'bg-[#EDF8EF] text-[#078B3B]'
                    }`}
                  >
                    {IMPACT_ICONS[m.iconName] || <Sparkles className="w-6 h-6" />}
                  </div>
                  <div>
                    <div
                      className={`text-xl sm:text-2xl font-extrabold leading-none ${
                        idx % 2 === 0 ? 'text-[#082F70]' : 'text-[#078B3B]'
                      }`}
                    >
                      <CountUpNumber target={m.number} suffix={m.suffix} />
                    </div>
                    <div className="mt-1 text-xs font-bold text-[#14294A] leading-snug">
                      {m.label}
                    </div>
                    <div className="mt-0.5 text-[11px] text-[#63738B]">{m.detail}</div>
                  </div>
                </button>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* SECTION 09 — AWARDS & RECOGNITIONS (Rich Popups - image copy 26.png) */}
      <section className="py-16 md:py-20 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <ScrollReveal>
              <span className="text-xs font-bold uppercase tracking-wider text-[#078B3B]">
                Honours &amp; Accolades
              </span>
              <h2 className="mt-1 text-3xl sm:text-4xl font-extrabold text-[#082F70]">
                Awards &amp; Recognitions
              </h2>
            </ScrollReveal>
            <Link
              to="/organization/awards"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#082F70] hover:bg-[#0753A6] text-white text-sm font-semibold shadow-md self-start md:self-auto"
            >
              <span>Explore Awards</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <StaggerGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {AWARDS.slice(0, 6).map((award) => (
              <StaggerItem key={award.id}>
                <button
                  onClick={() =>
                    setPreviewData({
                      title: award.title,
                      category: `Award Year: ${award.year}`,
                      description: award.description,
                      bullets: [
                        `Presented / Recognised by: ${award.presenter}`,
                        `Recipient: Prajwala Community Development Society (PCDS), Guntur`,
                        'Verified from Section 7 of the official 24-page PCDS Organization Profile',
                      ],
                      route: '/organization/awards',
                      routeLabel: 'Explore All 7 Awards',
                    })
                  }
                  className="text-left w-full h-full bg-gradient-to-b from-white to-[#F3F8FC] hover:to-[#EDF8EF] rounded-3xl p-6 border border-[#0753A6]/15 hover:border-[#078B3B]/45 shadow-md hover:shadow-xl transition-all flex flex-col cursor-pointer"
                >
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="w-11 h-11 rounded-2xl bg-[#082F70] text-[#FFE082] flex items-center justify-center shadow-sm">
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
                  <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs font-bold text-[#078B3B]">
                    <span>Click for Full Award Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </button>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* SECTION 10 — FUTURE PLANS (Grand Pill Cards matching image copy 28.png) */}
      <section className="py-16 md:py-20 bg-[#F3F8FC]/75 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <ScrollReveal>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#078B3B] text-white text-xs font-bold uppercase tracking-wider">
                <Eye className="w-3.5 h-3.5" />
                <span>Vision Ahead (Future Initiatives)</span>
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-[#082F70]">
                Our 10 <span className="text-[#078B3B]">Future Plans</span>
              </h2>
            </ScrollReveal>
            <Link
              to="/future-plans"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#078B3B] hover:bg-[#082F70] text-white text-sm font-semibold shadow-md self-start md:self-auto transition-all"
            >
              <span>View Future Plans</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <StaggerGrid className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {FUTURE_PLANS.map((plan, idx) => (
              <StaggerItem key={plan.number}>
                <button
                  onClick={() =>
                    setPreviewData({
                      title: `Future Plan ${plan.number}: ${plan.title}`,
                      category: 'PCDS Future Initiatives',
                      description: plan.description,
                      bullets: [
                        'Planned expansion under PCDS Guntur',
                        'Open for CSR, Government & Philanthropic Partnerships',
                      ],
                      route: '/future-plans',
                      routeLabel: 'Open All 10 Future Plans',
                    })
                  }
                  className="w-full text-left flex items-center justify-between gap-4 bg-white/95 hover:bg-white rounded-full sm:rounded-3xl p-3.5 sm:p-4 border border-slate-200/80 hover:border-[#078B3B]/50 shadow-sm hover:shadow-lg transition-all h-full cursor-pointer group"
                >
                  <div className="flex items-center gap-3.5">
                    <span
                      className={`w-11 h-11 rounded-full text-white font-extrabold text-sm flex items-center justify-center shrink-0 shadow-sm ${
                        idx % 2 === 0
                          ? 'bg-gradient-to-br from-[#082F70] to-[#0753A6]'
                          : 'bg-gradient-to-br from-[#078B3B] to-[#36A852]'
                      }`}
                    >
                      {plan.number}
                    </span>
                    <div>
                      <h3 className="text-sm sm:text-base font-bold text-[#082F70]">{plan.title}</h3>
                      <p className="mt-0.5 text-xs text-[#63738B] leading-relaxed line-clamp-2">
                        {plan.description}
                      </p>
                    </div>
                  </div>
                  <span className="w-9 h-9 rounded-full bg-[#F3F8FC] group-hover:bg-[#078B3B] text-[#082F70] group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </button>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* SECTION 11 — GALLERY PREVIEW */}
      <section className="py-16 md:py-20 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <ScrollReveal>
              <span className="text-xs font-bold uppercase tracking-wider text-[#078B3B]">
                Moments of Change
              </span>
              <h2 className="mt-1 text-3xl sm:text-4xl font-extrabold text-[#082F70]">
                Gallery Preview
              </h2>
            </ScrollReveal>
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#082F70] hover:bg-[#0753A6] text-white text-sm font-semibold shadow-md self-start md:self-auto"
            >
              <span>View Complete Gallery</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {GALLERY_ITEMS.slice(0, 6).map((item, idx) => (
              <StaggerItem key={item.id}>
                <button
                  onClick={() => setLightboxIndex(idx)}
                  className="group relative w-full aspect-[3/2] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl cursor-pointer text-left"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#082F70]/85 via-[#082F70]/15 to-transparent" />
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

      {/* SECTION 12 — WHY SUPPORT US (Grand Layout matching image copy 30.png) */}
      <section className="relative py-16 md:py-20 bg-[#EDF8EF]/75 backdrop-blur-sm overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <ScrollReveal direction="left" className="lg:col-span-5 space-y-5">
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#078B3B] text-white text-xs font-bold uppercase tracking-wider shadow-sm">
              <Heart className="w-3.5 h-3.5 fill-white" />
              <span>Our Appeal — Why Support Us?</span>
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#082F70] leading-tight">
              Join Hands to <span className="text-[#078B3B] underline decoration-[#FFE082] decoration-4 underline-offset-4">Expand Our Impact</span>
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
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#078B3B] hover:bg-[#082F70] text-white text-sm font-semibold shadow-md transition-colors cursor-pointer"
              >
                <Heart className="w-4 h-4 fill-white" />
                <span>Donate Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <Link
                to="/organization/why-support-us"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-[#F3F8FC] text-[#082F70] border border-[#082F70]/25 text-sm font-semibold shadow-sm"
              >
                <Users className="w-4 h-4" />
                <span>Read Full Appeal</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" className="lg:col-span-7">
            <div className="relative bg-white/95 rounded-3xl p-6 sm:p-8 shadow-xl border border-[#078B3B]/25 pt-10">
              <div className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#082F70] to-[#078B3B] text-white font-bold text-sm shadow-md mb-5">
                <HandHeart className="w-4 h-4 text-[#FFE082]" />
                <span>Your Support Will Help Us To:</span>
              </div>
              <ul className="space-y-3 text-sm text-[#14294A]">
                {WHY_SUPPORT_US.helpList.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-3 p-2.5 rounded-xl bg-[#F3F8FC]/80 hover:bg-[#EDF8EF] transition-colors"
                  >
                    <span
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-white ${
                        idx % 2 === 0 ? 'bg-[#0753A6]' : 'bg-[#078B3B]'
                      }`}
                    >
                      <ShieldCheck className="w-4 h-4" />
                    </span>
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* SECTION 13 — DONATION CTA BANNER (Airy Grand Banner matching image copy 32.png) */}
      <section className="relative py-16 md:py-20 overflow-hidden bg-gradient-to-r from-[#F3F8FC] via-white to-[#EDF8EF]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl md:text-[42px] font-extrabold text-[#082F70] leading-tight">
              “Your Support Can Transform Lives
              <span className="block text-[#078B3B]">and Build a Better Tomorrow.”</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#14294A] max-w-2xl mx-auto">
              Every contribution—financial, material, technical, or voluntary—directly supports senior citizens, women, children, and vulnerable families in Guntur.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-4">
              <button
                onClick={() => setDonateOpen(true)}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#078B3B] to-[#36A852] hover:from-[#082F70] hover:to-[#0753A6] text-white font-bold shadow-xl transition-all cursor-pointer"
              >
                <Heart className="w-5 h-5 fill-white" />
                <span>Donate Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <Link
                to="/donate"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-[#082F70] border-2 border-[#082F70]/25 hover:border-[#078B3B] font-bold shadow-md transition-all"
              >
                <Building2 className="w-5 h-5 text-[#078B3B]" />
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
