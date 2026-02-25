/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Instagram, 
  Twitter, 
  Youtube, 
  Linkedin, 
  ArrowUpRight, 
  Play,
  Sparkles,
  Menu,
  X
} from 'lucide-react';

// --- Types ---

interface Client {
  id: number;
  name: string;
  category: string;
  description: string;
}

// --- Data ---

const CLIENTS: Client[] = [
  { id: 1, name: "Cricstudioinc", category: "Sports Content", description: "Cricket content & brand building - Building a strong community around sports content" },
  { id: 2, name: "Shiva Optics Plus", category: "Premium Eyewear", description: "Transforming premium eyewear brand presence with sophisticated, minimal design" },
  { id: 3, name: "Shiva Enterprise", category: "E-commerce", description: "Modern eyewear e-commerce social strategy - Thoughtfully selected products" },
  { id: 4, name: "The Quick Craft", category: "AI & VR Solutions", description: "AI-powered design & VR solutions - Leveraging AI and human creativity" },
  { id: 5, name: "Dronagiri Herbal", category: "Skincare & Haircare", description: "Natural skincare & haircare brand launch - 100% herbal products" },
  { id: 6, name: "Shivaangi Hostel", category: "Student Accommodation", description: "Student accommodation brand building - Establishing trust within education community" },
];

const CATEGORIES = ["All", "Sports Content", "Premium Eyewear", "E-commerce", "AI & VR Solutions", "Skincare & Haircare"];

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 px-6 py-4 flex items-center justify-between transition-all duration-300 ${isScrolled ? 'bg-brand-dark/80 backdrop-blur-md border-b border-white/10' : ''}`}>
      <div className="text-2xl font-bold italic tracking-tighter">
        Say It <span className="text-brand-teal">Social</span>
      </div>
      
      <div className="hidden md:flex items-center bg-white/5 border border-white/10 rounded-full p-1">
        <button className="bg-white/10 text-brand-teal text-xs font-bold px-4 py-2 rounded-full">Social Media</button>
        <button className="text-gray-500 text-xs font-bold px-4 py-2 rounded-full hover:text-white transition-colors">Web Design</button>
      </div>

      <motion.button 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-gradient-to-r from-brand-teal to-brand-yellow text-brand-dark font-bold px-6 py-2.5 rounded-md text-sm shadow-[0_0_20px_rgba(45,212,191,0.2)]"
      >
        Connect With Our Team
      </motion.button>
    </nav>
  );
};

const StatItem = ({ value, label, color = "teal" }: { value: string, label: string, color?: "teal" | "yellow" }) => (
  <div className="text-center">
    <div className={`text-3xl md:text-4xl font-bold ${color === 'teal' ? 'text-brand-teal' : 'text-brand-yellow'}`}>
      {value}
    </div>
    <div className="text-[10px] uppercase tracking-[0.2em] text-gray-500 mt-2">
      {label}
    </div>
  </div>
);

const PortfolioCard = ({ title, category, impact, icon: Icon }: { title: string, category: string, impact: string, icon: any }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ y: -8 }}
    className="group relative overflow-hidden rounded-2xl bg-brand-card border border-brand-border p-8 transition-all duration-500 hover:border-brand-teal/50"
  >
    <div className="flex justify-between items-start mb-12">
      <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center border border-white/10 text-gray-400">
        <Icon className="w-5 h-5" />
      </div>
      <span className="text-[10px] uppercase tracking-widest text-gray-400 bg-white/5 px-3 py-1 rounded-full border border-white/5">
        {category}
      </span>
    </div>
    
    <h3 className="text-4xl font-bold mb-16 text-white">{title}</h3>
    
    <div className="flex justify-between items-end">
      <div>
        <div className="text-[10px] uppercase tracking-widest text-gray-600 mb-1">Core Impact</div>
        <div className="text-brand-yellow font-bold text-lg">{impact}</div>
      </div>
      <div className="w-12 h-12 rounded-full bg-brand-teal/20 border border-brand-teal/30 flex items-center justify-center text-brand-teal shadow-[0_0_15px_rgba(45,212,191,0.3)] group-hover:scale-110 transition-transform">
        <ArrowUpRight className="w-5 h-5" />
      </div>
    </div>
  </motion.div>
);

const ClientCard = ({ client }: { client: Client, key?: any }) => (
  <motion.div 
    layout
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.9 }}
    className="bg-brand-card border border-brand-border p-6 rounded-xl transition-all duration-300 hover:border-brand-teal/30 hover:-translate-y-1"
  >
    <div className="flex justify-between items-center mb-4">
      <span className="text-[10px] uppercase tracking-widest text-brand-teal">{client.category}</span>
      <Instagram className="w-4 h-4 text-brand-teal" />
    </div>
    <h4 className="font-bold text-lg mb-2">{client.name}</h4>
    <p className="text-sm text-gray-500 leading-relaxed">{client.description}</p>
  </motion.div>
);

const IntroOverlay = ({ onComplete }: { onComplete: () => void }) => {
  const text = "Say It Social";
  
  useEffect(() => {
    const timer = setTimeout(onComplete, 2800);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div 
      initial={{ y: 0 }}
      exit={{ y: "-100%" }}
      transition={{ duration: 1, ease: [0.77, 0, 0.175, 1] }}
      className="fixed inset-0 bg-brand-dark z-[100] flex items-center justify-center"
    >
      <div className="text-4xl md:text-7xl font-extrabold italic tracking-tighter text-white flex overflow-hidden">
        {text.split("").map((char, i) => (
          <motion.span
            key={i}
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: i * 0.05, duration: 0.5 }}
            className={i >= 7 ? "text-brand-teal" : ""}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

export default function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredClients = activeCategory === "All" 
    ? CLIENTS 
    : CLIENTS.filter(c => c.category === activeCategory);

  return (
    <div className="relative">
      <AnimatePresence>
        {showIntro && <IntroOverlay onComplete={() => setShowIntro(false)} />}
      </AnimatePresence>

      <Navbar />

      <main>
        {/* --- Hero Section --- */}
        <header className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24 pb-32 overflow-hidden">
          <div className="glow-sphere bg-brand-teal w-[600px] h-[600px] -top-48 -left-48 animate-subtle-pulse opacity-20" />
          <div className="glow-sphere bg-brand-yellow w-[500px] h-[500px] bottom-0 right-0 opacity-10" />
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-8xl font-extrabold tracking-tight mb-8 leading-tight">
              Social Media That <br/>
              <span className="text-brand-teal italic">Drives Real</span> <br/>
              <span className="text-brand-yellow">Growth</span>
            </h1>
            
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
              Strategic campaigns that transform brands into social powerhouses. We turn engagement into revenue.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto bg-gradient-to-r from-brand-teal to-brand-yellow text-brand-dark font-bold px-10 py-4 rounded-md shadow-[0_0_25px_rgba(45,212,191,0.3)]"
              >
                Connect With Our Team
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto bg-white/5 border border-white/10 text-white font-bold px-10 py-4 rounded-md hover:bg-white/10"
              >
                Our Website
              </motion.button>
            </div>

            <div className="grid grid-cols-3 gap-8 border-t border-white/10 pt-12">
              <StatItem value="10+" label="Industries" />
              <div className="border-x border-white/10 px-4">
                <StatItem value="2M+" label="Total Reach" color="yellow" />
              </div>
              <StatItem value="5x" label="Lead Velocity" />
            </div>
          </motion.div>
        </header>

        {/* --- Portfolio Section --- */}
        <section className="py-24 px-6 bg-brand-dark">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold">
                Portfolio <span className="text-brand-teal italic">Highlights</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <PortfolioCard 
                title="Cricstudioinc" 
                category="Sports Content" 
                impact="Community Built" 
                icon={Instagram} 
              />
              <PortfolioCard 
                title="Shiva Optics Plus" 
                category="Premium Eyewear" 
                impact="Brand Elevated" 
                icon={Instagram} 
              />
            </div>
          </div>
        </section>

        {/* --- Clients Section --- */}
        <section className="py-24 px-6 bg-[#030303]">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold">
                All <span className="text-brand-yellow italic">Clients</span>
              </h2>
            </motion.div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-16">
              {CATEGORIES.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2 rounded-full text-xs font-bold transition-all border ${
                    activeCategory === cat 
                      ? 'bg-brand-teal text-black border-brand-teal' 
                      : 'bg-white/5 text-gray-400 border-white/10 hover:bg-white/10'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <motion.div 
              layout
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              <AnimatePresence mode="popLayout">
                {filteredClients.map(client => (
                  <ClientCard key={client.id} client={client} />
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>

        {/* --- Video Showcase --- */}
        <section className="py-24 px-6 bg-[#050505]">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto rounded-3xl overflow-hidden relative border border-white/5 bg-[#0A0A0A] p-12 md:p-24 text-center"
          >
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="grid grid-cols-4 h-full">
                <div className="border-r border-white/20" />
                <div className="border-r border-white/20" />
                <div className="border-r border-white/20" />
                <div />
              </div>
            </div>

            <div className="relative z-10">
              <div className="flex items-center justify-center gap-2 mb-8 text-brand-yellow font-bold text-xs uppercase tracking-widest">
                <Sparkles className="w-4 h-4" />
                <span>Social Showreel 2024</span>
                <Sparkles className="w-4 h-4" />
              </div>
              
              <h2 className="text-4xl md:text-6xl font-extrabold mb-8">
                Creativity. <span className="text-brand-teal">Consistency.</span> Growth.
              </h2>
              
              <p className="text-gray-400 max-w-2xl mx-auto mb-16 leading-relaxed">
                Watch how we've transformed social feeds into revenue-generating engines
              </p>

              <motion.button 
                whileHover={{ scale: 1.1, rotate: 6 }}
                whileTap={{ scale: 0.9 }}
                className="w-24 h-24 rounded-full bg-gradient-to-r from-brand-teal to-brand-yellow flex items-center justify-center mx-auto mb-16 shadow-xl group"
              >
                <Play className="w-10 h-10 text-brand-dark ml-1 group-hover:scale-110 transition-transform fill-current" />
              </motion.button>

              <div className="flex flex-wrap justify-center gap-4">
                <span className="bg-white/5 border border-white/10 px-4 py-2 rounded-full text-[10px] font-bold">15+ Campaigns</span>
                <span className="bg-white/5 border border-white/10 px-4 py-2 rounded-full text-[10px] font-bold">2M+ Reach</span>
                <span className="bg-white/5 border border-white/10 px-4 py-2 rounded-full text-[10px] font-bold">3 Min Watch</span>
              </div>
            </div>
          </motion.div>
        </section>

        {/* --- CTA Section --- */}
        <section className="py-32 px-6 bg-brand-dark text-center overflow-hidden relative">
          <div className="glow-sphere bg-brand-teal/20 w-[800px] h-[800px] absolute -bottom-[400px] left-1/2 -translate-x-1/2" />
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto relative z-10"
          >
            <h2 className="text-5xl md:text-7xl font-extrabold mb-12">
              Ready to Skyrocket Your <br/>
              <span className="text-brand-teal italic">Social Presence?</span>
            </h2>

            <div className="flex flex-wrap items-center justify-center gap-8 mb-24 border-y border-white/10 py-8">
              <span className="text-xl font-bold italic tracking-tighter">Say It <span className="text-brand-teal">Social</span></span>
              <div className="flex gap-6">
                <a href="#" className="text-xs font-bold uppercase tracking-widest text-brand-teal hover:underline underline-offset-8">Social Media</a>
                <a href="#" className="text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-white transition-colors">Web Design</a>
              </div>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-brand-teal text-brand-dark font-bold px-8 py-3 rounded-md shadow-lg"
              >
                Connect With Our Team
              </motion.button>
            </div>

            <div className="grid grid-cols-3 gap-8">
              <StatItem value="10+" label="Industries" />
              <StatItem value="2M+" label="Total Reach" color="yellow" />
              <StatItem value="5+" label="Lead Velocity" />
            </div>
          </motion.div>
        </section>
      </main>

      {/* --- Footer --- */}
      <footer className="py-24 px-6 bg-[#030303] border-t border-white/5">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <div className="text-3xl font-bold italic tracking-tighter mb-6">
              Say It <span className="text-brand-teal">Social</span>
            </div>
            <p className="text-gray-500 max-w-xs leading-relaxed">
              Strategic campaigns that transform brands into social powerhouses. We turn engagement into revenue.
            </p>
          </div>
          
          <div className="md:text-right">
            <h5 className="text-xs uppercase tracking-[0.2em] font-bold mb-6 text-gray-400">Get In Touch</h5>
            <p className="text-gray-300 font-medium mb-6 text-lg">WhatsApp: +91 84607 32085</p>
            <div className="flex md:justify-end gap-6">
              <a href="#" className="text-gray-500 hover:text-brand-teal transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="text-gray-500 hover:text-brand-teal transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-gray-500 hover:text-brand-teal transition-colors"><Youtube className="w-5 h-5" /></a>
              <a href="#" className="text-gray-500 hover:text-brand-teal transition-colors"><Linkedin className="w-5 h-5" /></a>
            </div>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto mt-24 border-t border-white/5 pt-8 text-center text-[10px] uppercase tracking-widest text-gray-700">
          © 2024 Say It Social. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
