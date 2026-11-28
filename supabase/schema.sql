-- =========================================================================
-- PRAJWALA COMMUNITY DEVELOPMENT SOCIETY (PCDS)
-- SUPABASE POSTGRESQL DATABASE SCHEMA & MIGRATIONS
-- =========================================================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. HERO SLIDES
CREATE TABLE IF NOT EXISTS public.hero_slides (
    id TEXT PRIMARY KEY,
    eyebrow TEXT,
    title TEXT NOT NULL,
    badge TEXT,
    tagline TEXT,
    motto TEXT,
    description TEXT,
    desktop_bg TEXT NOT NULL,
    mobile_bg TEXT NOT NULL,
    alt TEXT,
    display_order INTEGER DEFAULT 0,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. MAJOR ACTIVITIES / SERVICES
CREATE TABLE IF NOT EXISTS public.activities (
    id TEXT PRIMARY KEY,
    slug TEXT UNIQUE NOT NULL,
    title TEXT NOT NULL,
    short_title TEXT NOT NULL,
    category TEXT,
    summary TEXT,
    full_description JSONB DEFAULT '[]'::JSONB,
    image TEXT,
    gallery_images JSONB DEFAULT '[]'::JSONB,
    highlights JSONB DEFAULT '[]'::JSONB,
    metrics JSONB DEFAULT '[]'::JSONB,
    display_order INTEGER DEFAULT 0,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. GALLERY ITEMS
CREATE TABLE IF NOT EXISTS public.gallery_items (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    category TEXT NOT NULL,
    image TEXT NOT NULL,
    caption TEXT,
    display_order INTEGER DEFAULT 0,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. GOVERNING BODY
CREATE TABLE IF NOT EXISTS public.governing_body (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    designation TEXT NOT NULL,
    role TEXT,
    qualification TEXT,
    biography TEXT,
    image TEXT,
    display_order INTEGER DEFAULT 0,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 5. PROGRAMME IMPLEMENTATION TEAM
CREATE TABLE IF NOT EXISTS public.implementation_team (
    id TEXT PRIMARY KEY,
    position TEXT NOT NULL,
    responsibility TEXT NOT NULL,
    display_order INTEGER DEFAULT 0,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 6. ADVISORY & SUPPORT TEAM
CREATE TABLE IF NOT EXISTS public.advisory_team (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    designation TEXT NOT NULL,
    role TEXT NOT NULL,
    responsibilities TEXT NOT NULL,
    clinic TEXT,
    image TEXT,
    display_order INTEGER DEFAULT 0,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 7. PARTNERS & SPONSORS
CREATE TABLE IF NOT EXISTS public.sponsors_partners (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    category TEXT DEFAULT 'Corporate Partner',
    branch TEXT,
    tagline TEXT,
    description TEXT,
    logo TEXT,
    highlights JSONB DEFAULT '[]'::JSONB,
    display_order INTEGER DEFAULT 0,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 8. IMPACT METRICS / COUNTERS
CREATE TABLE IF NOT EXISTS public.impact_metrics (
    id TEXT PRIMARY KEY,
    number INTEGER NOT NULL,
    suffix TEXT DEFAULT '',
    label TEXT NOT NULL,
    detail TEXT,
    icon_name TEXT DEFAULT 'Award',
    display_order INTEGER DEFAULT 0,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 9. WEBSITE PAGES (SEO & META)
CREATE TABLE IF NOT EXISTS public.website_pages (
    id TEXT PRIMARY KEY,
    slug TEXT UNIQUE NOT NULL,
    title TEXT NOT NULL,
    meta_title TEXT,
    meta_description TEXT,
    status TEXT DEFAULT 'published',
    display_order INTEGER DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 10. WEBSITE SECTIONS (DYNAMIC CONTENT BUILDER)
CREATE TABLE IF NOT EXISTS public.website_sections (
    id TEXT PRIMARY KEY,
    page_slug TEXT NOT NULL,
    section_key TEXT NOT NULL,
    section_title TEXT NOT NULL,
    content_json JSONB NOT NULL DEFAULT '{}'::JSONB,
    is_visible BOOLEAN DEFAULT true,
    display_order INTEGER DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 11. CONTACT SUBMISSIONS
CREATE TABLE IF NOT EXISTS public.contact_submissions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    subject TEXT,
    message TEXT NOT NULL,
    status TEXT DEFAULT 'pending',
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 12. MEDIA LIBRARY
CREATE TABLE IF NOT EXISTS public.media_library (
    id TEXT PRIMARY KEY,
    file_name TEXT NOT NULL,
    public_id TEXT,
    secure_url TEXT NOT NULL,
    folder TEXT DEFAULT 'prajwala/general',
    width INTEGER,
    height INTEGER,
    format TEXT,
    bytes INTEGER,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 13. WEBSITE SETTINGS
CREATE TABLE IF NOT EXISTS public.website_settings (
    key TEXT PRIMARY KEY,
    value JSONB NOT NULL,
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- =========================================================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- =========================================================================

-- Enable RLS on all tables
ALTER TABLE public.hero_slides ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.activities ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.gallery_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.governing_body ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.implementation_team ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.advisory_team ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.sponsors_partners ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.impact_metrics ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.website_pages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.website_sections ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.media_library ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.website_settings ENABLE ROW LEVEL SECURITY;

-- Public READ policies for active content
CREATE POLICY "Public Read Hero Slides" ON public.hero_slides FOR SELECT USING (true);
CREATE POLICY "Public Read Activities" ON public.activities FOR SELECT USING (true);
CREATE POLICY "Public Read Gallery" ON public.gallery_items FOR SELECT USING (true);
CREATE POLICY "Public Read Governing Body" ON public.governing_body FOR SELECT USING (true);
CREATE POLICY "Public Read Implementation Team" ON public.implementation_team FOR SELECT USING (true);
CREATE POLICY "Public Read Advisory Team" ON public.advisory_team FOR SELECT USING (true);
CREATE POLICY "Public Read Sponsors" ON public.sponsors_partners FOR SELECT USING (true);
CREATE POLICY "Public Read Impact Metrics" ON public.impact_metrics FOR SELECT USING (true);
CREATE POLICY "Public Read Pages" ON public.website_pages FOR SELECT USING (true);
CREATE POLICY "Public Read Sections" ON public.website_sections FOR SELECT USING (true);
CREATE POLICY "Public Read Settings" ON public.website_settings FOR SELECT USING (true);
CREATE POLICY "Public Read Media" ON public.media_library FOR SELECT USING (true);

-- Public INSERT for contact form
CREATE POLICY "Public Insert Contact Submissions" ON public.contact_submissions FOR INSERT WITH CHECK (true);

-- Authenticated Admin / Anon Key write access for administrative CRUD
-- (Allows full administrative capabilities using Supabase Client)
CREATE POLICY "Admin Full Hero Slides" ON public.hero_slides FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Admin Full Activities" ON public.activities FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Admin Full Gallery" ON public.gallery_items FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Admin Full Governing Body" ON public.governing_body FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Admin Full Implementation Team" ON public.implementation_team FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Admin Full Advisory Team" ON public.advisory_team FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Admin Full Sponsors" ON public.sponsors_partners FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Admin Full Impact Metrics" ON public.impact_metrics FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Admin Full Pages" ON public.website_pages FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Admin Full Sections" ON public.website_sections FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Admin Full Settings" ON public.website_settings FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Admin Full Media" ON public.media_library FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Admin Full Contact Submissions" ON public.contact_submissions FOR ALL USING (true) WITH CHECK (true);

-- Realtime Publication for instant content synchronization
ALTER PUBLICATION supabase_realtime ADD TABLE public.hero_slides;
ALTER PUBLICATION supabase_realtime ADD TABLE public.activities;
ALTER PUBLICATION supabase_realtime ADD TABLE public.gallery_items;
ALTER PUBLICATION supabase_realtime ADD TABLE public.advisory_team;
ALTER PUBLICATION supabase_realtime ADD TABLE public.sponsors_partners;
ALTER PUBLICATION supabase_realtime ADD TABLE public.impact_metrics;
ALTER PUBLICATION supabase_realtime ADD TABLE public.website_sections;
ALTER PUBLICATION supabase_realtime ADD TABLE public.website_settings;
