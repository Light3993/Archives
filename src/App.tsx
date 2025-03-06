import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { AuthProvider } from './components/auth/AuthProvider';
import { ProtectedRoute } from './components/auth/ProtectedRoute';
import { Navbar } from './components/layout/Navbar';
import { Sidebar } from './components/layout/Sidebar';
import { Footer } from './components/layout/Footer';
import { MobileNav } from './components/layout/MobileNav';
import { Home } from './pages/Home';
import { Login } from './components/auth/Login';
import { Licence } from './pages/Licence';
import { Master } from './pages/Master';
import { Concours } from './pages/Concours';
import { Annonces } from './pages/Annonces';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
  const [isPageLoading, setIsPageLoading] = React.useState(false);

  // Close sidebar on route change
  const handleRouteChange = () => {
    if (window.innerWidth < 768) {
      setIsSidebarOpen(false);
    }
  };

  // Handle window resize
  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsSidebarOpen(true);
      } else {
        setIsSidebarOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen-dynamic bg-gray-50 flex flex-col">
          <Navbar 
            onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} 
            isSidebarOpen={isSidebarOpen} 
          />
          
          <div className="flex-1 flex">
            <Sidebar 
              isOpen={isSidebarOpen} 
              onToggle={() => setIsSidebarOpen(!isSidebarOpen)}
              onNavigate={handleRouteChange}
            />
            
            <main className={`flex-1 transition-all duration-300 ease-in-out
              ${isSidebarOpen ? 'md:ml-sidebar' : 'ml-0'}
              pt-header pb-16 md:pb-0 px-4 md:px-8`}
            >
              <AnimatePresence mode="wait">
                {isPageLoading ? (
                  <div className="flex items-center justify-center min-h-[50vh]">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
                  </div>
                ) : (
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/licence/*" element={
                      <ProtectedRoute>
                        <Licence />
                      </ProtectedRoute>
                    } />
                    <Route path="/master/*" element={
                      <ProtectedRoute>
                        <Master />
                      </ProtectedRoute>
                    } />
                    <Route path="/concours" element={<Concours />} />
                    <Route path="/annonces" element={<Annonces />} />
                  </Routes>
                )}
              </AnimatePresence>
              
              <Footer />
            </main>
          </div>
          
          <MobileNav />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;