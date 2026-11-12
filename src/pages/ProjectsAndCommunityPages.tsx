import React, { useState } from 'react';
import {
  Check,
  CheckCircle2,
  Copy,
  Facebook,
  Heart,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Send,
  Youtube,
  Building2,
} from 'lucide-react';
import {
  FUTURE_PLANS,
  GALLERY_CATEGORIES,
  GALLERY_ITEMS,
  ORG_INFO,
} from '../data/pcdsData';
import { PageBanner, ScrollReveal, StaggerGrid, StaggerItem } from '../components/MotionPrimitives';
import { ContactSuccessModal, DonateModal, LightboxModal } from '../components/Modals';
import { PageRichSections } from '../components/PageRichSections';

export const OngoingProjectsPage: React.FC = () => {
  const [donateOpen, setDonateOpen] = useState(false);

  return (
    <div>
      <PageBanner
        title="Current Major Programme (Ongoing Projects)"
        subtitle="PCDS is currently operating an Old Age Home in Guntur, providing shelter, nutritious food, clothing, healthcare, and emotional support."
        badge="Ongoing Project"
        breadcrumb={[{ label: 'Ongoing Projects' }]}
      />
      <section className="py-14 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-100">
          <ScrollReveal direction="left" className="lg:col-span-5">
            <img
              src="/assets/activities/old-age-home.svg"
              alt="PCDS Old Age Home Guntur"
              className="w-full h-72 sm:h-80 object-cover rounded-2xl shadow-md"
            />
          </ScrollReveal>

          <ScrollReveal direction="right" className="lg:col-span-7 space-y-4">
            <span className="inline-block px-3.5 py-1 rounded-full bg-[#078B3B] text-white text-xs font-bold">
              PCDS Old Age &amp; Persons with Disabilities Home
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#082F70]">
              Old Age Home Services &amp; Senior Citizen Care
            </h2>
            <p className="text-base text-[#14294A] leading-relaxed">
              PCDS is currently operating an Old Age Home, providing shelter, nutritious food, clothing, healthcare, emotional support, and a safe, dignified living environment for senior citizens in need.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#F3F8FC] rounded-2xl p-4 border border-[#0753A6]/15">
                <div className="text-3xl font-extrabold text-[#082F70]">25</div>
                <div className="text-xs font-semibold text-[#63738B]">Senior Citizens Currently Residing</div>
              </div>
              <div className="bg-[#EDF8EF] rounded-2xl p-4 border border-[#078B3B]/20">
                <div className="text-3xl font-extrabold text-[#078B3B]">46+</div>
                <div className="text-xs font-semibold text-[#63738B]">Senior Citizens Supported Since Inception</div>
              </div>
            </div>
            <ul className="space-y-2 text-sm text-[#14294A] pt-1">
              {[
                'Safe and dignified shelter at 70-13-1708, I.P.D. Colony, Sangadi Gunta Area, Guntur-522003',
                'Daily nutritious meals, clean clothing, and hygienic living spaces',
                'Regular medical check-ups supported by our voluntary Advisory Medical Team',
                'Emotional care, respect, and a warm sense of community belonging',
              ].map((s, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#078B3B] shrink-0 mt-0.5" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
            <button
              onClick={() => setDonateOpen(true)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#D71920] hover:bg-[#b5141a] text-white font-semibold shadow-md cursor-pointer"
            >
              <Heart className="w-4 h-4 fill-white" />
              <span>Support Our Old Age Home</span>
            </button>
          </ScrollReveal>
        </div>
      </section>
      <PageRichSections />
      <DonateModal isOpen={donateOpen} onClose={() => setDonateOpen(false)} />
    </div>
  );
};

export const FuturePlansPage: React.FC = () => (
  <div>
    <PageBanner
      title="Future Plans"
      subtitle="Prajwala Community Development Society (PCDS) is committed to expanding its services and creating a greater social impact through these 10 future initiatives."
      badge="10 Future Initiatives"
      breadcrumb={[{ label: 'Future Plans' }]}
    />
    <section className="py-14 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <StaggerGrid className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {FUTURE_PLANS.map((plan) => (
          <StaggerItem key={plan.number}>
            <div className="h-full bg-white rounded-3xl p-6 shadow-md border border-slate-100 flex items-start gap-4">
              <span className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#082F70] to-[#078B3B] text-white font-extrabold text-base flex items-center justify-center shrink-0">
                {plan.number}
              </span>
              <div>
                <h2 className="text-lg font-bold text-[#082F70]">{plan.title}</h2>
                <p className="mt-1.5 text-sm text-[#14294A] leading-relaxed">{plan.description}</p>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerGrid>
    </section>
    <PageRichSections />
  </div>
);

export const GalleryPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered =
    selectedCategory === 'All'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((g) => g.category === selectedCategory);

  return (
    <div>
      <PageBanner
        title="Gallery"
        subtitle="Explore our initiatives across Old Age Home care, hair donation, medical camps, blood donation, women empowerment, child protection, and COVID-19 relief."
        badge="Moments of Change"
        breadcrumb={[{ label: 'Gallery' }]}
      />

      <section className="py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-wrap gap-2">
          {GALLERY_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#082F70] text-white shadow-md'
                  : 'bg-white text-[#14294A] border border-slate-200 hover:border-[#078B3B]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item, idx) => (
            <StaggerItem key={item.id}>
              <button
                onClick={() => setLightboxIndex(idx)}
                className="group relative w-full h-64 rounded-2xl overflow-hidden shadow-md bg-white text-left cursor-pointer"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#082F70]/90 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#078B3B] text-[11px] font-semibold mb-1">
                    {item.category}
                  </span>
                  <div className="font-bold text-base">{item.title}</div>
                  <div className="text-xs text-white/80 line-clamp-1">{item.caption}</div>
                </div>
              </button>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </section>

      <PageRichSections />
      <LightboxModal
        items={filtered}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onChangeIndex={(i) => setLightboxIndex(i)}
      />
    </div>
  );
};

export const DonatePage: React.FC = () => {
  const [copied, setCopied] = useState<string | null>(null);

  const copy = (val: string, key: string) => {
    navigator.clipboard.writeText(val);
    setCopied(key);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div>
      <PageBanner
        title="Donate Now"
        subtitle="Your Support Can Transform Lives and Build a Better Tomorrow. Contributions are eligible under 12A & 80G."
        badge="Official Bank & BHIM UPI"
        breadcrumb={[{ label: 'Donate Now' }]}
      />
      <section className="py-14 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          <ScrollReveal direction="left">
            <div className="h-full bg-white rounded-3xl p-8 shadow-xl border border-slate-100 flex flex-col items-center text-center justify-center">
              <img
                src="/assets/donation/donation-qr.png"
                alt="Official BHIM UPI QR Code for Prajwala Community Development Society"
                className="w-64 h-auto rounded-2xl shadow-md border border-slate-200 p-2 bg-white"
              />
              <p className="mt-4 text-sm font-bold text-[#082F70]">Scan &amp; Support Our Mission</p>
              <div className="mt-2 inline-flex items-center gap-2 bg-[#F3F8FC] px-4 py-2 rounded-xl border border-[#0753A6]/20">
                <span className="font-mono font-bold text-sm text-[#14294A]">{ORG_INFO.bank.upiId}</span>
                <button
                  onClick={() => copy(ORG_INFO.bank.upiId, 'upi')}
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#078B3B] cursor-pointer"
                >
                  {copied === 'upi' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  {copied === 'upi' ? 'Copied' : 'Copy'}
                </button>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="h-full bg-white rounded-3xl p-8 shadow-xl border border-slate-100 space-y-5">
              <div className="flex items-center gap-2.5 text-[#082F70] font-bold text-xl">
                <Building2 className="w-6 h-6 text-[#078B3B]" />
                <span>Verified Bank Account Details</span>
              </div>

              <div className="space-y-4 bg-[#EDF8EF]/65 rounded-2xl p-5 border border-[#078B3B]/20 text-sm">
                <div>
                  <div className="text-xs text-[#63738B]">Account Name</div>
                  <div className="font-bold text-[#082F70]">{ORG_INFO.bank.accountName}</div>
                </div>
                <div>
                  <div className="text-xs text-[#63738B]">Bank Name</div>
                  <div className="font-bold text-[#14294A]">{ORG_INFO.bank.bankName}</div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs text-[#63738B]">Account Number</div>
                    <div className="font-mono font-bold text-base text-[#082F70]">{ORG_INFO.bank.accountNo}</div>
                  </div>
                  <button
                    onClick={() => copy(ORG_INFO.bank.accountNo, 'acc')}
                    className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-bold text-[#078B3B] cursor-pointer"
                  >
                    {copied === 'acc' ? 'Copied' : 'Copy'}
                  </button>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs text-[#63738B]">IFSC Code</div>
                    <div className="font-mono font-bold text-base text-[#082F70]">{ORG_INFO.bank.ifsc}</div>
                  </div>
                  <button
                    onClick={() => copy(ORG_INFO.bank.ifsc, 'ifsc')}
                    className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-bold text-[#078B3B] cursor-pointer"
                  >
                    {copied === 'ifsc' ? 'Copied' : 'Copy'}
                  </button>
                </div>
                <div>
                  <div className="text-xs text-[#63738B]">Branch</div>
                  <div className="font-bold text-[#14294A]">{ORG_INFO.bank.branch}</div>
                </div>
              </div>

              <p className="text-xs text-[#63738B] leading-relaxed">
                PAN: <span className="font-mono font-semibold text-[#14294A]">AAJAP2309P</span> • 12A:{' '}
                <span className="font-mono font-semibold text-[#14294A]">AAJAP2309P25HY01</span> • 80G:{' '}
                <span className="font-mono font-semibold text-[#14294A]">AAJAP2309P25HY02</span>
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
      <PageRichSections />
    </div>
  );
};

export const ContactPage: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [error, setError] = useState('');
  const [submittedName, setSubmittedName] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError('Please fill in your name, email address, and message.');
      return;
    }
    setError('');
    setSubmittedName(form.name.trim());
    setForm({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <div>
      <PageBanner
        title="Contact Us"
        subtitle="Reach out to Prajwala Community Development Society (PCDS), Guntur for volunteering, CSR partnerships, donations, or community support."
        badge="Get In Touch"
        breadcrumb={[{ label: 'Contact Us' }]}
      />
      <section className="py-14 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        <ScrollReveal direction="left" className="lg:col-span-5 space-y-5">
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg border border-slate-100 space-y-5">
            <h2 className="text-xl font-bold text-[#082F70]">Registered Office &amp; Contact Details</h2>
            <div className="space-y-4 text-sm text-[#14294A]">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#078B3B] shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-[#082F70]">Address</div>
                  <div>{ORG_INFO.address}</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#078B3B] shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-[#082F70]">Phone Number</div>
                  <a href="tel:+919502046096" className="hover:text-[#078B3B] font-semibold">
                    {ORG_INFO.phone}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#078B3B] shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-[#082F70]">Email</div>
                  <a href={`mailto:${ORG_INFO.email}`} className="hover:text-[#078B3B] font-semibold">
                    {ORG_INFO.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 space-y-2 text-xs text-[#63738B]">
              <div className="font-bold text-[#082F70] text-sm">Follow Us</div>
              <div className="flex items-center gap-2">
                <Facebook className="w-4 h-4 text-[#0753A6]" />
                <span>{ORG_INFO.social.facebook}</span>
              </div>
              <div className="flex items-center gap-2">
                <Youtube className="w-4 h-4 text-[#D71920]" />
                <span>{ORG_INFO.social.youtube}</span>
              </div>
              <div className="flex items-center gap-2">
                <Instagram className="w-4 h-4 text-[#078B3B]" />
                <span>{ORG_INFO.social.instagram}</span>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="right" className="lg:col-span-7">
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg border border-slate-100 space-y-4"
            noValidate
          >
            <h2 className="text-xl font-bold text-[#082F70]">Send Us a Message</h2>
            {error && (
              <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-xs font-semibold text-[#D71920]">
                {error}
              </div>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#082F70] mb-1">Full Name *</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-[#078B3B] focus:outline-none text-sm"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#082F70] mb-1">Email Address *</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-[#078B3B] focus:outline-none text-sm"
                  placeholder="you@example.com"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#082F70] mb-1">Phone Number</label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-[#078B3B] focus:outline-none text-sm"
                  placeholder="+91 ..."
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#082F70] mb-1">Subject</label>
                <input
                  type="text"
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-[#078B3B] focus:outline-none text-sm"
                  placeholder="Volunteering / CSR / Donation / General"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-semibold text-[#082F70] mb-1">Message *</label>
              <textarea
                rows={4}
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-[#078B3B] focus:outline-none text-sm"
                placeholder="How would you like to connect with PCDS?"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#082F70] hover:bg-[#078B3B] text-white text-sm font-semibold shadow-md transition-colors cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>Submit Message</span>
            </button>
          </form>
        </ScrollReveal>
      </section>

      <PageRichSections />
      <ContactSuccessModal
        isOpen={submittedName !== null}
        name={submittedName || undefined}
        onClose={() => setSubmittedName(null)}
      />
    </div>
  );
};

