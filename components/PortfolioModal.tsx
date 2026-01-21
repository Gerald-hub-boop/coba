import React from 'react';
import { X, Calendar, Heart, MapPin } from 'lucide-react';
import { PortfolioItem } from '../types';

interface PortfolioModalProps {
  item: PortfolioItem | null;
  onClose: () => void;
}

export default function PortfolioModal({ item, onClose }: PortfolioModalProps) {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-white rounded-2xl overflow-hidden max-w-4xl w-full max-h-[90vh] flex flex-col md:flex-row shadow-2xl animate-in fade-in zoom-in duration-300">
        
        {/* Close Button Mobile */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-black/50 rounded-full text-white md:hidden hover:bg-black/70"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Image Section */}
        <div className="w-full md:w-3/5 bg-slate-900 h-64 md:h-auto relative">
          <img 
            src={item.image} 
            alt={item.title} 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Details Section */}
        <div className="w-full md:w-2/5 p-6 md:p-8 overflow-y-auto bg-white flex flex-col">
          <div className="flex justify-between items-start mb-4">
            <div>
              <span className="inline-block py-1 px-3 rounded-full text-xs font-bold uppercase tracking-wider mb-2 bg-emerald-100 text-emerald-700">
                {item.category}
              </span>
              <h3 className="text-2xl font-bold text-slate-900 leading-tight">{item.title}</h3>
            </div>
            {/* Close Button Desktop */}
            <button 
              onClick={onClose}
              className="hidden md:block p-2 hover:bg-slate-100 rounded-full text-slate-400 hover:text-slate-600 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex items-center gap-4 mb-6 text-sm text-slate-500 border-b border-slate-100 pb-6">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{item.date}</span>
            </div>
            {item.location && (
               <div className="flex items-center gap-1">
               <MapPin className="w-4 h-4" />
               <span>{item.location}</span>
             </div>
            )}
          </div>

          <p className="text-slate-600 leading-relaxed mb-8 flex-grow">
            {item.description}
          </p>

          <div className="flex items-center justify-between pt-6 border-t border-slate-100">
             <div className="flex items-center gap-2">
                <button className="text-emerald-600 hover:text-emerald-700 transition-colors">
                    <Heart className="w-6 h-6 fill-current" />
                </button>
                <span className="font-bold text-slate-900">{item.likes} likes</span>
             </div>
             <button className="text-sm font-semibold text-slate-400 hover:text-emerald-600 transition-colors">
                Share Project
             </button>
          </div>
        </div>
      </div>
    </div>
  );
}