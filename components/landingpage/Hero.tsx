// components/landingpage/Hero.tsx
'use client';

import React from 'react';
import { Button } from "../../components/ui/button";
import { ArrowRight, Bot } from "lucide-react";
import Link from 'next/link';
import { motion } from 'framer-motion';
import { cn } from "@/lib/utils";
import Image from 'next/image';

const Hero = () => {
  const textContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  const mockUiVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", delay: 0.4 } }
  };

  // Assuming Navbar height is roughly 88px (5.5rem). Adjust if different.
  // This padding will be applied to the content container within the full-height section.
  const navbarHeightPaddingTop = "pt-[88px] sm:pt-[96px] md:pt-[100px]";
  const sectionVerticalPadding = "pb-12 md:pb-16";


  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex flex-col justify-center overflow-hidden" // Full viewport height, flex column, content centered
    >
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-v4-dark via-black to-v4-dark opacity-60"></div>
        <div className="absolute top-1/4 left-0 w-60 h-60 md:w-80 md:h-80 bg-v4-purple/10 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-0 w-72 h-72 md:w-96 md:h-96 bg-v4-blue/10 rounded-full filter blur-3xl animate-pulse [animation-delay:2s]"></div>
      </div>

      <div className={cn("container mx-auto relative z-10 px-4", navbarHeightPaddingTop, sectionVerticalPadding)}>
        <div className="flex flex-col lg:flex-row items-center">
          <motion.div
            className="w-full lg:w-[55%] xl:w-1/2 lg:pr-10 xl:pr-16 mb-12 lg:mb-0 text-center lg:text-left"
            initial="hidden"
            animate="visible"
            variants={textContainerVariants}
          >
            <motion.h1
              className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tighter"
              variants={textVariants}
            >
              <span className="text-gradient">AI-Powered</span> Productivity for Students
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-gray-300/80 mb-8 md:mb-10 max-w-xl mx-auto lg:mx-0"
              variants={textVariants}
            >
              Manage your courses, tasks, and study routines with a futuristic, modular interface designed to boost your academic performance.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              variants={textVariants}
            >
              <Link href="/dashboard" passHref>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-v4-purple to-v4-blue text-white hover:opacity-90 shadow-lg hover:shadow-v4-purple/40 px-8 py-3 text-base md:text-lg rounded-lg transform transition-all duration-200 hover:scale-105 active:scale-95 group"
                >
                  Launch V4
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
                </Button>
              </Link>
            </motion.div>
            <motion.p
              className="text-xs text-gray-400/70 mt-3"
              variants={textVariants}
            >
              Access your dashboard or sign up to get started.
            </motion.p>

            <motion.div
              className="mt-10 md:mt-12 flex items-center justify-center lg:justify-start"
              variants={textVariants}
            >
              <div className="flex -space-x-2.5">
                {['S', 'A', 'T', '+'].map((char, idx) => (
                  <div key={idx} className={`w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center text-white font-semibold border-2 border-white/15 shadow-md`}>
                    {char}
                  </div>
                ))}
              </div>
              <p className="ml-3 md:ml-4 text-sm text-gray-300/80">
                Join <span className="text-white font-medium">100+</span> students on the waitlist
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            className="w-full lg:w-[45%] xl:w-1/2 mt-10 lg:mt-0"
            initial="hidden"
            animate="visible"
            variants={mockUiVariants}
          >
            <div className="relative transform lg:scale-105 xl:scale-100"> {/* Adjusted scale slightly */}
              <div className="w-full rounded-xl overflow-hidden border border-white/10 shadow-2xl backdrop-blur-sm bg-black/40">
                <div className="h-7 md:h-8 bg-slate-800/50 flex items-center px-3 md:px-4 border-b border-white/10">
                  <div className="flex gap-1.5 md:gap-2">
                    <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-red-500/70"></div>
                    <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-yellow-500/70"></div>
                    <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-green-500/70"></div>
                  </div>
                </div>
                <div className="p-3 md:p-4">
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { title: "Dashboard", pulse: true, height: "h-20 md:h-24" },
                      { title: "Tasks", lines: 3, height: "h-auto" },
                      { title: "Courses", lines: 2, height: "h-auto" },
                      { title: "AI Assistant", gradient: true, icon: Bot, height: "h-20 md:h-24" }
                    ].map(item => (
                      <div key={item.title} className={`glass-card rounded-md md:rounded-lg p-3 ${item.pulse ? 'animate-pulse' : ''} ${item.height}`}>
                        <h3 className="text-xs md:text-sm font-semibold text-white/80 mb-1.5 md:mb-2">{item.title}</h3>
                        {item.lines && (
                          <div className="space-y-1.5">
                            {[...Array(item.lines)].map((_, i) => (
                              <div key={i} className={`h-2.5 md:h-3 bg-white/10 rounded-sm ${i === 0 ? 'w-full' : i === 1 ? 'w-4/5' : 'w-2/3'}`}></div>
                            ))}
                          </div>
                        )}
                        {item.gradient && item.icon && (
                           <div className="h-[calc(100%-1.75rem)] w-full bg-gradient-to-br from-v4-purple/15 to-v4-blue/15 rounded-md flex items-center justify-center">
                            <item.icon className="w-6 h-6 md:w-8 md:h-8 text-v4-blue/60 opacity-70" />
                          </div>
                        )}
                         {!item.lines && !item.gradient && (
                          <div className="h-[calc(100%-1.75rem)] w-full bg-white/10 rounded-md"></div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="absolute -top-5 -right-5 w-20 h-20 md:w-24 md:h-24 glass-card rounded-lg p-2.5 rotate-12 animate-float shadow-xl border border-white/5">
                <div className="h-3 w-4/5 bg-v4-purple/40 rounded-sm mb-1"></div>
                <div className="h-2.5 w-full bg-white/10 rounded-sm mb-0.5"></div>
                <div className="h-2.5 w-2/3 bg-white/10 rounded-sm"></div>
              </div>

              <div className="absolute -bottom-6 -left-6 w-24 h-24 md:w-28 md:h-28 glass-card rounded-lg p-2.5 -rotate-12 animate-float [animation-delay:1s] shadow-xl border border-white/5">
                <div className="h-3 w-4/5 bg-v4-blue/40 rounded-sm mb-1"></div>
                <div className="h-2.5 w-full bg-white/10 rounded-sm mb-0.5"></div>
                <div className="h-2.5 w-4/5 bg-white/10 rounded-sm mb-0.5"></div>
                <div className="h-2.5 w-2/3 bg-white/10 rounded-sm"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;