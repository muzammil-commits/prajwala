import React, { useEffect, useState } from 'react';
import {
  Mail,
  CheckCircle2,
  Clock,
  Trash2,
  Phone,
  Calendar,
  User,
  MessageSquare,
  AlertCircle,
  ExternalLink,
} from 'lucide-react';
import { CmsService, ContactSubmission } from '../../lib/cmsDataService';

export const SubmissionsManager: React.FC = () => {
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<'all' | 'pending' | 'resolved'>('all');
  const [selectedSub, setSelectedSub] = useState<ContactSubmission | null>(null);

  useEffect(() => {
    loadSubmissions();
  }, []);

  const loadSubmissions = async () => {
    setLoading(true);
    try {
      const data = await CmsService.getContactSubmissions();
      setSubmissions(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = async (
    id: string,
    status: 'pending' | 'read' | 'resolved'
  ) => {
    try {
      await CmsService.updateSubmissionStatus(id, status);
      await loadSubmissions();
      if (selectedSub?.id === id) {
        setSelectedSub({ ...selectedSub, status });
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm('Delete this message entry?')) return;
    try {
      await CmsService.deleteSubmission(id);
      await loadSubmissions();
      if (selectedSub?.id === id) setSelectedSub(null);
    } catch (err: any) {
      alert(err.message);
    }
  };

  const filtered = submissions.filter((s) => {
    if (filter === 'all') return true;
    return s.status === filter;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-[#078B3B] uppercase tracking-wider mb-1">
            <Mail className="w-4 h-4" />
            <span>Citizen & Donor Enquiries</span>
          </div>
          <h1 className="text-2xl font-black text-[#082F70]">
            Contact & Volunteer Submissions ({submissions.length})
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Review incoming inquiries, volunteer registration applications, and citizen support requests.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex items-center gap-1.5 bg-slate-100 p-1.5 rounded-2xl border border-slate-200">
          <button
            onClick={() => setFilter('all')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              filter === 'all'
                ? 'bg-white text-[#082F70] shadow-sm font-extrabold'
                : 'text-slate-600 hover:text-[#082F70]'
            }`}
          >
            All ({submissions.length})
          </button>
          <button
            onClick={() => setFilter('pending')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              filter === 'pending'
                ? 'bg-amber-500 text-white shadow-sm font-extrabold'
                : 'text-slate-600 hover:text-amber-700'
            }`}
          >
            Pending ({submissions.filter((s) => s.status === 'pending').length})
          </button>
          <button
            onClick={() => setFilter('resolved')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              filter === 'resolved'
                ? 'bg-[#078B3B] text-white shadow-sm font-extrabold'
                : 'text-slate-600 hover:text-[#078B3B]'
            }`}
          >
            Resolved ({submissions.filter((s) => s.status === 'resolved').length})
          </button>
        </div>
      </div>

      {/* Content Layout */}
      {loading ? (
        <div className="p-12 text-center bg-white rounded-2xl border border-slate-200 text-slate-500">
          Loading contact submissions...
        </div>
      ) : filtered.length === 0 ? (
        <div className="p-12 text-center bg-white rounded-2xl border border-slate-200 text-slate-500">
          No submissions found under this filter.
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Submissions List */}
          <div className="lg:col-span-2 space-y-3">
            {filtered.map((sub) => (
              <div
                key={sub.id}
                onClick={() => setSelectedSub(sub)}
                className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                  selectedSub?.id === sub.id
                    ? 'bg-[#EDF8EF] border-[#078B3B] shadow-sm'
                    : 'bg-white border-slate-200/90 hover:border-slate-300'
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-full bg-[#082F70] text-white font-black flex items-center justify-center text-xs shrink-0">
                      {sub.name.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <h4 className="font-extrabold text-[#082F70] text-sm">
                        {sub.name}
                      </h4>
                      <div className="flex items-center gap-2 text-xs text-slate-500">
                        <span>{sub.email}</span>
                        {sub.phone && <span>• {sub.phone}</span>}
                      </div>
                    </div>
                  </div>

                  <span
                    className={`text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                      sub.status === 'resolved'
                        ? 'bg-emerald-100 text-emerald-800'
                        : sub.status === 'read'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-amber-100 text-amber-800'
                    }`}
                  >
                    {sub.status}
                  </span>
                </div>

                <div className="mt-3 text-xs text-slate-700 line-clamp-2">
                  <span className="font-bold text-slate-900">
                    {sub.subject ? `${sub.subject}: ` : ''}
                  </span>
                  {sub.message}
                </div>

                <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{new Date(sub.created_at).toLocaleString()}</span>
                  </span>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDelete(sub.id);
                    }}
                    className="p-1 rounded-md text-red-500 hover:bg-red-50"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Detail Pane */}
          <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 lg:sticky lg:top-24 h-fit">
            {selectedSub ? (
              <div className="space-y-4">
                <div className="border-b border-slate-100 pb-4">
                  <span
                    className={`text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                      selectedSub.status === 'resolved'
                        ? 'bg-emerald-100 text-emerald-800'
                        : selectedSub.status === 'read'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-amber-100 text-amber-800'
                    }`}
                  >
                    {selectedSub.status}
                  </span>
                  <h3 className="text-lg font-black text-[#082F70] mt-2">
                    {selectedSub.name}
                  </h3>
                  <div className="text-xs text-slate-500 mt-1 space-y-0.5">
                    <div>Email: <a href={`mailto:${selectedSub.email}`} className="text-blue-600 underline">{selectedSub.email}</a></div>
                    {selectedSub.phone && <div>Phone: <a href={`tel:${selectedSub.phone}`} className="text-blue-600 underline">{selectedSub.phone}</a></div>}
                    <div>Date: {new Date(selectedSub.created_at).toLocaleString()}</div>
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                    Subject
                  </h4>
                  <p className="text-xs font-bold text-slate-800">
                    {selectedSub.subject || 'General Enquiry / Support'}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                    Message
                  </h4>
                  <p className="text-xs text-slate-700 leading-relaxed bg-slate-50 p-3.5 rounded-xl border border-slate-100 whitespace-pre-wrap">
                    {selectedSub.message}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex flex-col gap-2">
                  <a
                    href={`mailto:${selectedSub.email}?subject=Reply from Prajwala Community Development Society`}
                    className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-[#082F70] hover:bg-[#062456] text-white text-xs font-bold"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Reply via Email</span>
                  </a>

                  {selectedSub.status !== 'resolved' ? (
                    <button
                      onClick={() => handleStatusChange(selectedSub.id, 'resolved')}
                      className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-[#078B3B] hover:bg-[#067331] text-white text-xs font-bold cursor-pointer"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Mark as Resolved</span>
                    </button>
                  ) : (
                    <button
                      onClick={() => handleStatusChange(selectedSub.id, 'pending')}
                      className="w-full inline-flex items-center justify-center gap-1.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold cursor-pointer"
                    >
                      <span>Mark as Pending</span>
                    </button>
                  )}
                </div>
              </div>
            ) : (
              <div className="text-center py-12 text-slate-400 text-xs">
                Select a message on the left to read its complete details and reply.
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
