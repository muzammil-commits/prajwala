import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation, Navigate } from 'react-router-dom';
import { AnimatePresence, MotionConfig, motion } from 'framer-motion';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import {
  AboutPage,
  AdvisoryTeamPage,
  AwardsPage,
  ImpactAchievementsPage,
  ImplementationTeamPage,
  LegalInfoPage,
  ObjectivesPage,
  OrgStructurePage,
  TargetBeneficiariesPage,
  VisionMissionPage,
  WhySupportUsPage,
} from './pages/OrganizationPages';
import { ActivityDetailPage, MajorActivitiesPage } from './pages/ActivitiesPages';
import {
  ContactPage,
  DonatePage,
  FuturePlansPage,
  GalleryPage,
  OngoingProjectsPage,
} from './pages/ProjectsAndCommunityPages';

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname]);
  return null;
};

const AnimatedRoutes: React.FC = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.24, ease: 'easeOut' }}
      >
        <Routes location={location}>
          <Route path="/" element={<HomePage />} />

          {/* Organization Routes */}
          <Route path="/organization/about-us" element={<AboutPage />} />
          <Route path="/organization/vision-mission" element={<VisionMissionPage />} />
          <Route path="/organization/objectives" element={<ObjectivesPage />} />
          <Route path="/organization/target-beneficiaries" element={<TargetBeneficiariesPage />} />
          <Route path="/organization/impact-achievements" element={<ImpactAchievementsPage />} />
          <Route path="/organization/awards" element={<AwardsPage />} />
          <Route path="/organization/legal-information" element={<LegalInfoPage />} />
          <Route path="/organization/structure" element={<OrgStructurePage />} />
          <Route path="/organization/implementation-team" element={<ImplementationTeamPage />} />
          <Route path="/organization/advisory-team" element={<AdvisoryTeamPage />} />
          <Route path="/organization/why-support-us" element={<WhySupportUsPage />} />

          {/* Activities Routes */}
          <Route path="/major-activities" element={<MajorActivitiesPage />} />
          <Route path="/activities/:slug" element={<ActivityDetailPage />} />

          {/* Projects, Future, Gallery, Donate & Contact */}
          <Route path="/ongoing-projects" element={<OngoingProjectsPage />} />
          <Route path="/future-plans" element={<FuturePlansPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/donate" element={<DonatePage />} />
          <Route path="/contact" element={<ContactPage />} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
};

export function App() {
  return (
    <MotionConfig reducedMotion="user">
      <BrowserRouter>
        <ScrollToTop />
        <Layout>
          <AnimatedRoutes />
        </Layout>
      </BrowserRouter>
    </MotionConfig>
  );
}

export default App;

