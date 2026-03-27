/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ChevronDown, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time or wait for assets
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="preloader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] bg-black flex items-center justify-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold tracking-tighter text-white"
            >
              Liquid Brokers
              <motion.div 
                className="h-0.5 bg-purple-600 mt-2"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="h-screen bg-black text-white font-sans selection:bg-purple-500/30 overflow-hidden flex flex-col relative">
        {/* Background Video */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
       
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-50"
            poster="https://res.cloudinary.com/dvyhnxnpq/video/upload/so_0/bg_video_slfyoy.jpg"
          >
            <source 
              src="https://res.cloudinary.com/dvyhnxnpq/video/upload/q_auto,f_auto/bg_video_slfyoy.mp4" 
              type="video/mp4" 
            />
          </video>
        </div>

        {/* Navigation */}
        <nav className="flex items-center justify-between px-6 py-6 md:px-12 lg:px-24 relative z-50 flex-shrink-0">
          <div className="text-xl font-bold tracking-tight">
            Liquid Brokers
          </div>
          
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-300">
            <a href="#" className="hover:text-white transition-colors">About</a>
            <button className="flex items-center space-x-1 hover:text-white transition-colors">
              <span>Trading</span>
              <ChevronDown size={14} />
            </button>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
            <a href="#" className="hover:text-white transition-colors">FAQ</a>
            <button className="flex items-center space-x-1 hover:text-white transition-colors">
              <span>ENG</span>
              <ChevronDown size={14} />
            </button>
          </div>

          <div className="flex items-center space-x-4">
            <button className="px-5 py-2 text-sm font-medium bg-white/5 hover:bg-white/10 rounded-full transition-colors">
              Login
            </button>
            <button className="px-5 py-2 text-sm font-medium bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 rounded-full transition-all shadow-lg shadow-purple-500/20">
              Sign up
            </button>
          </div>
        </nav>

        {/* Hero Section */}
        <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 min-h-0">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isLoading ? 0 : 1, y: isLoading ? 20 : 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center max-w-4xl z-10 mb-8 md:mb-12"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 md:mb-6 leading-[1.1]">
              Elevate Your <br />
              Trading Experience
            </h1>
            
            <p className="text-gray-400 text-base md:text-lg lg:text-xl max-w-xl mx-auto mb-6 md:mb-8 leading-relaxed">
              Unlock your trading potential in a fully regulated environment, powered by Liquid Brokers
            </p>

            <button className="px-6 py-3 md:px-8 md:py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-colors shadow-xl text-sm md:text-base">
              Sign Up & Trade
            </button>
          </motion.div>

          {/* Floating Cards Container */}
          <div className="w-full max-w-6xl relative flex-1 max-h-[300px] md:max-h-[400px]">
            {/* Card 1 - Left */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: isLoading ? 0 : 1, x: isLoading ? -50 : 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="absolute left-0 md:left-10 top-0 w-48 md:w-64 p-4 md:p-5 bg-zinc-900/80 backdrop-blur-md border border-white/10 rounded-2xl md:rounded-3xl shadow-2xl"
            >
              <div className="flex justify-between items-start mb-4 md:mb-6">
                <span className="text-[10px] md:text-xs text-gray-400 font-medium">Trading Pairs</span>
                <div className="p-1 md:p-1.5 bg-white rounded-full">
                  <ArrowUpRight size={12} className="text-black md:w-[14px] md:h-[14px]" />
                </div>
              </div>
              <h3 className="text-sm md:text-lg font-semibold mb-1 leading-tight">Unparalleled Market Access</h3>
              <div className="flex justify-end">
                <span className="text-[10px] md:text-xs text-gray-500 font-mono">40%</span>
              </div>
            </motion.div>

            {/* Card 2 - Right */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: isLoading ? 0 : 1, x: isLoading ? 50 : 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="absolute right-0 md:right-10 bottom-4 md:bottom-0 w-48 md:w-64 p-4 md:p-5 bg-zinc-900/80 backdrop-blur-md border border-white/10 rounded-2xl md:rounded-3xl shadow-2xl"
            >
              <div className="flex justify-between items-start mb-3 md:mb-4">
                <span className="text-[10px] md:text-xs text-gray-400 font-medium">Trading Pairs</span>
                <div className="p-1 md:p-1.5 bg-white rounded-full">
                  <ArrowUpRight size={12} className="text-black md:w-[14px] md:h-[14px]" />
                </div>
              </div>
              <div className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">96%</div>
              <div className="w-full h-1 md:h-1.5 bg-white/10 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: isLoading ? 0 : '96%' }}
                  transition={{ duration: 1.5, delay: 1.2 }}
                  className="h-full bg-white"
                />
              </div>
            </motion.div>
          </div>
        </main>
      </div>
    </>
  );
}

