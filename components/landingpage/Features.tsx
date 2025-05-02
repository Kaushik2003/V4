import React from 'react';
import { Calendar, Clock, BookOpen, Focus, BookMarked, Bot } from "lucide-react"; 
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";

const features = [
  {
    icon: <BookOpen className="h-6 w-6 text-v4-purple" />,
    title: "Course Manager",
    description: "Organize all your course materials, tasks, notes, and resources in one place."
  },
  {
    icon: <Calendar className="h-6 w-6 text-v4-purple" />,
    title: "Planner",
    description: "Drag-and-drop weekly calendar for planning study sessions and exams."
  },
  {
    icon: <Clock className="h-6 w-6 text-v4-purple" />,
    title: "Focus Mode",
    description: "Pomodoro timer with background music and optional webcam for accountability."
  },
  {
    icon: <BookMarked className="h-6 w-6 text-v4-purple" />,
    title: "Notes & Flashcards",
    description: "Markdown-based editor with flashcard creation linked to your courses."
  },
  {
    icon: <Bot className="h-6 w-6 text-v4-purple" />,
    title: "AI Assistant",
    description: "Get help with summarizing notes, creating study plans, and breaking down assignments."
  },
  {
    icon: <Focus className="h-6 w-6 text-v4-purple" />,
    title: "Task Manager",
    description: "Prioritize tasks with drag-and-drop interface and deadline tracking."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-gradient-to-b from-v4-dark to-black relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Supercharge Your <span className="text-gradient">Academic Success</span></h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Designed specifically for students, V4 combines powerful productivity tools with AI to help you excel in your studies.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="glass-card border-white/5 hover:border-v4-purple/40 transition-colors bg-transparent">
              <CardHeader className="pb-2">
                <div className="mb-2 p-2 rounded-lg bg-white/5 inline-block">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute top-1/3 right-0 w-72 h-72 bg-v4-blue/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-v4-purple/10 rounded-full filter blur-3xl"></div>
    </section>
  );
};

export default Features;