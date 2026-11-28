import React, { useEffect, useState } from 'react';
import {
  Sparkles,
  Plus,
  Edit,
  Trash2,
  Save,
  X,
  Upload,
  CheckCircle2,
  ExternalLink,
  Layers,
  ArrowRight,
  ListPlus,
  Eye,
} from 'lucide-react';
import { CmsService } from '../../lib/cmsDataService';
import { ActivityItem } from '../../data/pcdsData';
import { uploadToCloudinary } from '../../lib/cloudinary';

export const ActivitiesManager: React.FC = () => {
  const [activities, setActivities] = useState<ActivityItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingItem, setEditingItem] = useState<ActivityItem | null>(null);
  const [isNew, setIsNew] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // Form fields
  const [formSlug, setFormSlug] = useState('');
  const [formTitle, setFormTitle] = useState('');
  const [formShortTitle, setFormShortTitle] = useState('');
  const [formCategory, setFormCategory] = useState('');
  const [formSummary, setFormSummary] = useState('');
  const [formImage, setFormImage] = useState('');
  const [formHighlights, setFormHighlights] = useState<string[]>([]);
  const [newHighlight, setNewHighlight] = useState('');
  const [formMetrics, setFormMetrics] = useState<{ label: string; value: string }[]>([]);
  const [newMetricLabel, setNewMetricLabel] = useState('');
  const [newMetricValue, setNewMetricValue] = useState('');
  const [formDesc, setFormDesc] = useState('');

  useEffect(() => {
    loadActivities();
  }, []);

  const loadActivities = async () => {
    setLoading(true);
    try {
      const data = await CmsService.getActivities();
      setActivities(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleOpenEdit = (act: ActivityItem, isCreating = false) => {
    setIsNew(isCreating);
    setEditingItem(act);
    setFormSlug(act.slug);
    setFormTitle(act.title);
    setFormShortTitle(act.shortTitle);
    setFormCategory(act.category);
    setFormSummary(act.summary);
    setFormImage(act.image);
    setFormHighlights([...(act.highlights || [])]);
    setFormMetrics([...(act.metrics || [])]);
    setFormDesc((act.fullDescription || []).join('\n\n'));
    setSaveSuccess(null);
    setErrorMsg(null);
  };

  const handleCreateNew = () => {
    const blank: ActivityItem = {
      slug: `activity-${Date.now()}`,
      title: '',
      shortTitle: '',
      category: 'Community Welfare',
      summary: '',
      fullDescription: [],
      image: '/assets/logo/pcds-logo.png',
      galleryImages: [],
      highlights: [],
      metrics: [],
    };
    handleOpenEdit(blank, true);
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    setErrorMsg(null);
    try {
      const res = await uploadToCloudinary(file, 'activities');
      setFormImage(res.secure_url);
    } catch (err: any) {
      setErrorMsg(err.message || 'Image upload failed. You can paste a direct image URL.');
    } finally {
      setUploading(false);
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formSlug.trim() || !formTitle.trim()) {
      setErrorMsg('Please enter a valid title and slug identifier.');
      return;
    }

    const itemToSave: ActivityItem = {
      slug: formSlug.trim().toLowerCase().replace(/[^a-z0-9-]/g, '-'),
      title: formTitle.trim(),
      shortTitle: formShortTitle.trim() || formTitle.trim(),
      category: formCategory.trim() || 'Community Welfare',
      summary: formSummary.trim(),
      image: formImage.trim() || '/assets/logo/pcds-logo.png',
      fullDescription: formDesc
        .split('\n\n')
        .map((p) => p.trim())
        .filter(Boolean),
      highlights: formHighlights,
      metrics: formMetrics,
      galleryImages: editingItem?.galleryImages || [],
    };

    try {
      await CmsService.saveActivity(itemToSave);
      setSaveSuccess(`Activity "${itemToSave.shortTitle}" saved successfully!`);
      await loadActivities();
      setTimeout(() => {
        setEditingItem(null);
        setSaveSuccess(null);
      }, 900);
    } catch (err: any) {
      setErrorMsg(err.message || 'Failed to save activity.');
    }
  };

  const handleDelete = async (slug: string, title: string) => {
    if (!window.confirm(`Are you sure you want to delete "${title}"?`)) return;
    try {
      await CmsService.deleteActivity(slug);
      await loadActivities();
    } catch (err: any) {
      alert('Delete failed: ' + err.message);
    }
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-[#078B3B] uppercase tracking-wider mb-1">
            <Sparkles className="w-4 h-4" />
            <span>Community Programs & Initiatives</span>
          </div>
          <h1 className="text-2xl font-black text-[#082F70]">
            Major Activities Management ({activities.length})
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Manage all 12 key program pillars including Sparsha Counselling, Old Age Home, Healthcare, and Women's Empowerment.
          </p>
        </div>

        <button
          onClick={handleCreateNew}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#078B3B] hover:bg-[#067331] text-white font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer self-start sm:self-auto"
        >
          <Plus className="w-4 h-4" />
          <span>Add New Activity</span>
        </button>
      </div>

      {/* Activities Grid */}
      {loading ? (
        <div className="p-12 text-center bg-white rounded-2xl border border-slate-200 text-slate-500">
          Loading activities from database...
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {activities.map((act, index) => (
            <div
              key={act.slug}
              className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden flex flex-col hover:shadow-md transition-all group"
            >
              {/* Image Preview */}
              <div className="relative h-44 bg-slate-100 overflow-hidden">
                <img
                  src={act.image}
                  alt={act.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = '/assets/logo/pcds-logo.png';
                  }}
                />
                <div className="absolute top-3 left-3 bg-[#082F70]/90 backdrop-blur-xs text-white text-[11px] font-bold px-2.5 py-1 rounded-full">
                  #{index + 1} • {act.category}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-extrabold text-[#082F70] text-base leading-snug line-clamp-2">
                    {act.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 line-clamp-3 leading-relaxed">
                    {act.summary}
                  </p>

                  {/* Badges / Metrics */}
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {(act.metrics || []).slice(0, 2).map((m, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-semibold bg-[#EDF8EF] text-[#078B3B] px-2 py-0.5 rounded-md"
                      >
                        {m.value} {m.label}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                  <a
                    href={`/activities/${act.slug}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-slate-500 hover:text-[#082F70]"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Public</span>
                  </a>

                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => handleOpenEdit(act, false)}
                      className="p-2 rounded-lg bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors cursor-pointer"
                      title="Edit Activity"
                    >
                      <Edit className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(act.slug, act.title)}
                      className="p-2 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 transition-colors cursor-pointer"
                      title="Delete Activity"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Edit / Create Modal */}
      {editingItem && (
        <div className="fixed inset-0 z-50 bg-[#082F70]/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl shadow-2xl max-w-3xl w-full my-8 overflow-hidden border border-slate-200">
            {/* Modal Header */}
            <div className="p-6 bg-[#082F70] text-white flex items-center justify-between">
              <div>
                <span className="text-xs text-[#36A852] font-black uppercase tracking-wider">
                  {isNew ? 'New Activity Initiative' : 'Edit Existing Activity'}
                </span>
                <h2 className="text-xl font-black mt-0.5">
                  {formShortTitle || formTitle || 'Activity Details'}
                </h2>
              </div>
              <button
                onClick={() => setEditingItem(null)}
                className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Form */}
            <form onSubmit={handleSave} className="p-6 space-y-5 max-h-[75vh] overflow-y-auto">
              {saveSuccess && (
                <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-800 text-xs flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>{saveSuccess}</span>
                </div>
              )}
              {errorMsg && (
                <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl text-rose-800 text-xs">
                  {errorMsg}
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Slug ID (URL path) *
                  </label>
                  <input
                    type="text"
                    value={formSlug}
                    onChange={(e) => setFormSlug(e.target.value)}
                    placeholder="e.g. sparsha-counselling"
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-[#078B3B]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Category Tag
                  </label>
                  <input
                    type="text"
                    value={formCategory}
                    onChange={(e) => setFormCategory(e.target.value)}
                    placeholder="e.g. Women & Youth Protection"
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-[#078B3B]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Full Activity Title *
                </label>
                <input
                  type="text"
                  value={formTitle}
                  onChange={(e) => setFormTitle(e.target.value)}
                  placeholder="e.g. Sparsha Counselling & Self-Defence for Adolescent Girls"
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-[#078B3B]"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Short Title (for navigation & badges)
                </label>
                <input
                  type="text"
                  value={formShortTitle}
                  onChange={(e) => setFormShortTitle(e.target.value)}
                  placeholder="e.g. Sparsha Counselling"
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-[#078B3B]"
                />
              </div>

              {/* Main Image & Cloudinary Upload */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Cover Image URL (Cloudinary or local)
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={formImage}
                    onChange={(e) => setFormImage(e.target.value)}
                    className="flex-1 px-3.5 py-2 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-[#078B3B]"
                    placeholder="https://res.cloudinary.com/... or /assets/..."
                  />
                  <label className="inline-flex items-center gap-1.5 px-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-semibold cursor-pointer border border-slate-200">
                    <Upload className="w-3.5 h-3.5" />
                    <span>{uploading ? 'Uploading...' : 'Upload'}</span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      disabled={uploading}
                      className="hidden"
                    />
                  </label>
                </div>
                {formImage && (
                  <div className="mt-2 h-24 w-40 rounded-xl overflow-hidden border border-slate-200 bg-slate-50">
                    <img
                      src={formImage}
                      alt="Cover preview"
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Short Summary
                </label>
                <textarea
                  rows={2}
                  value={formSummary}
                  onChange={(e) => setFormSummary(e.target.value)}
                  placeholder="Brief 1-2 sentence overview shown on overview cards..."
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-[#078B3B]"
                />
              </div>

              {/* Highlights List */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Key Highlights / Program Points
                </label>
                <div className="space-y-1.5 mb-2">
                  {formHighlights.map((hl, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between gap-2 px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs"
                    >
                      <span className="truncate flex-1">• {hl}</span>
                      <button
                        type="button"
                        onClick={() =>
                          setFormHighlights(formHighlights.filter((_, idx) => idx !== i))
                        }
                        className="text-red-500 hover:text-red-700"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ))}
                </div>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={newHighlight}
                    onChange={(e) => setNewHighlight(e.target.value)}
                    placeholder="Add bullet highlight..."
                    className="flex-1 px-3 py-1.5 rounded-lg border border-slate-200 text-xs"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      if (newHighlight.trim()) {
                        setFormHighlights([...formHighlights, newHighlight.trim()]);
                        setNewHighlight('');
                      }
                    }}
                    className="px-3 py-1.5 bg-[#082F70] text-white rounded-lg text-xs font-bold"
                  >
                    Add
                  </button>
                </div>
              </div>

              {/* Metrics */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Impact Numbers / Metrics (Value &amp; Label)
                </label>
                <div className="space-y-1.5 mb-2">
                  {formMetrics.map((m, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between gap-2 px-3 py-1.5 bg-emerald-50 border border-emerald-200 rounded-lg text-xs"
                    >
                      <span className="truncate flex-1 font-semibold text-emerald-900">
                        ✓ {m.value} — {m.label}
                      </span>
                      <button
                        type="button"
                        onClick={() => setFormMetrics(formMetrics.filter((_, idx) => idx !== i))}
                        className="text-red-500 hover:text-red-700"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ))}
                </div>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={newMetricValue}
                    onChange={(e) => setNewMetricValue(e.target.value)}
                    placeholder="Value (e.g. 5,000+)"
                    className="w-1/3 px-3 py-1.5 rounded-lg border border-slate-200 text-xs"
                  />
                  <input
                    type="text"
                    value={newMetricLabel}
                    onChange={(e) => setNewMetricLabel(e.target.value)}
                    placeholder="Label (e.g. Senior Citizens Assisted)"
                    className="flex-1 px-3 py-1.5 rounded-lg border border-slate-200 text-xs"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      if (newMetricLabel.trim() && newMetricValue.trim()) {
                        setFormMetrics([
                          ...formMetrics,
                          { label: newMetricLabel.trim(), value: newMetricValue.trim() },
                        ]);
                        setNewMetricLabel('');
                        setNewMetricValue('');
                      }
                    }}
                    className="px-3 py-1.5 bg-[#078B3B] text-white rounded-lg text-xs font-bold"
                  >
                    Add Metric
                  </button>
                </div>
              </div>

              {/* Detailed Description */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Full Page Description (separate paragraphs by blank line)
                </label>
                <textarea
                  rows={4}
                  value={formDesc}
                  onChange={(e) => setFormDesc(e.target.value)}
                  placeholder="Enter detailed paragraph content for the activity's dedicated page..."
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-[#078B3B]"
                />
              </div>

              {/* Footer Buttons */}
              <div className="pt-4 border-t border-slate-200 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setEditingItem(null)}
                  className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-[#078B3B] hover:bg-[#067331] text-white text-xs font-extrabold shadow-md cursor-pointer"
                >
                  <Save className="w-4 h-4" />
                  <span>Save Activity</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
