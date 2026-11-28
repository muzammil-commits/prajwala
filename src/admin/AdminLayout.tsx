import React, { useState } from 'react';
import { Link, NavLink, Outlet, useNavigate, useLocation, Navigate } from 'react-router-dom';
import {
  LayoutDashboard,
  Sliders,
  Sparkles,
  Image as ImageIcon,
  Users,
  HandHeart,
  BarChart3,
  Mail,
  FolderOpen,
  Settings,
  Database,
  ExternalLink,
  LogOut,
  Menu,
  X,
  Heart,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
} from 'lucide-react';
import { useAdminAuth } from './AdminAuthContext';

const NAV_ITEMS = [
  { to: '/admin/dashboard', label: 'Dashboard Overview', icon: LayoutDashboard },
  { to: '/admin/hero', label: 'Hero Slider', icon: Sliders },
  { to: '/admin/activities', label: 'Major Activities (12)', icon: Sparkles },
  { to: '/admin/gallery', label: 'Gallery Management', icon: ImageIcon },
  { to: '/admin/team', label: 'Organization & Teams', icon: Users },
  { to: '/admin/sponsors', label: 'Partners & Sponsors', icon: HandHeart },
  { to: '/admin/impact', label: 'Impact Statistics', icon: BarChart3 },
  { to: '/admin/media', label: 'Media Library', icon: FolderOpen },
  { to: '/admin/submissions', label: 'Contact Submissions', icon: Mail },
  { to: '/admin/settings', label: 'Website Settings', icon: Settings },
];

export const AdminLayout: React.FC = () => {
  const { user, loading, logout } = useAdminAuth();
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  if (loading) {
    return (
      <div className="min-h-screen bg-[#082F70] flex items-center justify-center p-4">
        <div className="text-center text-white space-y-3">
          <div className="w-12 h-12 border-4 border-white/20 border-t-[#36A852] rounded-full animate-spin mx-auto" />
          <p className="text-xs font-mono font-bold tracking-widest text-[#36A852] uppercase">
            Verifying Supabase Admin Session...
          </p>
        </div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/admin/login" replace state={{ from: location }} />;
  }

  const handleLogout = async () => {
    await logout();
    navigate('/admin/login');
  };

  const currentNavItem = NAV_ITEMS.find((item) =>
    location.pathname.startsWith(item.to)
  );

  return (
    <div className="min-h-screen bg-[#F4F7FB] text-[#14294A] flex flex-col antialiased">
      {/* Mobile Sidebar Backdrop */}
      {mobileSidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-[#082F70]/60 backdrop-blur-xs lg:hidden"
          onClick={() => setMobileSidebarOpen(false)}
        />
      )}

      {/* Main Layout Container */}
      <div className="flex flex-1 min-h-screen">
        {/* Left Sidebar */}
        <aside
          className={`fixed inset-y-0 left-0 z-50 w-72 bg-[#082F70] text-white flex flex-col transition-transform duration-300 ease-in-out lg:static lg:translate-x-0 ${
            mobileSidebarOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          {/* Organization Logo & Brand Header */}
          <div className="p-5 border-b border-white/10 flex items-center justify-between">
            <Link to="/admin/dashboard" className="flex items-center gap-3 group">
              <img
                src="/assets/logo/pcds-logo.png"
                alt="PCDS Logo"
                className="w-10 h-10 rounded-full bg-white object-contain shadow-md ring-2 ring-[#078B3B]"
              />
              <div className="leading-tight">
                <div className="text-xs font-black tracking-wider uppercase text-white">
                  PRAJWALA SOCIETY
                </div>
                <div className="text-[10px] font-bold text-[#36A852] tracking-widest uppercase">
                  CMS Admin Portal
                </div>
              </div>
            </Link>

            <button
              onClick={() => setMobileSidebarOpen(false)}
              className="lg:hidden p-1.5 rounded-lg text-white/70 hover:text-white hover:bg-white/10"
              aria-label="Close sidebar"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 overflow-y-auto p-4 space-y-1.5 custom-scrollbar">
            <div className="px-3 py-1.5 text-[10px] font-black text-white/40 uppercase tracking-widest">
              MANAGEMENT MODULES
            </div>

            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname.startsWith(item.to);
              return (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={() => setMobileSidebarOpen(false)}
                  className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                    isActive
                      ? 'bg-[#078B3B] text-white shadow-md font-bold translate-x-1'
                      : 'text-white/80 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-white' : 'text-[#36A852]'}`} />
                  <span className="truncate">{item.label}</span>
                </NavLink>
              );
            })}
          </nav>

          {/* User Profile & Quick Actions Footer */}
          <div className="p-4 border-t border-white/10 bg-[#062456] space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#078B3B] text-white font-bold flex items-center justify-center text-xs shrink-0 shadow">
                {user?.fullName?.charAt(0) || 'A'}
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-xs font-bold text-white truncate">
                  {user?.fullName || 'Administrator'}
                </div>
                <div className="text-[10px] text-white/60 truncate">
                  {user?.email || 'admin@prajwala.org'}
                </div>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-2">
              <Link
                to="/"
                target="_blank"
                className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-colors"
                title="Open Public Website in new tab"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Live Site</span>
              </Link>
              <button
                onClick={handleLogout}
                className="p-2 rounded-lg bg-red-500/20 hover:bg-red-500 text-red-200 hover:text-white transition-colors cursor-pointer"
                title="Log out"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          </div>
        </aside>

        {/* Right Main Content Area */}
        <div className="flex-1 flex flex-col min-w-0">
          {/* Top Navbar */}
          <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200/90 h-16 flex items-center justify-between px-4 sm:px-6 lg:px-8 shadow-xs">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setMobileSidebarOpen(true)}
                className="lg:hidden p-2 rounded-xl text-[#082F70] bg-[#F3F8FC] hover:bg-[#EDF8EF] transition-colors cursor-pointer"
                aria-label="Open mobile navigation"
              >
                <Menu className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2">
                <h1 className="text-base sm:text-lg font-black text-[#082F70] tracking-tight">
                  {currentNavItem?.label || 'Admin Portal'}
                </h1>
                <span className="hidden sm:inline-block text-xs bg-[#EDF8EF] text-[#078B3B] px-2.5 py-0.5 rounded-full font-bold">
                  Live Sync
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
              <Link
                to="/"
                target="_blank"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#082F70] hover:bg-[#0753A6] text-white text-xs font-bold shadow-xs transition-all"
              >
                <span>View Public Site</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </Link>
            </div>
          </header>

          {/* Page Main Outlet */}
          <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-x-hidden">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};
