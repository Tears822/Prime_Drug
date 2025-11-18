import React from "react";
import { Link, useLocation } from "react-router-dom";

export const Header = () => {
  const location = useLocation();
  
  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/catalog", label: "Products" },
    { path: "/about", label: "About Us" },
    { path: "/contact", label: "Contact" },
    { path: "/verify", label: "Verify Product" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
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
  );
};
