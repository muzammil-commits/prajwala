import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  X,
  Copy,
  Check,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Heart,
  CheckCircle2,
  Building2,
  CreditCard,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { ORG_INFO, GalleryItem } from '../data/pcdsData';

export interface PreviewModalData {
  title: string;
  category?: string;
  image?: string;
  description: string;
  bullets?: string[];
  metrics?: { label: string; value: string }[];
  route: string;
  routeLabel?: string;
}

export const DonateModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose,
}) => {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, onClose]);

  const copyText = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(label);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#082F70]/70 backdrop-blur-sm p-4"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-labelledby="donate-modal-title"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 12 }}
            transition={{ duration: 0.25 }}
            className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-[#082F70]/15 max-h-[92vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-gradient-to-r from-[#082F70] to-[#078B3B] text-white px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <Heart className="w-5 h-5 text-[#FFE082] fill-[#FFE082]" />
                <h2 id="donate-modal-title" className="text-lg sm:text-xl font-bold">
                  Support Prajwala Community Development Society
                </h2>
              </div>
              <button
                onClick={onClose}
                aria-label="Close donation popup"
                className="p-1.5 rounded-full hover:bg-white/20 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div className="flex flex-col items-center text-center bg-[#F3F8FC] p-4 rounded-xl border border-[#0753A6]/15">
                <img
                  src="/assets/donation/donation-qr.png"
                  alt="PCDS Official BHIM UPI QR Code"
                  className="w-48 h-auto rounded-lg shadow-sm bg-white p-1"
                />
                <p className="mt-3 text-xs font-semibold text-[#082F70]">Scan &amp; Support Our Mission</p>
                <div className="mt-2 flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-slate-200">
                  <span className="text-xs font-mono font-semibold text-[#14294A]">
                    {ORG_INFO.bank.upiId}
                  </span>
                  <button
                    onClick={() => copyText(ORG_INFO.bank.upiId, 'upi')}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#078B3B] hover:text-[#082F70] cursor-pointer"
                  >
                    {copiedField === 'upi' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    {copiedField === 'upi' ? 'Copied' : 'Copy UPI'}
                  </button>
                </div>
              </div>

              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2 text-[#082F70] font-bold text-base">
                  <Building2 className="w-4 h-4 text-[#078B3B]" />
                  <span>Direct Bank Transfer Details</span>
                </div>
                <div className="bg-[#EDF8EF] border border-[#078B3B]/20 rounded-xl p-4 space-y-2 text-xs sm:text-sm">
                  <div>
                    <span className="text-[#63738B] block text-xs">Account Name</span>
                    <span className="font-semibold text-[#14294A]">{ORG_INFO.bank.accountName}</span>
                  </div>
                  <div>
                    <span className="text-[#63738B] block text-xs">Bank Name</span>
                    <span className="font-semibold text-[#14294A]">{ORG_INFO.bank.bankName}</span>
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <div>
                      <span className="text-[#63738B] block text-xs">Account Number</span>
                      <span className="font-mono font-bold text-[#082F70]">{ORG_INFO.bank.accountNo}</span>
                    </div>
                    <button
                      onClick={() => copyText(ORG_INFO.bank.accountNo, 'acc')}
                      className="text-xs px-2 py-1 rounded bg-white border border-slate-200 text-[#078B3B] font-semibold hover:bg-slate-50 cursor-pointer"
                    >
                      {copiedField === 'acc' ? 'Copied' : 'Copy'}
                    </button>
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <div>
                      <span className="text-[#63738B] block text-xs">IFSC Code</span>
                      <span className="font-mono font-bold text-[#082F70]">{ORG_INFO.bank.ifsc}</span>
                    </div>
                    <button
                      onClick={() => copyText(ORG_INFO.bank.ifsc, 'ifsc')}
                      className="text-xs px-2 py-1 rounded bg-white border border-slate-200 text-[#078B3B] font-semibold hover:bg-slate-50 cursor-pointer"
                    >
                      {copiedField === 'ifsc' ? 'Copied' : 'Copy'}
                    </button>
                  </div>
                  <div>
                    <span className="text-[#63738B] block text-xs">Branch</span>
                    <span className="font-semibold text-[#14294A]">{ORG_INFO.bank.branch}</span>
                  </div>
                </div>
                <p className="text-xs text-[#63738B] flex items-center gap-1.5">
                  <CreditCard className="w-3.5 h-3.5 text-[#0753A6]" />
                  <span>Registered 12A &amp; 80G Tax-Exempt NGO (Regd No: 240/2019)</span>
                </p>
              </div>
            </div>

            <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
              <button
                onClick={onClose}
                className="px-4 py-2 rounded-lg text-sm font-semibold text-[#63738B] hover:bg-slate-200/70 transition-colors cursor-pointer"
              >
                Close
              </button>
              <button
                onClick={() => {
                  onClose();
                  navigate('/donate');
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#D71920] hover:bg-[#b5141a] text-white text-sm font-semibold shadow-md transition-all cursor-pointer"
              >
                <span>View Full Donation Page</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const SectionPreviewModal: React.FC<{
  data: PreviewModalData | null;
  onClose: () => void;
}> = ({ data, onClose }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (data) window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [data, onClose]);

  return (
    <AnimatePresence>
      {data && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#082F70]/70 backdrop-blur-sm p-4"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 12 }}
            transition={{ duration: 0.25 }}
            className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-[#082F70]/15 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {data.image && (
              <div className="relative h-52 sm:h-60 w-full overflow-hidden bg-slate-100">
                <img src={data.image} alt={data.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#082F70]/80 via-transparent to-transparent" />
                <button
                  onClick={onClose}
                  aria-label="Close preview"
                  className="absolute top-3 right-3 p-2 rounded-full bg-black/45 text-white hover:bg-black/65 transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
                {data.category && (
                  <span className="absolute bottom-3 left-4 px-3 py-1 rounded-full bg-[#078B3B] text-white text-xs font-semibold">
                    {data.category}
                  </span>
                )}
              </div>
            )}

            <div className="p-6">
              {!data.image && (
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div>
                    {data.category && (
                      <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#EDF8EF] text-[#078B3B] text-xs font-semibold mb-2">
                        {data.category}
                      </span>
                    )}
                    <h3 className="text-xl font-bold text-[#082F70]">{data.title}</h3>
                  </div>
                  <button
                    onClick={onClose}
                    aria-label="Close preview"
                    className="p-1.5 rounded-full hover:bg-slate-100 text-[#63738B] cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              )}

              {data.image && <h3 className="text-xl sm:text-2xl font-bold text-[#082F70] mb-2">{data.title}</h3>}
              <p className="text-sm sm:text-base text-[#14294A] leading-relaxed">{data.description}</p>

              {data.metrics && data.metrics.length > 0 && (
                <div className="mt-4 grid grid-cols-2 gap-3">
                  {data.metrics.map((m, idx) => (
                    <div key={idx} className="bg-[#F3F8FC] rounded-xl p-3 border border-[#0753A6]/15">
                      <div className="text-xl font-bold text-[#082F70]">{m.value}</div>
                      <div className="text-xs text-[#63738B]">{m.label}</div>
                    </div>
                  ))}
                </div>
              )}

              {data.bullets && data.bullets.length > 0 && (
                <ul className="mt-4 space-y-1.5 text-sm text-[#14294A]">
                  {data.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#078B3B] shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}

              <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                <button
                  onClick={onClose}
                  className="px-4 py-2 rounded-lg text-sm font-semibold text-[#63738B] hover:bg-slate-100 cursor-pointer"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    const targetRoute = data.route;
                    onClose();
                    navigate(targetRoute);
                  }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#082F70] hover:bg-[#0753A6] text-white text-sm font-semibold shadow-md transition-all cursor-pointer"
                >
                  <span>{data.routeLabel || 'Open Full Section Page'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const LightboxModal: React.FC<{
  items: GalleryItem[];
  currentIndex: number | null;
  onClose: () => void;
  onChangeIndex: (index: number) => void;
}> = ({ items, currentIndex, onClose, onChangeIndex }) => {
  useEffect(() => {
    if (currentIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onChangeIndex((currentIndex + 1) % items.length);
      if (e.key === 'ArrowLeft') onChangeIndex((currentIndex - 1 + items.length) % items.length);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [currentIndex, items.length, onClose, onChangeIndex]);

  if (currentIndex === null || !items[currentIndex]) return null;
  const item = items[currentIndex];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
      >
        <div
          className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            aria-label="Close lightbox"
            className="absolute top-3 right-3 z-10 p-2 rounded-full bg-black/55 text-white hover:bg-black/80 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="relative bg-slate-900 flex items-center justify-center max-h-[70vh] overflow-hidden">
            <img
              src={item.image}
              alt={item.title}
              className="max-h-[70vh] w-full object-contain"
            />
            {items.length > 1 && (
              <>
                <button
                  onClick={() => onChangeIndex((currentIndex - 1 + items.length) % items.length)}
                  aria-label="Previous image"
                  className="absolute left-3 p-2.5 rounded-full bg-black/55 text-white hover:bg-black/80 cursor-pointer"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={() => onChangeIndex((currentIndex + 1) % items.length)}
                  aria-label="Next image"
                  className="absolute right-3 p-2.5 rounded-full bg-black/55 text-white hover:bg-black/80 cursor-pointer"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}
          </div>

          <div className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 bg-white">
            <div>
              <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#EDF8EF] text-[#078B3B] text-xs font-semibold mb-1">
                {item.category}
              </span>
              <h3 className="text-lg font-bold text-[#082F70]">{item.title}</h3>
              <p className="text-sm text-[#63738B]">{item.caption}</p>
            </div>
            <span className="text-xs font-semibold text-[#63738B] shrink-0">
              {currentIndex + 1} / {items.length}
            </span>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export const ContactSuccessModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  name?: string;
  whatsappUrl?: string;
  mailtoUrl?: string;
}> = ({ isOpen, onClose, name, whatsappUrl, mailtoUrl }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-[#082F70]/65 backdrop-blur-sm p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.92, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.94, opacity: 0 }}
          className="bg-white rounded-2xl max-w-md w-full p-6 text-center shadow-2xl border border-[#078B3B]/20"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="w-14 h-14 mx-auto rounded-full bg-[#EDF8EF] flex items-center justify-center text-[#078B3B] mb-4">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold text-[#082F70]">Message Ready to Send!</h3>
          <p className="mt-2 text-sm text-[#63738B]">
            Thank you{name ? `, ${name}` : ''}. Click below to deliver your message directly to PCDS Guntur on WhatsApp (<span className="font-semibold text-[#082F70]">{ORG_INFO.phone}</span>) or Email.
          </p>
          <div className="mt-5 flex flex-col gap-2.5">
            {whatsappUrl && (
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-[#078B3B] hover:bg-[#066d2e] text-white text-sm font-semibold shadow transition-colors"
              >
                Send Directly via WhatsApp (+91 95020 46096)
              </a>
            )}
            {mailtoUrl && (
              <a
                href={mailtoUrl}
                className="w-full py-2.5 px-4 rounded-xl bg-[#0753A6] hover:bg-[#082F70] text-white text-sm font-semibold shadow transition-colors"
              >
                Send via Email ({ORG_INFO.email})
              </a>
            )}
            <button
              onClick={onClose}
              className="w-full py-2 rounded-xl text-sm font-semibold text-[#63738B] hover:bg-slate-100 cursor-pointer"
            >
              Close
            </button>
          </div>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

