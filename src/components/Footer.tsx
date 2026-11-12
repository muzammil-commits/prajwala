import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Youtube, Instagram, Heart } from 'lucide-react';
import { ORG_INFO } from '../data/pcdsData';

export const Footer: React.FC<{ onOpenDonate: () => void }> = ({ onOpenDonate }) => (
  <footer className="relative bg-[#082F70] text-white border-t-4 border-[#078B3B]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
      {/* Brand */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <img
            src="/assets/logo/pcds-logo.png"
            alt="PCDS Official Logo"
            className="w-14 h-14 rounded-full bg-white object-contain p-0.5 shadow-md"
          />
          <div>
            <div className="font-bold text-base leading-snug">
              PRAJWALA COMMUNITY DEVELOPMENT SOCIETY
            </div>
            <div className="text-xs text-[#36A852] font-semibold tracking-wider uppercase">
              GUNTUR • REGD. 240/2019
            </div>
          </div>
        </div>
        <p className="text-sm text-white/80 leading-relaxed">
          {ORG_INFO.tagline}. Established on {ORG_INFO.establishedDate} to empower vulnerable and marginalized communities across Guntur, Andhra Pradesh.
        </p>
        <button
          onClick={onOpenDonate}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D71920] hover:bg-[#b5141a] text-white text-sm font-semibold shadow-md transition-colors cursor-pointer"
        >
          <Heart className="w-4 h-4 fill-white" />
          <span>Support Our Mission</span>
        </button>
      </div>

      {/* Quick Links */}
      <div>
        <h3 className="text-sm font-bold uppercase tracking-wider text-[#36A852] mb-4">
          Quick Links
        </h3>
        <ul className="space-y-2.5 text-sm text-white/85">
          <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
          <li><Link to="/major-activities" className="hover:text-white transition-colors">Major Activities</Link></li>
          <li><Link to="/ongoing-projects" className="hover:text-white transition-colors">Ongoing Projects (Old Age Home)</Link></li>
          <li><Link to="/future-plans" className="hover:text-white transition-colors">Future Plans</Link></li>
          <li><Link to="/gallery" className="hover:text-white transition-colors">Gallery</Link></li>
          <li><Link to="/donate" className="hover:text-white transition-colors">Donate Now</Link></li>
          <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
        </ul>
      </div>

      {/* Organization Links */}
      <div>
        <h3 className="text-sm font-bold uppercase tracking-wider text-[#36A852] mb-4">
          Organization
        </h3>
        <ul className="space-y-2.5 text-sm text-white/85">
          <li><Link to="/organization/about-us" className="hover:text-white transition-colors">About Us</Link></li>
          <li><Link to="/organization/vision-mission" className="hover:text-white transition-colors">Vision, Mission &amp; Values</Link></li>
          <li><Link to="/organization/objectives" className="hover:text-white transition-colors">Objectives</Link></li>
          <li><Link to="/organization/target-beneficiaries" className="hover:text-white transition-colors">Target Beneficiaries</Link></li>
          <li><Link to="/organization/impact-achievements" className="hover:text-white transition-colors">Impact &amp; Achievements</Link></li>
          <li><Link to="/organization/awards" className="hover:text-white transition-colors">Awards &amp; Recognitions</Link></li>
          <li><Link to="/organization/legal-information" className="hover:text-white transition-colors">Legal Information (12A / 80G)</Link></li>
          <li><Link to="/organization/structure" className="hover:text-white transition-colors">Organization Structure &amp; Team</Link></li>
        </ul>
      </div>

      {/* Contact Details */}
      <div>
        <h3 className="text-sm font-bold uppercase tracking-wider text-[#36A852] mb-4">
          Contact Us
        </h3>
        <ul className="space-y-3 text-sm text-white/85">
          <li className="flex items-start gap-2.5">
            <MapPin className="w-4 h-4 text-[#36A852] shrink-0 mt-1" />
            <span>{ORG_INFO.address}</span>
          </li>
          <li className="flex items-center gap-2.5">
            <Phone className="w-4 h-4 text-[#36A852] shrink-0" />
            <a href="tel:+919502046096" className="hover:text-white">{ORG_INFO.phone}</a>
          </li>
          <li className="flex items-center gap-2.5">
            <Mail className="w-4 h-4 text-[#36A852] shrink-0" />
            <a href={`mailto:${ORG_INFO.email}`} className="hover:text-white">{ORG_INFO.email}</a>
          </li>
        </ul>

        <div className="mt-5 flex items-center gap-3">
          <a
            href={ORG_INFO.social.facebookUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#078B3B] flex items-center justify-center transition-colors"
          >
            <Facebook className="w-4 h-4" />
          </a>
          <a
            href={ORG_INFO.social.youtubeUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="YouTube"
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#D71920] flex items-center justify-center transition-colors"
          >
            <Youtube className="w-4 h-4" />
          </a>
          <a
            href={ORG_INFO.social.instagramUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#078B3B] flex items-center justify-center transition-colors"
          >
            <Instagram className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>

    <div className="border-t border-white/10 bg-[#062356]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/75">
        <span>
          © {new Date().getFullYear()} Prajwala Community Development Society (PCDS), Guntur. All Rights Reserved.
        </span>
        <span>Regd. No: 240/2019 | NGO Darpan: AP/2021/0280454 | 12A &amp; 80G Certified</span>
      </div>
    </div>
  </footer>
);
