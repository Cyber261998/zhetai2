import React from 'react';
import { Logo } from './common/Logo';
import { Navigation } from './navigation/Navigation';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <Logo className="mb-4" textColorClass="text-white" />
            <p className="text-gray-400">Your trusted partner for international money transfers since 1995.</p>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <Navigation 
              className="flex flex-col space-y-2" 
              itemClassName="text-gray-400 hover:text-white"
            />
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li>International Transfers</li>
              <li>Business Remittance</li>
              <li>Currency Exchange</li>
              <li>Online Banking</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Compliance</li>
              <li>License Information</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Zhe Tai (Hong Kong) International Remittance Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}