import React from 'react';
import { Button } from "../../components/ui/button";
import { Github } from "lucide-react";

const contributions = [
  {
    title: "Frontend Development",
    skills: ["React", "TypeScript", "Tailwind CSS"],
    description: "Help build the user interface and implement interactive features."
  },
  {
    title: "AI Integration",
    skills: ["Python", "NLP", "Machine Learning"],
    description: "Contribute to our AI assistance features and language processing capabilities."
  },
  {
    title: "UX/UI Design",
    skills: ["Figma", "User Research", "Interaction Design"],
    description: "Design intuitive interfaces and experiences for students."
  },
  {
    title: "Documentation",
    skills: ["Technical Writing", "Markdown", "Tutorials"],
    description: "Create guides, API documentation, and user tutorials."
  }
];

const Contribute = () => {
  return (
    <section id="contribute" className="py-24 bg-gradient-to-b from-black to-v4-dark relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Open Source <span className="text-gradient">Contribution</span></h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            V4 is an open source project. Join our community and help us build the future of student productivity.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contributions.map((item, index) => (
            <div key={index} className="glass-card rounded-xl p-6 border border-white/5 hover:border-v4-purple/30 transition-all hover:translate-y-[-5px]">
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {item.skills.map((skill, idx) => (
                  <span key={idx} className="text-xs py-1 px-2 rounded-full bg-v4-purple/20 text-v4-purple">
                    {skill}
                  </span>
                ))}
              </div>
              <p className="text-gray-300 text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="glass-card max-w-4xl mx-auto rounded-xl p-8 md:p-12 border border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">Ready to contribute?</h3>
              <p className="text-gray-300">
                Check out our GitHub repository for issues, documentation, and contribution guidelines.
              </p>
            </div>
            <Button className="bg-white hover:bg-white/90 text-black">
              <Github className="mr-2 h-5 w-5" />
              View on GitHub
            </Button>
          </div>
        </div>
      </div>
      
      {/* Circle decorations */}
      <div className="absolute top-10 left-10 w-72 h-72 rounded-full border border-dashed border-v4-purple/20 opacity-30"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full border border-dashed border-v4-blue/20 opacity-30"></div>
      <div className="absolute top-40 right-40 w-48 h-48 rounded-full border border-dashed border-v4-purple/20 opacity-30"></div>
    </section>
  );
};

export default Contribute;