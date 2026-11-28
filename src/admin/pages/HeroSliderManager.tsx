import React, { useState, useEffect } from 'react';
import {
  Plus,
  Edit2,
  Trash2,
  ArrowUp,
  ArrowDown,
  Upload,
  Check,
  X,
  Eye,
  Loader2,
  AlertCircle,
  Sliders,
} from 'lucide-react';
import { CmsService, HeroSlideRecord } from '../../lib/cmsDataService';
import { uploadToCloudinary } from '../../lib/cloudinary';

export const HeroSliderManager: React.FC = () => {
  const [slides, setSlides] = useState<HeroSlideRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingSlide, setEditingSlide] = useState<Partial<HeroSlideRecord> | null>(null);
  const [uploadingDesktop, setUploadingDesktop] = useState(false);
  const [uploadingMobile, setUploadingMobile] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const fetchSlides = async () => {
    setLoading(true);
    const data = await CmsService.getAllHeroSlides();
    setSlides(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchSlides();
  }, []);

  const handleCreateNew = () => {
    setEditingSlide({
      id: `hero-${Date.now()}`,
      eyebrow: 'Together for a Better Tomorrow',
      title: 'New Hero Slide Title',
      badge: 'Guntur • Social Impact',
      tagline: 'Serving Humanity with Dignity',
      motto: 'SERVE • EMPOWER • TRANSFORM',
      description: 'Describe the initiative and impact of this hero highlight.',
      desktop_bg: '/assets/backgrounds/hero-desktop.png',
      mobile_bg: '/assets/backgrounds/hero-mobile.png',
      alt: 'Prajwala Community Welfare Initiative',
      display_order: slides.length + 1,
      is_active: true,
    });
    setErrorMsg(null);
  };

  const handleEdit = (slide: HeroSlideRecord) => {
    setEditingSlide({ ...slide });
    setErrorMsg(null);
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this hero slide?')) {
      await CmsService.deleteHeroSlide(id);
      fetchSlides();
    }
  };

  const handleUploadDesktop = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploadingDesktop(true);
    setErrorMsg(null);
    try {
      const res = await uploadToCloudinary(file, 'prajwala/hero');
      setEditingSlide((prev) => (prev ? { ...prev, desktop_bg: res.secure_url } : null));
    } catch (err: any) {
      setErrorMsg(err.message || 'Image upload failed. You can also paste an image URL directly.');
    } finally {
      setUploadingDesktop(false);
    }
  };

  const handleUploadMobile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploadingMobile(true);
    setErrorMsg(null);
    try {
      const res = await uploadToCloudinary(file, 'prajwala/hero');
      setEditingSlide((prev) => (prev ? { ...prev, mobile_bg: res.secure_url } : null));
    } catch (err: any) {
      setErrorMsg(err.message || 'Image upload failed.');
    } finally {
      setUploadingMobile(false);
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingSlide || !editingSlide.title) {
      setErrorMsg('Slide title is required.');
      return;
    }

    try {
      await CmsService.saveHeroSlide(editingSlide);
      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 2500);
      setEditingSlide(null);
      fetchSlides();
    } catch (err: any) {
      setErrorMsg(err.message || 'Failed to save slide.');
    }
  };

  const handleMoveOrder = async (index: number, direction: 'up' | 'down') => {
    const targetIdx = direction === 'up' ? index - 1 : index + 1;
    if (targetIdx < 0 || targetIdx >= slides.length) return;

    const newSlides = [...slides];
    const temp = newSlides[index];
    newSlides[index] = newSlides[targetIdx];
    newSlides[targetIdx] = temp;

    // Update orders
    for (let i = 0; i < newSlides.length; i++) {
      newSlides[i].display_order = i + 1;
      await CmsService.saveHeroSlide(newSlides[i]);
    }
    setSlides(newSlides);
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
        <div>
          <h2 className="text-xl sm:text-2xl font-black text-[#082F70] tracking-tight">
            Hero Slider Management
          </h2>
          <p className="text-xs sm:text-sm text-slate-500">
            Control the automatic rotating hero slider on the homepage. Edit typography, change background artwork, and reorder slides.
          </p>
        </div>

        <button
          onClick={handleCreateNew}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#082F70] hover:bg-[#0753A6] text-white text-xs sm:text-sm font-bold shadow-sm transition-all cursor-pointer self-start sm:self-auto"
        >
          <Plus className="w-4 h-4" />
          <span>Add New Slide</span>
        </button>
      </div>

      {saveSuccess && (
        <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm font-bold flex items-center gap-2">
          <Check className="w-4 h-4 text-emerald-600" />
          <span>Hero slide saved successfully and updated on the live website!</span>
        </div>
      )}

      {/* Slide Cards List */}
      {loading ? (
        <div className="flex items-center justify-center p-12">
          <Loader2 className="w-8 h-8 text-[#082F70] animate-spin" />
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {slides.map((slide, idx) => (
            <div
              key={slide.id}
              className={`bg-white rounded-3xl overflow-hidden shadow-sm border transition-all flex flex-col justify-between ${
                slide.is_active ? 'border-slate-200 hover:shadow-md' : 'border-slate-200 opacity-60'
              }`}
            >
              {/* Image Preview */}
              <div className="relative aspect-[16/9] bg-slate-100 overflow-hidden">
                <img
                  src={slide.desktop_bg}
                  alt={slide.alt || slide.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute top-3 left-3 flex items-center gap-1.5">
                  <span className="px-2.5 py-1 rounded-full bg-[#082F70] text-white text-[10px] font-extrabold uppercase shadow">
                    Slide #{idx + 1}
                  </span>
                  {!slide.is_active && (
                    <span className="px-2 py-1 rounded-full bg-amber-500 text-white text-[10px] font-bold">
                      Inactive
                    </span>
                  )}
                </div>
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <div className="text-[11px] font-bold text-[#36A852]">{slide.eyebrow}</div>
                  <div className="text-sm font-black line-clamp-1">{slide.title}</div>
                </div>
              </div>

              {/* Details Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-2">
                  <div className="inline-block px-2.5 py-0.5 rounded-full bg-[#EDF8EF] text-[#078B3B] text-xs font-bold">
                    {slide.badge}
                  </div>
                  <div className="text-xs font-bold text-[#082F70] line-clamp-1">{slide.tagline}</div>
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {slide.description}
                  </p>
                </div>

                {/* Actions */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => handleMoveOrder(idx, 'up')}
                      disabled={idx === 0}
                      className="p-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-600 disabled:opacity-30 cursor-pointer"
                      title="Move slide earlier"
                    >
                      <ArrowUp className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => handleMoveOrder(idx, 'down')}
                      disabled={idx === slides.length - 1}
                      className="p-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-600 disabled:opacity-30 cursor-pointer"
                      title="Move slide later"
                    >
                      <ArrowDown className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleEdit(slide)}
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-blue-50 text-[#0753A6] text-xs font-bold hover:bg-blue-100 transition-colors cursor-pointer"
                    >
                      <Edit2 className="w-3.5 h-3.5" />
                      <span>Edit</span>
                    </button>
                    <button
                      onClick={() => handleDelete(slide.id)}
                      className="p-1.5 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 transition-colors cursor-pointer"
                      title="Delete slide"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Edit / Create Slide Modal */}
      {editingSlide && (
        <div className="fixed inset-0 z-50 bg-[#082F70]/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full p-6 sm:p-8 my-8 border border-slate-200 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <h3 className="text-lg font-black text-[#082F70]">
                {editingSlide.id?.startsWith('hero-') && slides.some((s) => s.id === editingSlide.id)
                  ? 'Edit Hero Slide'
                  : 'Add New Hero Slide'}
              </h3>
              <button
                onClick={() => setEditingSlide(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {errorMsg && (
              <div className="mt-4 p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-start gap-2">
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                <span>{errorMsg}</span>
              </div>
            )}

            <form onSubmit={handleSave} className="mt-6 space-y-4">
              <div>
                <label className="block text-xs font-bold text-[#082F70] uppercase mb-1">
                  Eyebrow Heading
                </label>
                <input
                  type="text"
                  value={editingSlide.eyebrow || ''}
                  onChange={(e) =>
                    setEditingSlide({ ...editingSlide, eyebrow: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-[#078B3B] focus:outline-none"
                  placeholder="e.g. Dignity & Care for Senior Citizens"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#082F70] uppercase mb-1">
                  Main Title
                </label>
                <input
                  type="text"
                  value={editingSlide.title || ''}
                  onChange={(e) =>
                    setEditingSlide({ ...editingSlide, title: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-[#078B3B] focus:outline-none"
                  placeholder="e.g. PCDS Old Age Home & Community Healthcare"
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#082F70] uppercase mb-1">
                    Green Badge Text
                  </label>
                  <input
                    type="text"
                    value={editingSlide.badge || ''}
                    onChange={(e) =>
                      setEditingSlide({ ...editingSlide, badge: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-[#078B3B] focus:outline-none"
                    placeholder="e.g. 25 Residents • 46+ Supported"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#082F70] uppercase mb-1">
                    Three-Word Motto
                  </label>
                  <input
                    type="text"
                    value={editingSlide.motto || ''}
                    onChange={(e) =>
                      setEditingSlide({ ...editingSlide, motto: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-[#078B3B] focus:outline-none"
                    placeholder="e.g. CARE • RESPECT • BELONGING"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#082F70] uppercase mb-1">
                  Subtitle / Tagline
                </label>
                <input
                  type="text"
                  value={editingSlide.tagline || ''}
                  onChange={(e) =>
                    setEditingSlide({ ...editingSlide, tagline: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-[#078B3B] focus:outline-none"
                  placeholder="e.g. Safe Shelter, Nutritious Food, Medical Care"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#082F70] uppercase mb-1">
                  Slide Description
                </label>
                <textarea
                  rows={3}
                  value={editingSlide.description || ''}
                  onChange={(e) =>
                    setEditingSlide({ ...editingSlide, description: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-[#078B3B] focus:outline-none"
                  placeholder="Detail the services and community achievements shown in this slide..."
                />
              </div>

              {/* Desktop Image Upload & URL */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold text-[#082F70] uppercase">
                    Desktop Hero Background Image
                  </label>
                  <label className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#082F70] hover:bg-[#0753A6] text-white text-xs font-bold cursor-pointer">
                    {uploadingDesktop ? (
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                    ) : (
                      <Upload className="w-3.5 h-3.5" />
                    )}
                    <span>{uploadingDesktop ? 'Uploading...' : 'Upload to Cloudinary'}</span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleUploadDesktop}
                      disabled={uploadingDesktop}
                      className="hidden"
                    />
                  </label>
                </div>
                <input
                  type="text"
                  value={editingSlide.desktop_bg || ''}
                  onChange={(e) =>
                    setEditingSlide({ ...editingSlide, desktop_bg: e.target.value })
                  }
                  className="w-full px-3.5 py-2 rounded-lg border border-slate-200 text-xs font-mono bg-white"
                  placeholder="/assets/backgrounds/... or https://res.cloudinary.com/..."
                />
                {editingSlide.desktop_bg && (
                  <div className="relative aspect-[16/6] rounded-xl overflow-hidden border border-slate-200">
                    <img
                      src={editingSlide.desktop_bg}
                      alt="Desktop Preview"
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
              </div>

              {/* Mobile Image Upload & URL */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold text-[#082F70] uppercase">
                    Mobile Hero Background Image (Optional)
                  </label>
                  <label className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#078B3B] hover:bg-[#36A852] text-white text-xs font-bold cursor-pointer">
                    {uploadingMobile ? (
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                    ) : (
                      <Upload className="w-3.5 h-3.5" />
                    )}
                    <span>{uploadingMobile ? 'Uploading...' : 'Upload Mobile Image'}</span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleUploadMobile}
                      disabled={uploadingMobile}
                      className="hidden"
                    />
                  </label>
                </div>
                <input
                  type="text"
                  value={editingSlide.mobile_bg || ''}
                  onChange={(e) =>
                    setEditingSlide({ ...editingSlide, mobile_bg: e.target.value })
                  }
                  className="w-full px-3.5 py-2 rounded-lg border border-slate-200 text-xs font-mono bg-white"
                  placeholder="/assets/backgrounds/... or https://res.cloudinary.com/..."
                />
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="slideActive"
                  checked={editingSlide.is_active ?? true}
                  onChange={(e) =>
                    setEditingSlide({ ...editingSlide, is_active: e.target.checked })
                  }
                  className="w-4 h-4 rounded text-[#078B3B] focus:ring-[#078B3B]"
                />
                <label htmlFor="slideActive" className="text-xs font-bold text-[#082F70] cursor-pointer">
                  Slide is Active and visible on live homepage
                </label>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setEditingSlide(null)}
                  className="px-5 py-2.5 rounded-xl border border-slate-200 text-slate-600 font-bold text-xs hover:bg-slate-50 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-[#082F70] hover:bg-[#0753A6] text-white font-extrabold text-xs shadow-md transition-all cursor-pointer"
                >
                  Save Hero Slide
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
