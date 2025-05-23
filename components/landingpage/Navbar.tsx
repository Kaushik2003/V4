'use client';
import React, { useState, useEffect } from 'react';
import { Button } from "../../components/ui/button";
import { cn } from "../../lib/utils";
import Image from 'next/image'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-16",
        isScrolled ? "bg-v4-dark/90 backdrop-blur-lg shadow-lg" : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-v4-purple to-v4-blue flex items-center justify-center">
            <Image src="/logo.png" width={500} height={500} alt="Logo"/>
          </div>
          
        </div>
        
        {/* Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
          <a href="#timeline" className="text-gray-300 hover:text-white transition-colors">Timeline</a>
          <a href="#contribute" className="text-gray-300 hover:text-white transition-colors">Contribute</a>
          <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
        </nav>
        
        {/* CTA Button */}
        <Button className="bg-v4-purple hover:bg-v4-purple/90 text-white">
          Get Early Access
        </Button>
      </div>
    </header>
  );
};

export default Navbar;