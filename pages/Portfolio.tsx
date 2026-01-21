import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data';
import { Category, PortfolioItem } from '../types';
import PortfolioModal from '../components/PortfolioModal';
import { Heart, MessageCircle } from 'lucide-react';

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('All');
  const [filteredData, setFilteredData] = useState<PortfolioItem[]>(portfolioData);
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (selectedCategory === 'All') {
      setFilteredData(portfolioData);
    } else {
      setFilteredData(portfolioData.filter(item => item.category === selectedCategory));
    }
  }, [selectedCategory]);

  const categories: Category[] = ['All', 'Campus Event', 'Corporate', 'Competition'];

  return (
    <div className="min-h-screen bg-white pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
           <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">Our Portfolio</h1>
           <p className="text-lg text-slate-600 max-w-2xl mx-auto">
             Jejak rekam prestasi dan kontribusi UKM MC UPNVJ dalam berbagai event berskala kampus, nasional, hingga internasional.
           </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                selectedCategory === cat
                  ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-200'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-4">
          {filteredData.map((item) => (
            <div 
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group relative aspect-square overflow-hidden cursor-pointer bg-slate-100"
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Overlay Hover Effect */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white p-4 text-center">
                <div className="flex gap-4 mb-3 font-bold">
                    <div className="flex items-center gap-1">
                        <Heart className="w-5 h-5 fill-white" />
                        <span>{item.likes}</span>
                    </div>
                </div>
                <h3 className="font-bold text-lg leading-tight mb-1">{item.title}</h3>
                <span className="text-xs text-amber-300 uppercase tracking-wider">{item.category}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredData.length === 0 && (
          <div className="text-center py-20 bg-slate-50 rounded-xl">
            <p className="text-slate-500">Belum ada portfolio untuk kategori ini.</p>
          </div>
        )}

      </div>

      {/* Detail Modal */}
      {selectedItem && (
        <PortfolioModal 
          item={selectedItem} 
          onClose={() => setSelectedItem(null)} 
        />
      )}
    </div>
  );
}