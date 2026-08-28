import React, { useState, useEffect } from 'react';
import { Page } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { QuickQuoteModal } from './components/QuickQuoteModal';
import { HomeView } from './views/HomeView';
import { ServicesView } from './views/ServicesView';
import { PricingView } from './views/PricingView';
import { GalleryView } from './views/GalleryView';
import { AboutView } from './views/AboutView';
import { BookingView } from './views/BookingView';
import { ContactView } from './views/ContactView';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [quoteModalOpen, setQuoteModalOpen] = useState<boolean>(false);

  // Sync hash or history if needed
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as Page;
      if (['home', 'services', 'pricing', 'gallery', 'about', 'book', 'contact'].includes(hash)) {
        setCurrentPage(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: Page) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderActiveView = () => {
    switch (currentPage) {
      case 'services':
        return <ServicesView onNavigate={navigateTo} />;
      case 'pricing':
        return <PricingView onNavigate={navigateTo} />;
      case 'gallery':
        return <GalleryView onNavigate={navigateTo} />;
      case 'about':
        return <AboutView onNavigate={navigateTo} />;
      case 'book':
        return <BookingView onNavigate={navigateTo} />;
      case 'contact':
        return <ContactView onNavigate={navigateTo} />;
      case 'home':
      default:
        return <HomeView onNavigate={navigateTo} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0B0B0D] text-zinc-100 selection:bg-[#C5A059] selection:text-black">
      {/* Top Navigation */}
      <Navbar
        currentPage={currentPage}
        onNavigate={navigateTo}
        onOpenBookingModal={() => setQuoteModalOpen(true)}
      />

      {/* Main Content View with Fade Transition */}
      <main className="flex-1">
        {renderActiveView()}
      </main>

      {/* Luxury Footer */}
      <Footer onNavigate={navigateTo} />

      {/* Floating Action Bar (Call / WhatsApp / Book) */}
      <FloatingActions onNavigate={navigateTo} />

      {/* Fast 30-Second Quote Modal */}
      <QuickQuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        onGoToFullBooking={() => navigateTo('book')}
      />
    </div>
  );
}
