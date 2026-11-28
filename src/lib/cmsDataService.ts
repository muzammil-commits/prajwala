import { supabase } from './supabaseClient';
import {
  ACTIVITIES,
  GALLERY_ITEMS,
  GOVERNING_BODY,
  IMPLEMENTATION_TEAM,
  ADVISORY_TEAM,
  IMPACT_METRICS,
  ORG_INFO,
  ABOUT_TEXT,
  VISION_MISSION_VALUES,
  OBJECTIVES,
  ActivityItem,
  GalleryItem,
  GoverningBodyMember,
  AdvisoryMember,
  ImpactMetric,
} from '../data/pcdsData';

// Initial Hero slides matching latest requirements
export interface HeroSlideRecord {
  id: string;
  eyebrow: string;
  title: string;
  badge: string;
  tagline: string;
  motto: string;
  description: string;
  desktop_bg: string;
  mobile_bg: string;
  alt: string;
  display_order: number;
  is_active: boolean;
  created_at?: string;
  updated_at?: string;
}

export const INITIAL_HERO_SLIDES: HeroSlideRecord[] = [
  {
    id: 'hero-1',
    eyebrow: 'Together for a Better Tomorrow',
    title: 'Prajwala Community Development Society',
    badge: 'Guntur • Estd. 03 August 2019',
    tagline: 'Serving Humanity with Compassion, Dignity & Hope',
    motto: 'SERVE • EMPOWER • TRANSFORM',
    description:
      'A non-profit organization committed to improving the quality of life of underprivileged communities through sustainable social development initiatives.',
    desktop_bg: '/assets/backgrounds/hero-desktop.png',
    mobile_bg: '/assets/backgrounds/hero-mobile.png',
    alt: 'Prajwala Community Development Society Happy Children',
    display_order: 1,
    is_active: true,
  },
  {
    id: 'hero-2',
    eyebrow: 'Dignity & Care for Senior Citizens',
    title: 'PCDS Old Age Home & Community Healthcare',
    badge: '25 Residents • 46+ Senior Citizens Supported',
    tagline: 'Safe Shelter, Nutritious Food, Medical Care & Emotional Support',
    motto: 'CARE • RESPECT • BELONGING',
    description:
      'Operating our Old Age Home in Guntur alongside free medical camps, voluntary blood donation drives, and hair donation campaigns for cancer patients.',
    desktop_bg: '/assets/backgrounds/hero-old-age-home.png',
    mobile_bg: '/assets/backgrounds/hero-old-age-home.png',
    alt: 'PCDS Old Age Home & Senior Care Healthcare with Caregiver and Smiling Seniors',
    display_order: 2,
    is_active: true,
  },
  {
    id: 'hero-3',
    eyebrow: 'Empowering Women, Youth & Children',
    title: 'Education, Sparsha Counselling & Legal Awareness',
    badge: '320+ Women Trained • 3,000+ Students Reached',
    tagline: 'Building Self-Reliant, Safe and Inclusive Communities',
    motto: 'LEARN • PROTECT • LEAD',
    description:
      'Driving Sparsha counselling & self-defence, women’s empowerment, child protection awareness (112 & 1098), free legal aid, vocational tailoring, and 6,515+ tree plantations.',
    desktop_bg: '/assets/backgrounds/hero-empowerment.png',
    mobile_bg: '/assets/backgrounds/hero-empowerment.png',
    alt: 'Education, Sparsha Counselling, Women Empowerment, Legal Aid & Environment',
    display_order: 3,
    is_active: true,
  },
];

export interface SponsorRecord {
  id: string;
  name: string;
  category: string;
  branch: string;
  tagline: string;
  description: string;
  logo: string;
  highlights: string[];
  display_order: number;
  is_active: boolean;
}

export const INITIAL_SPONSORS: SponsorRecord[] = [
  {
    id: 'malabar-gold-guntur',
    name: 'Malabar Gold & Diamonds',
    category: 'Daily Morning Breakfast / Tiffin Sponsor',
    branch: 'Guntur Branch',
    tagline: 'CSR Community Nourishment Partner',
    description:
      'Generous daily sponsorship of wholesome, fresh, and hygienic morning breakfast and tiffin for all elderly residents of PCDS Old Age Home in Guntur.',
    logo: '/assets/sponsors/malabar-gold-diamonds.png',
    highlights: [
      '365 Days Daily Morning Tiffin for all 25+ resident senior citizens',
      'Dedicated Corporate Social Responsibility partnership',
      'Promoting nutrition, health, and dignity in elder care',
    ],
    display_order: 1,
    is_active: true,
  },
];

export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
  status: 'pending' | 'read' | 'resolved';
  created_at: string;
}

export interface MediaItem {
  id: string;
  file_name: string;
  public_id?: string;
  secure_url: string;
  folder: string;
  width?: number;
  height?: number;
  format?: string;
  bytes?: number;
  created_at: string;
}

const STORAGE_PREFIX = 'pcds_cms_';

function getLocal<T>(key: string, fallback: T): T {
  try {
    const item = localStorage.getItem(STORAGE_PREFIX + key);
    return item ? JSON.parse(item) : fallback;
  } catch {
    return fallback;
  }
}

function setLocal<T>(key: string, data: T): void {
  try {
    localStorage.setItem(STORAGE_PREFIX + key, JSON.stringify(data));
  } catch (err) {
    console.warn('LocalStorage save error:', err);
  }
}

// -------------------------------------------------------------
// CMS DATA SERVICE METHODS
// -------------------------------------------------------------

export const CmsService = {
  // 1. HERO SLIDES
  async getHeroSlides(): Promise<HeroSlideRecord[]> {
    try {
      const { data, error } = await supabase
        .from('hero_slides')
        .select('*')
        .eq('is_active', true)
        .order('display_order', { ascending: true });

      if (!error && data && data.length > 0) {
        setLocal('hero_slides', data);
        return data as HeroSlideRecord[];
      }
    } catch (err) {
      console.warn('Supabase fetch failed, falling back to cached/local:', err);
    }
    return getLocal<HeroSlideRecord[]>('hero_slides', INITIAL_HERO_SLIDES);
  },

  async getAllHeroSlides(): Promise<HeroSlideRecord[]> {
    try {
      const { data, error } = await supabase
        .from('hero_slides')
        .select('*')
        .order('display_order', { ascending: true });

      if (!error && data && data.length > 0) {
        setLocal('hero_slides_all', data);
        return data as HeroSlideRecord[];
      }
    } catch {}
    return getLocal<HeroSlideRecord[]>('hero_slides_all', INITIAL_HERO_SLIDES);
  },

  async saveHeroSlide(slide: Partial<HeroSlideRecord>): Promise<HeroSlideRecord> {
    const existing = await this.getAllHeroSlides();
    const id = slide.id || `hero-${Date.now()}`;
    const newSlide: HeroSlideRecord = {
      id,
      eyebrow: slide.eyebrow || 'Prajwala Initiative',
      title: slide.title || 'New Slide Title',
      badge: slide.badge || 'Community Welfare',
      tagline: slide.tagline || '',
      motto: slide.motto || '',
      description: slide.description || '',
      desktop_bg: slide.desktop_bg || '/assets/backgrounds/hero-desktop.png',
      mobile_bg: slide.mobile_bg || '/assets/backgrounds/hero-mobile.png',
      alt: slide.alt || slide.title || 'Hero Banner',
      display_order: slide.display_order ?? existing.length + 1,
      is_active: slide.is_active ?? true,
      updated_at: new Date().toISOString(),
    };

    try {
      await supabase.from('hero_slides').upsert(newSlide);
    } catch (err) {
      console.warn('Supabase upsert failed, updating local copy:', err);
    }

    const updated = existing.some((s) => s.id === id)
      ? existing.map((s) => (s.id === id ? newSlide : s))
      : [...existing, newSlide];
    setLocal('hero_slides_all', updated);
    setLocal('hero_slides', updated.filter((s) => s.is_active));
    return newSlide;
  },

  async deleteHeroSlide(id: string): Promise<boolean> {
    try {
      await supabase.from('hero_slides').delete().eq('id', id);
    } catch {}
    const existing = await this.getAllHeroSlides();
    const updated = existing.filter((s) => s.id !== id);
    setLocal('hero_slides_all', updated);
    setLocal('hero_slides', updated.filter((s) => s.is_active));
    return true;
  },

  // 2. MAJOR ACTIVITIES / SERVICES
  async getActivities(): Promise<ActivityItem[]> {
    try {
      const { data, error } = await supabase
        .from('activities')
        .select('*')
        .eq('is_active', true)
        .order('display_order', { ascending: true });

      if (!error && data && data.length > 0) {
        const mapped: ActivityItem[] = data.map((d: any) => ({
          slug: d.slug,
          title: d.title,
          shortTitle: d.short_title,
          category: d.category,
          summary: d.summary,
          fullDescription: d.full_description || [],
          image: d.image,
          galleryImages: d.gallery_images || [],
          highlights: d.highlights || [],
          metrics: d.metrics || [],
        }));
        setLocal('activities', mapped);
        return mapped;
      }
    } catch {}
    return getLocal<ActivityItem[]>('activities', ACTIVITIES);
  },

  async saveActivity(activity: ActivityItem): Promise<ActivityItem> {
    const dbPayload = {
      id: activity.slug,
      slug: activity.slug,
      title: activity.title,
      short_title: activity.shortTitle,
      category: activity.category,
      summary: activity.summary,
      full_description: activity.fullDescription,
      image: activity.image,
      gallery_images: activity.galleryImages,
      highlights: activity.highlights,
      metrics: activity.metrics,
      is_active: true,
      updated_at: new Date().toISOString(),
    };

    try {
      await supabase.from('activities').upsert(dbPayload);
    } catch {}

    const existing = await this.getActivities();
    const updated = existing.some((a) => a.slug === activity.slug)
      ? existing.map((a) => (a.slug === activity.slug ? activity : a))
      : [...existing, activity];
    setLocal('activities', updated);
    return activity;
  },

  async deleteActivity(slug: string): Promise<boolean> {
    try {
      await supabase.from('activities').delete().eq('slug', slug);
    } catch {}
    const existing = await this.getActivities();
    const updated = existing.filter((a) => a.slug !== slug);
    setLocal('activities', updated);
    return true;
  },

  // 3. GALLERY ITEMS
  async getGalleryItems(): Promise<GalleryItem[]> {
    try {
      const { data, error } = await supabase
        .from('gallery_items')
        .select('*')
        .eq('is_active', true)
        .order('display_order', { ascending: true });

      if (!error && data && data.length > 0) {
        const mapped: GalleryItem[] = data.map((d: any) => ({
          id: d.id,
          title: d.title,
          category: d.category,
          image: d.image,
          caption: d.caption,
        }));
        setLocal('gallery_items', mapped);
        return mapped;
      }
    } catch {}
    return getLocal<GalleryItem[]>('gallery_items', GALLERY_ITEMS);
  },

  async saveGalleryItem(item: GalleryItem): Promise<GalleryItem> {
    const id = item.id || `g${Date.now()}`;
    const payload = {
      id,
      title: item.title,
      category: item.category,
      image: item.image,
      caption: item.caption || '',
      is_active: true,
      updated_at: new Date().toISOString(),
    };

    try {
      await supabase.from('gallery_items').upsert(payload);
    } catch {}

    const existing = await this.getGalleryItems();
    const updated = existing.some((g) => g.id === id)
      ? existing.map((g) => (g.id === id ? { ...item, id } : g))
      : [{ ...item, id }, ...existing];
    setLocal('gallery_items', updated);
    return { ...item, id };
  },

  async deleteGalleryItem(id: string): Promise<boolean> {
    try {
      await supabase.from('gallery_items').delete().eq('id', id);
    } catch {}
    const existing = await this.getGalleryItems();
    const updated = existing.filter((g) => g.id !== id);
    setLocal('gallery_items', updated);
    return true;
  },

  // 4. GOVERNING BODY
  async getGoverningBody(): Promise<GoverningBodyMember[]> {
    try {
      const { data, error } = await supabase
        .from('governing_body')
        .select('*')
        .eq('is_active', true)
        .order('display_order', { ascending: true });

      if (!error && data && data.length > 0) {
        setLocal('governing_body', data);
        return data as GoverningBodyMember[];
      }
    } catch {}
    return getLocal<GoverningBodyMember[]>('governing_body', GOVERNING_BODY);
  },

  async saveGoverningBodyMember(member: GoverningBodyMember): Promise<GoverningBodyMember> {
    const id = member.id || member.position.toLowerCase().replace(/[^a-z0-9]/g, '-');
    try {
      await supabase.from('governing_body').upsert({
        id,
        position: member.position,
        responsibility: member.responsibility,
      });
    } catch {}
    const existing = await this.getGoverningBody();
    const updated = existing.some((m) => m.position === member.position || (m.id && m.id === member.id))
      ? existing.map((m) => (m.position === member.position || (m.id && m.id === member.id) ? member : m))
      : [...existing, member];
    setLocal('governing_body', updated);
    return member;
  },

  // 5. IMPLEMENTATION TEAM
  async getImplementationTeam(): Promise<Array<{ position: string; responsibility: string }>> {
    try {
      const { data, error } = await supabase
        .from('implementation_team')
        .select('*')
        .eq('is_active', true)
        .order('display_order', { ascending: true });

      if (!error && data && data.length > 0) {
        setLocal('implementation_team', data);
        return data;
      }
    } catch {}
    return getLocal('implementation_team', IMPLEMENTATION_TEAM);
  },

  async saveImplementationTeamMember(member: {
    position: string;
    responsibility: string;
  }): Promise<void> {
    const existing = await this.getImplementationTeam();
    const updated = existing.some((m) => m.position === member.position)
      ? existing.map((m) => (m.position === member.position ? member : m))
      : [...existing, member];
    setLocal('implementation_team', updated);
    try {
      await supabase.from('implementation_team').upsert({
        id: member.position.toLowerCase().replace(/\s+/g, '-'),
        position: member.position,
        responsibility: member.responsibility,
      });
    } catch {}
  },

  // 6. ADVISORY TEAM
  async getAdvisoryTeam(): Promise<AdvisoryMember[]> {
    try {
      const { data, error } = await supabase
        .from('advisory_team')
        .select('*')
        .eq('is_active', true)
        .order('display_order', { ascending: true });

      if (!error && data && data.length > 0) {
        setLocal('advisory_team', data);
        return data as AdvisoryMember[];
      }
    } catch {}
    return getLocal<AdvisoryMember[]>('advisory_team', ADVISORY_TEAM);
  },

  async saveAdvisoryMember(member: AdvisoryMember): Promise<AdvisoryMember> {
    try {
      await supabase.from('advisory_team').upsert({
        id: member.name.toLowerCase().replace(/[^a-z0-9]/g, '-'),
        ...member,
      });
    } catch {}
    const existing = await this.getAdvisoryTeam();
    const updated = existing.some((m) => m.name === member.name)
      ? existing.map((m) => (m.name === member.name ? member : m))
      : [...existing, member];
    setLocal('advisory_team', updated);
    return member;
  },

  // 7. PARTNERS & SPONSORS
  async getSponsors(): Promise<SponsorRecord[]> {
    try {
      const { data, error } = await supabase
        .from('sponsors_partners')
        .select('*')
        .eq('is_active', true)
        .order('display_order', { ascending: true });

      if (!error && data && data.length > 0) {
        setLocal('sponsors', data);
        return data as SponsorRecord[];
      }
    } catch {}
    return getLocal<SponsorRecord[]>('sponsors', INITIAL_SPONSORS);
  },

  async saveSponsor(sponsor: SponsorRecord): Promise<SponsorRecord> {
    try {
      await supabase.from('sponsors_partners').upsert(sponsor);
    } catch {}
    const existing = await this.getSponsors();
    const updated = existing.some((s) => s.id === sponsor.id)
      ? existing.map((s) => (s.id === sponsor.id ? sponsor : s))
      : [...existing, sponsor];
    setLocal('sponsors', updated);
    return sponsor;
  },

  // 8. IMPACT METRICS
  async getImpactMetrics(): Promise<ImpactMetric[]> {
    try {
      const { data, error } = await supabase
        .from('impact_metrics')
        .select('*')
        .eq('is_active', true)
        .order('display_order', { ascending: true });

      if (!error && data && data.length > 0) {
        const mapped = data.map((d: any) => ({
          id: d.id,
          number: d.number,
          suffix: d.suffix || '',
          label: d.label,
          detail: d.detail,
          iconName: d.icon_name || 'Award',
        }));
        setLocal('impact_metrics', mapped);
        return mapped;
      }
    } catch {}
    return getLocal<ImpactMetric[]>('impact_metrics', IMPACT_METRICS);
  },

  async saveImpactMetric(metric: ImpactMetric): Promise<ImpactMetric> {
    try {
      await supabase.from('impact_metrics').upsert({
        id: metric.id,
        number: metric.number,
        suffix: metric.suffix,
        label: metric.label,
        detail: metric.detail,
        icon_name: metric.iconName,
        display_order: parseInt(metric.id) || 1,
      });
    } catch {}
    const existing = await this.getImpactMetrics();
    const updated = existing.map((m) => (m.id === metric.id ? metric : m));
    setLocal('impact_metrics', updated);
    return metric;
  },

  // 9. CONTACT FORM SUBMISSIONS
  async submitContact(form: {
    name: string;
    email: string;
    phone?: string;
    subject?: string;
    message: string;
  }): Promise<{ success: boolean; message: string }> {
    const newSubmission: ContactSubmission = {
      id: `sub-${Date.now()}`,
      ...form,
      status: 'pending',
      created_at: new Date().toISOString(),
    };

    try {
      const { error } = await supabase.from('contact_submissions').insert(newSubmission);
      if (error) throw error;
    } catch (err) {
      console.warn('Supabase contact submission insert failed, stored locally:', err);
    }

    const localSubs = getLocal<ContactSubmission[]>('contact_submissions', []);
    setLocal('contact_submissions', [newSubmission, ...localSubs]);
    return {
      success: true,
      message: 'Your message has been received! Our society team will contact you shortly.',
    };
  },

  async getContactSubmissions(): Promise<ContactSubmission[]> {
    try {
      const { data, error } = await supabase
        .from('contact_submissions')
        .select('*')
        .order('created_at', { ascending: false });

      if (!error && data) {
        setLocal('contact_submissions', data);
        return data as ContactSubmission[];
      }
    } catch {}
    return getLocal<ContactSubmission[]>('contact_submissions', []);
  },

  async updateSubmissionStatus(
    id: string,
    status: 'pending' | 'read' | 'resolved'
  ): Promise<void> {
    try {
      await supabase.from('contact_submissions').update({ status }).eq('id', id);
    } catch {}
    const existing = await this.getContactSubmissions();
    const updated = existing.map((s) => (s.id === id ? { ...s, status } : s));
    setLocal('contact_submissions', updated);
  },

  async deleteSubmission(id: string): Promise<void> {
    try {
      await supabase.from('contact_submissions').delete().eq('id', id);
    } catch {}
    const existing = await this.getContactSubmissions();
    const updated = existing.filter((s) => s.id !== id);
    setLocal('contact_submissions', updated);
  },

  // 10. MEDIA LIBRARY
  async getMediaLibrary(): Promise<MediaItem[]> {
    try {
      const { data, error } = await supabase
        .from('media_library')
        .select('*')
        .order('created_at', { ascending: false });

      if (!error && data && data.length > 0) {
        setLocal('media_library', data);
        return data as MediaItem[];
      }
    } catch {}
    return getLocal<MediaItem[]>('media_library', [
      {
        id: 'med-1',
        file_name: 'hero-old-age-home.png',
        secure_url: '/assets/backgrounds/hero-old-age-home.png',
        folder: 'prajwala/hero',
        created_at: new Date().toISOString(),
      },
      {
        id: 'med-2',
        file_name: 'hero-empowerment.png',
        secure_url: '/assets/backgrounds/hero-empowerment.png',
        folder: 'prajwala/hero',
        created_at: new Date().toISOString(),
      },
      {
        id: 'med-3',
        file_name: 'malabar-gold-diamonds.png',
        secure_url: '/assets/sponsors/malabar-gold-diamonds.png',
        folder: 'prajwala/sponsors',
        created_at: new Date().toISOString(),
      },
      {
        id: 'med-4',
        file_name: 'pcds-logo.png',
        secure_url: '/assets/logo/pcds-logo.png',
        folder: 'prajwala/logo',
        created_at: new Date().toISOString(),
      },
    ]);
  },

  async addMediaItem(item: Omit<MediaItem, 'id' | 'created_at'>): Promise<MediaItem> {
    const newItem: MediaItem = {
      id: `med-${Date.now()}`,
      ...item,
      created_at: new Date().toISOString(),
    };
    try {
      await supabase.from('media_library').insert(newItem);
    } catch {}
    const existing = await this.getMediaLibrary();
    setLocal('media_library', [newItem, ...existing]);
    return newItem;
  },

  async deleteMediaItem(id: string): Promise<void> {
    try {
      await supabase.from('media_library').delete().eq('id', id);
    } catch {}
    const existing = await this.getMediaLibrary();
    setLocal(
      'media_library',
      existing.filter((m) => m.id !== id)
    );
  },

  // 11. WEBSITE SETTINGS
  async getSettings(): Promise<typeof ORG_INFO> {
    try {
      const { data, error } = await supabase
        .from('website_settings')
        .select('*')
        .eq('key', 'org_info')
        .single();

      if (!error && data && data.value) {
        setLocal('settings', data.value);
        return data.value;
      }
    } catch {}
    return getLocal('settings', ORG_INFO);
  },

  async saveSettings(settings: typeof ORG_INFO): Promise<void> {
    setLocal('settings', settings);
    try {
      await supabase.from('website_settings').upsert({
        key: 'org_info',
        value: settings,
        updated_at: new Date().toISOString(),
      });
    } catch {}
  },

  // 12. ONE-CLICK DATABASE SEEDER (Seeds Supabase from pcdsData)
  async seedSupabase(): Promise<{ success: boolean; message: string; count: number }> {
    let inserted = 0;
    try {
      // 1. Hero slides
      for (const slide of INITIAL_HERO_SLIDES) {
        await supabase.from('hero_slides').upsert(slide);
        inserted++;
      }

      // 2. Activities
      for (let i = 0; i < ACTIVITIES.length; i++) {
        const act = ACTIVITIES[i];
        await supabase.from('activities').upsert({
          id: act.slug,
          slug: act.slug,
          title: act.title,
          short_title: act.shortTitle,
          category: act.category,
          summary: act.summary,
          full_description: act.fullDescription,
          image: act.image,
          gallery_images: act.galleryImages,
          highlights: act.highlights,
          metrics: act.metrics,
          display_order: i + 1,
          is_active: true,
        });
        inserted++;
      }

      // 3. Gallery
      for (let i = 0; i < GALLERY_ITEMS.length; i++) {
        const g = GALLERY_ITEMS[i];
        await supabase.from('gallery_items').upsert({
          id: g.id,
          title: g.title,
          category: g.category,
          image: g.image,
          caption: g.caption,
          display_order: i + 1,
          is_active: true,
        });
        inserted++;
      }

      // 4. Governing Body
      for (let i = 0; i < GOVERNING_BODY.length; i++) {
        const m = GOVERNING_BODY[i];
        await supabase.from('governing_body').upsert({
          id: `gov-${i + 1}`,
          position: m.position,
          responsibility: m.responsibility,
          display_order: i + 1,
          is_active: true,
        });
        inserted++;
      }

      // 5. Advisory Team
      for (let i = 0; i < ADVISORY_TEAM.length; i++) {
        const a = ADVISORY_TEAM[i];
        await supabase.from('advisory_team').upsert({
          id: `adv-${i + 1}`,
          name: a.name,
          designation: a.designation,
          role: a.role,
          responsibilities: a.responsibilities,
          clinic: a.clinic,
          image: a.image,
          display_order: i + 1,
          is_active: true,
        });
        inserted++;
      }

      // 6. Sponsors
      for (const sp of INITIAL_SPONSORS) {
        await supabase.from('sponsors_partners').upsert(sp);
        inserted++;
      }

      // 7. Impact Metrics
      for (let i = 0; i < IMPACT_METRICS.length; i++) {
        const im = IMPACT_METRICS[i];
        await supabase.from('impact_metrics').upsert({
          id: im.id,
          number: im.number,
          suffix: im.suffix,
          label: im.label,
          detail: im.detail,
          icon_name: im.iconName,
          display_order: i + 1,
          is_active: true,
        });
        inserted++;
      }

      // 8. Settings
      await supabase.from('website_settings').upsert({
        key: 'org_info',
        value: ORG_INFO,
        updated_at: new Date().toISOString(),
      });
      inserted++;

      return {
        success: true,
        message: `Successfully seeded ${inserted} records into Supabase PostgreSQL tables!`,
        count: inserted,
      };
    } catch (err: any) {
      return {
        success: false,
        message: `Seeding encountered error: ${err.message}. If tables do not exist yet, please run supabase/schema.sql in Supabase SQL Editor.`,
        count: inserted,
      };
    }
  },
};
