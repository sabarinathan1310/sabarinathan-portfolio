import React, { useState } from 'react';
import { Mail, Phone, MapPin, Copy, Check, Send } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const GithubIcon = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Contact() {
  const { email, phone, location, github, linkedin } = portfolioData.personalInfo;
  
  // States for form handling
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [copiedField, setCopiedField] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  // Quick copy helpers
  const handleCopy = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
  };

  // Input validation
  const validateForm = () => {
    let formErrors = {};
    if (!formData.name.trim()) formErrors.name = "Name is required";
    if (!formData.email.trim()) {
      formErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = "Please enter a valid email address";
    }
    if (!formData.subject.trim()) formErrors.subject = "Subject is required";
    if (!formData.message.trim()) formErrors.message = "Message is required";
    
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  // Submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError(null);
    if (validateForm()) {
      setIsSubmitting(true);
      try {
        const response = await fetch("https://formspree.io/f/xbdevgkl", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify(formData)
        });

        if (response.ok) {
          setIsSubmitting(false);
          setIsSubmitted(true);
          setFormData({ name: '', email: '', subject: '', message: '' });
          setTimeout(() => setIsSubmitted(false), 5000);
        } else {
          const data = await response.json();
          setIsSubmitting(false);
          setSubmitError(data.error || "Form submission failed. Please try again.");
        }
      } catch (err) {
        setIsSubmitting(false);
        setSubmitError("Network error. Please check your connection and try again.");
      }
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-outfit text-3xl md:text-4xl font-bold text-white mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 text-sm max-w-lg mx-auto">
            Have an open role or internship? Drop a message or contact me directly through the details below.
          </p>
        </div>

        {/* Content Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Contact Details Column */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8">
            <div className="space-y-6">
              <h3 className="font-outfit text-2xl font-bold text-white">
                Contact Details
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Feel free to copy my details to your clipboard or check out my profiles on LinkedIn and GitHub. I look forward to connecting with recruiters and developers!
              </p>

              {/* Detail Items */}
              <div className="space-y-4 pt-4">
                
                {/* Email Item */}
                <div className="p-4 rounded-xl bg-dark-card border border-dark-border flex items-center justify-between group hover:border-indigo-500/30 transition-all duration-200">
                  <div className="flex items-center gap-3.5">
                    <div className="p-2.5 rounded-lg bg-indigo-500/10 text-indigo-400">
                      <Mail size={18} />
                    </div>
                    <div>
                      <span className="block text-[10px] uppercase font-bold text-gray-500">Email Address</span>
                      <a href={`mailto:${email}`} className="text-sm text-gray-200 font-medium hover:text-indigo-400 transition-colors">
                        {email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(email, 'email')}
                    className="p-1.5 rounded-md hover:bg-slate-800 text-gray-400 hover:text-white transition-all duration-200"
                    title="Copy Email"
                  >
                    {copiedField === 'email' ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
                  </button>
                </div>

                {/* Phone Item */}
                <div className="p-4 rounded-xl bg-dark-card border border-dark-border flex items-center justify-between group hover:border-indigo-500/30 transition-all duration-200">
                  <div className="flex items-center gap-3.5">
                    <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-400">
                      <Phone size={18} />
                    </div>
                    <div>
                      <span className="block text-[10px] uppercase font-bold text-gray-500">Phone Number</span>
                      <a href={`tel:${phone}`} className="text-sm text-gray-200 font-medium hover:text-cyan-400 transition-colors">
                        {phone}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(phone, 'phone')}
                    className="p-1.5 rounded-md hover:bg-slate-800 text-gray-400 hover:text-white transition-all duration-200"
                    title="Copy Phone"
                  >
                    {copiedField === 'phone' ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
                  </button>
                </div>

                {/* Location Item */}
                <div className="p-4 rounded-xl bg-dark-card border border-dark-border flex items-center gap-3.5 group hover:border-indigo-500/30 transition-all duration-200">
                  <div className="p-2.5 rounded-lg bg-indigo-500/10 text-indigo-400">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase font-bold text-gray-500">Location</span>
                    <span className="text-sm text-gray-200 font-medium">
                      {location}
                    </span>
                  </div>
                </div>

              </div>
            </div>

            {/* Social Cards */}
            <div className="flex gap-4">
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 rounded-xl bg-dark-card border border-dark-border hover:border-indigo-500/50 flex items-center justify-center gap-2 text-xs font-semibold text-gray-300 hover:text-white transition-all duration-200"
              >
                <LinkedinIcon size={16} className="text-indigo-400" />
                LinkedIn Profile
              </a>
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 rounded-xl bg-dark-card border border-dark-border hover:border-cyan-500/50 flex items-center justify-center gap-2 text-xs font-semibold text-gray-300 hover:text-white transition-all duration-200"
              >
                <GithubIcon size={16} className="text-cyan-400" />
                GitHub Profile
              </a>
            </div>
          </div>

          {/* Contact Form Column */}
          <div className="lg:col-span-7">
            <div className="p-6 md:p-8 rounded-2xl bg-dark-card border border-dark-border shadow-lg h-full flex flex-col justify-center">
              {isSubmitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 bg-emerald-500/10 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-500/20">
                    <Check size={32} />
                  </div>
                  <h3 className="font-outfit text-2xl font-bold text-white">Message sent successfully!</h3>
                  <p className="text-gray-400 text-sm max-w-md mx-auto">
                    Thank you, your message has been sent. Sabarinathan will get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Name</label>
                      <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl bg-slate-900 border ${errors.name ? 'border-red-500' : 'border-dark-border'} text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors`}
                        placeholder="John Doe"
                      />
                      {errors.name && <span className="text-[10px] text-red-500 font-semibold">{errors.name}</span>}
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl bg-slate-900 border ${errors.email ? 'border-red-500' : 'border-dark-border'} text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors`}
                        placeholder="recruiter@company.com"
                      />
                      {errors.email && <span className="text-[10px] text-red-500 font-semibold">{errors.email}</span>}
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="space-y-1.5">
                    <label htmlFor="subject" className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl bg-slate-900 border ${errors.subject ? 'border-red-500' : 'border-dark-border'} text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors`}
                      placeholder="Software Engineering Internship / Full-time Role"
                    />
                    {errors.subject && <span className="text-[10px] text-red-500 font-semibold">{errors.subject}</span>}
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Message</label>
                    <textarea
                      id="message"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl bg-slate-900 border ${errors.message ? 'border-red-500' : 'border-dark-border'} text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors resize-none`}
                      placeholder="Describe the opportunity or ask questions..."
                    />
                    {errors.message && <span className="text-[10px] text-red-500 font-semibold">{errors.message}</span>}
                  </div>

                  {submitError && (
                    <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-semibold">
                      {submitError}
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 disabled:from-indigo-800 disabled:to-cyan-800 text-white font-semibold shadow-md shadow-indigo-950/20 hover:-translate-y-0.5 disabled:translate-y-0 transition-all duration-200"
                  >
                    {isSubmitting ? (
                      <span className="w-5 h-5 rounded-full border-2 border-white border-t-transparent animate-spin"></span>
                    ) : (
                      <>
                        <Send size={16} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
