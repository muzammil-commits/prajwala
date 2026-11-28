import React, { useEffect, useState } from 'react';
import {
  Users,
  Plus,
  Edit,
  Trash2,
  Save,
  X,
  Upload,
  CheckCircle2,
  Award,
  Shield,
  Briefcase,
  UserCheck,
} from 'lucide-react';
import { CmsService } from '../../lib/cmsDataService';
import { GoverningBodyMember, AdvisoryMember } from '../../data/pcdsData';
import { uploadToCloudinary } from '../../lib/cloudinary';

type TeamTab = 'governing' | 'implementation' | 'advisory';

export const TeamManager: React.FC = () => {
  const [tab, setTab] = useState<TeamTab>('governing');
  const [governing, setGoverning] = useState<GoverningBodyMember[]>([]);
  const [implementation, setImplementation] = useState<
    Array<{ position: string; responsibility: string }>
  >([]);
  const [advisory, setAdvisory] = useState<AdvisoryMember[]>([]);
  const [loading, setLoading] = useState(true);

  // Edit / modal state
  const [editingGoverning, setEditingGoverning] = useState<GoverningBodyMember | null>(null);
  const [editingImplementation, setEditingImplementation] = useState<{
    position: string;
    responsibility: string;
  } | null>(null);
  const [editingAdvisory, setEditingAdvisory] = useState<AdvisoryMember | null>(null);

  const [uploading, setUploading] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    loadAllTeams();
  }, []);

  const loadAllTeams = async () => {
    setLoading(true);
    try {
      const [gov, imp, adv] = await Promise.all([
        CmsService.getGoverningBody(),
        CmsService.getImplementationTeam(),
        CmsService.getAdvisoryTeam(),
      ]);
      setGoverning(gov);
      setImplementation(imp);
      setAdvisory(adv);
    } catch (err) {
      console.error('Failed to load teams:', err);
    } finally {
      setLoading(false);
    }
  };

  // Upload photo handler for advisory members
  const handleAdvisoryPhotoUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !editingAdvisory) return;
    setUploading(true);
    try {
      const res = await uploadToCloudinary(file, 'advisory');
      setEditingAdvisory({ ...editingAdvisory, image: res.secure_url });
    } catch (err: any) {
      alert(err.message || 'Photo upload failed');
    } finally {
      setUploading(false);
    }
  };

  // Save Handlers
  const handleSaveGoverning = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingGoverning) return;
    try {
      await CmsService.saveGoverningBodyMember(editingGoverning);
      setSaveSuccess('Governing body member saved!');
      await loadAllTeams();
      setTimeout(() => {
        setEditingGoverning(null);
        setSaveSuccess(null);
      }, 700);
    } catch (err: any) {
      setErrorMsg(err.message);
    }
  };

  const handleSaveImplementation = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingImplementation) return;
    try {
      await CmsService.saveImplementationTeamMember(editingImplementation);
      setSaveSuccess('Implementation team role saved!');
      await loadAllTeams();
      setTimeout(() => {
        setEditingImplementation(null);
        setSaveSuccess(null);
      }, 700);
    } catch (err: any) {
      setErrorMsg(err.message);
    }
  };

  const handleSaveAdvisory = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingAdvisory) return;
    try {
      await CmsService.saveAdvisoryMember(editingAdvisory);
      setSaveSuccess('Advisory board member saved!');
      await loadAllTeams();
      setTimeout(() => {
        setEditingAdvisory(null);
        setSaveSuccess(null);
      }, 700);
    } catch (err: any) {
      setErrorMsg(err.message);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-[#078B3B] uppercase tracking-wider mb-1">
            <Users className="w-4 h-4" />
            <span>Leadership & Human Resources</span>
          </div>
          <h1 className="text-2xl font-black text-[#082F70]">
            Organization & Teams Management
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Manage Governing Body, Program Implementation Staff, and Official Advisory & Support Board.
          </p>
        </div>

        {/* Tab switch buttons */}
        <div className="flex items-center gap-1.5 bg-slate-100 p-1.5 rounded-2xl border border-slate-200">
          <button
            onClick={() => setTab('governing')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              tab === 'governing'
                ? 'bg-white text-[#082F70] shadow-sm font-extrabold'
                : 'text-slate-600 hover:text-[#082F70]'
            }`}
          >
            Governing Body ({governing.length})
          </button>
          <button
            onClick={() => setTab('implementation')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              tab === 'implementation'
                ? 'bg-white text-[#082F70] shadow-sm font-extrabold'
                : 'text-slate-600 hover:text-[#082F70]'
            }`}
          >
            Implementation ({implementation.length})
          </button>
          <button
            onClick={() => setTab('advisory')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              tab === 'advisory'
                ? 'bg-white text-[#082F70] shadow-sm font-extrabold'
                : 'text-slate-600 hover:text-[#082F70]'
            }`}
          >
            Advisory Board ({advisory.length})
          </button>
        </div>
      </div>

      {/* Tab 1: Governing Body */}
      {tab === 'governing' && (
        <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden">
          <div className="p-5 border-b border-slate-100 flex items-center justify-between">
            <h3 className="font-extrabold text-[#082F70] text-base">
              Elected Governing Body Members (Society Bylaws)
            </h3>
            <button
              onClick={() =>
                setEditingGoverning({
                  id: String(governing.length + 1),
                  position: '',
                  responsibility: '',
                })
              }
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#078B3B] text-white rounded-xl text-xs font-bold shadow-sm"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add Role</span>
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-slate-700 font-bold uppercase text-[10px] tracking-wider">
                  <th className="p-3.5">#</th>
                  <th className="p-3.5">Position</th>
                  <th className="p-3.5">Responsibility</th>
                  <th className="p-3.5 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {governing.map((m, idx) => (
                  <tr key={m.id || idx} className="hover:bg-slate-50/70 transition-colors">
                    <td className="p-3.5 font-bold text-slate-400">{idx + 1}</td>
                    <td className="p-3.5 font-extrabold text-[#082F70]">{m.position}</td>
                    <td className="p-3.5 text-slate-600">{m.responsibility}</td>
                    <td className="p-3.5 text-right">
                      <button
                        onClick={() => setEditingGoverning(m)}
                        className="p-1.5 rounded-lg text-blue-600 hover:bg-blue-50"
                        title="Edit"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Tab 2: Implementation Team */}
      {tab === 'implementation' && (
        <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden">
          <div className="p-5 border-b border-slate-100 flex items-center justify-between">
            <h3 className="font-extrabold text-[#082F70] text-base">
              Program Operations & Field Implementation Team
            </h3>
            <button
              onClick={() =>
                setEditingImplementation({
                  position: '',
                  responsibility: '',
                })
              }
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#078B3B] text-white rounded-xl text-xs font-bold shadow-sm"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add Role</span>
            </button>
          </div>

          <div className="divide-y divide-slate-100">
            {implementation.map((item, idx) => (
              <div
                key={idx}
                className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-slate-50/70"
              >
                <div>
                  <h4 className="font-extrabold text-[#082F70] text-sm flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-[#078B3B]" />
                    <span>{item.position}</span>
                  </h4>
                  <p className="text-xs text-slate-600 mt-1 pl-6">
                    {item.responsibility}
                  </p>
                </div>
                <button
                  onClick={() => setEditingImplementation(item)}
                  className="self-end sm:self-auto p-1.5 rounded-lg text-blue-600 hover:bg-blue-50"
                >
                  <Edit className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 3: Advisory Board */}
      {tab === 'advisory' && (
        <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden">
          <div className="p-5 border-b border-slate-100 flex items-center justify-between">
            <div>
              <h3 className="font-extrabold text-[#082F70] text-base">
                Official Advisory & Support Board
              </h3>
              <p className="text-xs text-slate-500">
                Display advisors with their professional photos, roles, and profiles.
              </p>
            </div>
            <button
              onClick={() =>
                setEditingAdvisory({
                  name: '',
                  designation: '',
                  role: '',
                  responsibilities: '',
                  image: '/assets/logo/pcds-logo.png',
                })
              }
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#078B3B] text-white rounded-xl text-xs font-bold shadow-sm"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add Advisor</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-5">
            {advisory.map((adv, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl border border-slate-200 bg-slate-50/50 flex items-start gap-4 hover:shadow-sm transition-shadow"
              >
                <div className="w-16 h-16 rounded-2xl bg-white border border-slate-200 overflow-hidden shrink-0 shadow-sm">
                  <img
                    src={adv.image || '/assets/logo/pcds-logo.png'}
                    alt={adv.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = '/assets/logo/pcds-logo.png';
                    }}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h4 className="font-black text-[#082F70] text-sm truncate">
                        {adv.name}
                      </h4>
                      <span className="text-[11px] font-bold text-[#078B3B] block">
                        {adv.role}
                      </span>
                    </div>
                    <button
                      onClick={() => setEditingAdvisory(adv)}
                      className="p-1 rounded-lg text-blue-600 hover:bg-blue-50"
                    >
                      <Edit className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                    {adv.responsibilities}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Modal: Edit Governing */}
      {editingGoverning && (
        <div className="fixed inset-0 z-50 bg-[#082F70]/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden border border-slate-200">
            <div className="p-5 bg-[#082F70] text-white flex items-center justify-between">
              <h3 className="font-bold text-sm">Edit Governing Body Member</h3>
              <button
                onClick={() => setEditingGoverning(null)}
                className="p-1 rounded-lg text-white/70 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <form onSubmit={handleSaveGoverning} className="p-5 space-y-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Position *
                </label>
                <input
                  type="text"
                  value={editingGoverning.position}
                  onChange={(e) =>
                    setEditingGoverning({ ...editingGoverning, position: e.target.value })
                  }
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Responsibility *
                </label>
                <textarea
                  rows={3}
                  value={editingGoverning.responsibility}
                  onChange={(e) =>
                    setEditingGoverning({
                      ...editingGoverning,
                      responsibility: e.target.value,
                    })
                  }
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs"
                  required
                />
              </div>
              <div className="pt-3 border-t flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setEditingGoverning(null)}
                  className="px-4 py-2 rounded-xl bg-slate-100 text-xs font-bold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-[#078B3B] text-white text-xs font-bold"
                >
                  Save Member
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal: Edit Implementation */}
      {editingImplementation && (
        <div className="fixed inset-0 z-50 bg-[#082F70]/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden border border-slate-200">
            <div className="p-5 bg-[#082F70] text-white flex items-center justify-between">
              <h3 className="font-bold text-sm">Edit Implementation Team Role</h3>
              <button
                onClick={() => setEditingImplementation(null)}
                className="p-1 rounded-lg text-white/70 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <form onSubmit={handleSaveImplementation} className="p-5 space-y-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Position / Role *
                </label>
                <input
                  type="text"
                  value={editingImplementation.position}
                  onChange={(e) =>
                    setEditingImplementation({
                      ...editingImplementation,
                      position: e.target.value,
                    })
                  }
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Core Responsibilities
                </label>
                <textarea
                  rows={3}
                  value={editingImplementation.responsibility}
                  onChange={(e) =>
                    setEditingImplementation({
                      ...editingImplementation,
                      responsibility: e.target.value,
                    })
                  }
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs"
                />
              </div>
              <div className="pt-3 border-t flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setEditingImplementation(null)}
                  className="px-4 py-2 rounded-xl bg-slate-100 text-xs font-bold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-[#078B3B] text-white text-xs font-bold"
                >
                  Save Role
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal: Edit Advisory */}
      {editingAdvisory && (
        <div className="fixed inset-0 z-50 bg-[#082F70]/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden border border-slate-200">
            <div className="p-5 bg-[#082F70] text-white flex items-center justify-between">
              <h3 className="font-bold text-sm">Edit Advisory Board Member</h3>
              <button
                onClick={() => setEditingAdvisory(null)}
                className="p-1 rounded-lg text-white/70 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <form onSubmit={handleSaveAdvisory} className="p-5 space-y-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Full Name & Honors *
                </label>
                <input
                  type="text"
                  value={editingAdvisory.name}
                  onChange={(e) =>
                    setEditingAdvisory({ ...editingAdvisory, name: e.target.value })
                  }
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Advisory Role *
                </label>
                <input
                  type="text"
                  value={editingAdvisory.role}
                  onChange={(e) =>
                    setEditingAdvisory({ ...editingAdvisory, role: e.target.value })
                  }
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Photo URL (Cloudinary or upload)
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={editingAdvisory.image || ''}
                    onChange={(e) =>
                      setEditingAdvisory({ ...editingAdvisory, image: e.target.value })
                    }
                    className="flex-1 px-3 py-2 rounded-xl border border-slate-200 text-xs"
                  />
                  <label className="px-3 py-2 bg-slate-100 rounded-xl text-xs font-bold cursor-pointer">
                    <Upload className="w-3.5 h-3.5 inline mr-1" />
                    <span>{uploading ? '...' : 'Upload'}</span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleAdvisoryPhotoUpload}
                      className="hidden"
                    />
                  </label>
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Professional Bio / Responsibilities
                </label>
                <textarea
                  rows={3}
                  value={editingAdvisory.responsibilities}
                  onChange={(e) =>
                    setEditingAdvisory({ ...editingAdvisory, responsibilities: e.target.value })
                  }
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs"
                />
              </div>
              <div className="pt-3 border-t flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setEditingAdvisory(null)}
                  className="px-4 py-2 rounded-xl bg-slate-100 text-xs font-bold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-[#078B3B] text-white text-xs font-bold"
                >
                  Save Advisor
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
