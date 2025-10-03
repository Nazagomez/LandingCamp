import React, { useState } from 'react';
import { Navbar, Footer } from 'flowbite-react';
import { Palmtree as PalmTree, Facebook, Instagram, Twitter } from 'lucide-react';
import { useLocation } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    // If we're on the home page, scroll to the section
    if (location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        setIsMenuOpen(false);
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If we're on another page, navigate to home and then scroll
      setIsMenuOpen(false);
      window.location.href = `/#${sectionId}`;
    }
  };

  const isActiveRoute = (path: string): boolean => {
    return location.pathname === path;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navigation */}
      <Navbar fluid className="fixed w-full z-50 bg-white/95 border-b backdrop-blur-sm">
        <Navbar.Brand href="/">
          <PalmTree className="text-primary-600 h-8 w-8 mr-2" />
          <span className="self-center text-xl font-semibold whitespace-nowrap">Nosara Day Camp</span>
        </Navbar.Brand>
        <Navbar.Toggle onClick={() => setIsMenuOpen(!isMenuOpen)} />
        <Navbar.Collapse className={isMenuOpen ? 'show' : ''}>
          <Navbar.Link 
            href="/"
            active={isActiveRoute('/')}
            onClick={(e) => {
              e.preventDefault();
              if (location.pathname === '/') {
                scrollToSection('inicio');
              } else {
                window.location.href = '/';
              }
            }}
          >
            Home
          </Navbar.Link>
          <Navbar.Link 
            href="/#servicios"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('servicios');
            }}
          >
            Services
          </Navbar.Link>
          <Navbar.Link 
            href="/#reservas"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('reservas');
            }}
          >
            Reserves
          </Navbar.Link>
          <Navbar.Link 
            href="/#equipo"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('equipo');
            }}
          >
            Team
          </Navbar.Link>
          <Navbar.Link 
            href="/#galeria"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('galeria');
            }}
          >
            Gallery
          </Navbar.Link>
          <Navbar.Link 
            href="/#contacto"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('contacto');
            }}
          >
            Contact
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>

      {/* Main Content */}
      <main className="pt-16">
        {children}
      </main>

      {/* Footer - Only show on home page */}
      {location.pathname === '/' && (
        <Footer container className="bg-gray-900">
          <div className="container mx-auto">
            <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
              <div className="space-y-4 mb-8">
                <Footer.Brand
                  href="/"
                  src="https://flowbite.com/docs/images/logo.svg"
                  alt="Nosara Day Camp Logo"
                  name="Nosara Day Camp"
                />
                <div className="text-gray-400">
                  <p>Playa Nosara, Guanacaste</p>
                  <p>Costa Rica</p>
                  <p>Tel: +506 2222-3333</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
                <div>
                  <Footer.Title title="Síguenos" />
                  <Footer.LinkGroup col>
                    <div className="flex gap-4">
                      <Facebook className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer" />
                      <Instagram className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer" />
                      <Twitter className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer" />
                    </div>
                  </Footer.LinkGroup>
                </div>
              </div>
            </div>
            <Footer.Divider />
            <Footer.Copyright
              href="#"
              by="Nosara Day Camp™"
              year={2024}
            />
          </div>
        </Footer>
      )}
    </div>
  );
};

export default Layout;
