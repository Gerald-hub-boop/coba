import React, { useState, useEffect } from 'react';
import { Mic, Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    setIsMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const isHome = location.pathname === '/';

  // Dynamic classes based on scroll state and current page
  // If not on home (e.g. Portfolio), always show "scrolled" style (solid bg)
  const showSolidNav = isScrolled || !isHome;

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        showSolidNav ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            <div className={`p-2 rounded-full transition-colors duration-300 ${
              showSolidNav ? 'bg-emerald-100 text-emerald-600' : 'bg-white text-emerald-600'
            }`}>
              <Mic className="w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className={`font-bold text-lg leading-tight transition-colors duration-300 ${
                showSolidNav ? 'text-slate-900' : 'text-white'
              }`}>UKM MC</span>
              <span className={`text-xs font-medium tracking-wide transition-colors duration-300 ${
                showSolidNav ? 'text-emerald-600' : 'text-amber-300'
              }`}>UPNVJ</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => handleNavClick('home')} className={`text-sm font-medium transition-colors hover:text-amber-400 ${showSolidNav ? 'text-slate-600' : 'text-slate-200'}`}>Beranda</button>
            <button onClick={() => handleNavClick('about')} className={`text-sm font-medium transition-colors hover:text-amber-400 ${showSolidNav ? 'text-slate-600' : 'text-slate-200'}`}>Tentang Kami</button>
            <button onClick={() => handleNavClick('services')} className={`text-sm font-medium transition-colors hover:text-amber-400 ${showSolidNav ? 'text-slate-600' : 'text-slate-200'}`}>Layanan</button>
            
            <Link to="/portfolio" className={`text-sm font-medium transition-colors hover:text-amber-400 ${showSolidNav ? 'text-slate-600' : 'text-slate-200'}`}>Portfolio</Link>
            
            <button onClick={() => handleNavClick('contact')} className={`text-sm font-medium transition-colors hover:text-amber-400 ${showSolidNav ? 'text-slate-600' : 'text-slate-200'}`}>Kontak</button>
            
            <a href="https://forms.gle/xxxxx" target="_blank" rel="noreferrer"
              className={`inline-flex items-center justify-center px-4 py-2 text-sm font-semibold rounded-full transition-all shadow-lg ${
                showSolidNav 
                ? 'bg-emerald-600 text-white hover:bg-emerald-700 hover:shadow-emerald-500/30' 
                : 'bg-amber-400 text-slate-900 hover:bg-amber-500 hover:shadow-amber-400/30'
              }`}
            >
              Join Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-md transition-colors ${
                showSolidNav ? 'text-slate-900 hover:bg-slate-100' : 'text-white hover:bg-white/10'
              }`}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-slate-100 transition-all duration-300 origin-top transform ${
        isMenuOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 hidden'
      }`}>
        <div className="flex flex-col px-4 py-6 space-y-4">
          <button onClick={() => handleNavClick('home')} className="text-left text-slate-700 font-medium hover:text-emerald-600 transition-colors block p-2">Beranda</button>
          <button onClick={() => handleNavClick('about')} className="text-left text-slate-700 font-medium hover:text-emerald-600 transition-colors block p-2">Tentang Kami</button>
          <button onClick={() => handleNavClick('services')} className="text-left text-slate-700 font-medium hover:text-emerald-600 transition-colors block p-2">Layanan</button>
          <Link to="/portfolio" onClick={() => setIsMenuOpen(false)} className="text-left text-slate-700 font-medium hover:text-emerald-600 transition-colors block p-2">Portfolio</Link>
          <button onClick={() => handleNavClick('contact')} className="text-left text-slate-700 font-medium hover:text-emerald-600 transition-colors block p-2">Kontak</button>
          <a href="https://forms.gle/xxxxx" target="_blank" rel="noreferrer"
            className="w-full inline-flex items-center justify-center px-6 py-3 text-base font-semibold rounded-full bg-emerald-600 text-white hover:bg-emerald-700 shadow-lg hover:shadow-emerald-500/30 transition-all"
          >
            Daftar Anggota
          </a>
        </div>
      </div>
    </nav>
  );
}