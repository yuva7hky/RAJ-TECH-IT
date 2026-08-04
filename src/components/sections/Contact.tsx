import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, Send, CheckCircle2, ShieldCheck, Clock, DollarSign, User, Building, MessageSquare, Loader2, AlertCircle, X, Layers } from 'lucide-react';
import { GlassCard } from '../UI/GlassCard';
import { Button } from '../UI/Button';

// EmailJS Configuration Constants
const EMAILJS_SERVICE_ID = 'service_rajtech';
const EMAILJS_ADMIN_TEMPLATE_ID = 'template_x21q3xs';
const EMAILJS_CLIENT_TEMPLATE_ID = 'template_hlbyk3k';

// Primary Public Key (with lowercase 'l' at index 15) and fallback key
const EMAILJS_PUBLIC_KEY = 'cAcRTmHm1OBZzZVlI';
const EMAILJS_PUBLIC_KEY_FALLBACK = 'cAcRTmHm1OBZzZVII';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    email: '',
    phone: '',
    projectType: 'Website Development',
    budget: '₹8,000 – ₹15,000',
    timeline: 'Immediate (1-2 Weeks)',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSending, setIsSending] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Initialize EmailJS Browser SDK with Public Key on component mount
  useEffect(() => {
    try {
      emailjs.init({
        publicKey: EMAILJS_PUBLIC_KEY,
      });
    } catch (err) {
      console.warn('EmailJS SDK Init Notice:', err);
    }
  }, []);

  // Indian Phone Number Regex (+91 prefix optional, 10 digits starting with 6-9)
  const validatePhone = (phone: string) => {
    const cleaned = phone.replace(/[\s-]/g, '');
    const indianPhoneRegex = /^(\+91)?([6-9]\d{9})$/;
    return indianPhoneRegex.test(cleaned);
  };

  // Email Regex Format Validation
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email.trim());
  };

  // Validate all fields before submission
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
      newErrors.phone = 'Please enter a valid 10-digit Indian phone number';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Project Description is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Send single email helper with key fallback
  const sendEmailWithFallback = async (templateId: string, templateParams: Record<string, unknown>) => {
    try {
      return await emailjs.send(
        EMAILJS_SERVICE_ID,
        templateId,
        templateParams,
        { publicKey: EMAILJS_PUBLIC_KEY }
      );
    } catch (firstErr: unknown) {
      const errStatus = (firstErr as { status?: number })?.status;
      if (errStatus === 404) {
        // Try fallback public key string in case of font character ambiguity
        return await emailjs.send(
          EMAILJS_SERVICE_ID,
          templateId,
          templateParams,
          { publicKey: EMAILJS_PUBLIC_KEY_FALLBACK }
        );
      }
      throw firstErr;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!validateForm()) {
      return;
    }

    setIsSending(true);

    // Exact template variables matching specifications
    const templateParams = {
      from_name: formData.name,
      business_name: formData.businessName.trim() || 'N/A',
      reply_to: formData.email,
      phone: formData.phone,
      budget: formData.budget,
      timeline: formData.timeline,
      message: formData.message,

      // Additional aliases for 100% template field compatibility
      name: formData.name,
      email: formData.email,
      project_type: formData.projectType,
      to_email: formData.email,
      user_email: formData.email,
    };

    let adminSent = false;
    let clientSent = false;

    // Send Email 1: Admin Notification Template (template_x21q3xs)
    try {
      await sendEmailWithFallback(EMAILJS_ADMIN_TEMPLATE_ID, templateParams);
      adminSent = true;
    } catch (err) {
      console.warn('EmailJS Admin Template Dispatch Notice:', err);
    }

    // Send Email 2: Client Confirmation Template (template_hlbyk3k)
    try {
      await sendEmailWithFallback(EMAILJS_CLIENT_TEMPLATE_ID, templateParams);
      clientSent = true;
    } catch (err) {
      console.warn('EmailJS Client Template Dispatch Notice:', err);
    }

    // Handle Outcome
    if (adminSent || clientSent) {
      setIsSending(false);
      setShowSuccessModal(true);
      setFormData({
        name: '',
        businessName: '',
        email: '',
        phone: '',
        projectType: 'Website Development',
        budget: '₹8,000 – ₹15,000',
        timeline: 'Immediate (1-2 Weeks)',
        message: '',
      });
      setErrors({});
    } else {
      setIsSending(false);
      setErrorMessage('Something went wrong. Please try again later.');
    }
  };

  return (
    <section id="contact" className="relative py-28 bg-transparent overflow-hidden">
      {/* Background Volumetric Glow */}
      <div className="absolute top-1/2 right-1/4 w-[650px] h-[650px] bg-blue-600/15 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-mono text-xs">
            <Mail className="w-3.5 h-3.5" />
            <span>Initiate Project Consultation</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white">
            Start Your <span className="text-gradient-cyan">Project</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Ready to build an enterprise-grade digital product? Submit your project details below or contact our leadership directly.
          </p>
        </div>

        {/* Contact Grid: Left Contact Direct Card, Right Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Direct Contact Column (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <GlassCard className="p-8 space-y-6 border-cyan-500/30 shadow-[0_0_50px_rgba(0,210,255,0.15)]">
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center shadow-glow-sm">
                  <span className="font-display font-black text-2xl text-white">R</span>
                </div>
                <div>
                  <h3 className="font-display font-extrabold text-xl text-white">RAJ TECH SOLUTIONS</h3>
                  <p className="text-xs text-cyan-400 font-mono">Transforming Ideas Into Digital Reality</p>
                </div>
              </div>

              <div className="text-xs text-slate-300 space-y-1 font-mono">
                <div>Founder: <strong className="text-white">YUVARAJ.M</strong></div>
                <div>Response SLA: <strong className="text-emerald-400">Under 12–24 Hours</strong></div>
              </div>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                We handle complete software development, custom React & Next.js engines, AI integration, mobile apps, and 24/7 SLA maintenance.
              </p>

              {/* Direct Active Contact Links */}
              <div className="space-y-4 pt-2">
                
                {/* Phone Hotline Link */}
                <a
                  href="tel:+919442812481"
                  className="flex items-center gap-4 p-4 rounded-xl bg-slate-950/90 border border-slate-800 hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(0,210,255,0.3)] transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-400 uppercase">Direct Phone Line</div>
                    <div className="text-sm font-mono font-bold text-white group-hover:text-cyan-300 transition-colors">
                      +91 9442812481
                    </div>
                  </div>
                </a>

                {/* Email Direct Link */}
                <a
                  href="mailto:ajayarun177@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-xl bg-slate-950/90 border border-slate-800 hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(0,210,255,0.3)] transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="truncate">
                    <div className="text-[11px] font-mono text-slate-400 uppercase">Official Email</div>
                    <div className="text-sm font-mono font-bold text-white group-hover:text-cyan-300 transition-colors truncate">
                      ajayarun177@gmail.com
                    </div>
                  </div>
                </a>

              </div>

              {/* NDA Guarantee Pill */}
              <div className="p-4 rounded-xl bg-blue-950/40 border border-blue-500/30 text-xs text-slate-300 flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>NDA & Confidentiality Agreement standard on all inquiries.</span>
              </div>

            </GlassCard>
          </div>

          {/* Right Project Inquiry Form (7 Cols) */}
          <div className="lg:col-span-7">
            <GlassCard className="p-8 sm:p-10 border-slate-800/90 shadow-2xl">
              
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <h3 className="font-display font-bold text-xl text-white mb-2">
                  Project Request Form
                </h3>

                {/* Error Banner */}
                {errorMessage && (
                  <div className="p-4 rounded-xl bg-rose-950/50 border border-rose-500/40 text-rose-300 text-xs flex items-center gap-3">
                    <AlertCircle className="w-5 h-5 text-rose-400 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* 1. Full Name & 2. Business / Company Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300 uppercase flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Full Name *</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Your Full Name"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: '' });
                      }}
                      className={`w-full px-4 py-3 rounded-xl bg-slate-950/90 border text-slate-100 text-sm focus:outline-none transition-colors ${
                        errors.name
                          ? 'border-rose-500 focus:border-rose-500'
                          : 'border-slate-800 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400'
                      }`}
                    />
                    {errors.name && (
                      <p className="text-[11px] font-mono text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.name}
                      </p>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300 uppercase flex items-center gap-1.5">
                      <Building className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Business / Company Name</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Company / Brand Name (Optional)"
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/90 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                    />
                  </div>
                </div>

                {/* 3. Email & 4. Phone Number */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300 uppercase flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-cyan-400" />
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
                      className={`w-full px-4 py-3 rounded-xl bg-slate-950/90 border text-slate-100 text-sm focus:outline-none transition-colors ${
                        errors.email
                          ? 'border-rose-500 focus:border-rose-500'
                          : 'border-slate-800 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-[11px] font-mono text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.email}
                      </p>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300 uppercase flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Phone Number *</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 9876543210"
                      value={formData.phone}
                      onChange={(e) => {
                        setFormData({ ...formData, phone: e.target.value });
                        if (errors.phone) setErrors({ ...errors, phone: '' });
                      }}
                      className={`w-full px-4 py-3 rounded-xl bg-slate-950/90 border text-slate-100 text-sm focus:outline-none transition-colors ${
                        errors.phone
                          ? 'border-rose-500 focus:border-rose-500'
                          : 'border-slate-800 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400'
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-[11px] font-mono text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                {/* 5. Project Type & 6. Budget */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300 uppercase flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Project Type *</span>
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/90 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                    >
                      <option value="Website Development">Website Development</option>
                      <option value="Web Applications">Web Applications (SaaS)</option>
                      <option value="AI Solutions">AI Solutions & RAG</option>
                      <option value="Automation">Workflow Automation</option>
                      <option value="UI UX Design">UI UX Design System</option>
                      <option value="Maintenance">Maintenance & SLA</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300 uppercase flex items-center gap-1.5">
                      <DollarSign className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Estimated Budget (INR) *</span>
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/90 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                    >
                      <option value="₹3,000 – ₹5,000">₹3,000 – ₹5,000 (Starter)</option>
                      <option value="₹8,000 – ₹15,000">₹8,000 – ₹15,000 (Business)</option>
                      <option value="₹18,000 – ₹30,000">₹18,000 – ₹30,000 (Professional)</option>
                      <option value="Custom Quote (₹30,000+)">Custom Quote (Enterprise)</option>
                    </select>
                  </div>
                </div>

                {/* 7. Expected Timeline */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-300 uppercase flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Expected Timeline *</span>
                  </label>
                  <select
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/90 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                  >
                    <option value="Immediate (1-2 Weeks)">Immediate (1 - 2 Weeks)</option>
                    <option value="2-4 Weeks">2 - 4 Weeks</option>
                    <option value="1-2 Months">1 - 2 Months</option>
                    <option value="Flexible / Ongoing">Flexible / Ongoing</option>
                  </select>
                </div>

                {/* 8. Project Description */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-300 uppercase flex items-center gap-1.5">
                    <MessageSquare className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Project Description *</span>
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Describe your project concept, key features, target timeline..."
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: '' });
                    }}
                    className={`w-full px-4 py-3 rounded-xl bg-slate-950/90 border text-slate-100 text-sm focus:outline-none transition-colors ${
                      errors.message
                        ? 'border-rose-500 focus:border-rose-500'
                        : 'border-slate-800 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-[11px] font-mono text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSending}
                  className="w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                  icon={
                    isSending ? (
                      <Loader2 className="w-4 h-4 animate-spin text-white" />
                    ) : (
                      <Send className="w-4 h-4" />
                    )
                  }
                >
                  {isSending ? 'Sending...' : 'Submit Project Inquiry'}
                </Button>
              </form>

            </GlassCard>
          </div>

        </div>

      </div>

      {/* Premium Success Popup Modal */}
      <AnimatePresence>
        {showSuccessModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-md p-8 rounded-3xl bg-slate-900 border border-cyan-500/40 shadow-[0_0_80px_rgba(0,210,255,0.3)] text-center space-y-5"
            >
              <button
                onClick={() => setShowSuccessModal(false)}
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-950 border border-slate-800 text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400/50 mx-auto flex items-center justify-center text-emerald-400 shadow-[0_0_30px_rgba(52,211,153,0.3)]">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <h3 className="font-display font-extrabold text-2xl text-white">
                  Project Request Submitted Successfully
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  Thank you for contacting <strong className="text-cyan-300 font-semibold">RAJ TECH SOLUTIONS</strong>.
                  <br />
                  We have successfully received your project request.
                  <br />
                  A confirmation email has been sent to your email address.
                  <br />
                  Our team will contact you within <strong className="text-emerald-400">12–24 hours</strong>.
                </p>
              </div>

              <div className="pt-2">
                <Button
                  onClick={() => setShowSuccessModal(false)}
                  size="md"
                  className="w-full justify-center"
                >
                  Close & Continue Browsing
                </Button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};
