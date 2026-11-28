import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  Camera,
  CheckCircle2,
  Heart,
  Maximize2,
  ShieldCheck,
  Sparkles,
  Users,
} from 'lucide-react';
import { ACTIVITIES, ADVISORY_TEAM } from '../data/pcdsData';
import { PageBanner, ScrollReveal, StaggerGrid, StaggerItem } from '../components/MotionPrimitives';
import { DonateModal, LightboxModal, PreviewModalData, SectionPreviewModal } from '../components/Modals';
import { PageRichSections } from '../components/PageRichSections';
import { CmsService } from '../lib/cmsDataService';

export const MajorActivitiesPage: React.FC = () => {
  const [activities, setActivities] = useState(ACTIVITIES);
  const [previewData, setPreviewData] = useState<PreviewModalData | null>(null);

  useEffect(() => {
    CmsService.getActivities()
      .then((acts) => {
        if (acts.length > 0) setActivities(acts);
      })
      .catch(() => {});
  }, []);

  return (
    <div>
      <PageBanner
        title="Major Activities"
        subtitle="Under the visionary leadership of Prajwala Community Development Society (PCDS), the organization has initiated and implemented 12 community-focused programs aimed at improving the lives of vulnerable and marginalized sections of society."
        badge="12 Core Programmes & Initiatives"
        breadcrumb={[{ label: 'Major Activities' }]}
      />
      <section className="py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((act) => (
            <StaggerItem key={act.slug}>
              <div className="group h-full bg-white rounded-3xl overflow-hidden shadow-md border border-slate-100 hover:shadow-xl transition-all flex flex-col">
                <div className="relative h-52 overflow-hidden bg-slate-100">
                  <img
                    src={act.image}
                    alt={act.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#082F70]/85 text-white text-xs font-semibold">
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
                    className="absolute top-3 right-3 p-2 rounded-full bg-white/90 hover:bg-[#078B3B] text-[#082F70] hover:text-white shadow-sm cursor-pointer"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <h2 className="text-lg font-bold text-[#082F70] mb-2">{act.title}</h2>
                  <p className="text-sm text-[#63738B] leading-relaxed flex-1">{act.summary}</p>
                  <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
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
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#082F70] hover:bg-[#078B3B] text-white text-xs font-semibold transition-colors"
                    >
                      <span>View Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </section>

      <PageRichSections />
      <SectionPreviewModal data={previewData} onClose={() => setPreviewData(null)} />
    </div>
  );
};

export const ActivityDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [activities, setActivities] = useState(ACTIVITIES);
  const [advisoryTeam, setAdvisoryTeam] = useState(ADVISORY_TEAM);
  const [donateOpen, setDonateOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    CmsService.getActivities().then((a) => a.length > 0 && setActivities(a)).catch(() => {});
    CmsService.getAdvisoryTeam().then((t) => t.length > 0 && setAdvisoryTeam(t)).catch(() => {});
  }, []);

  const index = activities.findIndex((a) => a.slug === slug);
  const activity = index >= 0 ? activities[index] : activities[0];
  const prevActivity = activities[(index - 1 + activities.length) % activities.length];
  const nextActivity = activities[(index + 1) % activities.length];

  const galleryList = (activity.galleryImages && activity.galleryImages.length > 0)
    ? activity.galleryImages
    : [activity.image];

  const getRelatedAdvisors = (activitySlug: string) => {
    switch (activitySlug) {
      case 'healthcare':
        return advisoryTeam.filter((m) =>
          ['Dr. SAHAN KUMAR Garu', 'Dr. Ch. SOWMYA, B.D.S.; F.A.G.E.', '2. Dr. Ch. Naveen, M.D.S.', 'RAFA LABS, R.Agraharam'].includes(m.name)
        );
      case 'self-defence':
        return advisoryTeam.filter((m) =>
          m.name.includes('SIVARAMA KRISHNA')
        );
      case 'women-empowerment':
        return advisoryTeam.filter((m) =>
          ['B. Sharmila', 'B. Krishnabharath', 'R.SIVARAMA KRISHNA (VARMA)'].includes(m.name)
        );
      case 'child-welfare':
        return advisoryTeam.filter((m) =>
          ['B. Sharmila', 'B. Krishnabharath'].includes(m.name)
        );
      case 'old-age-home':
        return advisoryTeam.filter((m) =>
          ['Dr. SAHAN KUMAR Garu', 'RAFA LABS, R.Agraharam'].includes(m.name)
        );
      case 'advisory-team':
        return advisoryTeam;
      default:
        return [];
    }
  };

  const relatedAdvisors = getRelatedAdvisors(activity.slug);

  const lightboxItems = galleryList.map((img, i) => ({
    id: `${activity.slug}-${i}`,
    title: `${activity.shortTitle} - Photograph ${i + 1}`,
    image: img,
    category: activity.category,
    caption: activity.summary,
  }));

  return (
    <div>
      <PageBanner
        title={activity.title}
        subtitle={activity.summary}
        badge={activity.category}
        breadcrumb={[
          { label: 'Major Activities', to: '/major-activities' },
          { label: activity.shortTitle },
        ]}
      />

      <section className="py-14 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <ScrollReveal direction="left" className="lg:col-span-6">
            <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-200 bg-white">
              <img
                src={activity.image}
                alt={activity.title}
                className="w-full h-72 sm:h-96 object-cover"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" className="lg:col-span-6 space-y-5 bg-white rounded-3xl p-6 sm:p-8 shadow-md border border-slate-100">
            <h2 className="text-2xl font-bold text-[#082F70]">Programme Overview</h2>
            {activity.fullDescription.map((para, idx) => (
              <p key={idx} className="text-base text-[#14294A] leading-relaxed">
                {para}
              </p>
            ))}

            {activity.metrics && activity.metrics.length > 0 && (
              <div className="grid grid-cols-2 gap-3 pt-2">
                {activity.metrics.map((m) => (
                  <div key={m.label} className="bg-[#EDF8EF] rounded-2xl p-4 border border-[#078B3B]/20">
                    <div className="text-2xl font-extrabold text-[#082F70]">{m.value}</div>
                    <div className="text-xs font-semibold text-[#078B3B] mt-0.5">{m.label}</div>
                  </div>
                ))}
              </div>
            )}

            {activity.highlights && (
              <div className="pt-2 space-y-2">
                <h3 className="text-sm font-bold uppercase tracking-wider text-[#0753A6]">
                  Key Highlights
                </h3>
                <ul className="space-y-2">
                  {activity.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-[#14294A]">
                      <CheckCircle2 className="w-4 h-4 text-[#078B3B] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="pt-4 flex flex-wrap gap-3">
              <button
                onClick={() => setDonateOpen(true)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#D71920] hover:bg-[#b5141a] text-white text-sm font-semibold shadow-md cursor-pointer"
              >
                <Heart className="w-4 h-4 fill-white" />
                <span>Support This Initiative</span>
              </button>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#082F70] hover:bg-[#0753A6] text-white text-sm font-semibold"
              >
                <span>Volunteer / Partner</span>
              </Link>
            </div>
          </ScrollReveal>
        </div>

        {/* Authentic Programme Photographs Gallery */}
        {galleryList.length > 1 && (
          <div className="bg-white/95 rounded-3xl p-6 sm:p-8 shadow-md border border-slate-200/90 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Camera className="w-5 h-5 text-[#078B3B]" />
                <h3 className="text-lg font-bold text-[#082F70]">
                  Photographs of {activity.shortTitle}
                </h3>
              </div>
              <span className="text-xs font-semibold text-[#63738B]">
                {galleryList.length} Photographs
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {galleryList.map((img, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setLightboxIndex(i)}
                  className="group relative rounded-2xl overflow-hidden aspect-[4/3] shadow-sm hover:shadow-lg transition-all cursor-pointer border border-slate-200"
                >
                  <img
                    src={img}
                    alt={`${activity.title} photo ${i + 1}`}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-[#082F70]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Maximize2 className="w-5 h-5 text-white drop-shadow" />
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Guiding Professional Advisors & Specialists from PCDS Advisory Board */}
        {relatedAdvisors.length > 0 && (
          <ScrollReveal className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-slate-200 pb-4">
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EDF8EF] text-[#078B3B] text-xs font-bold uppercase tracking-wider mb-2 border border-[#078B3B]/20">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#078B3B]" />
                  PCDS Professional Advisory Board
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-[#082F70]">
                  Guiding Professional Specialists &amp; Medical Advisors
                </h3>
              </div>
              <Link
                to="/organization/advisory-team"
                className="text-xs font-bold text-[#0753A6] hover:text-[#078B3B] flex items-center gap-1 shrink-0"
              >
                <span>View Full Advisory Board</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedAdvisors.map((member) => (
                <div
                  key={member.name}
                  className="group bg-white rounded-3xl p-6 shadow-md hover:shadow-xl border border-slate-200/90 hover:border-[#078B3B]/50 transition-all flex flex-col justify-between relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-bl from-[#EDF8EF] to-transparent rounded-bl-full pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity" />

                  <div>
                    {/* Photo & Role Badge */}
                    <div className="flex items-start gap-4 mb-4 relative z-10">
                      {member.image ? (
                        <div className="relative shrink-0">
                          <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-2xl overflow-hidden shadow-sm ring-2 ring-[#EDF8EF] border border-[#078B3B]/30 group-hover:border-[#078B3B] transition-all bg-slate-100">
                            <img
                              src={member.image}
                              alt={member.name}
                              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                          <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-[#078B3B] text-white flex items-center justify-center shadow">
                            <CheckCircle2 className="w-3 h-3" />
                          </div>
                        </div>
                      ) : (
                        <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-2xl bg-gradient-to-br from-[#EDF8EF] to-[#E3F2FD] text-[#078B3B] flex items-center justify-center shrink-0 shadow-sm ring-2 ring-[#EDF8EF] border border-[#078B3B]/20">
                          <Users className="w-7 h-7" />
                        </div>
                      )}

                      <div className="flex-1 min-w-0 space-y-1">
                        <span className="inline-block px-2.5 py-0.5 rounded-full bg-gradient-to-r from-[#EDF8EF] to-[#E3F2FD] text-[#078B3B] text-[10px] font-extrabold uppercase tracking-wide border border-[#078B3B]/20">
                          {member.role}
                        </span>
                        <h4 className="text-base sm:text-lg font-black text-[#082F70] leading-snug group-hover:text-[#0753A6] transition-colors">
                          {member.name}
                        </h4>
                      </div>
                    </div>

                    <p className="text-xs font-semibold text-[#0753A6] leading-relaxed mb-3">
                      {member.designation}
                    </p>

                    {member.clinic && (
                      <div className="mb-3 px-3 py-1.5 rounded-xl bg-gradient-to-r from-[#F3F8FC] to-[#EDF8EF] border border-[#078B3B]/15 text-xs font-bold text-[#082F70] flex items-center gap-1.5">
                        <Building2 className="w-3.5 h-3.5 text-[#078B3B] shrink-0" />
                        <span className="truncate">{member.clinic}</span>
                      </div>
                    )}

                    <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100 text-xs text-[#14294A] leading-relaxed mb-3">
                      <div className="font-bold text-[#082F70] text-[10px] uppercase tracking-wider mb-1 flex items-center gap-1">
                        <ShieldCheck className="w-3 h-3 text-[#078B3B]" />
                        Key Guidance &amp; Support:
                      </div>
                      {member.responsibilities}
                    </div>
                  </div>

                  <div className="pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-slate-500">
                    <span className="inline-flex items-center gap-1 text-[#078B3B] font-bold">
                      <Sparkles className="w-3 h-3 text-[#36A852]" />
                      Voluntary Advisor
                    </span>
                    <span className="text-slate-400">PCDS Guntur</span>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        )}

        {/* Previous / Next Activity Navigation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-200">
          <Link
            to={`/activities/${prevActivity.slug}`}
            className="flex items-center gap-3 p-4 rounded-2xl bg-white shadow-sm border border-slate-200 hover:border-[#078B3B] transition-all"
          >
            <ArrowLeft className="w-5 h-5 text-[#082F70] shrink-0" />
            <div>
              <div className="text-xs text-[#63738B]">Previous Activity</div>
              <div className="text-sm font-bold text-[#082F70]">{prevActivity.shortTitle}</div>
            </div>
          </Link>

          <Link
            to={`/activities/${nextActivity.slug}`}
            className="flex items-center justify-end gap-3 p-4 rounded-2xl bg-white shadow-sm border border-slate-200 hover:border-[#078B3B] transition-all text-right"
          >
            <div>
              <div className="text-xs text-[#63738B]">Next Activity</div>
              <div className="text-sm font-bold text-[#082F70]">{nextActivity.shortTitle}</div>
            </div>
            <ArrowRight className="w-5 h-5 text-[#082F70] shrink-0" />
          </Link>
        </div>
      </section>

      <PageRichSections excludeSlug={activity.slug} />
      <DonateModal isOpen={donateOpen} onClose={() => setDonateOpen(false)} />
      {lightboxIndex !== null && (
        <LightboxModal
          items={lightboxItems}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onChangeIndex={(i) => setLightboxIndex(i)}
        />
      )}
    </div>
  );
};

