import React, { useState } from 'react';
import { Page } from '../types';
import { GALLERY_PROJECTS } from '../data/content';
import { DetailingImage } from '../components/DetailingImage';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';
import { Sparkles, Eye, ChevronRight, Check } from 'lucide-react';

interface GalleryViewProps {
  onNavigate: (page: Page) => void;
}

export const GalleryView: React.FC<GalleryViewProps> = ({ onNavigate }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<typeof GALLERY_PROJECTS[0] | null>(null);

  const categories = ['All', 'Ceramic Coating', 'Paint Correction', 'Mobile Detailing', 'Exterior Detailing'];

  const filteredProjects = activeCategory === 'All'
    ? GALLERY_PROJECTS
    : GALLERY_PROJECTS.filter(p => p.category === activeCategory);

  return (
    <div className="bg-[#0A0A0C] min-h-screen">
      {/* Header Banner */}
      <section className="py-16 sm:py-24 px-6 sm:px-12 border-b border-white/10 bg-gradient-to-b from-[#141418] to-[#0A0A0C] text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="text-[#C5A059] text-xs uppercase tracking-[0.3em] font-mono-luxury font-bold block">
            Visual Proof & Masterpieces
          </span>
          <h1 className="text-4xl sm:text-6xl font-editorial font-black uppercase text-white tracking-tight">
            Portfolio & Detailing Results
          </h1>
          <p className="text-zinc-400 max-w-xl mx-auto text-sm leading-relaxed">
            Witness the gloss, depth, and optical perfection delivered on luxury, exotic, and daily driver vehicles across Los Angeles.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 pt-6 font-mono-luxury text-xs">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 uppercase tracking-wider transition-all border ${
                  activeCategory === cat
                    ? 'bg-[#C5A059] border-[#C5A059] text-black font-bold'
                    : 'border-white/10 bg-[#101014] text-zinc-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Before/After Interactive Transformation */}
      <section className="py-16 px-6 sm:px-12 border-b border-white/10 bg-[#08080A]">
        <div className="max-w-5xl mx-auto space-y-6">
          <div className="text-center space-y-2">
            <span className="text-[#C5A059] text-xs uppercase tracking-[0.25em] font-mono-luxury font-bold">
              Interactive Clear-Coat Inspection
            </span>
            <h2 className="text-3xl font-editorial font-bold text-white">
              Optical Paint Correction Showcase
            </h2>
          </div>
          <BeforeAfterSlider />
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 px-6 sm:px-12">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((proj, idx) => (
              <div
                key={proj.id}
                className="bg-[#0E0E12] border border-white/10 overflow-hidden flex flex-col justify-between group hover:border-[#C5A059]/60 transition-all"
              >
                <div className="h-72 sm:h-80 relative overflow-hidden bg-black flex items-center justify-center">
                  <DetailingImage imageKey={proj.imageKey} allowZoom={true} className="h-full w-full border-none" />
                  <div className="absolute top-4 right-4 bg-black/85 border border-[#C5A059]/40 text-[#C5A059] text-[10px] font-mono-luxury uppercase tracking-widest px-3 py-1 z-20">
                    {proj.badge}
                  </div>
                </div>

                <div className="p-6 sm:p-8 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex justify-between items-center text-xs font-mono-luxury text-zinc-400 mb-2">
                      <span className="text-[#C5A059] uppercase tracking-wider font-bold">0{idx + 1}. {proj.category}</span>
                      <span>{proj.vehicle}</span>
                    </div>

                    <h3 className="text-2xl font-editorial font-bold text-white mb-2 group-hover:text-[#C5A059] transition-colors">
                      {proj.title}
                    </h3>

                    <p className="text-xs text-zinc-300 leading-relaxed">
                      {proj.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <button
                      onClick={() => setSelectedProject(proj)}
                      className="text-xs uppercase font-mono-luxury text-zinc-400 hover:text-white flex items-center gap-1.5"
                    >
                      <Eye className="w-4 h-4 text-[#C5A059]" /> Inspect Specifications
                    </button>

                    <button
                      onClick={() => onNavigate('book')}
                      className="bg-[#C5A059] hover:bg-white text-black font-bold px-5 py-2 text-xs uppercase font-mono-luxury tracking-wider transition-all"
                    >
                      Book Similar
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Inspection Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#0E0E12] border border-[#C5A059] max-w-2xl w-full p-6 sm:p-8 space-y-6 relative animate-in fade-in zoom-in-95 duration-150">
            <div className="flex justify-between items-start border-b border-white/10 pb-4">
              <div>
                <span className="text-[#C5A059] text-xs font-mono-luxury uppercase tracking-widest font-bold">
                  {selectedProject.category}
                </span>
                <h3 className="text-2xl font-editorial font-bold text-white mt-1">
                  {selectedProject.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-zinc-400 hover:text-white text-xl px-2"
              >
                ✕
              </button>
            </div>

            <div className="h-64 relative border border-white/10">
              <DetailingImage imageKey={selectedProject.imageKey} className="h-full w-full border-none" />
            </div>

            <div className="space-y-3 text-xs text-zinc-300">
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-zinc-500 font-mono-luxury">Vehicle Target</span>
                <span className="text-white font-bold">{selectedProject.vehicle}</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-zinc-500 font-mono-luxury">Work Performed</span>
                <span className="text-white">{selectedProject.description}</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-zinc-500 font-mono-luxury">Service Area</span>
                <span className="text-[#C5A059]">Greater Los Angeles</span>
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-2">
              <button
                onClick={() => setSelectedProject(null)}
                className="border border-white/20 text-white px-6 py-2.5 text-xs font-mono-luxury uppercase tracking-widest"
              >
                Close
              </button>
              <button
                onClick={() => {
                  setSelectedProject(null);
                  onNavigate('book');
                }}
                className="bg-[#C5A059] text-black font-bold px-6 py-2.5 text-xs font-mono-luxury uppercase tracking-widest hover:bg-white transition-all"
              >
                Book This Package
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
