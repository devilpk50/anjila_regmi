import React, { useState, useEffect } from 'react';
import { Music2, Menu, X, Volume2, Sun, Moon } from 'lucide-react';
import { YoutubeIcon, FacebookIcon, InstagramIcon } from './Icons';
import { artistData } from '../data/artist';
import { useTheme } from '../context/ThemeContext';

interface NavbarProps {
  isPlayingAudio: boolean;
  onToggleAudio: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ isPlayingAudio, onToggleAudio }) => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Exactly 5 streamlined navigation links
  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Music', href: '#music', id: 'music' },
    { name: 'Videos', href: '#videos', id: 'videos' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = ['home', 'about', 'music', 'videos', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-charcoal-950/90 backdrop-blur-xl border-b border-gold/15 py-3.5 shadow-2xl shadow-black/60'
            : 'bg-gradient-to-b from-charcoal-950/80 via-charcoal-950/40 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo with Gold AR Emblem */}
          <a
            href="#home"
            className="group flex items-center gap-2.5 sm:gap-3 text-left"
            aria-label="Anjila Regmi Official Home"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-tr from-gold-600 via-gold to-gold-light p-[1.5px] shadow-[0_0_15px_rgba(212,175,55,0.35)] group-hover:scale-105 group-hover:shadow-[0_0_20px_rgba(212,175,55,0.6)] transition-all">
              <div className="w-full h-full rounded-full bg-charcoal-950 flex items-center justify-center">
                <span className="font-cinzel text-xs sm:text-sm font-black text-gold-gradient tracking-tighter">AR</span>
              </div>
            </div>
            <div className="flex flex-col tracking-widest">
              <span className="font-cinzel text-base sm:text-lg font-bold tracking-[0.25em] text-ivory group-hover:text-gold transition-colors leading-none">
                ANJILA
              </span>
              <span className="font-cormorant text-[11px] sm:text-xs tracking-[0.35em] text-gold-300 font-light group-hover:text-gold-100 transition-colors">
                REGMI
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links (Exactly 5 items) */}
          <nav className="hidden md:flex items-center space-x-2 lg:space-x-4">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`px-4 py-1.5 text-xs font-semibold tracking-[0.2em] uppercase transition-all rounded-full ${
                    isActive
                      ? 'text-gold bg-gold/10 border border-gold/30 shadow-[0_0_12px_rgba(212,175,55,0.2)]'
                      : 'text-ivory-soft/80 hover:text-gold hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Socials, Theme & Audio Controls */}
          <div className="hidden sm:flex items-center space-x-3">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full border border-white/10 text-ivory-muted hover:border-gold/40 hover:text-gold bg-charcoal-800/40 transition-all flex items-center justify-center hover:scale-105"
              title={theme === 'dark' ? "Switch to Light Theme" : "Switch to Dark Theme"}
              aria-label="Toggle Theme Mode"
            >
              {theme === 'dark' ? (
                <Sun size={16} className="text-gold-300 hover:rotate-45 transition-transform" />
              ) : (
                <Moon size={16} className="text-gold-600 hover:-rotate-12 transition-transform" />
              )}
            </button>

            {/* Ambient Sound / Audio Player trigger */}
            <button
              onClick={onToggleAudio}
              className={`p-2 rounded-full border transition-all flex items-center justify-center ${
                isPlayingAudio
                  ? 'border-gold bg-gold/20 text-gold shadow-[0_0_15px_rgba(212,175,55,0.4)] animate-pulse'
                  : 'border-white/10 text-ivory-muted hover:border-gold/40 hover:text-gold bg-charcoal-800/40'
              }`}
              title={isPlayingAudio ? "Pause Music Preview" : "Play Music Preview"}
              aria-label="Toggle Sound"
            >
              {isPlayingAudio ? <Volume2 size={16} className="text-gold" /> : <Music2 size={16} />}
            </button>

            {/* Social Icons */}
            <a
              href={artistData.socialLinks.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-ivory-soft hover:text-red-500 hover:bg-white/5 rounded-full transition-all border border-transparent hover:border-white/10"
              title="Official YouTube Channel"
              aria-label="YouTube Channel"
            >
              <YoutubeIcon size={17} />
            </a>
            <a
              href={artistData.socialLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-ivory-soft hover:text-blue-400 hover:bg-white/5 rounded-full transition-all border border-transparent hover:border-white/10"
              title="Official Facebook Page"
              aria-label="Facebook Profile"
            >
              <FacebookIcon size={17} />
            </a>
            <a
              href={artistData.socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-ivory-soft hover:text-pink-400 hover:bg-white/5 rounded-full transition-all border border-transparent hover:border-white/10"
              title="Official Instagram"
              aria-label="Instagram Profile"
            >
              <InstagramIcon size={17} />
            </a>
          </div>

          {/* Mobile Menu & Theme Button */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full border border-white/10 text-ivory-muted hover:border-gold/40 hover:text-gold transition-all"
              aria-label="Toggle Theme Mode"
            >
              {theme === 'dark' ? <Sun size={16} className="text-gold-300" /> : <Moon size={16} className="text-gold-600" />}
            </button>
            <button
              onClick={onToggleAudio}
              className={`p-2 rounded-full border transition-all ${
                isPlayingAudio ? 'border-gold bg-gold/20 text-gold' : 'border-white/10 text-ivory-muted'
              }`}
              aria-label="Toggle Sound"
            >
              <Music2 size={16} />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-ivory-soft hover:text-gold transition-colors focus:outline-none"
              aria-label="Open Navigation Menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-charcoal-950/95 backdrop-blur-2xl md:hidden pt-24 px-6 flex flex-col justify-between pb-10 animate-fadeIn">
          <div className="space-y-3 overflow-y-auto max-h-[70vh]">
            <div className="text-xs uppercase tracking-[0.3em] text-gold-300 font-semibold mb-4 border-b border-white/10 pb-2 flex items-center justify-between">
              <span>Official Navigation</span>
              <button
                onClick={toggleTheme}
                className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold/10 border border-gold/20 text-gold text-[11px] font-semibold tracking-wider uppercase"
              >
                {theme === 'dark' ? <Sun size={13} /> : <Moon size={13} />}
                <span>{theme === 'dark' ? 'Light Theme' : 'Dark Theme'}</span>
              </button>
            </div>
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-3 text-base font-medium tracking-[0.2em] uppercase transition-colors ${
                  activeSection === link.id
                    ? 'text-gold pl-3 border-l-2 border-gold bg-gold/5'
                    : 'text-ivory-soft hover:text-gold'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-6 border-t border-white/10 space-y-4">
            <div className="flex items-center justify-around">
              <a
                href={artistData.socialLinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs uppercase tracking-widest text-ivory-soft hover:text-red-400"
              >
                <YoutubeIcon size={18} className="text-red-500" />
                <span>YouTube</span>
              </a>
              <a
                href={artistData.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs uppercase tracking-widest text-ivory-soft hover:text-blue-400"
              >
                <FacebookIcon size={18} className="text-blue-400" />
                <span>Facebook</span>
              </a>
              <a
                href={artistData.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs uppercase tracking-widest text-ivory-soft hover:text-pink-400"
              >
                <InstagramIcon size={18} className="text-pink-400" />
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
