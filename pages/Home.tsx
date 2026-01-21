import React from 'react';
import { ChevronRight, PlayCircle, Gavel, Users, Award, BookOpen, Mic2, Radio, CheckCircle, ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '../components/UseScrollAnimation';
import { Link } from 'react-router-dom';

export default function Home() {
  useScrollAnimation();

  return (
    <>
      {/* Hero Section */}
      <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=2070&auto=format&fit=crop" alt="Public Speaking" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/90 via-slate-900/80 to-slate-900/90"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-on-scroll is-visible">
          <span className="inline-block py-1 px-3 rounded-full bg-amber-400/20 text-amber-300 text-sm font-bold tracking-wider mb-6 border border-amber-400/30">
            EST. 2014 - UPN VETERAN JAKARTA
          </span>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
            Elevate Your Voice, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-amber-300">
              Inspire the World
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            Wadah pengembangan diri mahasiswa UPNVJ dalam bidang Public Speaking dan Master of Ceremony untuk mencetak generasi yang cerdas, berkarakter, dan percaya diri.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#services" className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-full bg-emerald-600 text-white hover:bg-emerald-700 shadow-lg hover:shadow-emerald-500/30 transition-all">
              Partner With Us <ChevronRight className="ml-2 w-5 h-5" />
            </a>
            <a href="#about" className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-full border-2 border-white text-white hover:bg-white/10 transition-all">
              <PlayCircle className="mr-2 w-5 h-5" /> Explore UKM MC
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/50 animate-bounce text-center">
  <span className="text-sm">Scroll Down</span>
</div>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Image & Stats */}
            <div className="relative animate-on-scroll">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
                <img src="https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=2070&auto=format&fit=crop" alt="UKM MC Team" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-emerald-900/20"></div>
              </div>
              {/* Floating Card */}
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl max-w-xs border-l-4 border-amber-400 hidden md:block">
                <div className="flex items-start gap-3">
                  <Gavel className="w-8 h-8 text-emerald-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-slate-900">Dasar Hukum</h4>
                    <p className="text-sm text-slate-600 mt-1">SK Rektor UPNVJ No. SKEP/18/I/2014</p>
                    <p className="text-xs text-slate-400 mt-1">28 Januari 2014</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="animate-on-scroll delay-200">
              <div className="mb-8">
                <span className="inline-block py-1 px-3 rounded-full text-xs font-bold uppercase tracking-wider mb-3 bg-emerald-100 text-emerald-700">Tentang Kami</span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Membangun Kepercayaan Diri Lewat Public Speaking</h2>
                <div className="h-1.5 w-20 bg-emerald-600 rounded-full mt-4"></div>
              </div>

              <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                UKM Master of Ceremony (MC) UPN Veteran Jakarta adalah wadah bagi mahasiswa yang memiliki minat dan bakat dalam dunia Public Speaking. Sejak berdiri pada tahun 2014, kami telah mencetak banyak talenta yang berprestasi baik di dalam maupun di luar kampus.
              </p>

              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="text-center p-4 bg-slate-50 rounded-lg">
                  <Users className="w-6 h-6 mx-auto text-emerald-600 mb-2" />
                  <div className="font-bold text-2xl text-slate-900">100+</div>
                  <div className="text-xs text-slate-500 uppercase tracking-wide">Anggota</div>
                </div>
                <div className="text-center p-4 bg-slate-50 rounded-lg">
                  <Award className="w-6 h-6 mx-auto text-emerald-600 mb-2" />
                  <div className="font-bold text-2xl text-slate-900">2014</div>
                  <div className="text-xs text-slate-500 uppercase tracking-wide">Berdiri</div>
                </div>
                <div className="text-center p-4 bg-slate-50 rounded-lg">
                  <BookOpen className="w-6 h-6 mx-auto text-emerald-600 mb-2" />
                  <div className="font-bold text-2xl text-slate-900">25+</div>
                  <div className="text-xs text-slate-500 uppercase tracking-wide">Proker</div>
                </div>
              </div>
            </div>
          </div>

          {/* Vision Mission */}
          <div className="bg-slate-900 rounded-3xl p-8 md:p-12 overflow-hidden relative animate-on-scroll">
            <div className="absolute top-0 right-0 p-32 bg-emerald-600/20 rounded-full blur-3xl -mr-16 -mt-16"></div>
            <div className="absolute bottom-0 left-0 p-32 bg-amber-400/10 rounded-full blur-3xl -ml-16 -mb-16"></div>

            <div className="relative z-10">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-white mb-2">Visi & Misi</h3>
                <div className="h-1 w-20 bg-amber-400 mx-auto rounded-full"></div>
              </div>

              <div className="grid md:grid-cols-2 gap-10">
                <div className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-amber-400 rounded-lg text-slate-900">
                      <Award className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl font-bold text-white">Visi Organisasi</h4>
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    "Menjadi unit kegiatan mahasiswa yang unggul dalam bidang Public Speaking dan berprestasi didalam maupun diluar kampus."
                  </p>
                </div>

                <div className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-emerald-500 rounded-lg text-white">
                      <Users className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl font-bold text-white">Misi Organisasi</h4>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 w-1.5 h-1.5 bg-emerald-400 rounded-full flex-shrink-0"></span>
                      <span className="text-slate-300">Memberikan motivasi dan pembelajaran langsung untuk memiliki rasa percaya diri dan karakter unggul.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 w-1.5 h-1.5 bg-emerald-400 rounded-full flex-shrink-0"></span>
                      <span className="text-slate-300">Pelatihan melalui praktek atau terjun langsung di segala event di bidang Public Speaking.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <span className="inline-block py-1 px-3 rounded-full text-xs font-bold uppercase tracking-wider mb-3 bg-emerald-100 text-emerald-700">Layanan Kami</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Kolaborasi & Kerjasama</h2>
            <div className="h-1.5 w-20 bg-emerald-600 rounded-full mt-4 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* MC Service */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 flex flex-col animate-on-scroll delay-100">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-emerald-100 text-emerald-600">
                <Mic2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Jasa Master of Ceremony</h3>
              <p className="text-slate-600 mb-8 flex-grow">Hadirkan suasana profesional dan hidup dalam acara Anda dengan MC terlatih kami. Cocok untuk seminar, webinar, event formal, maupun informal.</p>
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-500" />
                  <span className="text-slate-700 font-medium">MC Formal & Semi-Formal</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-500" />
                  <span className="text-slate-700 font-medium">Moderator Seminar</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-500" />
                  <span className="text-slate-700 font-medium">Voice Over Talent</span>
                </div>
              </div>
              <a href="https://wa.me/6281385929948" target="_blank" rel="noreferrer" className="w-full inline-flex items-center justify-between px-6 py-3 font-semibold rounded-full bg-emerald-600 text-white hover:bg-emerald-700 shadow-lg hover:shadow-emerald-500/30 transition-all group">
                Hubungi Kami <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            {/* Media Partner */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 flex flex-col animate-on-scroll delay-200">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-amber-100 text-amber-600">
                <Radio className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Media Partner</h3>
              <p className="text-slate-600 mb-8 flex-grow">Tingkatkan jangkauan event kampus atau umum Anda melalui jaringan media sosial UKM MC UPNVJ yang aktif dan engaging.</p>
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-amber-500" />
                  <span className="text-slate-700 font-medium">Promosi Instagram Story & Feed</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-amber-500" />
                  <span className="text-slate-700 font-medium">Kolaborasi Konten</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-amber-500" />
                  <span className="text-slate-700 font-medium">Engagement Audens Mahasiswa</span>
                </div>
              </div>
              <a href="https://wa.me/6281234567890" target="_blank" rel="noreferrer" className="w-full inline-flex items-center justify-between px-6 py-3 font-semibold rounded-full bg-amber-400 text-slate-900 hover:bg-amber-500 shadow-lg hover:shadow-amber-400/30 transition-all group">
                Hubungi Kami <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Preview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <span className="inline-block py-1 px-3 rounded-full text-xs font-bold uppercase tracking-wider mb-3 bg-emerald-100 text-emerald-700">Portfolio</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Galeri Dokumentasi</h2>
            <div className="h-1.5 w-20 bg-emerald-600 rounded-full mt-4 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden group">
               <img src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2070" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Preview 1"/>
               <div className="absolute inset-0 bg-black/40"></div>
            </div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden group">
               <img src="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=2070" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Preview 2"/>
               <div className="absolute inset-0 bg-black/40"></div>
            </div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden group">
               <img src="https://images.unsplash.com/photo-1544928147-79a77456a1d3?q=80&w=2071" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Preview 3"/>
               <div className="absolute inset-0 bg-black/40"></div>
            </div>
          </div>

          <div className="text-center animate-on-scroll">
            <p className="text-slate-600 mb-6">Lihat lebih banyak dokumentasi kegiatan kami di halaman portfolio.</p>
            <Link to="/portfolio" className="inline-flex items-center justify-center px-8 py-3 text-lg font-semibold rounded-full border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white transition-all">
              Lihat Full Portfolio
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
