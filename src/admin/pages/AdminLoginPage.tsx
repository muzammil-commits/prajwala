import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Eye, EyeOff, Lock, Mail, ShieldCheck, ArrowRight, Loader2, AlertCircle } from 'lucide-react';
import { useAdminAuth } from '../AdminAuthContext';

export const AdminLoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const { login } = useAdminAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = (location.state as any)?.from?.pathname || '/admin/dashboard';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!email.trim() || !password) {
      setErrorMessage('Please enter both your email/admin ID and password.');
      return;
    }

    setLoading(true);
    const result = await login(email, password);
    setLoading(false);

    if (result.success) {
      navigate(from, { replace: true });
    } else {
      setErrorMessage(result.error || 'Authentication failed. Please verify credentials.');
    }
  };

  const handleQuickFill = () => {
    setEmail('admin@prajwala.org');
    setPassword('prajwala2019');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#082F70] via-[#0753A6] to-[#062456] flex items-center justify-center p-4 sm:p-6 lg:p-8">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#078B3B]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-md bg-white rounded-3xl shadow-2xl p-6 sm:p-8 border border-white/20">
        {/* Header / Brand */}
        <div className="text-center space-y-2 mb-8">
          <div className="inline-flex p-2 rounded-2xl bg-[#EDF8EF] ring-4 ring-[#078B3B]/20 mb-2">
            <img
              src="/assets/logo/pcds-logo.png"
              alt="PCDS Official Logo"
              className="w-16 h-16 rounded-xl object-contain bg-white shadow-sm"
            />
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-[#082F70] tracking-tight">
            Administrator Sign In
          </h2>
          <p className="text-xs sm:text-sm text-slate-500">
            Prajwala Community Development Society CMS
          </p>
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#EDF8EF] text-[#078B3B] text-[11px] font-bold">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Supabase &amp; Cloudinary Connected</span>
          </div>
        </div>

        {/* Error Alert */}
        {errorMessage && (
          <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm flex items-start gap-2.5">
            <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
            <div>{errorMessage}</div>
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-xs font-bold text-[#082F70] uppercase tracking-wider mb-1.5">
              Admin Email or ID
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <Mail className="w-4 h-4" />
              </div>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@prajwala.org"
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#078B3B] focus:border-transparent text-sm bg-slate-50 hover:bg-white transition-all text-[#14294A]"
                required
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="block text-xs font-bold text-[#082F70] uppercase tracking-wider">
                Password
              </label>
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <Lock className="w-4 h-4" />
              </div>
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                className="w-full pl-10 pr-10 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#078B3B] focus:border-transparent text-sm bg-slate-50 hover:bg-white transition-all text-[#14294A]"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600 cursor-pointer"
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 rounded-xl bg-[#082F70] hover:bg-[#0753A6] text-white font-extrabold text-sm shadow-lg hover:shadow-xl transition-all cursor-pointer flex items-center justify-center gap-2 active:scale-[0.99] disabled:opacity-70"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Authenticating with Supabase...</span>
              </>
            ) : (
              <>
                <span>Sign In to Admin Panel</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>

        {/* Quick Fill Helper for Seamless Access */}
        <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
          <span>Initial admin credentials:</span>
          <button
            type="button"
            onClick={handleQuickFill}
            className="font-bold text-[#078B3B] hover:underline cursor-pointer"
          >
            Auto-fill Credentials
          </button>
        </div>
      </div>
    </div>
  );
};
