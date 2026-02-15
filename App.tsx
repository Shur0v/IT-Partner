
import React, { useState, useEffect } from 'react';
import { PageType } from './types';
import { Navbar } from './components/Layout/Navbar';
import { Footer } from './components/Layout/Footer';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { MigrationDetail } from './pages/MigrationDetail';
import { Contact } from './pages/Contact';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageType>('HOME');

  // Handle routing based on hash if needed, or just stay within state for this SPA
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'HOME': return <Home setPage={setCurrentPage} />;
      case 'SERVICES': return <Services setPage={setCurrentPage} />;
      case 'MIGRATION': return <MigrationDetail setPage={setCurrentPage} />;
      case 'CONTACT': return <Contact />;
      default: return <Home setPage={setCurrentPage} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar currentPage={currentPage} setPage={setCurrentPage} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
