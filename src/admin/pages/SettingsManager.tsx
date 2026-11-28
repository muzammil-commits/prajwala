import React, { useEffect, useState } from 'react';
import {
  Settings,
  Save,
  CheckCircle2,
  Building,
  Phone,
  Mail,
  MapPin,
  CreditCard,
  QrCode,
  ShieldCheck,
} from 'lucide-react';
import { CmsService } from '../../lib/cmsDataService';
import { ORG_INFO } from '../../data/pcdsData';

export const SettingsManager: React.FC = () => {
  const [settings, setSettings] = useState(ORG_INFO);
  const [loading, setLoading] = useState(true);
  const [saveSuccess, setSaveSuccess] = useState<string | null>(null);

  useEffect(() => {
    loadSettings();
  }, []);

  const loadSettings = async () => {
    setLoading(true);
    try {
      const data = await CmsService.getSettings();
      setSettings(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await CmsService.saveSettings(settings);
      setSaveSuccess('Website & Society configuration saved successfully!');
      setTimeout(() => setSaveSuccess(null), 2500);
    } catch (err: any) {
      alert(err.message);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-[#078B3B] uppercase tracking-wider mb-1">
            <Settings className="w-4 h-4" />
            <span>Core Society Configuration</span>
          </div>
          <h1 className="text-2xl font-black text-[#082F70]">
            Website Settings & Organization Info
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Manage official registration numbers, verified phone numbers, bank donation accounts, and map address.
          </p>
        </div>

        <button
          onClick={handleSave}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#078B3B] hover:bg-[#067331] text-white font-extrabold text-xs sm:text-sm shadow-md transition-all cursor-pointer self-start sm:self-auto"
        >
          <Save className="w-4 h-4" />
          <span>Save Changes</span>
        </button>
      </div>

      {saveSuccess && (
        <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl text-emerald-800 text-xs sm:text-sm font-semibold flex items-center gap-2 shadow-xs">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
          <span>{saveSuccess}</span>
        </div>
      )}

      <form onSubmit={handleSave} className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Section 1: General Info */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm space-y-4">
          <div className="flex items-center gap-2 text-sm font-extrabold text-[#082F70] border-b border-slate-100 pb-3">
            <Building className="w-4 h-4 text-[#078B3B]" />
            <span>Society Identity & Registration</span>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Official Society Name
            </label>
            <input
              type="text"
              value={settings.name}
              onChange={(e) => setSettings({ ...settings, name: e.target.value })}
              className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-[#078B3B]"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Short Name / Acronym
              </label>
              <input
                type="text"
                value={settings.shortName}
                onChange={(e) =>
                  setSettings({ ...settings, shortName: e.target.value })
                }
                className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-[#078B3B]"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Registration Number
              </label>
              <input
                type="text"
                value={settings.regNumber}
                onChange={(e) =>
                  setSettings({ ...settings, regNumber: e.target.value })
                }
                className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-[#078B3B]"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Establishment Date
              </label>
              <input
                type="text"
                value={settings.establishedDate}
                onChange={(e) =>
                  setSettings({ ...settings, establishedDate: e.target.value })
                }
                className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-[#078B3B]"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Society Tagline
              </label>
              <input
                type="text"
                value={settings.tagline}
                onChange={(e) =>
                  setSettings({ ...settings, tagline: e.target.value })
                }
                className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-[#078B3B]"
              />
            </div>
          </div>
        </div>

        {/* Section 2: Contact Information */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm space-y-4">
          <div className="flex items-center gap-2 text-sm font-extrabold text-[#082F70] border-b border-slate-100 pb-3">
            <Phone className="w-4 h-4 text-[#078B3B]" />
            <span>Contact & Communication Numbers</span>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Primary Landline / Office Phone
              </label>
              <input
                type="text"
                value={settings.landline}
                onChange={(e) =>
                  setSettings({ ...settings, landline: e.target.value })
                }
                className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-[#078B3B]"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Secondary Mobile
              </label>
              <input
                type="text"
                value={settings.phone}
                onChange={(e) =>
                  setSettings({ ...settings, phone: e.target.value })
                }
                className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-[#078B3B]"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Official Email Address
            </label>
            <input
              type="email"
              value={settings.email}
              onChange={(e) => setSettings({ ...settings, email: e.target.value })}
              className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-[#078B3B]"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Registered & Old Age Home Address
            </label>
            <textarea
              rows={3}
              value={settings.address}
              onChange={(e) =>
                setSettings({ ...settings, address: e.target.value })
              }
              className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-[#078B3B]"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Official Website URL
            </label>
            <input
              type="text"
              value={settings.website}
              onChange={(e) =>
                setSettings({ ...settings, website: e.target.value })
              }
              className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-[#078B3B]"
            />
          </div>
        </div>

        {/* Section 3: Banking & Donations */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm space-y-4 lg:col-span-2">
          <div className="flex items-center gap-2 text-sm font-extrabold text-[#082F70] border-b border-slate-100 pb-3">
            <CreditCard className="w-4 h-4 text-[#078B3B]" />
            <span>Donation Bank Account Details (Displayed in Donate Modal)</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Account Name
              </label>
              <input
                type="text"
                value={settings.bank.accountName}
                onChange={(e) =>
                  setSettings({
                    ...settings,
                    bank: {
                      ...settings.bank,
                      accountName: e.target.value,
                    },
                  })
                }
                className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Account Number
              </label>
              <input
                type="text"
                value={settings.bank.accountNo}
                onChange={(e) =>
                  setSettings({
                    ...settings,
                    bank: {
                      ...settings.bank,
                      accountNo: e.target.value,
                    },
                  })
                }
                className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-mono font-bold"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Bank Name
              </label>
              <input
                type="text"
                value={settings.bank.bankName}
                onChange={(e) =>
                  setSettings({
                    ...settings,
                    bank: {
                      ...settings.bank,
                      bankName: e.target.value,
                    },
                  })
                }
                className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                IFSC Code
              </label>
              <input
                type="text"
                value={settings.bank.ifsc}
                onChange={(e) =>
                  setSettings({
                    ...settings,
                    bank: {
                      ...settings.bank,
                      ifsc: e.target.value,
                    },
                  })
                }
                className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-mono font-bold"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Official UPI ID
              </label>
              <input
                type="text"
                value={settings.bank.upiId}
                onChange={(e) =>
                  setSettings({
                    ...settings,
                    bank: {
                      ...settings.bank,
                      upiId: e.target.value,
                    },
                  })
                }
                className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-mono font-bold text-[#082F70]"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Bank Branch
              </label>
              <input
                type="text"
                value={settings.bank.branch}
                onChange={(e) =>
                  setSettings({
                    ...settings,
                    bank: {
                      ...settings.bank,
                      branch: e.target.value,
                    },
                  })
                }
                className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
