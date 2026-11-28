import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Sliders,
  Sparkles,
  Image as ImageIcon,
  Users,
  HandHeart,
  Mail,
  BarChart3,
  ExternalLink,
  ArrowRight,
  Database,
  CheckCircle2,
  AlertTriangle,
  FolderOpen,
  Settings,
  Plus,
  RefreshCw,
} from 'lucide-react';
import { CmsService } from '../../lib/cmsDataService';
import { checkSupabaseConnection } from '../../lib/supabaseClient';

export const DashboardOverview: React.FC = () => {
  const [stats, setStats] = useState({
    slidesCount: 3,
    activitiesCount: 12,
    galleryCount: 24,
    teamCount: 15,
    submissionsCount: 0,
    metricsCount: 13,
  });
  const [dbStatus, setDbStatus] = useState<{
    connected: boolean;
    tablesReady: boolean;
    message: string;
  } | null>(null);
  const [loading, setLoading] = useState(true);
  const [seeding, setSeeding] = useState(false);
  const [seedNotice, setSeedNotice] = useState<string | null>(null);

  const loadData = async () => {
    setLoading(true);
    try {
      const [slides, activities, gallery, gov, adv, subs, metrics, conn] =
        await Promise.all([
          CmsService.getAllHeroSlides(),
          CmsService.getActivities(),
          CmsService.getGalleryItems(),
          CmsService.getGoverningBody(),
          CmsService.getAdvisoryTeam(),
          CmsService.getContactSubmissions(),
          CmsService.getImpactMetrics(),
          checkSupabaseConnection(),
        ]);

      setStats({
        slidesCount: slides.length,
        activitiesCount: activities.length,
        galleryCount: gallery.length,
        teamCount: gov.length + adv.length,
        submissionsCount: subs.length,
        metricsCount: metrics.length,
      });
      setDbStatus(conn);
    } catch (err) {
      console.warn('Dashboard load error:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleSeed = async () => {
    setSeeding(true);
    setSeedNotice(null);
    const res = await CmsService.seedSupabase();
    setSeeding(false);
    setSeedNotice(res.message);
    loadData();
  };

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Top Banner / Welcome */}
      <div className="bg-gradient-to-r from-[#082F70] via-[#0753A6] to-[#078B3B] rounded-3xl p-6 sm:p-8 text-white shadow-lg relative overflow-hidden">
        <div className="relative z-10 max-w-3xl space-y-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-wider">
            <span>Prajwala Community Development Society</span>
          </span>
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
            Welcome to the Centralized Website CMS
          </h2>
          <p className="text-sm text-white/90 leading-relaxed">
            Manage every aspect of the public website in real time: update hero slides,
            edit community activities, upload gallery moments to Cloudinary, monitor contact
            inquiries, and synchronize with Supabase.
          </p>
          <div className="pt-2 flex flex-wrap gap-3">
            <Link
              to="/admin/hero"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white text-[#082F70] font-bold text-xs shadow-sm hover:bg-slate-100 transition-colors"
            >
              <Sliders className="w-4 h-4" />
              <span>Manage Hero Slider</span>
            </Link>
            <Link
              to="/admin/activities"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#078B3B] text-white font-bold text-xs shadow-sm hover:bg-[#36A852] transition-colors"
            >
              <Sparkles className="w-4 h-4" />
              <span>Manage Activities</span>
            </Link>
            <Link
              to="/"
              target="_blank"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/15 text-white font-bold text-xs hover:bg-white/25 transition-colors"
            >
              <span>Visit Live Website</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Database Status Alert */}
      <div className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-start sm:items-center gap-3">
          <div
            className={`p-3 rounded-xl shrink-0 ${
              dbStatus?.connected
                ? 'bg-emerald-50 text-emerald-600'
                : 'bg-amber-50 text-amber-600'
            }`}
          >
            <Database className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-sm text-[#082F70]">
                Supabase PostgreSQL Connection
              </span>
              <span
                className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase ${
                  dbStatus?.connected
                    ? 'bg-emerald-100 text-emerald-800'
                    : 'bg-amber-100 text-amber-800'
                }`}
              >
                {dbStatus?.connected ? 'Online' : 'Checking'}
              </span>
            </div>
            <p className="text-xs text-slate-500 mt-0.5">
              {dbStatus?.message ||
                'Connecting to Supabase (https://znnrcjmwwudmlhqbwfri.supabase.co)...'}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 self-start md:self-auto shrink-0">
          <button
            onClick={handleSeed}
            disabled={seeding}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#082F70] hover:bg-[#0753A6] text-white text-xs font-bold shadow-xs transition-colors cursor-pointer disabled:opacity-50"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${seeding ? 'animate-spin' : ''}`} />
            <span>{seeding ? 'Syncing...' : 'Sync Data to Supabase'}</span>
          </button>
        </div>
      </div>

      {seedNotice && (
        <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 text-blue-900 text-xs sm:text-sm">
          {seedNotice}
        </div>
      )}

      {/* KPI Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        <Link
          to="/admin/hero"
          className="bg-white rounded-2xl p-4 border border-slate-200 shadow-xs hover:shadow-md hover:border-[#078B3B] transition-all group"
        >
          <div className="flex items-center justify-between text-slate-400 group-hover:text-[#082F70]">
            <span className="text-xs font-bold uppercase">Hero Slides</span>
            <Sliders className="w-4 h-4" />
          </div>
          <div className="mt-2 text-2xl font-black text-[#082F70]">
            {stats.slidesCount}
          </div>
          <div className="text-[11px] text-[#078B3B] font-semibold mt-1">
            Dynamic Panning
          </div>
        </Link>

        <Link
          to="/admin/activities"
          className="bg-white rounded-2xl p-4 border border-slate-200 shadow-xs hover:shadow-md hover:border-[#078B3B] transition-all group"
        >
          <div className="flex items-center justify-between text-slate-400 group-hover:text-[#082F70]">
            <span className="text-xs font-bold uppercase">Activities</span>
            <Sparkles className="w-4 h-4" />
          </div>
          <div className="mt-2 text-2xl font-black text-[#082F70]">
            {stats.activitiesCount}
          </div>
          <div className="text-[11px] text-[#078B3B] font-semibold mt-1">
            Core Programmes
          </div>
        </Link>

        <Link
          to="/admin/gallery"
          className="bg-white rounded-2xl p-4 border border-slate-200 shadow-xs hover:shadow-md hover:border-[#078B3B] transition-all group"
        >
          <div className="flex items-center justify-between text-slate-400 group-hover:text-[#082F70]">
            <span className="text-xs font-bold uppercase">Gallery</span>
            <ImageIcon className="w-4 h-4" />
          </div>
          <div className="mt-2 text-2xl font-black text-[#082F70]">
            {stats.galleryCount}
          </div>
          <div className="text-[11px] text-[#078B3B] font-semibold mt-1">
            All Categories
          </div>
        </Link>

        <Link
          to="/admin/team"
          className="bg-white rounded-2xl p-4 border border-slate-200 shadow-xs hover:shadow-md hover:border-[#078B3B] transition-all group"
        >
          <div className="flex items-center justify-between text-slate-400 group-hover:text-[#082F70]">
            <span className="text-xs font-bold uppercase">Team &amp; Board</span>
            <Users className="w-4 h-4" />
          </div>
          <div className="mt-2 text-2xl font-black text-[#082F70]">
            {stats.teamCount}
          </div>
          <div className="text-[11px] text-[#078B3B] font-semibold mt-1">
            Gov, Impl &amp; Advisory
          </div>
        </Link>

        <Link
          to="/admin/impact"
          className="bg-white rounded-2xl p-4 border border-slate-200 shadow-xs hover:shadow-md hover:border-[#078B3B] transition-all group"
        >
          <div className="flex items-center justify-between text-slate-400 group-hover:text-[#082F70]">
            <span className="text-xs font-bold uppercase">Metrics</span>
            <BarChart3 className="w-4 h-4" />
          </div>
          <div className="mt-2 text-2xl font-black text-[#082F70]">
            {stats.metricsCount}
          </div>
          <div className="text-[11px] text-[#078B3B] font-semibold mt-1">
            Impact Statistics
          </div>
        </Link>

        <Link
          to="/admin/submissions"
          className="bg-white rounded-2xl p-4 border border-slate-200 shadow-xs hover:shadow-md hover:border-[#078B3B] transition-all group"
        >
          <div className="flex items-center justify-between text-slate-400 group-hover:text-[#082F70]">
            <span className="text-xs font-bold uppercase">Inquiries</span>
            <Mail className="w-4 h-4" />
          </div>
          <div className="mt-2 text-2xl font-black text-[#082F70]">
            {stats.submissionsCount}
          </div>
          <div className="text-[11px] text-[#078B3B] font-semibold mt-1">
            Form Submissions
          </div>
        </Link>
      </div>

      {/* Quick Access Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Link
          to="/admin/hero"
          className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:shadow-lg transition-all group flex flex-col justify-between"
        >
          <div className="space-y-3">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#082F70] flex items-center justify-center group-hover:bg-[#082F70] group-hover:text-white transition-colors">
              <Sliders className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-base text-[#082F70]">Hero Slider Management</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Edit hero headings, taglines, change animated slide backgrounds, and reorder slides.
            </p>
          </div>
          <div className="mt-4 pt-4 border-t border-slate-100 flex items-center gap-1 text-xs font-bold text-[#078B3B] group-hover:translate-x-1 transition-transform">
            <span>Manage Slides</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </Link>

        <Link
          to="/admin/activities"
          className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:shadow-lg transition-all group flex flex-col justify-between"
        >
          <div className="space-y-3">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#078B3B] flex items-center justify-center group-hover:bg-[#078B3B] group-hover:text-white transition-colors">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-base text-[#082F70]">Major Activities &amp; Services</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Manage all 12 initiatives including Old Age Home, Hair Donation, Sparsha Counselling, and Medical Camps.
            </p>
          </div>
          <div className="mt-4 pt-4 border-t border-slate-100 flex items-center gap-1 text-xs font-bold text-[#078B3B] group-hover:translate-x-1 transition-transform">
            <span>Manage Activities</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </Link>

        <Link
          to="/admin/gallery"
          className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:shadow-lg transition-all group flex flex-col justify-between"
        >
          <div className="space-y-3">
            <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center group-hover:bg-purple-700 group-hover:text-white transition-colors">
              <ImageIcon className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-base text-[#082F70]">Photo Gallery</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Upload event photos, assign categories, update captions, and preview lightbox.
            </p>
          </div>
          <div className="mt-4 pt-4 border-t border-slate-100 flex items-center gap-1 text-xs font-bold text-[#078B3B] group-hover:translate-x-1 transition-transform">
            <span>Manage Gallery</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </Link>

        <Link
          to="/admin/sponsors"
          className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:shadow-lg transition-all group flex flex-col justify-between"
        >
          <div className="space-y-3">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center group-hover:bg-amber-700 group-hover:text-white transition-colors">
              <HandHeart className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-base text-[#082F70]">Partners &amp; Tiffin Sponsors</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Manage corporate CSR sponsors like Malabar Gold &amp; Diamonds Daily Morning Tiffin Sponsorship.
            </p>
          </div>
          <div className="mt-4 pt-4 border-t border-slate-100 flex items-center gap-1 text-xs font-bold text-[#078B3B] group-hover:translate-x-1 transition-transform">
            <span>Manage Sponsors</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </Link>
      </div>
    </div>
  );
};
