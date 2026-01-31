'use client';

import { useState } from 'react';

export default function BookCallButton() {
  const [isOpen, setIsOpen] = useState(false);

  const handleBookCall = () => {
    // Open your Google Calendar appointment scheduling page
    window.open('https://calendar.app.google/NErPCTm4f2kFo1uv7', '_blank');
  };


  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <div className="relative">
          {/* Main Button */}
          <div className="relative group">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="w-12 h-12 bg-theme rounded-full flex items-center justify-center shadow-2xl hover:shadow-theme/20 transition-all duration-300 hover:scale-105"
            >
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </button>
            
            {/* Expanded State on Hover */}
            <div className="absolute right-0 top-0 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center gap-2 whitespace-nowrap h-12 pointer-events-none">
              <div className="w-8 h-8 bg-theme rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="text-theme-primary font-medium text-xs">Book a Call</span>
            </div>
          </div>

          {/* Dropdown Menu */}
          {isOpen && (
            <div className="absolute bottom-full right-0 mb-4 w-64 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl p-4">
              <div className="space-y-3">
                <h3 className="text-theme-primary font-semibold text-sm mb-3">Schedule a Meeting</h3>
                
                {/* Google Calendar Option */}
                <button
                  onClick={handleBookCall}
                  className="w-full flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors duration-200"
                >
                  <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <div className="text-theme-primary text-sm font-medium">Google Calendar</div>
                    <div className="text-theme-secondary text-xs">Add to your calendar</div>
                  </div>
                </button>

                {/* Contact Info */}
                <div className="pt-2 border-t border-white/10">
                  <div className="text-theme-secondary text-xs text-center">
                    Or email: jatoliyaharsh8@gmail.com
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Backdrop to close menu */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}