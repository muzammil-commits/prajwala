import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle2, Heart, Maximize2 } from 'lucide-react';
import { ACTIVITIES } from '../data/pcdsData';
import { PageBanner, ScrollReveal, StaggerGrid, StaggerItem } from '../components/MotionPrimitives';
import { DonateModal, PreviewModalData, SectionPreviewModal } from '../components/Modals';

export const MajorActivitiesPage: React.FC = () => {
  const [previewData, setPreviewData] = useState<PreviewModalData | null>(null);

  return (
    <div>
      <PageBanner
        title="Major Activities"
        subtitle="Under the visionary leadership of Prajwala Community Development Society (PCDS), the organization has initiated and implemented 11 community-focused programs aimed at improving the lives of vulnerable and marginalized sections of society."
        badge="11 Core Programmes"
        breadcrumb={[{ label: 'Major Activities' }]}
      />
      <section className="py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

      <SectionPreviewModal data={previewData} onClose={() => setPreviewData(null)} />
    </div>
  );
};

export const ActivityDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [donateOpen, setDonateOpen] = useState(false);

  const index = ACTIVITIES.findIndex((a) => a.slug === slug);
  const activity = index >= 0 ? ACTIVITIES[index] : ACTIVITIES[0];
  const prevActivity = ACTIVITIES[(index - 1 + ACTIVITIES.length) % ACTIVITIES.length];
  const nextActivity = ACTIVITIES[(index + 1) % ACTIVITIES.length];

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

      <DonateModal isOpen={donateOpen} onClose={() => setDonateOpen(false)} />
    </div>
  );
};
