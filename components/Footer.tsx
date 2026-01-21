import React from 'react';
import { MessageCircle, Instagram, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer id="contact" className="bg-slate-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* CTA Banner */}
        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 mb-20 shadow-2xl relative overflow-hidden animate-on-scroll is-visible">
          <div className="absolute top-0 right-0 p-32 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
          <div className="relative z-10 text-center md:text-left">
            <h2 className="text-3xl font-bold mb-2">Tertarik bergabung dengan kami?</h2>
            <p className="text-emerald-100 text-lg">Jadilah bagian dari keluarga besar UKM MC UPNVJ.</p>
          </div>
          <div className="relative z-10 shrink-0">
            <a href="https://forms.gle/xxxxx" target="_blank" rel="noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-full bg-amber-400 text-slate-900 hover:bg-amber-500 shadow-lg hover:shadow-amber-400/30 transition-all"
            >
              Daftar Sekarang
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 border-b border-slate-800 pb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="p-2 bg-emerald-600 rounded-lg">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold">UKM MC UPNVJ</h3>
            </div>
            <p className="text-slate-400 mb-6 max-w-sm leading-relaxed">
              Mewujudkan mahasiswa yang percaya diri, berkarakter, dan berprestasi melalui seni Public Speaking. Bersuara untuk menginspirasi.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-emerald-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-emerald-600 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-emerald-400">Kontak Kami</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-400">
                <MapPin className="w-5 h-5 text-emerald-600 shrink-0 mt-1" />
                <span>UPN Veteran Jakarta<br />Jl. RS. Fatmawati Raya, Pondok Labu</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <Mail className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>ukmmc@upnvj.ac.id</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <Phone className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>+62 812-3456-7890</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-emerald-400">Menu</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-slate-400 hover:text-white transition-colors">Beranda</Link></li>
              <li><Link to="/portfolio" className="text-slate-400 hover:text-white transition-colors">Portfolio</Link></li>
            </ul>
          </div>
        </div>

        <div className="text-center text-slate-500 text-sm">
          <p>&copy; 2024 UKM MC UPNVJ. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}