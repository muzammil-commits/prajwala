import React, { useEffect, useState } from 'react';
import {
  Image as ImageIcon,
  Plus,
  Trash2,
  Edit,
  Save,
  X,
  Upload,
  CheckCircle2,
  Filter,
  Eye,
  Sparkles,
} from 'lucide-react';
import { CmsService } from '../../lib/cmsDataService';
import { GalleryItem } from '../../data/pcdsData';
import { uploadToCloudinary } from '../../lib/cloudinary';

const CATEGORIES = [
  'All',
  'Old Age Home',
  'Women & Youth',
  'Health & Camps',
  'Environment',
  'Sports & Relief',
];

export const GalleryManager: React.FC = () => {
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [editingItem, setEditingItem] = useState<GalleryItem | null>(null);
  const [isNew, setIsNew] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // Form states
  const [formTitle, setFormTitle] = useState('');
  const [formCategory, setFormCategory] = useState('Old Age Home');
  const [formImage, setFormImage] = useState('');
  const [formCaption, setFormCaption] = useState('');

  useEffect(() => {
    loadGallery();
  }, []);

  const loadGallery = async () => {
    setLoading(true);
    try {
      const data = await CmsService.getGalleryItems();
      setItems(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleOpenEdit = (item: GalleryItem, isCreating = false) => {
    setIsNew(isCreating);
    setEditingItem(item);
    setFormTitle(item.title);
    setFormCategory(item.category || 'Old Age Home');
    setFormImage(item.image);
    setFormCaption(item.caption || '');
    setSaveSuccess(null);
    setErrorMsg(null);
  };

  const handleCreateNew = () => {
    const blank: GalleryItem = {
      id: `gallery-${Date.now()}`,
      title: '',
      category: selectedCategory !== 'All' ? selectedCategory : 'Old Age Home',
      image: '',
      caption: '',
    };
    handleOpenEdit(blank, true);
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    setErrorMsg(null);
    try {
      const res = await uploadToCloudinary(file, 'gallery');
      setFormImage(res.secure_url);
    } catch (err: any) {
      setErrorMsg(err.message || 'Image upload failed. You can paste a direct URL.');
    } finally {
      setUploading(false);
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formTitle.trim() || !formImage.trim()) {
      setErrorMsg('Title and Image URL are required.');
      return;
    }

    const payload: GalleryItem = {
      id: editingItem?.id || `gallery-${Date.now()}`,
      title: formTitle.trim(),
      category: formCategory,
      image: formImage.trim(),
      caption: formCaption.trim(),
    };

    try {
      await CmsService.saveGalleryItem(payload);
      setSaveSuccess('Gallery item saved successfully!');
      await loadGallery();
      setTimeout(() => {
        setEditingItem(null);
        setSaveSuccess(null);
      }, 800);
    } catch (err: any) {
      setErrorMsg(err.message || 'Failed to save item.');
    }
  };

  const handleDelete = async (id: string, title: string) => {
    if (!window.confirm(`Delete photo "${title}" from gallery?`)) return;
    try {
      await CmsService.deleteGalleryItem(id);
      await loadGallery();
    } catch (err: any) {
      alert('Delete failed: ' + err.message);
    }
  };

  const filteredItems =
    selectedCategory === 'All'
      ? items
      : items.filter((item) => item.category === selectedCategory);

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-[#078B3B] uppercase tracking-wider mb-1">
            <ImageIcon className="w-4 h-4" />
            <span>Visual Archives & Field Impact</span>
          </div>
          <h1 className="text-2xl font-black text-[#082F70]">
            Photo Gallery Management ({items.length})
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Upload and organize photographs of events, elder care, medical camps, tree plantations, and community support.
          </p>
        </div>

        <button
          onClick={handleCreateNew}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#078B3B] hover:bg-[#067331] text-white font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer self-start sm:self-auto"
        >
          <Plus className="w-4 h-4" />
          <span>Upload New Photo</span>
        </button>
      </div>

      {/* Category Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
        {CATEGORIES.map((cat) => {
          const count =
            cat === 'All'
              ? items.length
              : items.filter((i) => i.category === cat).length;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#082F70] text-white shadow-sm'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat} ({count})
            </button>
          );
        })}
      </div>

      {/* Gallery Items Grid */}
      {loading ? (
        <div className="p-12 text-center bg-white rounded-2xl border border-slate-200 text-slate-500">
          Loading gallery items...
        </div>
      ) : filteredItems.length === 0 ? (
        <div className="p-12 text-center bg-white rounded-2xl border border-slate-200 text-slate-500">
          No photos found in "{selectedCategory}". Click "Upload New Photo" to add one.
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-slate-200/90 shadow-xs overflow-hidden flex flex-col group hover:shadow-md transition-all"
            >
              <div className="relative h-40 bg-slate-100 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = '/assets/logo/pcds-logo.png';
                  }}
                />
                <span className="absolute top-2 left-2 bg-[#082F70]/90 text-white text-[9px] font-bold px-2 py-0.5 rounded-full backdrop-blur-xs">
                  {item.category}
                </span>
              </div>

              <div className="p-3 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="font-bold text-slate-800 text-xs truncate" title={item.title}>
                    {item.title}
                  </h4>
                  {item.caption && (
                    <p className="text-[11px] text-slate-500 truncate mt-0.5" title={item.caption}>
                      {item.caption}
                    </p>
                  )}
                </div>

                <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => handleOpenEdit(item, false)}
                    className="p-1.5 rounded-lg text-blue-600 hover:bg-blue-50 cursor-pointer"
                    title="Edit Photo"
                  >
                    <Edit className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => handleDelete(item.id, item.title)}
                    className="p-1.5 rounded-lg text-red-600 hover:bg-red-50 cursor-pointer"
                    title="Delete Photo"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Upload / Edit Modal */}
      {editingItem && (
        <div className="fixed inset-0 z-50 bg-[#082F70]/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden border border-slate-200">
            <div className="p-5 bg-[#082F70] text-white flex items-center justify-between">
              <div>
                <span className="text-[10px] text-[#36A852] font-black uppercase tracking-wider">
                  {isNew ? 'New Gallery Upload' : 'Edit Gallery Item'}
                </span>
                <h3 className="text-base font-black">
                  {formTitle || 'Photo Details'}
                </h3>
              </div>
              <button
                onClick={() => setEditingItem(null)}
                className="p-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSave} className="p-5 space-y-4">
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

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Photo Title *
                </label>
                <input
                  type="text"
                  value={formTitle}
                  onChange={(e) => setFormTitle(e.target.value)}
                  placeholder="e.g. Free Medical Camp - Sangadigunta"
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-[#078B3B]"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Category *
                </label>
                <select
                  value={formCategory}
                  onChange={(e) => setFormCategory(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-[#078B3B]"
                >
                  <option value="Old Age Home">Old Age Home</option>
                  <option value="Women & Youth">Women & Youth</option>
                  <option value="Health & Camps">Health & Camps</option>
                  <option value="Environment">Environment</option>
                  <option value="Sports & Relief">Sports & Relief</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Image Source (Cloudinary or Direct URL) *
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={formImage}
                    onChange={(e) => setFormImage(e.target.value)}
                    placeholder="https://res.cloudinary.com/... or /assets/..."
                    className="flex-1 px-3 py-2 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-[#078B3B]"
                    required
                  />
                  <label className="inline-flex items-center gap-1.5 px-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-semibold cursor-pointer border border-slate-200">
                    <Upload className="w-3.5 h-3.5" />
                    <span>{uploading ? '...' : 'Upload'}</span>
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
                  <div className="mt-2 h-32 rounded-xl overflow-hidden border border-slate-200 bg-slate-50">
                    <img
                      src={formImage}
                      alt="Preview"
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Caption / Description
                </label>
                <textarea
                  rows={2}
                  value={formCaption}
                  onChange={(e) => setFormCaption(e.target.value)}
                  placeholder="Optional detail about this event or initiative..."
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-[#078B3B]"
                />
              </div>

              <div className="pt-3 border-t border-slate-200 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setEditingItem(null)}
                  className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#078B3B] hover:bg-[#067331] text-white text-xs font-bold shadow-md cursor-pointer"
                >
                  <Save className="w-4 h-4" />
                  <span>Save to Gallery</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
