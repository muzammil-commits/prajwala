import React, { useEffect, useState } from 'react';
import {
  BarChart3,
  Edit,
  Save,
  X,
  CheckCircle2,
  TrendingUp,
  Award,
  Users,
  Heart,
  Shield,
  Activity,
  Trees,
} from 'lucide-react';
import { CmsService } from '../../lib/cmsDataService';
import { ImpactMetric } from '../../data/pcdsData';

export const ImpactStatsManager: React.FC = () => {
  const [metrics, setMetrics] = useState<ImpactMetric[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingItem, setEditingItem] = useState<ImpactMetric | null>(null);
  const [saveSuccess, setSaveSuccess] = useState<string | null>(null);

  useEffect(() => {
    loadMetrics();
  }, []);

  const loadMetrics = async () => {
    setLoading(true);
    try {
      const data = await CmsService.getImpactMetrics();
      setMetrics(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingItem) return;
    try {
      await CmsService.saveImpactMetric(editingItem);
      setSaveSuccess(`Metric "${editingItem.label}" updated!`);
      await loadMetrics();
      setTimeout(() => {
        setEditingItem(null);
        setSaveSuccess(null);
      }, 700);
    } catch (err: any) {
      alert(err.message);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm">
        <div className="flex items-center gap-2 text-xs font-bold text-[#078B3B] uppercase tracking-wider mb-1">
          <BarChart3 className="w-4 h-4" />
          <span>Verifiable Social Impact Indicators</span>
        </div>
        <h1 className="text-2xl font-black text-[#082F70]">
          Impact Statistics Management ({metrics.length})
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          Update the verified metric counters displayed across the homepage and impact reports.
        </p>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((m) => (
          <div
            key={m.id}
            className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-xs flex flex-col justify-between hover:shadow-md transition-all group"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  ID #{m.id}
                </span>
                <span className="p-2 rounded-xl bg-[#EDF8EF] text-[#078B3B]">
                  <TrendingUp className="w-4 h-4" />
                </span>
              </div>

              <div className="mt-3">
                <div className="text-3xl font-black text-[#082F70] tracking-tight">
                  {m.number}
                  <span className="text-[#078B3B]">{m.suffix}</span>
                </div>
                <h4 className="font-extrabold text-slate-800 text-sm mt-1">
                  {m.label}
                </h4>
                <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                  {m.detail}
                </p>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
              <span className="text-[11px] text-slate-400 font-mono">
                icon: {m.iconName}
              </span>
              <button
                onClick={() => setEditingItem({ ...m })}
                className="p-1.5 rounded-lg text-blue-600 hover:bg-blue-50 cursor-pointer"
                title="Edit Metric"
              >
                <Edit className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Edit Modal */}
      {editingItem && (
        <div className="fixed inset-0 z-50 bg-[#082F70]/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden border border-slate-200">
            <div className="p-5 bg-[#082F70] text-white flex items-center justify-between">
              <h3 className="font-bold text-sm">Edit Impact Metric</h3>
              <button
                onClick={() => setEditingItem(null)}
                className="p-1 rounded-lg text-white/70 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSave} className="p-5 space-y-3">
              {saveSuccess && (
                <div className="p-2.5 bg-emerald-50 text-emerald-800 text-xs rounded-xl flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>{saveSuccess}</span>
                </div>
              )}

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Number *
                  </label>
                  <input
                    type="number"
                    value={editingItem.number}
                    onChange={(e) =>
                      setEditingItem({
                        ...editingItem,
                        number: Number(e.target.value) || 0,
                      })
                    }
                    placeholder="e.g. 5000"
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Suffix
                  </label>
                  <input
                    type="text"
                    value={editingItem.suffix}
                    onChange={(e) =>
                      setEditingItem({ ...editingItem, suffix: e.target.value })
                    }
                    placeholder="e.g. +"
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Metric Label *
                </label>
                <input
                  type="text"
                  value={editingItem.label}
                  onChange={(e) =>
                    setEditingItem({ ...editingItem, label: e.target.value })
                  }
                  placeholder="e.g. Elderly & Vulnerable Supported"
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Supporting Detail / Description
                </label>
                <textarea
                  rows={2}
                  value={editingItem.detail}
                  onChange={(e) =>
                    setEditingItem({ ...editingItem, detail: e.target.value })
                  }
                  placeholder="Brief context..."
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs"
                />
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
                  Save Metric
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
