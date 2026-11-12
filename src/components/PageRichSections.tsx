import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, ShieldCheck, Sparkles, Maximize2 } from 'lucide-react';
import { ACTIVITIES, IMPACT_METRICS, WHY_SUPPORT_US } from '../data/pcdsData';
import { CountUpNumber, ScrollReveal, StaggerGrid, StaggerItem } from './MotionPrimitives';
import { DonateModal, PreviewModalData, SectionPreviewModal } from './Modals';

export const PageRichSections: React.FC<{ excludeSlug?: string }> = ({ excludeSlug }) => {
  const [donateOpen, setDonateOpen] = useState(false);
  const [previewData, setPreviewData] = useState<PreviewModalData | null>(null);

  const featuredActivities = ACTIVITIES.filter((a) => a.slug !== excludeSlug).slice(0, 3);

  return (
    <>
      {/* Band 3: Featured Programmes Cross-Navigation */}
      <section className="py-16 md:py-20 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <ScrollReveal>
              <span className="text-xs font-bold uppercase tracking-wider text-[#078B3B]">
                Explore More Initiatives
              </span>
              <h2 className="mt-1 text-2xl sm:text-3xl font-bold text-[#082F70]">
                Related PCDS Programmes
              </h2>
            </ScrollReveal>
            <Link
              to="/major-activities"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#082F70] hover:bg-[#0753A6] text-white text-sm font-semibold self-start sm:self-auto"
            >
              <span>All 11 Activities</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <StaggerGrid className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredActivities.map((act) => (
              <StaggerItem key={act.slug}>
                <div className="group h-full bg-white rounded-3xl overflow-hidden shadow-md border border-slate-100 hover:shadow-xl transition-all flex flex-col">
                  <div className="relative h-48 overflow-hidden bg-slate-100">
                    <img
                      src={act.image}
                      alt={act.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
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
                  <div className="p-5 flex-1 flex flex-col">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#078B3B]">
                      {act.category}
                    </span>
                    <h3 className="mt-1 text-base font-bold text-[#082F70]">{act.title}</h3>
                    <p className="mt-2 text-xs sm:text-sm text-[#63738B] leading-relaxed flex-1">
                      {act.summary}
                    </p>
                    <Link
                      to={`/activities/${act.slug}`}
                      className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#082F70] hover:text-[#078B3B]"
                    >
                      <span>Open Dedicated Page</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* Band 4: Verified Impact Strip */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-[#082F70] via-[#0753A6] to-[#078B3B] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <ScrollReveal>
              <span className="text-xs font-bold uppercase tracking-wider text-[#FFE082]">
                PCDS Impact At A Glance
              </span>
              <h2 className="mt-1 text-2xl sm:text-3xl font-bold">
                Verified Community Reach
              </h2>
            </ScrollReveal>
            <Link
              to="/organization/impact-achievements"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white text-[#082F70] text-sm font-bold self-start sm:self-auto"
            >
              <span>Full Impact Report</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {IMPACT_METRICS.slice(0, 6).map((m) => (
              <div
                key={m.id}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 text-center"
              >
                <div className="text-2xl font-extrabold text-[#FFE082]">
                  <CountUpNumber target={m.number} suffix={m.suffix} />
                </div>
                <div className="mt-1 text-xs font-semibold text-white leading-snug">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Band 5: Why Support Us + Donation CTA */}
      <section className="py-16 md:py-20 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <ScrollReveal direction="left" className="lg:col-span-6 space-y-4">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#078B3B]">
              <Sparkles className="w-4 h-4" />
              <span>Join Hands With PCDS</span>
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#082F70]">
              {WHY_SUPPORT_US.ctaQuote}
            </h2>
            <p className="text-sm sm:text-base text-[#14294A] leading-relaxed">
              {WHY_SUPPORT_US.closing}
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
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#082F70] hover:bg-[#0753A6] text-white text-sm font-semibold"
              >
                <span>Get Involved</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" className="lg:col-span-6">
            <div className="bg-[#F3F8FC] rounded-3xl p-6 border border-[#0753A6]/15 space-y-2.5">
              <h3 className="text-base font-bold text-[#082F70] mb-2">Your Support Will Help Us To:</h3>
              {WHY_SUPPORT_US.helpList.slice(0, 5).map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-sm text-[#14294A]">
                  <ShieldCheck className="w-4 h-4 text-[#078B3B] shrink-0 mt-1" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <DonateModal isOpen={donateOpen} onClose={() => setDonateOpen(false)} />
      <SectionPreviewModal data={previewData} onClose={() => setPreviewData(null)} />
    </>
  );
};

