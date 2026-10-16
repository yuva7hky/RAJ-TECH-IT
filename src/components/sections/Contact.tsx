import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, Send, ShieldCheck, Clock, DollarSign, User, Building, MessageSquare, AlertCircle, X, Layers, Copy, Check, ExternalLink } from 'lucide-react';
import { GlassCard } from '../UI/GlassCard';
import { Button } from '../UI/Button';

const COMPANY_PHONE = '+91 9442812481';
const COMPANY_PHONE_RAW = '9442812481';
const COMPANY_EMAIL = 'ajayarun177@gmail.com';
const WHATSAPP_BASE_URL = `https://wa.me/91${COMPANY_PHONE_RAW}`;

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    email: '',
    phone: '',
    projectType: 'Website Development',
    budget: '₹8,000 – ₹15,000 (Business)',
    timeline: 'Immediate (1-2 Weeks)',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showWhatsAppModal, setShowWhatsAppModal] = useState(false);
  const [preparedUrl, setPreparedUrl] = useState('');
  const [preparedMessage, setPreparedMessage] = useState('');
  const [copied, setCopied] = useState(false);

  // Indian Phone Number Validation: 10 digits starting with 6-9 (optional +91 / 0 prefix)
  const validatePhone = (phone: string) => {
    const cleaned = phone.replace(/[\s\-()]/g, '');
    const indianPhoneRegex = /^(\+91|91|0)?[6-9]\d{9}$/;
    return indianPhoneRegex.test(cleaned);
  };

  // Email format validation
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email.trim());
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Full Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email Address is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone Number is required';
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Project Description is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Please provide at least 10 characters describing your project';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const buildWhatsAppMessage = () => {
    const business = formData.businessName.trim() || 'Not provided';
    return (
      `NEW PROJECT ENQUIRY — RAJ TECH IT\n\n` +
      `Full Name: ${formData.name.trim()}\n\n` +
      `Business / Company: ${business}\n\n` +
      `Email: ${formData.email.trim()}\n\n` +
      `Phone: ${formData.phone.trim()}\n\n` +
      `Project Type: ${formData.projectType}\n\n` +
      `Estimated Budget: ${formData.budget}\n\n` +
      `Expected Timeline: ${formData.timeline}\n\n` +
      `Project Description:\n${formData.message.trim()}\n\n` +
      `Source: Raj Tech IT Website`
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const messageText = buildWhatsAppMessage();
    const encoded = encodeURIComponent(messageText);
    const whatsappUrl = `${WHATSAPP_BASE_URL}?text=${encoded}`;

    setPreparedMessage(messageText);
    setPreparedUrl(whatsappUrl);
    setShowWhatsAppModal(true);

    // Open WhatsApp in a new tab safely
    try {
      const opened = window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
      if (!opened) {
        console.warn('Browser popup blocked auto-opening WhatsApp; modal provides manual button.');
      }
    } catch (err) {
      console.warn('Error opening WhatsApp URL:', err);
    }
  };

  const handleCopyMessage = async () => {
    try {
      await navigator.clipboard.writeText(preparedMessage);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  return (
    <section id="contact" className="relative py-16 sm:py-24 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#0878F9] font-mono text-xs font-semibold">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Dedicated Project Enquiry Portal</span>
          </div>
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#102A43]">
            Start Your <span className="text-gradient-blue">Project</span>
          </h1>
          <p className="text-[#526477] text-sm sm:text-base leading-relaxed">
            Submit your project specifications below. Our system will immediately format your enquiry and connect you directly with our engineering team on WhatsApp.
          </p>
        </div>

        {/* Contact Grid: Left Contact Info, Right Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Direct Contact Column (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <GlassCard className="p-8 space-y-6 border-[#DCE7F1]">
              
              <div>
                <span className="text-xs font-mono font-bold text-[#0878F9] uppercase tracking-wider block mb-1">
                  Raj Tech IT
                </span>
                <h2 className="font-display font-extrabold text-2xl text-[#102A43]">
                  Direct Engineering Desk
                </h2>
                <p className="text-xs text-[#06B6D4] font-mono mt-0.5">
                  Transforming Ideas Into Digital Reality
                </p>
              </div>

              <div className="text-xs text-[#102A43] space-y-1.5 font-mono p-3.5 rounded-xl bg-[#F8FAFD] border border-[#DCE7F1]">
                <div>Founder & Chief Architect: <strong className="text-[#0878F9]">YUVARAJ.M</strong></div>
                <div>Enquiry Response SLA: <strong className="text-emerald-700">Under 12–24 Hours</strong></div>
                <div>Primary WhatsApp: <strong className="text-[#102A43]">+91 {COMPANY_PHONE_RAW}</strong></div>
              </div>

              <p className="text-[#526477] text-xs sm:text-sm leading-relaxed">
                Whether you need a custom React/Next.js web application, luxury brand website, custom AI integration, or workflow automation, we engineer production software built for scale.
              </p>

              {/* Direct Active Contact Links */}
              <div className="space-y-3 pt-2">
                
                {/* WhatsApp Hotline */}
                <a
                  href={WHATSAPP_BASE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-emerald-50 border border-emerald-200 hover:border-emerald-300 hover:bg-emerald-100/60 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-emerald-800 uppercase font-bold">Official WhatsApp</div>
                    <div className="text-sm font-mono font-bold text-emerald-900">
                      +91 {COMPANY_PHONE_RAW}
                    </div>
                  </div>
                </a>

                {/* Phone Hotline Link */}
                <a
                  href={`tel:${COMPANY_PHONE.replace(/\s+/g, '')}`}
                  className="flex items-center gap-4 p-4 rounded-xl bg-[#F8FAFD] border border-[#DCE7F1] hover:border-[#BFDBFE] hover:bg-blue-50/50 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-100 text-[#0878F9] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-[#526477] uppercase font-semibold">Direct Phone Line</div>
                    <div className="text-sm font-mono font-bold text-[#102A43] group-hover:text-[#0878F9] transition-colors">
                      {COMPANY_PHONE}
                    </div>
                  </div>
                </a>

                {/* Email Direct Link */}
                <a
                  href={`mailto:${COMPANY_EMAIL}`}
                  className="flex items-center gap-4 p-4 rounded-xl bg-[#F8FAFD] border border-[#DCE7F1] hover:border-[#BFDBFE] hover:bg-blue-50/50 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-100 text-[#0878F9] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="truncate">
                    <div className="text-[11px] font-mono text-[#526477] uppercase font-semibold">Official Email</div>
                    <div className="text-sm font-mono font-bold text-[#102A43] group-hover:text-[#0878F9] transition-colors truncate">
                      {COMPANY_EMAIL}
                    </div>
                  </div>
                </a>

              </div>

              {/* NDA Guarantee Pill */}
              <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-100 text-xs text-[#102A43] flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-[#0878F9] shrink-0" />
                <span>NDA & Confidentiality Agreement standard on all customer inquiries.</span>
              </div>

            </GlassCard>
          </div>

          {/* Right Project Inquiry Form (7 Cols) */}
          <div className="lg:col-span-7">
            <GlassCard className="p-6 sm:p-10 border-[#DCE7F1]">
              
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div>
                  <h2 className="font-display font-bold text-xl sm:text-2xl text-[#102A43]">
                    Project Request Form
                  </h2>
                  <p className="text-xs text-[#526477] mt-1">
                    Fill in your project requirements. Clicking submit opens WhatsApp with your prefilled details.
                  </p>
                </div>

                {/* 1. Full Name & 2. Business / Company Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-[#102A43] font-semibold uppercase flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-[#0878F9]" />
                      <span>Full Name *</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Arun Kumar"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: '' });
                      }}
                      className={`clay-input w-full px-4 py-3 rounded-xl text-sm ${
                        errors.name ? 'border-rose-500 focus:border-rose-500' : ''
                      }`}
                    />
                    {errors.name && (
                      <p className="text-[11px] font-mono text-rose-600 flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3 h-3" /> {errors.name}
                      </p>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-[#526477] font-semibold uppercase flex items-center gap-1.5">
                      <Building className="w-3.5 h-3.5 text-[#0878F9]" />
                      <span>Business / Company Name</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Company Name (Optional)"
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      className="clay-input w-full px-4 py-3 rounded-xl text-sm"
                    />
                  </div>
                </div>

                {/* 3. Email & 4. Phone Number */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-[#102A43] font-semibold uppercase flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-[#0878F9]" />
                      <span>Email Address *</span>
                    </label>
                    <input
                      type="email"
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: '' });
                      }}
                      className={`clay-input w-full px-4 py-3 rounded-xl text-sm ${
                        errors.email ? 'border-rose-500 focus:border-rose-500' : ''
                      }`}
                    />
                    {errors.email && (
                      <p className="text-[11px] font-mono text-rose-600 flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3 h-3" /> {errors.email}
                      </p>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-[#102A43] font-semibold uppercase flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-[#0878F9]" />
                      <span>Phone Number *</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g. 9442812481"
                      value={formData.phone}
                      onChange={(e) => {
                        setFormData({ ...formData, phone: e.target.value });
                        if (errors.phone) setErrors({ ...errors, phone: '' });
                      }}
                      className={`clay-input w-full px-4 py-3 rounded-xl text-sm ${
                        errors.phone ? 'border-rose-500 focus:border-rose-500' : ''
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-[11px] font-mono text-rose-600 flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3 h-3" /> {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                {/* 5. Project Type & 6. Budget */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-[#102A43] font-semibold uppercase flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-[#0878F9]" />
                      <span>Project Type *</span>
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="clay-input w-full px-4 py-3 rounded-xl text-sm cursor-pointer"
                    >
                      <option value="Website Development">Website Development</option>
                      <option value="Web Applications">Web Applications (SaaS)</option>
                      <option value="AI Solutions">AI Solutions & RAG</option>
                      <option value="Workflow Automation">Workflow Automation</option>
                      <option value="UI UX Design">UI UX Design System</option>
                      <option value="Maintenance & Support">Maintenance & Support</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-[#102A43] font-semibold uppercase flex items-center gap-1.5">
                      <DollarSign className="w-3.5 h-3.5 text-[#0878F9]" />
                      <span>Estimated Budget (INR) *</span>
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="clay-input w-full px-4 py-3 rounded-xl text-sm cursor-pointer"
                    >
                      <option value="₹3,000 – ₹5,000 (Starter)">₹3,000 – ₹5,000 (Starter)</option>
                      <option value="₹8,000 – ₹15,000 (Business)">₹8,000 – ₹15,000 (Business)</option>
                      <option value="₹18,000 – ₹30,000 (Professional)">₹18,000 – ₹30,000 (Professional)</option>
                      <option value="Custom Quote (₹30,000+ Enterprise)">Custom Quote (₹30,000+ Enterprise)</option>
                    </select>
                  </div>
                </div>

                {/* 7. Expected Timeline */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-[#102A43] font-semibold uppercase flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#0878F9]" />
                    <span>Expected Timeline *</span>
                  </label>
                  <select
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    className="clay-input w-full px-4 py-3 rounded-xl text-sm cursor-pointer"
                  >
                    <option value="Immediate (1-2 Weeks)">Immediate (1 - 2 Weeks)</option>
                    <option value="2-4 Weeks">2 - 4 Weeks</option>
                    <option value="1-2 Months">1 - 2 Months</option>
                    <option value="Flexible / Ongoing">Flexible / Ongoing</option>
                  </select>
                </div>

                {/* 8. Project Description */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-[#102A43] font-semibold uppercase flex items-center gap-1.5">
                    <MessageSquare className="w-3.5 h-3.5 text-[#0878F9]" />
                    <span>Project Description *</span>
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Describe your project concept, key features, target audience, and any reference designs..."
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: '' });
                    }}
                    className={`clay-input w-full px-4 py-3 rounded-xl text-sm ${
                      errors.message ? 'border-rose-500 focus:border-rose-500' : ''
                    }`}
                  />
                  {errors.message && (
                    <p className="text-[11px] font-mono text-rose-600 flex items-center gap-1 mt-1">
                      <AlertCircle className="w-3 h-3" /> {errors.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full justify-center text-base font-bold py-4"
                  icon={<Send className="w-4 h-4" />}
                >
                  Submit Project Inquiry via WhatsApp
                </Button>

                <p className="text-[11px] text-[#526477] text-center font-mono">
                  Enquiry will be prefilled in WhatsApp. You will review and send it directly to +91 {COMPANY_PHONE_RAW}.
                </p>
              </form>

            </GlassCard>
          </div>

        </div>

      </div>

      {/* WhatsApp Modal with fallback copy button */}
      <AnimatePresence>
        {showWhatsAppModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#102A43]/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-lg p-6 sm:p-8 rounded-3xl bg-white border border-[#DCE7F1] shadow-2xl text-left space-y-5"
            >
              <button
                onClick={() => setShowWhatsAppModal(false)}
                className="absolute top-4 right-4 p-2 rounded-full bg-[#F8FAFD] border border-[#DCE7F1] text-[#526477] hover:text-[#102A43] hover:bg-slate-100 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-200">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display font-extrabold text-xl text-[#102A43]">
                    Enquiry Prepared for WhatsApp
                  </h3>
                  <p className="text-xs text-emerald-700 font-mono font-medium">
                    Destination: +91 {COMPANY_PHONE_RAW}
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#F8FAFD] border border-[#DCE7F1] text-xs text-[#526477] space-y-2">
                <p className="font-semibold text-[#102A43]">
                  Your project enquiry has been formatted and WhatsApp was opened in a new tab.
                </p>
                <p>
                  <strong>Important:</strong> Please click <strong>Send</strong> inside WhatsApp to dispatch the enquiry to our engineering team.
                </p>
              </div>

              {/* Message preview snippet */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-xs font-mono text-[#526477]">
                  <span>Prefilled Message Content</span>
                  <button
                    onClick={handleCopyMessage}
                    className="flex items-center gap-1 text-[#0878F9] hover:underline cursor-pointer font-bold"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Copied to Clipboard!' : 'Copy Text'}</span>
                  </button>
                </div>
                <pre className="p-3.5 rounded-xl bg-[#F4F8FC] border border-[#DCE7F1] text-[11px] text-[#102A43] max-h-36 overflow-y-auto whitespace-pre-wrap font-mono">
                  {preparedMessage}
                </pre>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href={preparedUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="clay-btn-primary flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-bold"
                >
                  <span>Re-open WhatsApp</span>
                  <ExternalLink className="w-4 h-4" />
                </a>

                <button
                  type="button"
                  onClick={() => setShowWhatsAppModal(false)}
                  className="clay-btn-secondary px-5 py-3 rounded-xl text-xs font-semibold"
                >
                  Done
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};
