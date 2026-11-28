import React, { useEffect, useState } from 'react';
import {
  HandHeart,
  Plus,
  Edit,
  Trash2,
  Save,
  X,
  Upload,
  CheckCircle2,
  Sparkles,
  Coffee,
  Building,
} from 'lucide-react';
import { CmsService, SponsorRecord } from '../../lib/cmsDataService';
import { uploadToCloudinary } from '../../lib/cloudinary';

export const SponsorsManager: React.FC = () => {
  const [sponsors, setSponsors] = useState<SponsorRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingItem, setEditingItem] = useState<SponsorRecord | null>(null);
  const [uploading, setUploading] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // Form fields
  const [formName, setFormName] = useState('');
  const [formCategory, setFormCategory] = useState('');
  const [formBranch, setFormBranch] = useState('');
  const [formTagline, setFormTagline] = useState('');
  const [formDesc, setFormDesc] = useState('');
  const [formLogo, setFormLogo] = useState('');
  const [formHighlights, setFormHighlights] = useState<string[]>([]);
  const [newHl, setNewHl] = useState('');

  useEffect(() => {
    loadSponsors();
  }, []);

  const loadSponsors = async () => {
    setLoading(true);
    try {
      const data = await CmsService.getSponsors();
      setSponsors(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleOpenEdit = (s: SponsorRecord) => {
    setEditingItem(s);
    setFormName(s.name);
    setFormCategory(s.category);
    setFormBranch(s.branch);
    setFormTagline(s.tagline);
    setFormDesc(s.description);
    setFormLogo(s.logo);
    setFormHighlights([...(s.highlights || [])]);
    setSaveSuccess(null);
    setErrorMsg(null);
  };

  const handleCreateNew = () => {
    const blank: SponsorRecord = {
      id: `sponsor-${Date.now()}`,
      name: '',
      category: 'CSR Partner',
      branch: 'Guntur',
      tagline: '',
      description: '',
      logo: '/assets/logo/pcds-logo.png',
      highlights: [],
      display_order: sponsors.length + 1,
      is_active: true,
    };
    handleOpenEdit(blank);
  };

  const handleLogoUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    try {
      const res = await uploadToCloudinary(file, 'sponsors');
      setFormLogo(res.secure_url);
    } catch (err: any) {
      alert(err.message || 'Logo upload failed');
    } finally {
      setUploading(false);
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName.trim()) {
      setErrorMsg('Partner / Sponsor name is required.');
      return;
    }

    const payload: SponsorRecord = {
      id: editingItem?.id || `sponsor-${Date.now()}`,
      name: formName.trim(),
      category: formCategory.trim() || 'CSR Partner',
      branch: formBranch.trim(),
      tagline: formTagline.trim(),
      description: formDesc.trim(),
      logo: formLogo.trim() || '/assets/logo/pcds-logo.png',
      highlights: formHighlights,
      display_order: editingItem?.display_order || sponsors.length + 1,
      is_active: true,
    };

    try {
      await CmsService.saveSponsor(payload);
      setSaveSuccess('Sponsor saved successfully!');
      await loadSponsors();
      setTimeout(() => {
        setEditingItem(null);
        setSaveSuccess(null);
      }, 700);
    } catch (err: any) {
      setErrorMsg(err.message || 'Failed to save sponsor.');
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-[#078B3B] uppercase tracking-wider mb-1">
            <HandHeart className="w-4 h-4" />
            <span>Corporate Social Responsibility & Alliances</span>
          </div>
          <h1 className="text-2xl font-black text-[#082F70]">
            Partners & Sponsors Management ({sponsors.length})
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Manage CSR donors, corporate allies, and daily elder nourishment sponsors like Malabar Gold & Diamonds.
          </p>
        </div>

        <button
          onClick={handleCreateNew}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#078B3B] hover:bg-[#067331] text-white font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer self-start sm:self-auto"
        >
          <Plus className="w-4 h-4" />
          <span>Add New Partner</span>
        </button>
      </div>

      {/* Sponsors Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {sponsors.map((s) => (
          <div
            key={s.id}
            className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 flex flex-col justify-between hover:shadow-md transition-all"
          >
            <div>
              <div className="flex items-start gap-4">
                <div className="w-20 h-20 rounded-2xl bg-slate-50 border border-slate-200 p-2 flex items-center justify-center shrink-0">
                  <img
                    src={s.logo}
                    alt={s.name}
                    className="max-h-full max-w-full object-contain"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = '/assets/logo/pcds-logo.png';
                    }}
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-black uppercase tracking-wider bg-[#EDF8EF] text-[#078B3B] px-2.5 py-0.5 rounded-full">
                      {s.category}
                    </span>
                    {s.branch && (
                      <span className="text-[10px] font-semibold text-slate-500">
                        • {s.branch}
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-black text-[#082F70] mt-1 truncate">
                    {s.name}
                  </h3>
                  {s.tagline && (
                    <p className="text-xs font-semibold text-amber-700 mt-0.5">
                      {s.tagline}
                    </p>
                  )}
                </div>
              </div>

              <p className="text-xs text-slate-600 mt-4 leading-relaxed">
                {s.description}
              </p>

              {s.highlights && s.highlights.length > 0 && (
                <div className="mt-4 space-y-1.5 bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
                    Partnership Highlights
                  </span>
                  {s.highlights.map((h, i) => (
                    <div key={i} className="text-xs text-slate-700 flex items-center gap-1.5">
                      <span className="text-[#078B3B] font-bold">✓</span>
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="mt-5 pt-4 border-t border-slate-100 flex justify-end">
              <button
                onClick={() => handleOpenEdit(s)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 text-blue-700 rounded-xl text-xs font-bold hover:bg-blue-100 cursor-pointer"
              >
                <Edit className="w-3.5 h-3.5" />
                <span>Edit Partner</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {editingItem && (
        <div className="fixed inset-0 z-50 bg-[#082F70]/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden border border-slate-200">
            <div className="p-5 bg-[#082F70] text-white flex items-center justify-between">
              <div>
                <span className="text-[10px] text-[#36A852] font-black uppercase tracking-wider">
                  Partner Details
                </span>
                <h3 className="text-base font-black">
                  {formName || 'New Partner'}
                </h3>
              </div>
              <button
                onClick={() => setEditingItem(null)}
                className="p-1 rounded-xl text-white/70 hover:text-white cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSave} className="p-5 space-y-3 max-h-[75vh] overflow-y-auto">
              {saveSuccess && (
                <div className="p-3 bg-emerald-50 text-emerald-800 text-xs rounded-xl flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>{saveSuccess}</span>
                </div>
              )}

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Partner / Organization Name *
                </label>
                <input
                  type="text"
                  value={formName}
                  onChange={(e) => setFormName(e.target.value)}
                  placeholder="e.g. Malabar Gold & Diamonds"
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Sponsorship Role / Category
                  </label>
                  <input
                    type="text"
                    value={formCategory}
                    onChange={(e) => setFormCategory(e.target.value)}
                    placeholder="e.g. Daily Morning Breakfast Sponsor"
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Branch / Location
                  </label>
                  <input
                    type="text"
                    value={formBranch}
                    onChange={(e) => setFormBranch(e.target.value)}
                    placeholder="e.g. Guntur Branch"
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Tagline / Subtitle
                </label>
                <input
                  type="text"
                  value={formTagline}
                  onChange={(e) => setFormTagline(e.target.value)}
                  placeholder="e.g. CSR Community Nourishment Partner"
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs"
                />
              </div>

              {/* Logo upload */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Partner Logo URL (Cloudinary or Direct)
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={formLogo}
                    onChange={(e) => setFormLogo(e.target.value)}
                    className="flex-1 px-3 py-2 rounded-xl border border-slate-200 text-xs"
                  />
                  <label className="px-3 py-2 bg-slate-100 rounded-xl text-xs font-bold cursor-pointer">
                    <Upload className="w-3.5 h-3.5 inline mr-1" />
                    <span>{uploading ? '...' : 'Upload'}</span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleLogoUpload}
                      className="hidden"
                    />
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Description of Support
                </label>
                <textarea
                  rows={3}
                  value={formDesc}
                  onChange={(e) => setFormDesc(e.target.value)}
                  placeholder="Details of their social contribution..."
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs"
                />
              </div>

              {/* Highlights */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Bullet Points
                </label>
                <div className="space-y-1 mb-2">
                  {formHighlights.map((h, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between text-xs bg-slate-50 p-2 rounded-lg"
                    >
                      <span>• {h}</span>
                      <button
                        type="button"
                        onClick={() =>
                          setFormHighlights(formHighlights.filter((_, idx) => idx !== i))
                        }
                        className="text-red-500 hover:text-red-700"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </div>
                  ))}
                </div>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={newHl}
                    onChange={(e) => setNewHl(e.target.value)}
                    placeholder="Add bullet highlight..."
                    className="flex-1 px-3 py-1.5 rounded-lg border border-slate-200 text-xs"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      if (newHl.trim()) {
                        setFormHighlights([...formHighlights, newHl.trim()]);
                        setNewHl('');
                      }
                    }}
                    className="px-3 py-1.5 bg-[#082F70] text-white text-xs font-bold rounded-lg"
                  >
                    Add
                  </button>
                </div>
              </div>

              <div className="pt-3 border-t flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setEditingItem(null)}
                  className="px-4 py-2 rounded-xl bg-slate-100 text-xs font-bold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-[#078B3B] text-white text-xs font-bold"
                >
                  Save Partner
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
