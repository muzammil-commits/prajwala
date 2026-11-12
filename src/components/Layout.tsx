import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { Header } from './Header';
import { Footer } from './Footer';
import { DonateModal } from './Modals';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [donateOpen, setDonateOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 420);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col overflow-x-hidden">
      {/* Whole-Website Animated Background (image copy 4.png) for both Desktop & Mobile */}
      <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none">
        <img
          src="/assets/backgrounds/site-bg.png"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover animate-bg-float opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/80 to-[#F3F8FC]/85 backdrop-blur-[1px]" />
      </div>

      <Header onOpenDonate={() => setDonateOpen(true)} />

      <main className="flex-1 relative z-10">{children}</main>

      <Footer onOpenDonate={() => setDonateOpen(true)} />

      <DonateModal isOpen={donateOpen} onClose={() => setDonateOpen(false)} />

      {/* Back to Top */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Back to top"
            className="fixed bottom-5 right-5 z-40 w-11 h-11 rounded-full bg-[#078B3B] hover:bg-[#082F70] text-white shadow-lg flex items-center justify-center transition-colors cursor-pointer"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};
