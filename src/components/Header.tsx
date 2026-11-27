import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  ChevronDown,
  Menu,
  X,
  Heart,
  Users,
  Facebook,
  Youtube,
  Instagram,
} from 'lucide-react';
import { ORG_INFO, ACTIVITIES } from '../data/pcdsData';

const ORGANIZATION_LINKS = [
  { label: 'About Us', to: '/organization/about-us' },
  { label: 'Vision, Mission & Core Values', to: '/organization/vision-mission' },
  { label: 'Objectives', to: '/organization/objectives' },
  { label: 'Target Beneficiaries', to: '/organization/target-beneficiaries' },
  { label: 'Impact & Achievements', to: '/organization/impact-achievements' },
  { label: 'Awards & Recognitions', to: '/organization/awards' },
  { label: 'Legal Information', to: '/organization/legal-information' },
  { label: 'Organization Structure', to: '/organization/structure' },
  { label: 'Programme Implementation Team', to: '/organization/implementation-team' },
  { label: 'Advisory & Support Team', to: '/organization/advisory-team' },
  { label: 'Why Support Us', to: '/organization/why-support-us' },
];

export const Header: React.FC<{ onOpenDonate: () => void }> = ({ onOpenDonate }) => {
  const [orgOpen, setOrgOpen] = useState(false);
  const [activitiesOpen, setActivitiesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileOrgOpen, setMobileOrgOpen] = useState(false);
  const [mobileActivitiesOpen, setMobileActivitiesOpen] = useState(false);
  const location = useLocation();

  const isOrgActive = location.pathname.startsWith('/organization');
  const isActivitiesActive =
    location.pathname === '/major-activities' || location.pathname.startsWith('/activities');

  return (
    <header className="sticky top-0 z-40 w-full shadow-sm">
      {/* Top Contact Bar */}
      <div className="bg-[#082F70] text-white text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-9 flex items-center justify-between gap-3">
          <div className="flex items-center gap-4 overflow-x-auto no-scrollbar">
            <a
              href={`mailto:${ORG_INFO.email}`}
              className="inline-flex items-center gap-1.5 hover:text-[#36A852] transition-colors whitespace-nowrap"
            >
              <Mail className="w-3.5 h-3.5 text-[#36A852]" />
              <span>{ORG_INFO.email}</span>
            </a>
            <span className="text-white/30">|</span>
            <a
              href="tel:08632947780"
              className="inline-flex items-center gap-1.5 hover:text-[#36A852] transition-colors whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 text-[#36A852]" />
              <span>0863 2947780</span>
            </a>
            <span className="text-white/30 hidden md:inline">|</span>
            <a
              href="tel:+919502046096"
              className="hidden md:inline-flex items-center gap-1.5 hover:text-[#36A852] transition-colors whitespace-nowrap"
            >
              <span>+91 95020 46096</span>
            </a>
          </div>

          <div className="flex items-center gap-2.5 shrink-0 text-white/80 font-medium text-[11px] sm:text-xs">
            <span className="hidden sm:inline">Govt. Regd. Society: 240/2019</span>
            <span className="hidden sm:inline text-white/30">|</span>
            <NavLink
              to="/gallery"
              className={({ isActive }) =>
                `inline-flex items-center gap-1 px-3 py-1 rounded-full transition-all text-xs font-semibold ${
                  isActive ? 'bg-[#078B3B] text-white shadow-sm font-bold' : 'text-white/90 hover:text-white hover:bg-white/15'
                }`
              }
            >
              <span>Gallery</span>
            </NavLink>
            <span className="text-white/30">|</span>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `inline-flex items-center gap-1 px-3 py-1 rounded-full transition-all text-xs font-semibold ${
                  isActive ? 'bg-[#078B3B] text-white shadow-sm font-bold' : 'text-white/90 hover:text-white hover:bg-white/15'
                }`
              }
            >
              <span>Contact Us</span>
            </NavLink>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="bg-white/95 backdrop-blur-md border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 h-20 sm:h-22 flex items-center justify-between gap-2 xl:gap-3">
          {/* Logo & Org Name */}
          <Link to="/" className="flex items-center gap-2 sm:gap-3 min-w-0 group">
            <img
              src="/assets/logo/pcds-logo.png"
              alt="Prajwala Community Development Society Official Logo"
              className="w-11 h-11 xs:w-12 xs:h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full object-contain bg-white shadow-md ring-2 ring-[#082F70]/20 group-hover:scale-105 transition-transform shrink-0"
            />
            <div className="leading-tight min-w-0 max-w-[150px] xs:max-w-[195px] sm:max-w-[240px] lg:max-w-xs">
              <div className="text-[10px] xs:text-[11px] sm:text-xs lg:text-[13px] xl:text-[14px] font-black text-[#082F70] tracking-tight uppercase line-clamp-2">
                PRAJWALA COMMUNITY DEVELOPMENT SOCIETY
              </div>
              <div className="text-[8px] xs:text-[9px] sm:text-[10px] lg:text-xs font-bold text-[#078B3B] tracking-widest uppercase mt-0.5 truncate">
                GUNTUR • ESTD. 2019
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1 shrink-0" aria-label="Main Navigation">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `px-2 xl:px-2.5 py-1.5 rounded-full text-xs xl:text-[13px] font-semibold whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-[#078B3B] text-white shadow-sm'
                    : 'text-[#14294A] hover:text-[#082F70] hover:bg-[#F3F8FC]'
                }`
              }
            >
              Home
            </NavLink>

            {/* Organization Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setOrgOpen(true)}
              onMouseLeave={() => setOrgOpen(false)}
            >
              <button
                type="button"
                onClick={() => setOrgOpen((v) => !v)}
                aria-expanded={orgOpen}
                className={`inline-flex items-center gap-1 px-2 xl:px-2.5 py-1.5 rounded-full text-xs xl:text-[13px] font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  isOrgActive
                    ? 'bg-[#078B3B] text-white shadow-sm'
                    : 'text-[#14294A] hover:text-[#082F70] hover:bg-[#F3F8FC]'
                }`}
              >
                <span>Organization</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${orgOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {orgOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.18 }}
                    className="absolute left-0 top-full pt-2 w-72 z-50"
                  >
                    <div className="bg-white rounded-2xl shadow-xl border border-slate-200/90 py-2 overflow-hidden">
                      {ORGANIZATION_LINKS.map((item) => (
                        <NavLink
                          key={item.to}
                          to={item.to}
                          onClick={() => setOrgOpen(false)}
                          className={({ isActive }) =>
                            `block px-4 py-2 text-sm font-medium transition-colors ${
                              isActive
                                ? 'bg-[#EDF8EF] text-[#078B3B] font-semibold'
                                : 'text-[#14294A] hover:bg-[#F3F8FC] hover:text-[#082F70]'
                            }`
                          }
                        >
                          {item.label}
                        </NavLink>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Major Activities Dropdown */}
            <div
              className="relative shrink-0"
              onMouseEnter={() => setActivitiesOpen(true)}
              onMouseLeave={() => setActivitiesOpen(false)}
            >
              <button
                type="button"
                onClick={() => setActivitiesOpen((v) => !v)}
                aria-expanded={activitiesOpen}
                className={`inline-flex items-center gap-1 px-2 xl:px-2.5 py-1.5 rounded-full text-xs xl:text-[13px] font-semibold whitespace-nowrap shrink-0 transition-all cursor-pointer ${
                  isActivitiesActive
                    ? 'bg-[#078B3B] text-white shadow-sm'
                    : 'text-[#14294A] hover:text-[#082F70] hover:bg-[#F3F8FC]'
                }`}
              >
                <span>Major Activities</span>
                <ChevronDown className={`w-3.5 h-3.5 shrink-0 transition-transform ${activitiesOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {activitiesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.18 }}
                    className="absolute left-0 top-full pt-2 w-72 z-50"
                  >
                    <div className="bg-white rounded-2xl shadow-xl border border-slate-200/90 py-2 overflow-hidden max-h-[75vh] overflow-y-auto">
                      <NavLink
                        to="/major-activities"
                        onClick={() => setActivitiesOpen(false)}
                        className={({ isActive }) =>
                          `block px-4 py-2 text-sm font-bold border-b border-slate-100 transition-colors ${
                            isActive
                              ? 'bg-[#EDF8EF] text-[#078B3B]'
                              : 'text-[#082F70] hover:bg-[#F3F8FC]'
                          }`
                        }
                      >
                        All 12 Major Activities
                      </NavLink>
                      {ACTIVITIES.map((act) => (
                        <NavLink
                          key={act.slug}
                          to={`/activities/${act.slug}`}
                          onClick={() => setActivitiesOpen(false)}
                          className={({ isActive }) =>
                            `block px-4 py-2 text-sm font-medium transition-colors ${
                              isActive
                                ? 'bg-[#EDF8EF] text-[#078B3B] font-semibold'
                                : 'text-[#14294A] hover:bg-[#F3F8FC] hover:text-[#082F70]'
                            }`
                          }
                        >
                          {act.shortTitle}
                        </NavLink>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <NavLink
              to="/ongoing-projects"
              className={({ isActive }) =>
                `px-2 xl:px-2.5 py-1.5 rounded-full text-xs xl:text-[13px] font-semibold whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-[#078B3B] text-white shadow-sm'
                    : 'text-[#14294A] hover:text-[#082F70] hover:bg-[#F3F8FC]'
                }`
              }
            >
              Ongoing Projects
            </NavLink>

            <NavLink
              to="/future-plans"
              className={({ isActive }) =>
                `px-2 xl:px-2.5 py-1.5 rounded-full text-xs xl:text-[13px] font-semibold whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-[#078B3B] text-white shadow-sm'
                    : 'text-[#14294A] hover:text-[#082F70] hover:bg-[#F3F8FC]'
                }`
              }
            >
              Future Plans
            </NavLink>
          </nav>

          {/* Right CTA & Mobile Menu Toggle */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <Link
              to="/contact"
              className="hidden xl:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-[#082F70] hover:bg-[#0753A6] text-white text-xs xl:text-sm font-bold whitespace-nowrap shadow-md hover:shadow-lg transition-all shrink-0 cursor-pointer"
            >
              <Users className="w-3.5 h-3.5" />
              <span>Register as Volunteer</span>
            </Link>

            {/* Desktop / Tablet Donate Button */}
            <button
              onClick={onOpenDonate}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#D71920] hover:bg-[#b5141a] text-white text-xs sm:text-sm font-extrabold whitespace-nowrap shadow-md hover:shadow-lg transition-all shrink-0 cursor-pointer"
            >
              <Heart className="w-4 h-4 fill-white" />
              <span>Donate Now</span>
            </button>

            {/* Mobile Compact Donate Button (Visible on mobile screens) */}
            <button
              onClick={onOpenDonate}
              aria-label="Donate Now"
              className="sm:hidden inline-flex items-center gap-1 px-2.5 py-1.5 rounded-full bg-[#D71920] hover:bg-[#b5141a] text-white text-xs font-bold shadow-md shrink-0 cursor-pointer active:scale-95"
            >
              <Heart className="w-3.5 h-3.5 fill-white" />
              <span>Donate</span>
            </button>

            {/* Mobile Menu Toggle Button — ALWAYS VISIBLE ON MOBILE */}
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-label="Open mobile navigation menu"
              className="lg:hidden p-2 sm:p-2.5 rounded-xl bg-[#EDF8EF] border border-[#078B3B]/30 text-[#082F70] hover:bg-[#078B3B] hover:text-white transition-all shadow-sm shrink-0 cursor-pointer active:scale-95 flex items-center justify-center"
            >
              <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] lg:hidden bg-[#082F70]/60 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 280 }}
              className="absolute right-0 top-0 bottom-0 w-80 max-w-[85vw] bg-white shadow-2xl flex flex-col z-[101]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-[#082F70] text-white">
                <div className="flex items-center gap-2.5">
                  <img
                    src="/assets/logo/pcds-logo.png"
                    alt="PCDS Logo"
                    className="w-9 h-9 rounded-full bg-white object-contain"
                  />
                  <span className="font-bold text-sm">PCDS Guntur</span>
                </div>
                <button
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close mobile menu"
                  className="p-1.5 rounded-lg hover:bg-white/15 cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-4 space-y-1.5">
                <Link
                  to="/"
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-2.5 rounded-xl font-semibold text-[#14294A] hover:bg-[#F3F8FC]"
                >
                  Home
                </Link>

                <div>
                  <button
                    type="button"
                    onClick={() => setMobileOrgOpen((v) => !v)}
                    className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl font-semibold text-[#14294A] hover:bg-[#F3F8FC] cursor-pointer"
                  >
                    <span>Organization</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${mobileOrgOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                  <AnimatePresence>
                    {mobileOrgOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden pl-4 space-y-1 mt-1"
                      >
                        {ORGANIZATION_LINKS.map((item) => (
                          <Link
                            key={item.to}
                            to={item.to}
                            onClick={() => setMobileOpen(false)}
                            className="block px-3 py-2 rounded-lg text-sm text-[#14294A] hover:bg-[#EDF8EF] hover:text-[#078B3B]"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div>
                  <button
                    type="button"
                    onClick={() => setMobileActivitiesOpen((v) => !v)}
                    className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl font-semibold text-[#14294A] hover:bg-[#F3F8FC] cursor-pointer"
                  >
                    <span>Major Activities</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${mobileActivitiesOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                  <AnimatePresence>
                    {mobileActivitiesOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden pl-4 space-y-1 mt-1"
                      >
                        <Link
                          to="/major-activities"
                          onClick={() => setMobileOpen(false)}
                          className="block px-3 py-2 rounded-lg text-sm font-bold text-[#082F70] hover:bg-[#EDF8EF]"
                        >
                          All 12 Major Activities
                        </Link>
                        {ACTIVITIES.map((act) => (
                          <Link
                            key={act.slug}
                            to={`/activities/${act.slug}`}
                            onClick={() => setMobileOpen(false)}
                            className="block px-3 py-2 rounded-lg text-sm text-[#14294A] hover:bg-[#EDF8EF] hover:text-[#078B3B]"
                          >
                            {act.shortTitle}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                <Link
                  to="/ongoing-projects"
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-2.5 rounded-xl font-semibold text-[#14294A] hover:bg-[#F3F8FC]"
                >
                  Ongoing Projects
                </Link>
                <Link
                  to="/future-plans"
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-2.5 rounded-xl font-semibold text-[#14294A] hover:bg-[#F3F8FC]"
                >
                  Future Plans
                </Link>
                <Link
                  to="/gallery"
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-2.5 rounded-xl font-semibold text-[#14294A] hover:bg-[#F3F8FC]"
                >
                  Gallery
                </Link>
                <Link
                  to="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-2.5 rounded-xl font-semibold text-[#14294A] hover:bg-[#F3F8FC]"
                >
                  Contact Us
                </Link>
              </div>

              <div className="p-4 border-t border-slate-100 space-y-2.5">
                <Link
                  to="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#082F70] hover:bg-[#0753A6] text-white font-bold text-sm shadow-md transition-all cursor-pointer"
                >
                  <Users className="w-4 h-4 text-white" />
                  <span>Register as a Volunteer</span>
                </Link>
                <button
                  onClick={() => {
                    setMobileOpen(false);
                    onOpenDonate();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#D71920] hover:bg-[#b5141a] text-white font-semibold shadow-md cursor-pointer transition-all"
                >
                  <Heart className="w-4 h-4 fill-white" />
                  <span>Donate Now</span>
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

