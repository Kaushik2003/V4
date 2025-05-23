import React from 'react';
import { Button } from "../../components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative pt-24 pb-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-v4-purple/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-v4-blue/20 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto relative z-10 px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 lg:pr-16 mb-12 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-gradient">AI-powered</span> productivity for students
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg">
              Manage your courses, tasks, and study routines with a futuristic, modular interface designed to boost your academic performance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/dashboard" passHref>
                <Button variant="outline" className="text-v4-purple border-v4-purple hover:bg-v4-purple/10 px-8 py-6">
                  Join V4
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            
            <div className="mt-10 flex items-center">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full bg-v4-purple flex items-center justify-center">S</div>
                <div className="w-10 h-10 rounded-full bg-v4-blue flex items-center justify-center">A</div>
                <div className="w-10 h-10 rounded-full bg-v4-purple/70 flex items-center justify-center">T</div>
                <div className="w-10 h-10 rounded-full bg-v4-blue/70 flex items-center justify-center">+</div>
              </div>
              <p className="ml-4 text-sm text-gray-300">
                Join <span className="text-white font-medium">100+</span> students already on the waitlist
              </p>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <div className="relative">
              {/* Mock App UI */}
              <div className="w-full rounded-xl overflow-hidden border border-white/10 shadow-2xl">
                <div className="h-6 bg-black/40 flex items-center px-4">
                  <div className="flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                    <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  </div>
                </div>
                <div className="bg-v4-dark p-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="glass-card rounded-lg p-3 animate-pulse-glow">
                      <h3 className="text-sm font-medium mb-2">Dashboard</h3>
                      <div className="h-20 bg-white/5 rounded"></div>
                    </div>
                    <div className="glass-card rounded-lg p-3">
                      <h3 className="text-sm font-medium mb-2">Tasks</h3>
                      <div className="space-y-2">
                        <div className="h-3 w-full bg-white/5 rounded"></div>
                        <div className="h-3 w-4/5 bg-white/5 rounded"></div>
                        <div className="h-3 w-2/3 bg-white/5 rounded"></div>
                      </div>
                    </div>
                    <div className="glass-card rounded-lg p-3">
                      <h3 className="text-sm font-medium mb-2">Courses</h3>
                      <div className="space-y-2">
                        <div className="h-3 w-full bg-white/5 rounded"></div>
                        <div className="h-3 w-3/4 bg-white/5 rounded"></div>
                      </div>
                    </div>
                    <div className="glass-card rounded-lg p-3">
                      <h3 className="text-sm font-medium mb-2">AI Assistant</h3>
                      <div className="h-20 bg-gradient-to-r from-v4-purple/20 to-v4-blue/20 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 glass-card rounded-lg p-2 rotate-6 animate-float">
                <div className="h-4 w-4/5 bg-v4-purple/40 rounded mb-2"></div>
                <div className="h-3 w-full bg-white/10 rounded mb-1"></div>
                <div className="h-3 w-2/3 bg-white/10 rounded"></div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 w-24 h-24 glass-card rounded-lg p-2 -rotate-12 animate-float" style={{ animationDelay: "1s" }}>
                <div className="h-4 w-4/5 bg-v4-blue/40 rounded mb-2"></div>
                <div className="h-3 w-full bg-white/10 rounded mb-1"></div>
                <div className="h-3 w-4/5 bg-white/10 rounded mb-1"></div>
                <div className="h-3 w-2/3 bg-white/10 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
