import React from 'react';
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
      subtitle="Prajwala Community Development Society (PCDS) is committed to serving vulnerable, marginalized, and underprivileged communities."
      badge="14 Target Groups"
      breadcrumb={[{ label: 'Organization' }, { label: 'Target Beneficiaries' }]}
    />
    <section className="py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {TARGET_BENEFICIARIES.map((b) => (
          <StaggerItem key={b.id}>
            <div className="h-full bg-white rounded-2xl p-6 shadow-md border border-slate-100 flex items-start gap-4">
              <span className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#082F70] to-[#078B3B] text-white font-bold flex items-center justify-center shrink-0">
                {b.id}
              </span>
              <div>
                <h2 className="text-base font-bold text-[#082F70] leading-snug">{b.label}</h2>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerGrid>
    </section>
    <PageRichSections />
  </div>
);

export const ImpactAchievementsPage: React.FC = () => (
  <div>
    <PageBanner
      title="Impact & Achievements"
      subtitle="Verified community impact across senior citizen care, COVID-19 emergency relief, healthcare, self-defence, education, and environment."
      badge="Impact At A Glance"
      breadcrumb={[{ label: 'Organization' }, { label: 'Impact & Achievements' }]}
    />
    <section className="py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      <StaggerGrid className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {IMPACT_METRICS.map((m) => (
          <StaggerItem key={m.id}>
            <div className="h-full bg-white rounded-2xl p-5 shadow-md border border-[#0753A6]/15 text-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-[#082F70]">
                <CountUpNumber target={m.number} suffix={m.suffix} />
              </div>
              <div className="mt-1.5 text-sm font-bold text-[#078B3B]">{m.label}</div>
              <div className="mt-1 text-xs text-[#63738B]">{m.detail}</div>
            </div>
          </StaggerItem>
        ))}
      </StaggerGrid>

      <ScrollReveal>
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg border border-slate-100">
          <span className="inline-block px-3.5 py-1 rounded-full bg-[#078B3B] text-white text-xs font-bold mb-3">
            A) COVID-19 EMERGENCY RESPONSE (2020–2021)
          </span>
          <h2 className="text-2xl font-bold text-[#082F70] mb-4">
            Comprehensive Pandemic Relief Initiatives
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {COVID_RESPONSE_BULLETS.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2.5 bg-[#F3F8FC] p-3.5 rounded-xl text-sm text-[#14294A]">
                <CheckCircle2 className="w-4 h-4 text-[#078B3B] shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
    <PageRichSections />
  </div>
);

export const AwardsPage: React.FC = () => (
  <div>
    <PageBanner
      title="Awards & Recognitions"
      subtitle="Recognized by Government Departments, District Collectors, Indian Red Cross Society, and Police Leadership for dedicated service."
      badge="7 Verified Recognitions"
      breadcrumb={[{ label: 'Organization' }, { label: 'Awards & Recognitions' }]}
    />
    <section className="py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <StaggerGrid className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {AWARDS.map((a) => (
          <StaggerItem key={a.id}>
            <div className="h-full bg-white rounded-3xl p-7 shadow-md border border-[#0753A6]/15 flex flex-col">
              <div className="flex items-center justify-between gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-[#082F70] text-[#FFE082] flex items-center justify-center">
                  <Award className="w-6 h-6" />
                </div>
                <span className="px-3.5 py-1 rounded-full bg-[#EDF8EF] text-[#078B3B] text-xs font-bold">
                  {a.year}
                </span>
              </div>
              <h2 className="text-xl font-bold text-[#082F70]">{a.title}</h2>
              <p className="mt-1 text-xs font-bold text-[#0753A6] uppercase tracking-wide">{a.presenter}</p>
              <p className="mt-3 text-sm sm:text-base text-[#14294A] leading-relaxed flex-1">
                {a.description}
              </p>
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
      subtitle="PCDS is governed by a dedicated Governing Body and supported by professionals and volunteers committed to transparency and accountability."
      badge="Governance & Leadership"
      breadcrumb={[{ label: 'Organization' }, { label: 'Organisation Structure' }]}
    />
    <section className="py-14 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      <ScrollReveal>
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg border border-slate-100 space-y-6">
          <div className="text-center">
            <span className="inline-block px-5 py-2 rounded-xl bg-[#078B3B] text-white font-bold text-sm">
              GOVERNING BODY
            </span>
            <div className="mt-4 max-w-md mx-auto bg-[#082F70] text-white rounded-2xl p-4 shadow-md">
              <div className="font-bold text-base">PRESIDENT</div>
              <div className="text-xs text-[#FFE082]">(Founder &amp; Legal Professional – Advocate)</div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {['VICE PRESIDENT', 'SECRETARY', 'TREASURER'].map((r) => (
              <div key={r} className="bg-[#0753A6] text-white rounded-xl p-3.5 text-center font-bold text-sm shadow">
                {r}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            <div className="bg-[#078B3B] text-white rounded-xl p-3.5 text-center font-bold text-sm shadow">
              JOINT SECRETARY
            </div>
            <div className="bg-[#082F70] text-white rounded-xl p-3.5 text-center font-bold text-sm shadow">
              EXECUTIVE COMMITTEE MEMBERS - 2
            </div>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-200">
          <div className="bg-[#078B3B] text-white px-6 py-3.5 font-bold">
            Governing Body Roles &amp; Responsibilities
          </div>
          <div className="divide-y divide-slate-200">
            {GOVERNING_BODY.map((g) => (
              <div key={g.position} className="px-6 py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <span className="font-bold text-[#082F70]">{g.position}</span>
                <span className="text-sm text-[#14294A]">{g.responsibility}</span>
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
      subtitle="Distinguished medical practitioners, dental surgeons, and psychologists providing voluntary healthcare guidance and mental health support for PCDS communities."
      badge="Expert Medical & Clinical Guidance"
      breadcrumb={[{ label: 'Organization' }, { label: 'Advisory & Support Team' }]}
    />
    <section className="py-14 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Intro Header */}
      <ScrollReveal className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
        <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#EDF8EF] text-[#078B3B] text-xs font-bold uppercase tracking-wider mb-3">
          <HeartPulse className="w-3.5 h-3.5 text-[#078B3B]" />
          Voluntary Professional Board
        </span>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#082F70] tracking-tight">
          Distinguished Healthcare & Mental Health Advisors
        </h2>
        <p className="mt-3 text-sm sm:text-base text-[#14294A]/80 leading-relaxed">
          PCDS is privileged to receive voluntary clinical guidance, diagnostic support, and psychological counselling from esteemed doctors and specialists who dedicate their expertise to uplifting vulnerable communities.
        </p>
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

