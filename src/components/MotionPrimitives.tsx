import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface RevealProps {
  children: React.ReactNode;
  direction?: 'up' | 'left' | 'right' | 'none';
  delay?: number;
  className?: string;
}

export const ScrollReveal: React.FC<RevealProps> = ({
  children,
  direction = 'up',
  delay = 0,
  className = '',
}) => {
  const initialOffset =
    direction === 'up'
      ? { y: 28, x: 0 }
      : direction === 'left'
      ? { x: -32, y: 0 }
      : direction === 'right'
      ? { x: 32, y: 0 }
      : { x: 0, y: 0 };

  return (
    <motion.div
      initial={{ opacity: 0, ...initialOffset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const StaggerGrid: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = '',
}) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.08 }}
    variants={{
      hidden: {},
      visible: { transition: { staggerChildren: 0.07 } },
    }}
    className={className}
  >
    {children}
  </motion.div>
);

export const StaggerItem: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = '',
}) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 22 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
    }}
    className={className}
  >
    {children}
  </motion.div>
);

export const CountUpNumber: React.FC<{ target: number; suffix?: string }> = ({
  target,
  suffix = '',
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let startTime: number | null = null;
    const duration = 1400;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    const raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {count.toLocaleString('en-IN')}
      {suffix}
    </span>
  );
};

interface PageBannerProps {
  title: string;
  subtitle: string;
  breadcrumb: { label: string; to?: string }[];
  badge?: string;
}

export const PageBanner: React.FC<PageBannerProps> = ({ title, subtitle, breadcrumb, badge }) => (
  <section className="relative overflow-hidden bg-gradient-to-r from-[#082F70] via-[#0753A6] to-[#078B3B] text-white py-14 md:py-20 shadow-lg">
    <div className="absolute inset-0 opacity-15 pointer-events-none">
      <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-white/20 blur-3xl" />
      <div className="absolute -bottom-24 -left-16 w-72 h-72 rounded-full bg-[#36A852]/30 blur-3xl" />
    </div>
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-xs sm:text-sm text-white/85 mb-4">
        <Link to="/" className="inline-flex items-center gap-1 hover:text-white transition-colors">
          <Home className="w-3.5 h-3.5" />
          <span>Home</span>
        </Link>
        {breadcrumb.map((item, idx) => (
          <React.Fragment key={idx}>
            <ChevronRight className="w-3.5 h-3.5 text-white/60" />
            {item.to ? (
              <Link to={item.to} className="hover:text-white transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="font-semibold text-white">{item.label}</span>
            )}
          </React.Fragment>
        ))}
      </nav>

      {badge && (
        <span className="inline-block px-3.5 py-1 rounded-full bg-white/15 border border-white/25 text-xs font-semibold tracking-wide uppercase mb-3">
          {badge}
        </span>
      )}
      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight"
      >
        {title}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mt-3 text-base sm:text-lg text-white/90 max-w-3xl leading-relaxed"
      >
        {subtitle}
      </motion.p>
    </div>
  </section>
);

