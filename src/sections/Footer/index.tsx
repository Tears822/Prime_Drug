import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-auto">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/logo.png" 
                alt="Prime Laboratory" 
                className="h-10 w-auto"
              />
              <div className="flex flex-col">
                <span className="text-xl font-heading font-bold text-brand-blue">Prime Laboratory</span>
                <span className="text-xs text-brand-gray-dark uppercase tracking-wider">High Performance</span>
              </div>
            </div>
            <p className="text-gray-600 text-sm mb-4 max-w-md">
              Premium quality supplements for athletes and fitness enthusiasts. 
              Reach your maximum potential with scientifically-backed products.
            </p>
            <p className="text-xs text-gray-500">
              © {new Date().getFullYear()} Prime Laboratory. All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-600 hover:text-brand-blue text-sm transition-colors">Home</Link></li>
              <li><Link to="/catalog" className="text-gray-600 hover:text-brand-blue text-sm transition-colors">Products</Link></li>
              <li><Link to="/about" className="text-gray-600 hover:text-brand-blue text-sm transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-brand-blue text-sm transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Verify */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Product Verification</h3>
            <p className="text-gray-600 text-sm mb-4">
              Verify your product authenticity with our secure verification system.
            </p>
            <Link
              to="/verify"
              className="inline-block bg-brand-blue text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-brand-blue-dark transition-colors"
            >
              Verify Now
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
