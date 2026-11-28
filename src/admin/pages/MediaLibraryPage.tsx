import React, { useEffect, useState } from 'react';
import {
  FolderOpen,
  Upload,
  Copy,
  Check,
  Trash2,
  ExternalLink,
  Search,
  Filter,
  Image as ImageIcon,
} from 'lucide-react';
import { CmsService, MediaItem } from '../../lib/cmsDataService';
import { uploadToCloudinary } from '../../lib/cloudinary';

export const MediaLibraryPage: React.FC = () => {
  const [media, setMedia] = useState<MediaItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [selectedFolder, setSelectedFolder] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    loadMedia();
  }, []);

  const loadMedia = async () => {
    setLoading(true);
    try {
      const data = await CmsService.getMediaLibrary();
      setMedia(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    try {
      const res = await uploadToCloudinary(file, 'general');
      await CmsService.addMediaItem({
        file_name: file.name,
        public_id: res.public_id,
        secure_url: res.secure_url,
        folder: 'general',
        width: res.width,
        height: res.height,
        format: res.format,
        bytes: res.bytes,
      });
      await loadMedia();
    } catch (err: any) {
      alert(err.message || 'Media upload failed');
    } finally {
      setUploading(false);
    }
  };

  const handleCopy = (url: string, id: string) => {
    navigator.clipboard.writeText(url);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm('Remove this media asset?')) return;
    try {
      await CmsService.deleteMediaItem(id);
      await loadMedia();
    } catch (err: any) {
      alert(err.message);
    }
  };

  const filteredMedia = media.filter((item) => {
    const matchFolder =
      selectedFolder === 'all' || item.folder === selectedFolder;
    const matchSearch =
      !searchQuery ||
      item.file_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.secure_url.toLowerCase().includes(searchQuery.toLowerCase());
    return matchFolder && matchSearch;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-[#078B3B] uppercase tracking-wider mb-1">
            <FolderOpen className="w-4 h-4" />
            <span>Digital Asset Storage & Optimization</span>
          </div>
          <h1 className="text-2xl font-black text-[#082F70]">
            Media Library ({media.length})
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Upload images, copy high-speed CDN URLs, and use across any page or banner.
          </p>
        </div>

        <label className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#078B3B] hover:bg-[#067331] text-white font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer self-start sm:self-auto">
          <Upload className="w-4 h-4" />
          <span>{uploading ? 'Uploading...' : 'Upload Asset'}</span>
          <input
            type="file"
            accept="image/*"
            onChange={handleUpload}
            disabled={uploading}
            className="hidden"
          />
        </label>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search assets by file name or URL..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-slate-200 text-xs focus:ring-2 focus:ring-[#078B3B]"
          />
        </div>

        <select
          value={selectedFolder}
          onChange={(e) => setSelectedFolder(e.target.value)}
          className="px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-xs font-semibold text-slate-700"
        >
          <option value="all">All Folders</option>
          <option value="prajwala/hero">Hero Banners</option>
          <option value="prajwala/sponsors">Sponsors</option>
          <option value="general">General</option>
        </select>
      </div>

      {/* Media Grid */}
      {loading ? (
        <div className="p-12 text-center bg-white rounded-2xl border border-slate-200 text-slate-500">
          Loading assets...
        </div>
      ) : filteredMedia.length === 0 ? (
        <div className="p-12 text-center bg-white rounded-2xl border border-slate-200 text-slate-500">
          No media items found. Click "Upload Asset" to upload an image.
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {filteredMedia.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-slate-200/90 shadow-xs overflow-hidden flex flex-col group hover:shadow-md transition-all"
            >
              <div className="relative h-32 bg-slate-100 overflow-hidden flex items-center justify-center">
                <img
                  src={item.secure_url}
                  alt={item.file_name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = '/assets/logo/pcds-logo.png';
                  }}
                />
              </div>

              <div className="p-2.5 flex-1 flex flex-col justify-between">
                <div>
                  <h4
                    className="font-bold text-slate-800 text-[11px] truncate"
                    title={item.file_name}
                  >
                    {item.file_name}
                  </h4>
                  <span className="text-[10px] text-slate-400 block truncate">
                    {item.folder}
                  </span>
                </div>

                <div className="mt-2.5 pt-2 border-t border-slate-100 flex items-center justify-between gap-1">
                  <button
                    onClick={() => handleCopy(item.secure_url, item.id)}
                    className="inline-flex items-center gap-1 px-2 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 text-[10px] font-bold rounded-lg cursor-pointer transition-colors"
                    title="Copy URL"
                  >
                    {copiedId === item.id ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-600" />
                        <span className="text-emerald-700">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Copy URL</span>
                      </>
                    )}
                  </button>

                  <button
                    onClick={() => handleDelete(item.id)}
                    className="p-1 rounded-lg text-red-500 hover:bg-red-50 cursor-pointer"
                    title="Delete"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
