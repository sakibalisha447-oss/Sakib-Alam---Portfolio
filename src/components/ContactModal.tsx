import React, { useState, useEffect } from 'react';
import { X, Copy, Check, Send, Sparkles, Mail, ArrowUpRight } from 'lucide-react';
import { DESIGNER_INFO } from '../data/portfolioData';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [selectedService, setSelectedService] = useState('Brand & Apparel Design');
  const [budget, setBudget] = useState('$10k - $25k');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(DESIGNER_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // Keep state visible for user confirmation
    }, 500);
  };

  const resetForm = () => {
    setSubmitted(false);
    setEmail('');
    setMessage('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-xl bg-[#0d0d10] border border-white/20 rounded-xl overflow-hidden shadow-2xl flex flex-col p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header HUD */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-mono tracking-widest text-zinc-300 uppercase">
              PROJECT INTAKE // LET'S CONNECT
            </span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close contact modal"
            className="p-1.5 text-zinc-400 hover:text-white hover:bg-white/10 rounded-md transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="py-12 text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
              <Check className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold font-heading text-white">
              Transmission Received
            </h3>
            <p className="text-sm font-sans text-zinc-300 max-w-sm mx-auto leading-relaxed">
              Thank you for reaching out! I typically respond within 24 business hours to schedule our discovery call.
            </p>
            <div className="pt-4">
              <button
                onClick={resetForm}
                className="px-5 py-2.5 bg-white text-black font-semibold text-xs rounded hover:bg-zinc-200 transition-colors"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Quick 1-Click Direct Email Strip */}
            <div className="p-3 bg-white/5 border border-white/10 rounded-lg flex items-center justify-between gap-3 text-xs font-mono">
              <div className="flex items-center gap-2 text-zinc-300 truncate">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <span className="truncate">{DESIGNER_INFO.email}</span>
              </div>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="px-3 py-1 bg-white/10 hover:bg-white/20 text-white rounded text-[11px] flex items-center gap-1.5 transition-colors shrink-0"
              >
                {copiedEmail ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                <span>{copiedEmail ? 'Copied' : 'Copy Email'}</span>
              </button>
            </div>

            {/* Service Requirement Selection */}
            <div className="space-y-2">
              <label className="text-xs font-mono text-zinc-400 block">
                01 // SELECT PROJECT SCOPE
              </label>
              <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                {[
                  'Brand & Apparel Design',
                  'Editorial & Poster Design',
                  'UI/UX & Design Systems',
                  '3D & Motion Graphics',
                ].map((srv) => (
                  <button
                    key={srv}
                    type="button"
                    onClick={() => setSelectedService(srv)}
                    className={`py-2 px-3 text-left border rounded transition-colors ${
                      selectedService === srv
                        ? 'border-white bg-white text-black font-semibold'
                        : 'border-white/10 bg-white/[0.03] text-zinc-400 hover:text-white hover:border-white/20'
                    }`}
                  >
                    {srv}
                  </button>
                ))}
              </div>
            </div>

            {/* Budget Range */}
            <div className="space-y-2">
              <label className="text-xs font-mono text-zinc-400 block">
                02 // ANTICIPATED BUDGET RANGE
              </label>
              <div className="grid grid-cols-3 gap-2 text-xs font-mono">
                {['$5k - $10k', '$10k - $25k', '$25k+'].map((b) => (
                  <button
                    key={b}
                    type="button"
                    onClick={() => setBudget(b)}
                    className={`py-2 px-2 text-center border rounded transition-colors ${
                      budget === b
                        ? 'border-emerald-400 bg-emerald-500/15 text-emerald-300 font-semibold'
                        : 'border-white/10 bg-white/[0.03] text-zinc-400 hover:text-white hover:border-white/20'
                    }`}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </div>

            {/* Email & Details */}
            <div className="space-y-3">
              <label className="text-xs font-mono text-zinc-400 block">
                03 // YOUR DETAILS
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your.name@company.com"
                className="w-full px-3.5 py-2.5 bg-black/50 border border-white/15 rounded text-xs font-mono text-white placeholder:text-zinc-600 focus:outline-none focus:border-white transition-colors"
              />
              <textarea
                rows={3}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Briefly describe your vision, timeline, and goals..."
                className="w-full px-3.5 py-2.5 bg-black/50 border border-white/15 rounded text-xs font-mono text-white placeholder:text-zinc-600 focus:outline-none focus:border-white transition-colors resize-none"
              />
            </div>

            {/* Submit Action */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3 px-4 bg-white text-black hover:bg-zinc-200 font-semibold text-xs font-mono rounded flex items-center justify-center gap-2 transition-colors uppercase tracking-wider"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Send Project Transmission</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
