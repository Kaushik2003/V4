import React from 'react';
import { Card, CardContent } from "../../components/ui/card";
import { cn } from "../../lib/utils";

const timelineItems = [
  {
    date: "Q2 2025",
    title: "Public Beta Release",
    description: "Open access to V4 with core features including Course Manager, Task Manager, and basic AI assistance.",
    icon: "🚀",
    isActive: true
  },
  {
    date: "Q3 2025",
    title: "Full AI Integration",
    description: "Enhanced AI capabilities for personalized study plans, task prioritization, and content summarization.",
    icon: "🤖",
    isActive: false
  },
  {
    date: "Q4 2025",
    title: "Mobile Apps Launch",
    description: "Native mobile applications for iOS and Android with cross-platform synchronization.",
    icon: "📱",
    isActive: false
  },
  {
    date: "Q1 2026",
    title: "Learning Analytics",
    description: "Advanced analytics to track study patterns, identify knowledge gaps, and optimize learning strategies.",
    icon: "📊",
    isActive: false
  },
  {
    date: "Q2 2026",
    title: "V4 Enterprise",
    description: "Institutional version with group collaboration features, instructor tools, and administrative controls.",
    icon: "🏛️",
    isActive: false
  }
];

const Timeline = () => {
  return (
    <section id="timeline" className="py-24 bg-black relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Project <span className="text-gradient">Roadmap</span></h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Our development timeline and upcoming milestones for the V4 productivity platform.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 ml-1 md:-ml-1 top-0 bottom-0 w-0.5 bg-gradient-to-b from-v4-purple via-v4-blue to-v4-purple/30"></div>
          
          {timelineItems.map((item, index) => (
            <div key={index} className={cn(
              "relative flex flex-col md:flex-row md:items-center mb-12",
              index % 2 === 0 ? "md:justify-start" : "md:flex-row-reverse"
            )}>
              {/* Timeline node */}
              <div className="absolute left-4 md:left-1/2 ml-1 md:-ml-3 flex items-center justify-center">
                <div className={cn(
                  "w-6 h-6 rounded-full flex items-center justify-center z-10",
                  item.isActive ? "bg-v4-purple animate-pulse-glow" : "bg-gray-700"
                )}>
                  {item.isActive && <div className="w-2 h-2 rounded-full bg-white"></div>}
                </div>
              </div>
              
              <div className={cn(
                "pl-12 md:pl-0 md:w-1/2",
                index % 2 === 0 ? "md:pr-12" : "md:pl-12"
              )}>
                <Card className={cn(
                  "glass-card border-white/5 overflow-hidden",
                  item.isActive && "border-v4-purple/50"
                )}>
                  <CardContent className="p-6">
                    <div className="text-4xl mb-3">{item.icon}</div>
                    <div className="inline-block px-3 py-1 rounded-full bg-white/10 text-xs font-semibold mb-2">
                      {item.date}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-300">{item.description}</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-v4-purple/5 rounded-full filter blur-3xl"></div>
    </section>
  );
};

export default Timeline;