import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Award,
  CheckCircle2,
  Eye,
  Heart,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  Users,
  Building2,
  Scale,
  GraduationCap,
  HeartPulse,
  Home,
  Baby,
  Trees,
  Briefcase,
  Quote,
  Calendar,
  HeartHandshake,
  Smile,
  Accessibility,
  Globe,
  ShieldAlert,
  LifeBuoy,
  ArrowDown,
  Utensils,
  PackageCheck,
  Shield,
  Droplets,
  Scissors,
} from 'lucide-react';
import {
  ABOUT_TEXT,
  ADVISORY_TEAM,
  AWARDS,
  COVID_RESPONSE_BULLETS,
  GOVERNING_BODY,
  IMPACT_METRICS,
  IMPLEMENTATION_TEAM,
  LEGAL_DETAILS,
  OBJECTIVES,
  ORG_INFO,
  TARGET_BENEFICIARIES,
  VISION_MISSION_VALUES,
  WHY_SUPPORT_US,
  FOUNDER_INFO,
  TIMELINE_MILESTONES,
} from '../data/pcdsData';
import { CountUpNumber, PageBanner, ScrollReveal, StaggerGrid, StaggerItem } from '../components/MotionPrimitives';
import { PageRichSections } from '../components/PageRichSections';
import { LightboxModal } from '../components/Modals';

const OBJECTIVE_ICONS: Record<string, React.ReactNode> = {
  GraduationCap: <GraduationCap className="w-7 h-7" />,
  HeartPulse: <HeartPulse className="w-7 h-7" />,
  Users: <Users className="w-7 h-7" />,
  Home: <Home className="w-7 h-7" />,
  Baby: <Baby className="w-7 h-7" />,
  Scale: <Scale className="w-7 h-7" />,
  Trees: <Trees className="w-7 h-7" />,
  Briefcase: <Briefcase className="w-7 h-7" />,
};

const BENEFICIARY_ICONS: Record<string, React.ReactNode> = {
  '01': <Users className="w-8 h-8 text-[#0753A6]" />,
  '02': <HeartHandshake className="w-8 h-8 text-[#078B3B]" />,
  '03': <Smile className="w-8 h-8 text-[#0753A6]" />,
  '04': <Scale className="w-8 h-8 text-[#078B3B]" />,
  '05': <Heart className="w-8 h-8 text-[#0753A6]" />,
  '06': <Accessibility className="w-8 h-8 text-[#078B3B]" />,
  '07': <HeartPulse className="w-8 h-8 text-[#0753A6]" />,
  '08': <ShieldCheck className="w-8 h-8 text-[#078B3B]" />,
  '09': <Globe className="w-8 h-8 text-[#0753A6]" />,
  '10': <GraduationCap className="w-8 h-8 text-[#078B3B]" />,
  '11': <Home className="w-8 h-8 text-[#0753A6]" />,
  '12': <ShieldAlert className="w-8 h-8 text-[#078B3B]" />,
  '13': <Scale className="w-8 h-8 text-[#0753A6]" />,
  '14': <LifeBuoy className="w-8 h-8 text-[#078B3B]" />,
};

const IMPACT_CARD_ICONS: Record<string, React.ReactNode> = {
  '01': <Users className="w-8 h-8 text-[#082F70]" />,
  '02': <Home className="w-8 h-8 text-[#078B3B]" />,
  '03': <Utensils className="w-8 h-8 text-[#082F70]" />,
  '04': <PackageCheck className="w-8 h-8 text-[#078B3B]" />,
  '05': <Shield className="w-8 h-8 text-[#082F70]" />,
  '06': <Droplets className="w-8 h-8 text-[#078B3B]" />,
  '07': <Scissors className="w-8 h-8 text-[#082F70]" />,
  '08': <Heart className="w-8 h-8 text-[#078B3B]" />,
  '09': <HeartPulse className="w-8 h-8 text-[#082F70]" />,
  '10': <Building2 className="w-8 h-8 text-[#078B3B]" />,
  '11': <Award className="w-8 h-8 text-[#082F70]" />,
  '12': <Trees className="w-8 h-8 text-[#078B3B]" />,
  '13': <GraduationCap className="w-8 h-8 text-[#082F70]" />,
};

const ACHIEVEMENT_PHOTOS = [
  { id: 'ach-0', title: 'Dry Ration Distribution in Urban area', image: '/images/real/achievements/covid_dry_ration_urban.jpg', category: 'COVID-19 Relief', caption: 'PCDS volunteers distributing dry ration kits in urban slums during lockdown.' },
  { id: 'ach-1', title: 'GGH Hospital Sanitation & Immunity Kits', image: '/images/real/achievements/covid_ggh_sanitation.jpg', category: 'COVID-19 Relief', caption: 'Personal sanitation kits & immunity boosters provided to COVID-19 positive patients at GGH.' },
  { id: 'ach-2', title: 'Dry Ration Distribution in Rural area', image: '/images/real/achievements/covid_dry_ration_rural.jpg', category: 'COVID-19 Relief', caption: 'Emergency relief and food distribution in remote rural villages.' },
  { id: 'ach-3', title: 'Old Age Home Senior Citizens Care', image: '/images/real/achievements/old_age_home_1.jpg', category: 'Senior Citizen Care', caption: 'Elderly residents supported with dignity, healthcare, and continuous shelter.' },
  { id: 'ach-4', title: 'Old Age Home Community Gathering', image: '/images/real/achievements/old_age_home_2.jpg', category: 'Senior Citizen Care', caption: 'Nutritious meals and recreational sessions for senior citizens.' },
  { id: 'ach-5', title: 'Senior Citizen Healthcare & Wellness', image: '/images/real/achievements/old_age_home_3.jpg', category: 'Senior Citizen Care', caption: 'Regular health screenings and medical guidance for old age home inmates.' },
  { id: 'ach-6', title: 'Hair Donation Campaigns for Cancer Patients', image: '/images/real/achievements/hair_donation_grid.jpg', category: 'Hair Donation', caption: '17 voluntary donors contributed hair for preparing wigs for cancer patients.' },
  { id: 'ach-7', title: 'Free Medical Camps Consultation', image: '/images/real/achievements/medical_camps_1.jpg', category: 'Healthcare', caption: 'Free health check-ups and diagnostic consultations for underprivileged communities.' },
  { id: 'ach-8', title: 'Pediatric & Geriatric Health Screening', image: '/images/real/achievements/medical_camps_2.jpg', category: 'Healthcare', caption: 'Vital signs, diagnostic screening, and basic treatments at community medical camps.' },
  { id: 'ach-9', title: 'Medicine Distribution & Patient Care', image: '/images/real/achievements/medical_camps_3.jpg', category: 'Healthcare', caption: 'Distributing essential medicines and health counseling.' },
  { id: 'ach-10', title: 'Community Slum & Village Survey', image: '/images/real/achievements/community_slum_1.jpg', category: 'Community Development', caption: 'Surveying underserved slums lacking basic amenities.' },
  { id: 'ach-11', title: 'Community Infrastructure Advocacy', image: '/images/real/achievements/community_slum_2.jpg', category: 'Community Development', caption: 'Advocacy reports resulting in improved roads, drinking water, and electricity.' },
  { id: 'ach-12', title: 'Tailoring Training for Homemakers (2017–2020)', image: '/images/real/achievements/tailoring_1.jpg', category: 'Skill Development', caption: 'Vocational tailoring skills for women and homemakers.' },
  { id: 'ach-13', title: 'Women Self-Employment Training', image: '/images/real/achievements/tailoring_2.jpg', category: 'Skill Development', caption: 'Empowering women with livelihood promotion and garment stitching.' },
  { id: 'ach-14', title: 'Block-Level Sports Meet Dignitaries', image: '/images/real/achievements/sports_1.jpg', category: 'Sports & Youth', caption: 'Organized sports meets in collaboration with Nehru Yuva Kendra.' },
  { id: 'ach-15', title: 'Youth Kabaddi & Athletics Competition', image: '/images/real/achievements/sports_2.jpg', category: 'Sports & Youth', caption: 'Encouraging youth participation and sportsmanship.' },
  { id: 'ach-16', title: 'Volleyball Tournament', image: '/images/real/achievements/sports_3.jpg', category: 'Sports & Youth', caption: 'Promoting youth wellness and healthy community bonding.' },
  { id: 'ach-17', title: 'Self-Defence Training for Girls and Women', image: '/images/real/achievements/self_defence_collage.jpg', category: 'Women Empowerment', caption: '320 girls and women trained in self-defence and personal safety across colleges and rural mandals.' },
  { id: 'ach-18', title: 'Environmental Conservation & Tree Plantation', image: '/images/real/achievements/environment_collage.jpg', category: 'Environment', caption: '6,515+ saplings planted and park cleaning drives since 2018.' },
  { id: 'ach-19', title: 'Child Protection & Legal Awareness Campaigns', image: '/images/real/achievements/child_protection_collage.jpg', category: 'Child Protection', caption: 'Over 3,000 students educated on ERSS 112, Childline 1098, and POCSO Act.' },
];

export const AboutPage: React.FC = () => (
  <div>
    <PageBanner
      title="About Us"
      subtitle="Serving Humanity with Compassion, Dignity & Hope since 03 August 2019 in Guntur, Andhra Pradesh."
      badge="Organization Profile"
      breadcrumb={[{ label: 'Organization' }, { label: 'About Us' }]}
    />
    <section className="py-14 md:py-18 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      {/* Overview with Real Headquarters Image */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <ScrollReveal direction="left" className="lg:col-span-5 space-y-4">
          <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[4/3] group border border-slate-200">
            <img
              src="/images/real/office/ngoofc.jpg"
              alt="Prajwala Community Development Society Official Headquarters"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#082F70]/80 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-3 left-4 right-4 text-white">
              <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#078B3B] text-[11px] font-bold uppercase mb-1">
                Registered Society
              </span>
              <p className="text-xs font-semibold text-white/90">
                PCDS Headquarters • Sangadi Gunta, Guntur
              </p>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-md aspect-[16/9] border border-slate-200 hidden sm:block">
            <img
              src="/images/real/office/ngoofc1.jpg"
              alt="PCDS Operations and Community Hall"
              className="w-full h-full object-cover"
            />
          </div>
        </ScrollReveal>

        <ScrollReveal direction="right" className="lg:col-span-7 space-y-5 bg-white/95 p-6 sm:p-10 rounded-3xl shadow-lg border border-slate-200/90">
          <span className="inline-block px-3.5 py-1 rounded-full bg-[#EDF8EF] text-[#078B3B] text-xs font-bold uppercase tracking-wider">
            Established: {ORG_INFO.establishedDate} • Regd No: {ORG_INFO.regNumber}
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#082F70]">
            Prajwala Community Development Society (PCDS)
          </h2>
          <p className="text-base text-[#14294A] leading-relaxed">{ABOUT_TEXT.intro}</p>
          <p className="text-base text-[#14294A] leading-relaxed">{ABOUT_TEXT.missionParagraph}</p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
            <div className="p-3 rounded-2xl bg-[#F3F8FC] border border-slate-200/80">
              <div className="text-xs text-[#63738B] font-semibold">PAN Card</div>
              <div className="text-sm font-bold text-[#082F70]">AAJAP2309P</div>
            </div>
            <div className="p-3 rounded-2xl bg-[#EDF8EF] border border-[#078B3B]/20">
              <div className="text-xs text-[#63738B] font-semibold">12A &amp; 80G</div>
              <div className="text-sm font-bold text-[#078B3B]">Tax-Exempted</div>
            </div>
            <div className="p-3 rounded-2xl bg-[#F3F8FC] border border-slate-200/80 col-span-2 sm:col-span-1">
              <div className="text-xs text-[#63738B] font-semibold">CSR-1 Regd.</div>
              <div className="text-sm font-bold text-[#0753A6]">CSR00108210</div>
            </div>
          </div>

          <div className="pt-2 flex flex-wrap gap-3">
            <Link
              to="/organization/vision-mission"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#082F70] text-white text-sm font-semibold hover:bg-[#0753A6] transition-colors"
            >
              <span>Vision &amp; Mission</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/major-activities"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#078B3B] text-white text-sm font-semibold hover:bg-[#082F70] transition-colors"
            >
              <span>Explore All Activities</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </ScrollReveal>
      </div>

      {/* Founder & Leadership Card on About Page */}
      <div id="founder" className="bg-white/95 rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-200/90">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-4 flex flex-col items-center">
            <div className="relative w-full max-w-xs rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/5]">
              <img
                src={FOUNDER_INFO.image}
                alt={`${FOUNDER_INFO.name} - ${FOUNDER_INFO.designation}`}
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#082F70]/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#078B3B] text-[10px] font-bold uppercase mb-1">
                  {FOUNDER_INFO.designation}
                </span>
                <div className="font-extrabold text-lg leading-tight">{FOUNDER_INFO.name}</div>
                <div className="text-xs text-[#FFE082]">{FOUNDER_INFO.qualification} • Advocate</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EDF8EF] text-[#078B3B] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Founder’s Message &amp; Leadership</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#082F70]">
              “{FOUNDER_INFO.quote}”
            </h3>
            <div className="space-y-3 text-sm sm:text-base text-[#14294A] leading-relaxed">
              {FOUNDER_INFO.message.map((msg, i) => (
                <p key={i}>{msg}</p>
              ))}
            </div>
            <div className="pt-2 text-sm font-bold text-[#082F70]">
              — {FOUNDER_INFO.name}, {FOUNDER_INFO.qualification}
              <div className="text-xs text-[#078B3B] font-semibold">{FOUNDER_INFO.designation}, PCDS</div>
            </div>
          </div>
        </div>
      </div>

      {/* PCDS Journey & Evolutionary Milestones */}
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#EDF8EF] text-[#078B3B] text-xs font-bold uppercase tracking-wider">
            <Calendar className="w-3.5 h-3.5" />
            <span>Organizational Journey</span>
          </span>
          <h3 className="mt-2 text-2xl sm:text-3xl font-extrabold text-[#082F70]">
            PCDS Milestones &amp; Evolution
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TIMELINE_MILESTONES.map((m, idx) => (
            <div
              key={idx}
              className="bg-white/95 rounded-3xl p-6 shadow-md border border-slate-200/90 hover:shadow-xl transition-all flex flex-col justify-between"
            >
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-[#EDF8EF] text-[#078B3B] text-xs font-extrabold mb-3">
                  {m.year}
                </span>
                <h4 className="text-base font-bold text-[#082F70] mb-2">{m.title}</h4>
                <p className="text-xs sm:text-sm text-[#14294A] leading-relaxed">{m.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    <PageRichSections />
  </div>
);

export const VisionMissionPage: React.FC = () => (
  <div>
    <PageBanner
      title="Vision, Mission & Core Values"
      subtitle="Our guiding principles for inclusive social development, dignity, and community empowerment."
      badge="Guiding Principles"
      breadcrumb={[{ label: 'Organization' }, { label: 'Vision, Mission & Core Values' }]}
    />
    <section className="py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ScrollReveal direction="left">
          <div className="h-full bg-white rounded-3xl p-8 shadow-lg border-t-4 border-[#078B3B] space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-[#EDF8EF] text-[#078B3B] flex items-center justify-center">
              <Eye className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-bold text-[#082F70]">Our Vision</h2>
            <p className="text-lg text-[#14294A] leading-relaxed">“{VISION_MISSION_VALUES.vision}”</p>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="right">
          <div className="h-full bg-white rounded-3xl p-8 shadow-lg border-t-4 border-[#082F70] space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-[#F3F8FC] text-[#082F70] flex items-center justify-center">
              <Target className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-bold text-[#082F70]">Our Mission</h2>
            <p className="text-lg text-[#14294A] leading-relaxed">“{VISION_MISSION_VALUES.mission}”</p>
          </div>
        </ScrollReveal>
      </div>

      <ScrollReveal>
        <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-[#EDF8EF] text-[#078B3B] flex items-center justify-center">
              <Star className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-[#082F70]">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {VISION_MISSION_VALUES.coreValues.map((v) => (
              <div key={v.name} className="bg-[#F3F8FC] rounded-2xl p-5 border border-[#0753A6]/10">
                <h3 className="font-bold text-[#082F70] text-lg flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#078B3B]" />
                  <span>{v.name}</span>
                </h3>
                <p className="mt-2 text-sm text-[#63738B] leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
    <PageRichSections />
  </div>
);

export const ObjectivesPage: React.FC = () => (
  <div>
    <PageBanner
      title="Objectives"
      subtitle="Eight foundational objectives driving every programme of Prajwala Community Development Society."
      badge="Section 3 • PDF Profile"
      breadcrumb={[{ label: 'Organization' }, { label: 'Objectives' }]}
    />
    <section className="py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {OBJECTIVES.map((obj) => (
          <StaggerItem key={obj.id}>
            <div className="h-full bg-white rounded-3xl p-6 shadow-md border border-slate-100 hover:border-[#078B3B]/40 transition-all">
              <div className="w-14 h-14 rounded-2xl bg-[#EDF8EF] text-[#078B3B] flex items-center justify-center mb-4">
                {OBJECTIVE_ICONS[obj.icon]}
              </div>
              <span className="text-xs font-bold text-[#0753A6]">OBJECTIVE 0{obj.id}</span>
              <h2 className="mt-1 text-lg font-bold text-[#082F70]">{obj.title}</h2>
              <p className="mt-2 text-sm text-[#63738B] leading-relaxed">{obj.description}</p>
            </div>
          </StaggerItem>
        ))}
      </StaggerGrid>
    </section>
    <PageRichSections />
  </div>
);

export const TargetBeneficiariesPage: React.FC = () => (
  <div>
    <PageBanner
      title="Target Beneficiaries"
      subtitle="Prajwala Community Development Society (PCDS) is committed to serving vulnerable, marginalized, and underprivileged communities with a focus on 14 dedicated target groups."
      badge="5. Target Beneficiaries"
      breadcrumb={[{ label: 'Organization' }, { label: 'Target Beneficiaries' }]}
    />
    <section className="py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Intro Quote Banner */}
      <ScrollReveal className="text-center max-w-4xl mx-auto mb-12">
        <span className="inline-block px-4 py-1.5 rounded-full bg-[#078B3B] text-white text-xs font-bold uppercase tracking-wider mb-4">
          5. TARGET BENEFICIARIES
        </span>
        <blockquote className="text-lg sm:text-xl font-bold text-[#082F70] leading-relaxed bg-[#EDF8EF]/70 p-6 rounded-3xl border border-[#078B3B]/20">
          “Prajwala Community Development Society (PCDS) is committed to serving vulnerable, marginalized, and underprivileged communities with a focus on the following target groups”:
        </blockquote>
      </ScrollReveal>

      {/* 14 Target Beneficiaries Grid with Dedicated Crisp Icons */}
      <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {TARGET_BENEFICIARIES.map((b) => (
          <StaggerItem key={b.id}>
            <div className="group h-full bg-white rounded-3xl p-6 shadow-md hover:shadow-2xl border border-slate-200/90 hover:border-[#078B3B]/50 transition-all duration-300 flex flex-col items-center text-center hover:-translate-y-1 relative overflow-hidden">
              {/* Circular Icon Container */}
              <div className="relative mb-4">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#EDF8EF] to-[#F3F8FC] border border-[#078B3B]/20 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-300">
                  {BENEFICIARY_ICONS[b.id] || <Users className="w-8 h-8 text-[#0753A6]" />}
                </div>
                <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-[#082F70] group-hover:bg-[#078B3B] text-white font-black text-xs flex items-center justify-center shadow-md transition-colors">
                  {b.id}
                </span>
              </div>

              {/* Title Badge */}
              <div className="w-full mt-auto">
                <span className="inline-block w-full px-3.5 py-2.5 rounded-xl bg-[#082F70] group-hover:bg-[#078B3B] text-white text-xs sm:text-[13px] font-bold leading-tight transition-colors shadow-sm">
                  {b.label}
                </span>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerGrid>
    </section>
    <PageRichSections />
  </div>
);

export const ImpactAchievementsPage: React.FC = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <div>
      <PageBanner
        title="Impact & Achievements"
        subtitle="Prajwala Community Development Society (PCDS) has made a significant impact through its dedicated community service initiatives. Some of the key achievements include:"
        badge="6. Impact / Achievements"
        breadcrumb={[{ label: 'Organization' }, { label: 'Impact & Achievements' }]}
      />
      <section className="py-14 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Intro Header */}
        <ScrollReveal className="text-center max-w-4xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#082F70] text-white text-xs font-bold uppercase tracking-wider mb-3">
            6. IMPACT / ACHIEVEMENTS
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#082F70]">
            Dedicated Community Service &amp; Measurable Social Impact
          </h2>
          <p className="mt-3 text-base text-[#14294A] leading-relaxed">
            Prajwala Community Development Society (PCDS) has made a significant impact through its dedicated community service initiatives. Some of the key achievements include:
          </p>
        </ScrollReveal>

        {/* SECTION 1: IMPACT AT A GLANCE (Page 15 & image copy 44) */}
        <ScrollReveal className="bg-gradient-to-br from-[#082F70] via-[#0753A6] to-[#082F70] rounded-3xl p-6 sm:p-10 text-white shadow-2xl relative overflow-hidden">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="inline-block px-4 py-1 rounded-full bg-[#078B3B] text-white text-xs font-bold uppercase tracking-wider mb-3">
              IMPACT AT A GLANCE
            </span>
            <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              IMPACT AT A GLANCE
            </h3>
            <p className="mt-2 text-sm sm:text-base text-white/90 font-medium">
              Transforming Lives. Building Communities. Creating a Better Tomorrow.
            </p>
          </div>

          {/* 13 Animated Impact Cards Grid with Large, Clearly Visible Dedicated Icons */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
            {IMPACT_METRICS.map((m) => (
              <div
                key={m.id}
                className="bg-white rounded-2xl p-4 sm:p-5 text-center shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all flex flex-col justify-between group"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="w-7 h-7 rounded-full bg-[#082F70] text-white text-xs font-black flex items-center justify-center shadow-sm">
                    {m.id}
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-[#EDF8EF] text-[10px] font-extrabold text-[#078B3B] uppercase tracking-wider border border-[#078B3B]/20">
                    Verified
                  </span>
                </div>

                {/* Clearly Visible Large Dedicated Icon */}
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#EDF8EF] to-[#F3F8FC] border-2 border-[#078B3B]/25 flex items-center justify-center shadow-inner mx-auto my-2.5 group-hover:scale-110 group-hover:border-[#078B3B]/60 transition-all">
                  {IMPACT_CARD_ICONS[m.id]}
                </div>

                <div className="mb-2">
                  <div className="text-2xl sm:text-3xl font-black text-[#082F70] leading-none">
                    <CountUpNumber target={m.number} suffix={m.suffix} />
                  </div>
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-bold text-[#078B3B] leading-tight">
                    {m.label}
                  </div>
                  <div className="mt-1 text-[11px] text-[#63738B] leading-tight">
                    {m.detail}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* SECTION A: COVID-19 EMERGENCY RESPONSE (Page 10) */}
        <ScrollReveal className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-200">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-100">
            <span className="px-4 py-1.5 rounded-full bg-[#078B3B] text-white text-xs sm:text-sm font-bold">
              A) COVID-19 EMERGENCY RESPONSE (2020–2021)
            </span>
            <span className="text-xs font-semibold text-[#0753A6]">Official PCDS Profile • Page 10</span>
          </div>

          {/* 18 Verbatim Bullets */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
            {COVID_RESPONSE_BULLETS.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 bg-[#F3F8FC] p-3.5 rounded-2xl text-xs sm:text-sm text-[#14294A]">
                <CheckCircle2 className="w-4 h-4 text-[#078B3B] shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* Authentic Page 10 Photos with Click-to-Popup */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            <div className="space-y-2">
              <button
                type="button"
                onClick={() => setLightboxIndex(0)}
                className="w-full text-left rounded-2xl overflow-hidden shadow-md border-2 border-slate-100 aspect-[4/3] bg-slate-100 group cursor-pointer"
              >
                <img
                  src="/images/real/achievements/covid_dry_ration_urban.jpg"
                  alt="Dry Ration Distribution in Urban area"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
              </button>
              <p className="text-xs font-bold text-[#082F70] text-center">
                Dry Ration Distribution in Urban area
              </p>
            </div>

            <div className="space-y-2">
              <button
                type="button"
                onClick={() => setLightboxIndex(1)}
                className="w-full text-left rounded-2xl overflow-hidden shadow-md border-2 border-slate-100 aspect-[4/3] bg-slate-100 group cursor-pointer"
              >
                <img
                  src="/images/real/achievements/covid_ggh_sanitation.jpg"
                  alt="At GGH personal sanitation kits"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
              </button>
              <p className="text-xs font-bold text-[#082F70] text-center">
                At GGH, personal sanitation kits and immunity-boosting kits given to COVID-positive patients
              </p>
            </div>

            <div className="space-y-2">
              <button
                type="button"
                onClick={() => setLightboxIndex(2)}
                className="w-full text-left rounded-2xl overflow-hidden shadow-md border-2 border-slate-100 aspect-[4/3] bg-slate-100 group cursor-pointer"
              >
                <img
                  src="/images/real/achievements/covid_dry_ration_rural.jpg"
                  alt="Dry Ration Distribution in Rural area"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
              </button>
              <p className="text-xs font-bold text-[#082F70] text-center">
                Dry Ration Distribution in Rural area
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* SECTION B & C: OLD AGE HOME & HAIR DONATION (Page 11) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Section B: Old Age Home */}
          <ScrollReveal className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-200 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
                <span className="px-3.5 py-1 rounded-full bg-[#078B3B] text-white text-xs font-bold">
                  B) OLD AGE HOME SERVICES &amp; SENIOR CITIZEN
                </span>
                <span className="text-xs font-semibold text-[#0753A6]">Page 11</span>
              </div>
              <p className="text-sm sm:text-base text-[#14294A] leading-relaxed mb-6">
                Since its establishment, the Old Age Home has provided shelter, food, clothing, healthcare, and emotional support to <strong>46 senior citizens</strong>. Currently, <strong>25 senior citizens</strong> are residing in the Home, receiving continuous care and support.
              </p>
            </div>

            {/* 3 Photos with Click-to-Popup */}
            <div className="grid grid-cols-3 gap-3">
              <button
                type="button"
                onClick={() => setLightboxIndex(3)}
                className="rounded-xl overflow-hidden shadow-sm aspect-square bg-slate-100 group cursor-pointer"
              >
                <img src="/images/real/achievements/old_age_home_1.jpg" alt="PCDS Old Age Home Elders" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
              </button>
              <button
                type="button"
                onClick={() => setLightboxIndex(4)}
                className="rounded-xl overflow-hidden shadow-sm aspect-square bg-slate-100 group cursor-pointer"
              >
                <img src="/images/real/achievements/old_age_home_2.jpg" alt="Old Age Home Community Gathering" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
              </button>
              <button
                type="button"
                onClick={() => setLightboxIndex(5)}
                className="rounded-xl overflow-hidden shadow-sm aspect-square bg-slate-100 group cursor-pointer"
              >
                <img src="/images/real/achievements/old_age_home_3.jpg" alt="Care and Support for Seniors" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
              </button>
            </div>
          </ScrollReveal>

          {/* Section C: Hair Donation */}
          <ScrollReveal className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-200 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
                <span className="px-3.5 py-1 rounded-full bg-[#078B3B] text-white text-xs font-bold">
                  C) HAIR DONATION CAMPAIGNS
                </span>
                <span className="text-xs font-semibold text-[#0753A6]">Page 11</span>
              </div>
              <p className="text-sm sm:text-base text-[#14294A] leading-relaxed mb-6">
                Successfully organized <strong>3 Hair Donation Camps</strong>, where <strong>17 voluntary hair donors</strong> contributed their hair to support the preparation of wigs for cancer patients, restoring hope and confidence.
              </p>
            </div>

            <button
              type="button"
              onClick={() => setLightboxIndex(6)}
              className="w-full text-left rounded-2xl overflow-hidden shadow-md border border-slate-100 aspect-[16/9] bg-slate-100 group cursor-pointer"
            >
              <img src="/images/real/achievements/hair_donation_grid.jpg" alt="17 Voluntary Hair Donors & Hair Donation Camps" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
            </button>
          </ScrollReveal>
        </div>

        {/* SECTION D & E: MEDICAL CAMPS & COMMUNITY DEV (Page 12) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Section D: Medical Camps */}
          <ScrollReveal className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-200 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
                <span className="px-3.5 py-1 rounded-full bg-[#078B3B] text-white text-xs font-bold">
                  D) MEDICAL CAMPS
                </span>
                <span className="text-xs font-semibold text-[#0753A6]">Page 12</span>
              </div>
              <p className="text-sm sm:text-base text-[#14294A] leading-relaxed mb-6">
                Conducted <strong>5 Free Medical Camps</strong>, providing health check-ups, medical consultations, basic treatment, and health awareness services to underprivileged communities.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <button
                type="button"
                onClick={() => setLightboxIndex(7)}
                className="rounded-xl overflow-hidden shadow-sm aspect-square bg-slate-100 group cursor-pointer"
              >
                <img src="/images/real/achievements/medical_camps_1.jpg" alt="Medical Camp Doctor Consultation" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
              </button>
              <button
                type="button"
                onClick={() => setLightboxIndex(8)}
                className="rounded-xl overflow-hidden shadow-sm aspect-square bg-slate-100 group cursor-pointer"
              >
                <img src="/images/real/achievements/medical_camps_2.jpg" alt="Free Health Screening" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
              </button>
              <button
                type="button"
                onClick={() => setLightboxIndex(9)}
                className="rounded-xl overflow-hidden shadow-sm aspect-square bg-slate-100 group cursor-pointer"
              >
                <img src="/images/real/achievements/medical_camps_3.jpg" alt="PCDS Health Camp Services" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
              </button>
            </div>
          </ScrollReveal>

          {/* Section E: Community Development Initiatives */}
          <ScrollReveal className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-200 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
                <span className="px-3.5 py-1 rounded-full bg-[#078B3B] text-white text-xs font-bold">
                  E) COMMUNITY DEVELOPMENT INITIATIVES
                </span>
                <span className="text-xs font-semibold text-[#0753A6]">Page 12</span>
              </div>
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-2.5 bg-[#F3F8FC] p-3 rounded-xl text-sm text-[#14294A]">
                  <CheckCircle2 className="w-4 h-4 text-[#078B3B] shrink-0 mt-0.5" />
                  <span>Surveyed underserved slums and villages lacking basic amenities.</span>
                </div>
                <div className="flex items-start gap-2.5 bg-[#F3F8FC] p-3 rounded-xl text-sm text-[#14294A]">
                  <CheckCircle2 className="w-4 h-4 text-[#078B3B] shrink-0 mt-0.5" />
                  <span>Submitted reports to Government authorities, resulting in improvements in roads, drinking water supply, and electricity in several areas.</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setLightboxIndex(10)}
                className="rounded-xl overflow-hidden shadow-sm aspect-[4/3] bg-slate-100 group cursor-pointer"
              >
                <img src="/images/real/achievements/community_slum_1.jpg" alt="Slum Community Survey" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
              </button>
              <button
                type="button"
                onClick={() => setLightboxIndex(11)}
                className="rounded-xl overflow-hidden shadow-sm aspect-[4/3] bg-slate-100 group cursor-pointer"
              >
                <img src="/images/real/achievements/community_slum_2.jpg" alt="Village Community Welfare" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
              </button>
            </div>
          </ScrollReveal>
        </div>

        {/* SECTION F, G, H: SKILL DEV, SPORTS, SELF-DEFENCE (Page 13) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {/* Section F: Skill Development */}
          <ScrollReveal className="bg-white rounded-3xl p-6 shadow-xl border border-slate-200 flex flex-col justify-between">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-[#078B3B] text-white text-xs font-bold mb-3">
                F) SKILL DEVELOPMENT
              </span>
              <h3 className="font-bold text-[#082F70] text-base mb-2">Tailoring Training for Homemakers (2017–2020)</h3>
              <p className="text-xs text-[#14294A] leading-relaxed mb-4">
                Vocational tailoring and garment making programmes empowering women with self-employment skills.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setLightboxIndex(12)}
                className="rounded-xl overflow-hidden aspect-square bg-slate-100 group cursor-pointer"
              >
                <img src="/images/real/achievements/tailoring_1.jpg" alt="Tailoring Class" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
              </button>
              <button
                type="button"
                onClick={() => setLightboxIndex(13)}
                className="rounded-xl overflow-hidden aspect-square bg-slate-100 group cursor-pointer"
              >
                <img src="/images/real/achievements/tailoring_2.jpg" alt="Women Tailoring Trainees" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
              </button>
            </div>
          </ScrollReveal>

          {/* Section G: Sports & Youth Development */}
          <ScrollReveal className="bg-white rounded-3xl p-6 shadow-xl border border-slate-200 flex flex-col justify-between">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-[#078B3B] text-white text-xs font-bold mb-3">
                G) SPORTS &amp; YOUTH DEVELOPMENT
              </span>
              <p className="text-xs sm:text-sm text-[#14294A] leading-relaxed mb-4">
                Organized Block-Level Sports Meets to encourage youth participation and promote sportsmanship in collaboration with Nehru Yuva Kendra.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => setLightboxIndex(14)}
                className="rounded-xl overflow-hidden aspect-square bg-slate-100 group cursor-pointer"
              >
                <img src="/images/real/achievements/sports_1.jpg" alt="Sports Meet Dignitaries" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
              </button>
              <button
                type="button"
                onClick={() => setLightboxIndex(15)}
                className="rounded-xl overflow-hidden aspect-square bg-slate-100 group cursor-pointer"
              >
                <img src="/images/real/achievements/sports_2.jpg" alt="Kabaddi & Athletics" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
              </button>
              <button
                type="button"
                onClick={() => setLightboxIndex(16)}
                className="rounded-xl overflow-hidden aspect-square bg-slate-100 group cursor-pointer"
              >
                <img src="/images/real/achievements/sports_3.jpg" alt="Volleyball Tournament" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
              </button>
            </div>
          </ScrollReveal>

          {/* Section H: Self-Defence Training */}
          <ScrollReveal className="bg-white rounded-3xl p-6 shadow-xl border border-slate-200 flex flex-col justify-between">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-[#078B3B] text-white text-xs font-bold mb-3">
                H) SELF-DEFENCE TRAINING
              </span>
              <p className="text-xs sm:text-sm text-[#14294A] leading-relaxed mb-4">
                Trained <strong>320 girls and women</strong> in self-defence and personal safety across B.H.H. Women&apos;s Degree College, Government Women&apos;s Degree College, and rural communities.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setLightboxIndex(17)}
              className="w-full text-left rounded-xl overflow-hidden aspect-[4/3] bg-slate-100 group cursor-pointer"
            >
              <img src="/images/real/achievements/self_defence_collage.jpg" alt="Silambam Self-Defence Classes" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
            </button>
          </ScrollReveal>
        </div>

        {/* SECTION I & J: ENVIRONMENT & CHILD PROTECTION (Page 14) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Section I: Environmental Conservation */}
          <ScrollReveal className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-200 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
                <span className="px-3.5 py-1 rounded-full bg-[#078B3B] text-white text-xs font-bold">
                  I) ENVIRONMENTAL CONSERVATION
                </span>
                <span className="text-xs font-semibold text-[#0753A6]">Page 14</span>
              </div>
              <p className="text-sm sm:text-base text-[#14294A] leading-relaxed mb-6">
                Planted <strong>more than 6,515 saplings</strong> since 2018 across rural and urban areas of Guntur with the support of Government officials, contributing to environmental sustainability and community participation.
              </p>
            </div>

            <button
              type="button"
              onClick={() => setLightboxIndex(18)}
              className="w-full text-left rounded-2xl overflow-hidden shadow-md aspect-[16/9] bg-slate-100 group cursor-pointer"
            >
              <img src="/images/real/achievements/environment_collage.jpg" alt="Park Cleaning and 6,515 Saplings Planted" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
            </button>
          </ScrollReveal>

          {/* Section J: Child Protection & Legal Awareness */}
          <ScrollReveal className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-200 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
                <span className="px-3.5 py-1 rounded-full bg-[#078B3B] text-white text-xs font-bold">
                  J) CHILD PROTECTION &amp; LEGAL AWARENESS
                </span>
                <span className="text-xs font-semibold text-[#0753A6]">Page 14</span>
              </div>
              <p className="text-sm sm:text-base text-[#14294A] leading-relaxed mb-6">
                Created awareness among <strong>over 3,000 students</strong> on Emergency Response Support System (112), Childline (1098), the POCSO Act, child rights, child safety, and other child protection laws through programs conducted in educational institutions and communities.
              </p>
            </div>

            <button
              type="button"
              onClick={() => setLightboxIndex(19)}
              className="w-full text-left rounded-2xl overflow-hidden shadow-md aspect-[16/9] bg-slate-100 group cursor-pointer"
            >
              <img src="/images/real/achievements/child_protection_collage.jpg" alt="Child Rights & POCSO Act School Campaigns" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
            </button>
          </ScrollReveal>
        </div>
      </section>

      {/* Lightbox Modal for Full Authentic Image Popup */}
      <LightboxModal
        items={ACHIEVEMENT_PHOTOS}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onChangeIndex={(idx) => setLightboxIndex(idx)}
      />
      <PageRichSections />
    </div>
  );
};

export const AwardsPage: React.FC = () => (
  <div>
    <PageBanner
      title="Awards & Recognitions"
      subtitle="Prajwala Community Development Society (PCDS) has been recognized by various Government and Non-Government organizations for its outstanding commitment to community service and social development."
      badge="7. Awards & Recognitions"
      breadcrumb={[{ label: 'Organization' }, { label: 'Awards & Recognitions' }]}
    />
    <section className="py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      {/* Official Header Quote */}
      <ScrollReveal className="text-center max-w-4xl mx-auto mb-10">
        <span className="inline-block px-4 py-1.5 rounded-full bg-[#082F70] text-white text-xs font-bold uppercase tracking-wider mb-3">
          7. 🏆 AWARDS &amp; RECOGNITIONS
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#082F70]">
          Recognitions for Outstanding Humanitarian &amp; Social Development
        </h2>
        <p className="mt-3 text-base text-[#14294A] leading-relaxed">
          Prajwala Community Development Society (PCDS) has been recognized by various Government and Non-Government organizations for its outstanding commitment to community service and social development.
        </p>
      </ScrollReveal>

      {/* The 7 Verbatim Awards */}
      <StaggerGrid className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {AWARDS.map((a) => (
          <StaggerItem key={a.id}>
            <div className="group h-full bg-white rounded-3xl p-7 shadow-md hover:shadow-xl border border-slate-200/90 hover:border-[#078B3B]/50 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#082F70] group-hover:bg-[#078B3B] text-[#FFE082] flex items-center justify-center transition-colors shadow-sm">
                    <Award className="w-6 h-6" />
                  </div>
                  <span className="px-3.5 py-1 rounded-full bg-[#EDF8EF] text-[#078B3B] text-xs font-bold">
                    {a.year}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#082F70] group-hover:text-[#0753A6] transition-colors">{a.title}</h3>
                <p className="mt-1 text-xs font-bold text-[#078B3B] uppercase tracking-wide">{a.presenter}</p>
                <p className="mt-3 text-sm sm:text-base text-[#14294A] leading-relaxed">
                  {a.description}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400 font-semibold">
                <span>Official PCDS Recognition</span>
                <span>Page 16</span>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerGrid>
    </section>
    <PageRichSections />
  </div>
);

export const LegalInfoPage: React.FC = () => (
  <div>
    <PageBanner
      title="Legal Information"
      subtitle="Official registration, NGO Darpan ID, PAN, 12A, 80G, and CSR-1 compliance details of PCDS."
      badge="Transparency & Compliance"
      breadcrumb={[{ label: 'Organization' }, { label: 'Legal Information' }]}
    />
    <section className="py-14 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <ScrollReveal>
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200">
          <div className="bg-[#082F70] text-white px-6 py-4 flex items-center justify-between">
            <span className="font-bold">PARTICULARS</span>
            <span className="font-bold">DETAILS</span>
          </div>
          <div className="divide-y divide-slate-200">
            {LEGAL_DETAILS.map((row, idx) => (
              <div
                key={row.particular}
                className={`px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-1 ${
                  idx % 2 === 0 ? 'bg-[#EDF8EF]/65' : 'bg-white'
                }`}
              >
                <span className="font-bold text-[#082F70]">{row.particular}</span>
                <span className="font-mono font-semibold text-[#14294A]">{row.detail}</span>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
    <PageRichSections />
  </div>
);

export const OrgStructurePage: React.FC = () => (
  <div>
    <PageBanner
      title="Organisation Structure"
      subtitle="PCDS is governed by a dedicated Governing Body and supported by a team of professionals and volunteers committed to serving the community with transparency, accountability, and compassion."
      badge="11. Organisation Structure"
      breadcrumb={[{ label: 'Organization' }, { label: 'Organisation Structure' }]}
    />
    <section className="py-14 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Official Intro Quote */}
      <ScrollReveal className="text-center max-w-4xl mx-auto">
        <span className="inline-block px-4 py-1.5 rounded-full bg-[#082F70] text-white text-xs font-bold uppercase tracking-wider mb-3">
          11. ORGANISATION STRUCTURE
        </span>
        <blockquote className="text-base sm:text-lg font-bold text-[#082F70] leading-relaxed bg-[#EDF8EF]/70 p-6 rounded-3xl border border-[#078B3B]/20">
          “Prajwala Community Development Society (PCDS) is governed by a dedicated Governing Body and supported by a team of professionals and volunteers committed to serving the community with transparency, accountability, and compassion.”
        </blockquote>
      </ScrollReveal>

      {/* Interactive Two-Tier Structure Flowchart Matching image copy 46 */}
      <ScrollReveal>
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-200 space-y-12">
          {/* TIER 1: GOVERNING BODY */}
          <div className="space-y-6">
            <div className="text-center">
              <span className="inline-block px-6 py-2 rounded-xl bg-[#078B3B] text-white font-black text-sm uppercase tracking-wider shadow-sm">
                GOVERNING BODY
              </span>
            </div>

            {/* Level 1: President */}
            <div className="flex justify-center">
              <div className="w-full max-w-md bg-[#078B3B] text-white rounded-2xl p-4 shadow-md text-center border-2 border-white">
                <div className="font-black text-base sm:text-lg tracking-tight">PRESIDENT</div>
                <div className="text-xs text-[#FFE082] font-semibold mt-0.5">
                  (Founder &amp; Legal Professional – Advocate)
                </div>
              </div>
            </div>

            {/* 3 Downward Arrows below President pointing to VP, Secretary, Treasurer */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto my-2">
              <div className="flex justify-center">
                <ArrowDown className="w-5 h-5 text-[#0753A6] animate-bounce" />
              </div>
              <div className="flex justify-center">
                <ArrowDown className="w-5 h-5 text-[#078B3B] animate-bounce" />
              </div>
              <div className="flex justify-center">
                <ArrowDown className="w-5 h-5 text-[#0753A6] animate-bounce" />
              </div>
            </div>

            {/* Level 2: VP, Secretary, Treasurer */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
              <div className="bg-[#0753A6] text-white rounded-xl p-3.5 text-center font-bold text-sm shadow">
                VICE PRESIDENT
              </div>
              <div className="bg-[#0753A6] text-white rounded-xl p-3.5 text-center font-bold text-sm shadow ring-2 ring-[#078B3B]">
                SECRETARY
              </div>
              <div className="bg-[#0753A6] text-white rounded-xl p-3.5 text-center font-bold text-sm shadow">
                TREASURER
              </div>
            </div>

            {/* Downward Arrow under Secretary */}
            <div className="flex justify-center my-1.5">
              <ArrowDown className="w-5 h-5 text-[#078B3B]" />
            </div>

            {/* Level 3: Joint Secretary */}
            <div className="flex justify-center">
              <div className="w-full max-w-xs bg-[#078B3B] text-white rounded-xl p-3 text-center font-bold text-sm shadow">
                JOINT SECRETARY
              </div>
            </div>

            {/* Downward Arrow */}
            <div className="flex justify-center my-1.5">
              <ArrowDown className="w-5 h-5 text-[#082F70]" />
            </div>

            {/* Level 4: Executive Committee */}
            <div className="flex justify-center">
              <div className="w-full max-w-md bg-[#082F70] text-white rounded-xl p-3.5 text-center font-bold text-sm shadow">
                EXECUTIVE COMMITTEE MEMBERS - 2
              </div>
            </div>
          </div>

          <div className="border-t-2 border-dashed border-slate-200 my-8" />

          {/* TIER 2: PROGRAMME IMPLEMENTATION TEAM */}
          <div className="space-y-6">
            <div className="text-center">
              <span className="inline-block px-6 py-2 rounded-xl bg-[#078B3B] text-white font-black text-sm uppercase tracking-wider shadow-sm">
                1. PROGRAMME IMPLEMENTATION TEAM
              </span>
            </div>

            {/* Programme Coordinator */}
            <div className="flex justify-center">
              <div className="w-full max-w-md bg-[#0753A6] text-white rounded-xl p-3.5 text-center font-bold text-sm sm:text-base shadow">
                PROGRAMME COORDINATOR
              </div>
            </div>

            {/* 4 Downward Arrows below Programme Coordinator */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-2">
              <div className="flex justify-center">
                <ArrowDown className="w-5 h-5 text-[#0753A6] animate-bounce" />
              </div>
              <div className="flex justify-center">
                <ArrowDown className="w-5 h-5 text-[#0753A6] animate-bounce" />
              </div>
              <div className="flex justify-center">
                <ArrowDown className="w-5 h-5 text-[#0753A6] animate-bounce" />
              </div>
              <div className="flex justify-center">
                <ArrowDown className="w-5 h-5 text-[#0753A6] animate-bounce" />
              </div>
            </div>

            {/* Implementation Branches */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {/* Branch 1 */}
              <div className="space-y-2">
                <div className="bg-[#0753A6] text-white rounded-xl p-3 text-center font-bold text-xs sm:text-sm shadow min-h-[58px] flex items-center justify-center">
                  OLD AGE HOME COORDINATOR
                </div>
                <div className="flex justify-center">
                  <ArrowDown className="w-4 h-4 text-[#082F70]" />
                </div>
                <div className="bg-[#082F70] text-white rounded-xl p-2.5 text-center font-bold text-xs shadow">
                  COUNSELLOR
                </div>
              </div>

              {/* Branch 2 */}
              <div className="space-y-2">
                <div className="bg-[#0753A6] text-white rounded-xl p-3 text-center font-bold text-xs sm:text-sm shadow min-h-[58px] flex items-center justify-center">
                  SOCIAL WORKERS
                </div>
                <div className="flex justify-center">
                  <ArrowDown className="w-4 h-4 text-[#082F70]" />
                </div>
                <div className="bg-[#082F70] text-white rounded-xl p-2.5 text-center font-bold text-xs shadow">
                  SELF-DEFENCE TRAINERS
                </div>
              </div>

              {/* Branch 3 */}
              <div className="space-y-2">
                <div className="bg-[#0753A6] text-white rounded-xl p-3 text-center font-bold text-xs sm:text-sm shadow min-h-[58px] flex items-center justify-center">
                  LEGAL ADVISOR
                </div>
              </div>

              {/* Branch 4 */}
              <div className="space-y-2">
                <div className="bg-[#0753A6] text-white rounded-xl p-3 text-center font-bold text-xs sm:text-sm shadow min-h-[58px] flex items-center justify-center">
                  MEDICAL VOLUNTEERS
                </div>
                <div className="flex justify-center">
                  <ArrowDown className="w-4 h-4 text-[#082F70]" />
                </div>
                <div className="bg-[#082F70] text-white rounded-xl p-2.5 text-center font-bold text-xs shadow">
                  VOLUNTEER TEAM
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Roles & Responsibilities Table (Page 21) */}
      <ScrollReveal>
        <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-200">
          <div className="bg-[#078B3B] text-white px-6 py-4 font-bold flex items-center justify-between">
            <span>GOVERNING BODY — ROLES &amp; RESPONSIBILITIES</span>
            <span className="text-xs text-white/80">Page 21</span>
          </div>
          <div className="divide-y divide-slate-200">
            {GOVERNING_BODY.map((g) => (
              <div key={g.position} className="px-6 py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1 hover:bg-[#F3F8FC]">
                <span className="font-bold text-[#082F70]">{g.position}</span>
                <span className="text-sm font-semibold text-[#0753A6]">{g.responsibility}</span>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
    <PageRichSections />
  </div>
);

export const ImplementationTeamPage: React.FC = () => (
  <div>
    <PageBanner
      title="Programme Implementation Team"
      subtitle="Dedicated coordinators, social workers, medical volunteers, counsellors, and trainers executing field programmes."
      badge="Field Operations"
      breadcrumb={[{ label: 'Organization' }, { label: 'Programme Implementation Team' }]}
    />
    <section className="py-14 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <ScrollReveal>
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200">
          <div className="bg-[#0753A6] text-white px-6 py-4 flex items-center justify-between">
            <span className="font-bold">POSITION</span>
            <span className="font-bold">RESPONSIBILITY</span>
          </div>
          <div className="divide-y divide-slate-200">
            {IMPLEMENTATION_TEAM.map((row, idx) => (
              <div
                key={row.position}
                className={`px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-1 ${
                  idx % 2 === 0 ? 'bg-[#F3F8FC]' : 'bg-white'
                }`}
              >
                <span className="font-bold text-[#082F70]">{row.position}</span>
                <span className="font-semibold text-[#078B3B]">{row.responsibility}</span>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
    <PageRichSections />
  </div>
);

export const AdvisoryTeamPage: React.FC = () => (
  <div>
    <PageBanner
      title="Advisory & Support Team"
      subtitle="Distinguished medical practitioners, dental surgeons, psychologists, and martial arts instructors providing voluntary healthcare, mental health, and self-defence safety guidance for PCDS communities."
      badge="Expert Medical & Safety Guidance"
      breadcrumb={[{ label: 'Organization' }, { label: 'Advisory & Support Team' }]}
    />
    <section className="py-14 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Intro Header */}
      <ScrollReveal className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
        <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#EDF8EF] text-[#078B3B] text-xs font-bold uppercase tracking-wider mb-3">
          <HeartPulse className="w-3.5 h-3.5 text-[#078B3B]" />
          Voluntary Professional Board
        </span>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#082F70] tracking-tight">
          Distinguished Healthcare, Mental Health &amp; Safety Advisors
        </h2>
        <p className="mt-3 text-sm sm:text-base text-[#14294A]/80 leading-relaxed">
          PCDS is privileged to receive voluntary clinical guidance, diagnostic support, psychological counselling, and self-defence martial arts instruction from esteemed specialists who dedicate their expertise to uplifting vulnerable communities.
        </p>
      </ScrollReveal>

      {/* Official Table from Organization Profile matching image copy 57.png */}
      <ScrollReveal className="mb-12 sm:mb-16">
        <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-200">
          <div className="bg-gradient-to-r from-[#082F70] via-[#0753A6] to-[#078B3B] text-white px-6 py-4 font-bold flex flex-wrap items-center justify-between gap-2">
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider">
              INITIATIVES OF PRAJWALA COMMUNITY DEVELOPMENT SOCIETY (PCDS) — PROFESSIONAL ADVISORY BOARD
            </span>
            <span className="text-xs bg-white/20 px-3 py-1 rounded-full font-semibold">
              Official Profile • Page 22
            </span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#EDF8EF] border-b border-slate-200 text-xs sm:text-sm font-extrabold text-[#082F70]">
                  <th className="p-4 sm:p-5 w-1/2 border-r border-slate-200">
                    Medical Professional / Clinic / Institution
                  </th>
                  <th className="p-4 sm:p-5 w-1/2">
                    Designation &amp; Community Responsibilities
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-xs sm:text-sm text-[#14294A]">
                <tr className="hover:bg-[#F3F8FC] transition-colors">
                  <td className="p-4 sm:p-5 border-r border-slate-200 align-top">
                    <div className="font-bold text-[#082F70]">Dr. SAHAN KUMAR Garu.</div>
                    <div className="text-slate-600 mt-0.5">REAKHA CLINIC, Inner Ring Road, Guntur.</div>
                  </td>
                  <td className="p-4 sm:p-5 align-top">
                    <strong className="text-[#078B3B]">• General Physician</strong> – Provides medical consultations, regular health check-ups, treatment guidance, and preventive healthcare services for beneficiaries.
                  </td>
                </tr>
                <tr className="hover:bg-[#F3F8FC] transition-colors">
                  <td className="p-4 sm:p-5 border-r border-slate-200 align-top">
                    <div className="font-bold text-[#082F70]">Dr. Ch. SOWMYA, B.D.S.; F.A.G.E.</div>
                    <div className="text-slate-600 mt-0.5">Cosmetic Dental Surgeon — SOWMYA MULTI SPECIALITY DENTAL CLINIC, (Kothapet, Guntur)</div>
                  </td>
                  <td className="p-4 sm:p-5 align-top">
                    <strong className="text-[#078B3B]">• Dental Surgeon</strong> – Supports oral health awareness, dental screening, and preventive dental care programmes.
                  </td>
                </tr>
                <tr className="hover:bg-[#F3F8FC] transition-colors">
                  <td className="p-4 sm:p-5 border-r border-slate-200 align-top">
                    <div className="font-bold text-[#082F70]">2. Dr. Ch. Naveen, M.D.S.</div>
                    <div className="text-slate-600 mt-0.5">Prosthodontics &amp; Implantologist — SOWMYA MULTI SPECIALITY DENTAL CLINIC, (Kothapet, Guntur)</div>
                  </td>
                  <td className="p-4 sm:p-5 align-top">
                    <strong className="text-[#078B3B]">• Dental Surgeon</strong> – Supports dental consultations, oral healthcare awareness, restorative treatments, and preventive dental care.
                  </td>
                </tr>
                <tr className="hover:bg-[#F3F8FC] transition-colors">
                  <td className="p-4 sm:p-5 border-r border-slate-200 align-top">
                    <div className="font-bold text-[#082F70]">RAFA LABS, R.Agraharam</div>
                    <div className="text-slate-600 mt-0.5">Dr. SAHAN KUMAR Garu</div>
                  </td>
                  <td className="p-4 sm:p-5 align-top">
                    <strong className="text-[#078B3B]">• Medical Laboratory Professionals</strong> – Assist in diagnostic services, health screening camps, laboratory investigations, and medical reporting.
                  </td>
                </tr>
                <tr className="hover:bg-[#F3F8FC] transition-colors">
                  <td className="p-4 sm:p-5 border-r border-slate-200 align-top">
                    <div className="font-bold text-[#082F70]">B. Sharmila,</div>
                    <div className="text-slate-600">Assistant Professor &amp; Psychologist, Guntur.</div>
                    <div className="font-bold text-[#082F70] mt-2">B. Krishnabharath,</div>
                    <div className="text-slate-600">Psychologist Founder President Advanced Psychological services Association (APA India) Hyderabad</div>
                  </td>
                  <td className="p-4 sm:p-5 align-top">
                    <strong className="text-[#078B3B]">• Psychology Professor / Mental Health Expert</strong> – Provides psychological counselling, emotional well-being support, mental health awareness, and behavioural guidance.
                  </td>
                </tr>
                <tr className="hover:bg-[#F3F8FC] transition-colors">
                  <td className="p-4 sm:p-5 border-r border-slate-200 align-top">
                    <div className="font-bold text-[#082F70]">R.SIVARAMA KRISHNA (VARMA),</div>
                    <div className="text-slate-600 mt-0.5">Silambam Association GUNTUR</div>
                  </td>
                  <td className="p-4 sm:p-5 align-top">
                    <strong className="text-[#078B3B]">• Self-Defence Trainer / Martial Arts Instructor</strong> – Provides expert guidance and conducts self-defence training sessions for women, adolescent girls, students, and community groups to promote safety, confidence, and empowerment.
                  </td>
                </tr>
                <tr className="hover:bg-[#F3F8FC] transition-colors">
                  <td className="p-4 sm:p-5 border-r border-slate-200 align-top">
                    <div className="font-bold text-[#082F70]">Former Government Childline Officials</div>
                    <div className="text-slate-600 mt-0.5">Child Protection &amp; Welfare Specialists</div>
                  </td>
                  <td className="p-4 sm:p-5 align-top">
                    <strong className="text-[#078B3B]">• Child Protection Advisors</strong> – Provide expert guidance on child protection, child rights, counselling, rescue, rehabilitation, referrals, and coordination with Indian Red Cross Society and government departments.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </ScrollReveal>

      {/* Grand Cards Grid */}
      <StaggerGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-8">
        {ADVISORY_TEAM.map((member) => (
          <StaggerItem key={member.name}>
            <div className="group h-full bg-white/95 rounded-3xl p-6 sm:p-7 shadow-lg hover:shadow-2xl border border-slate-200/90 hover:border-[#078B3B]/50 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 relative overflow-hidden">
              {/* Subtle accent corner glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#EDF8EF] to-transparent rounded-bl-full pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity" />

              <div>
                {/* Photo & Role Badge */}
                <div className="flex items-start gap-4 sm:gap-5 mb-5 relative z-10">
                  {member.image ? (
                    <div className="relative shrink-0">
                      <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden shadow-md ring-4 ring-[#EDF8EF] border-2 border-[#078B3B]/30 group-hover:border-[#078B3B] transition-all bg-slate-100">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="absolute -bottom-1.5 -right-1.5 w-6 h-6 rounded-full bg-[#078B3B] text-white flex items-center justify-center shadow-md">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  ) : (
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br from-[#EDF8EF] to-[#E3F2FD] text-[#078B3B] flex items-center justify-center shrink-0 shadow-md ring-4 ring-[#EDF8EF] border-2 border-[#078B3B]/20">
                      <Users className="w-9 h-9" />
                    </div>
                  )}

                  <div className="flex-1 space-y-1.5 min-w-0">
                    <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-[#EDF8EF] to-[#E3F2FD] text-[#078B3B] text-[11px] font-extrabold uppercase tracking-wide border border-[#078B3B]/20">
                      {member.role}
                    </span>
                    <h3 className="text-lg sm:text-xl font-black text-[#082F70] leading-snug group-hover:text-[#0753A6] transition-colors">
                      {member.name}
                    </h3>
                  </div>
                </div>

                {/* Designation */}
                <p className="text-xs font-semibold text-[#0753A6] leading-relaxed mb-4">
                  {member.designation}
                </p>

                {/* Clinic / Practice Location Pill */}
                {member.clinic && (
                  <div className="mb-4 px-3.5 py-2 rounded-xl bg-gradient-to-r from-[#F3F8FC] to-[#EDF8EF] border border-[#078B3B]/15 text-xs font-bold text-[#082F70] flex items-center gap-2">
                    <Building2 className="w-3.5 h-3.5 text-[#078B3B] shrink-0" />
                    <span className="truncate">{member.clinic}</span>
                  </div>
                )}

                {/* Responsibilities Block */}
                <div className="p-3.5 rounded-2xl bg-slate-50/80 border border-slate-100 text-xs sm:text-sm text-[#14294A] leading-relaxed mb-4">
                  <div className="font-bold text-[#082F70] text-[11px] uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <ShieldCheck className="w-3 h-3 text-[#078B3B]" />
                    Key Guidance & Support:
                  </div>
                  {member.responsibilities}
                </div>
              </div>

              {/* Bottom Voluntary Honor Badge */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-slate-500">
                <span className="inline-flex items-center gap-1 text-[#078B3B] font-bold">
                  <Sparkles className="w-3.5 h-3.5 text-[#36A852]" />
                  Voluntary Humanitarian Advisor
                </span>
                <span className="text-slate-400">PCDS Guntur</span>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerGrid>

      {/* Grand Commitment & Gratitude Banner */}
      <ScrollReveal className="mt-14 sm:mt-16 bg-gradient-to-br from-[#082F70] via-[#0753A6] to-[#082F70] rounded-3xl p-8 sm:p-10 text-white shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-white/5 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-3xl">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/15 text-[#36A852] text-xs font-bold uppercase tracking-wider mb-4">
            <Heart className="w-3.5 h-3.5 fill-current" />
            Selfless Humanitarian Service
          </span>
          <h3 className="text-xl sm:text-2xl font-black mb-3">
            Our Sincere Gratitude to the Voluntary Advisory Panel
          </h3>
          <p className="text-sm sm:text-base text-white/90 leading-relaxed mb-6">
            Prajwala Community Development Society extends heartfelt thanks to our advisory doctors, surgeons, and psychological specialists who generously volunteer their time, clinical diagnostics, health check-up camps, and mental wellness counseling to uplift cancer patients, senior citizens, children, and underprivileged families across Guntur District and Andhra Pradesh.
          </p>
          <div className="flex flex-wrap gap-4 items-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#078B3B] hover:bg-[#36A852] text-white text-xs sm:text-sm font-bold shadow-md transition-all"
            >
              <span>Connect with Advisory Board</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/organization/implementation-team"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/15 hover:bg-white/25 text-white text-xs sm:text-sm font-semibold transition-all"
            >
              <span>View Implementation Team</span>
            </Link>
          </div>
        </div>
      </ScrollReveal>
    </section>
    <PageRichSections />
  </div>
);

export const WhySupportUsPage: React.FC = () => (
  <div>
    <PageBanner
      title="Our Appeal — Why Support Us?"
      subtitle={WHY_SUPPORT_US.ctaQuote}
      badge="Join Hands With PCDS"
      breadcrumb={[{ label: 'Organization' }, { label: 'Why Support Us' }]}
    />
    <section className="py-14 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      <ScrollReveal>
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-lg border border-slate-100 space-y-4">
          {WHY_SUPPORT_US.paragraphs.map((p, i) => (
            <p key={i} className="text-base text-[#14294A] leading-relaxed">
              {p}
            </p>
          ))}

          <div className="pt-4">
            <h2 className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#082F70] text-white font-bold text-sm mb-4">
              <Sparkles className="w-4 h-4 text-[#FFE082]" />
              <span>YOUR SUPPORT WILL HELP US TO:</span>
            </h2>
            <ul className="space-y-2.5">
              {WHY_SUPPORT_US.helpList.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm sm:text-base text-[#14294A]">
                  <ShieldCheck className="w-5 h-5 text-[#078B3B] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="pt-3 text-base font-semibold text-[#082F70]">{WHY_SUPPORT_US.closing}</p>

          <div className="pt-4 flex flex-wrap gap-3">
            <Link
              to="/donate"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#D71920] text-white font-bold shadow-md hover:bg-[#b5141a]"
            >
              <Heart className="w-4 h-4 fill-white" />
              <span>Donate Now</span>
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#082F70] text-white font-bold hover:bg-[#0753A6]"
            >
              <Building2 className="w-4 h-4" />
              <span>Partner / Volunteer</span>
            </Link>
          </div>
        </div>
      </ScrollReveal>
    </section>
    <PageRichSections />
  </div>
);

