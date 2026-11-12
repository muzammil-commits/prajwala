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
} from '../data/pcdsData';
import { CountUpNumber, PageBanner, ScrollReveal, StaggerGrid, StaggerItem } from '../components/MotionPrimitives';

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
    <section className="py-14 md:py-18 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <ScrollReveal direction="left" className="lg:col-span-5">
          <img
            src="/assets/gallery/about-sapling.svg"
            alt="Prajwala Community Development Society"
            className="rounded-3xl shadow-xl w-full object-cover aspect-[4/3]"
          />
        </ScrollReveal>
        <ScrollReveal direction="right" className="lg:col-span-7 space-y-4 bg-white/90 p-6 sm:p-8 rounded-3xl shadow-md border border-slate-100">
          <span className="inline-block px-3 py-1 rounded-full bg-[#EDF8EF] text-[#078B3B] text-xs font-bold">
            Established: {ORG_INFO.establishedDate} • Regd No: {ORG_INFO.regNumber}
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#082F70]">
            About Prajwala Community Development Society (PCDS)
          </h2>
          <p className="text-base text-[#14294A] leading-relaxed">{ABOUT_TEXT.intro}</p>
          <p className="text-base text-[#14294A] leading-relaxed">{ABOUT_TEXT.missionParagraph}</p>
          <div className="pt-2 flex flex-wrap gap-3">
            <Link
              to="/organization/vision-mission"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#082F70] text-white text-sm font-semibold hover:bg-[#0753A6]"
            >
              <span>Vision &amp; Mission</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/major-activities"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#078B3B] text-white text-sm font-semibold hover:bg-[#082F70]"
            >
              <span>Explore Our Activities</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
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
  </div>
);

export const AdvisoryTeamPage: React.FC = () => (
  <div>
    <PageBanner
      title="Advisory & Support Team"
      subtitle="Experienced doctors, dental surgeons, psychologists, martial arts trainers, and child protection experts supporting PCDS voluntarily."
      badge="Expert Guidance"
      breadcrumb={[{ label: 'Organization' }, { label: 'Advisory & Support Team' }]}
    />
    <section className="py-14 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <StaggerGrid className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {ADVISORY_TEAM.map((member) => (
          <StaggerItem key={member.name}>
            <div className="h-full bg-white rounded-3xl p-6 shadow-md border border-slate-100 space-y-2.5">
              <span className="inline-block px-3 py-1 rounded-full bg-[#EDF8EF] text-[#078B3B] text-xs font-bold">
                {member.role}
              </span>
              <h2 className="text-lg font-bold text-[#082F70]">{member.name}</h2>
              <p className="text-xs font-semibold text-[#0753A6]">{member.designation}</p>
              <p className="text-sm text-[#14294A] leading-relaxed pt-1">{member.responsibilities}</p>
            </div>
          </StaggerItem>
        ))}
      </StaggerGrid>
    </section>
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
  </div>
);
