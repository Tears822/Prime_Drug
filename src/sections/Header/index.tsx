import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

export const Header = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/catalog", label: "Products" },
    { path: "/about", label: "About Us" },
    { path: "/contact", label: "Contact" },
    { path: "/verify", label: "Verify Product" },
  ];

  const isActive = (path: string) => location.pathname === path;

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-brand-blue transition-colors"
              aria-label="Toggle menu"
            >
              <Menu className="h-6 w-6" />
            </button>

            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <img 
                src="/logo.png" 
                alt="Prime Laboratory" 
                className="h-12 w-auto"
              />
              <div className="flex flex-col">
                <span className="text-2xl font-heading font-bold text-brand-blue">Prime Laboratory</span>
                <span className="text-xs text-brand-gray-dark uppercase tracking-wider">High Performance</span>
              </div>
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium transition-colors relative ${
                    isActive(link.path)
                      ? "text-brand-blue"
                      : "text-gray-700 hover:text-brand-blue"
                  }`}
                >
                  {link.label}
                  {isActive(link.path) && (
                    <span className="absolute -bottom-[18px] left-0 right-0 h-0.5 bg-brand-blue"></span>
                  )}
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <Link
              to="/verify"
              className="hidden md:block bg-brand-blue text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-brand-blue-dark transition-colors"
            >
              Verify Product
            </Link>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={closeMobileMenu}
        />
      )}

      {/* Mobile Slide-in Menu */}
      <div 
        className={`fixed top-0 left-0 h-full w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <h2 className="text-xl font-heading font-bold text-brand-blue">Quick Links</h2>
            <button
              onClick={closeMobileMenu}
              className="p-2 text-gray-700 hover:text-brand-blue transition-colors"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Mobile Menu Links */}
          <nav className="flex-1 overflow-y-auto py-6">
            <div className="space-y-1 px-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={closeMobileMenu}
                  className={`flex items-center px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                    isActive(link.path)
                      ? "bg-brand-blue text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Mobile CTA Section */}
            <div className="mt-8 px-4">
              <Link
                to="/verify"
                onClick={closeMobileMenu}
                className="block w-full bg-brand-blue text-white px-6 py-3 rounded-lg text-center text-base font-medium hover:bg-brand-blue-dark transition-colors"
              >
                Verify Product
              </Link>
            </div>
          </nav>

          {/* Mobile Menu Footer */}
          <div className="p-6 border-t border-gray-200">
            <p className="text-xs text-gray-500 text-center">
              © 2025 Prime Laboratory
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
