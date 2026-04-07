"use client";

import { motion, MotionConfig } from "motion/react";
import Image from "next/image";
import React, { useState, useRef } from "react";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
import {
  Users,
  MapPin,
  FileText,
  MessageCircle,
  Calendar,
  CreditCard,
  BarChart3,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Building2,
} from "lucide-react";

const FloatingBlobs = () => (
  <div
    aria-hidden="true"
    className="fixed inset-0 -z-10 overflow-hidden pointer-events-none"
  >
    <div className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] rounded-full bg-brand-blue/10 blur-[120px]" />
    <div className="absolute top-[10%] -right-[20%] w-[60%] h-[60%] rounded-full bg-brand-purple/10 blur-[120px]" />
    <div className="absolute bottom-[10%] left-[10%] w-[80%] h-[80%] rounded-full bg-brand-green/10 blur-[150px]" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50%] h-[50%] rounded-full bg-brand-pink/10 blur-[100px]" />
    <div className="absolute top-[40%] right-[10%] w-[40%] h-[40%] rounded-full bg-brand-yellow/10 blur-[100px]" />
  </div>
);

const SectionTitle = ({
  children,
  subtitle,
  id,
}: {
  children: React.ReactNode;
  subtitle?: string;
  id?: string;
}) => (
  <div className="mb-12 text-center px-6">
    <motion.h2
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-3xl md:text-4xl font-bold tracking-tight mb-4 relative inline-block"
    >
      {children}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.8 }}
        aria-hidden="true"
        className="h-1.5 absolute -bottom-2 left-0 bg-linear-to-r from-[#2a6bec] via-[#eb4885] to-[#55c858] rounded-full"
      />
    </motion.h2>
    {subtitle && (
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-lg text-slate-700 max-w-2xl mx-auto"
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

const FeatureCard = ({
  icon: Icon,
  title,
  description,
  delay = 0,
  gradient,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  delay?: number;
  gradient?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    className="glass p-8 rounded-[32px] flex flex-col items-start gap-4"
  >
    <div
      aria-hidden="true"
      className={`w-12 h-12 rounded-2xl bg-linear-to-br ${gradient || "from-brand-purple/20 to-brand-pink/20"} flex items-center justify-center text-slate-900`}
    >
      <Icon size={24} />
    </div>
    <h3 className="text-xl font-semibold">{title}</h3>
    <p className="text-slate-700 leading-relaxed">{description}</p>
  </motion.div>
);

export default function HomePage() {
  const formRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", agree: false });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <MotionConfig reducedMotion="user">
      {/* Skip to main content — ADA keyboard nav */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-brand-purple focus:text-white focus:rounded-lg focus:font-bold focus:outline-none"
      >
        Skip to main content
      </a>

      <div className="relative min-h-screen font-sans selection:bg-brand-purple/30">
        <FloatingBlobs />

        <main id="main-content">
          {/* Hero Section */}
          <section
            aria-label="Partner Hub introduction"
            className="relative pt-20 pb-16 md:pt-32 md:pb-24 px-6 overflow-hidden"
          >
            <div aria-hidden="true" className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
              <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-blue/20 blur-[120px] rounded-full opacity-15" />
              <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-brand-green/20 blur-[120px] rounded-full opacity-10" />
            </div>

            <div className="max-w-4xl mx-auto text-center">
              {/* Logo badge */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="mb-8"
              >
                <Image
                  src={`${BASE}/images/Partner_Hub_Primary_Logo_Stacked.png`}
                  alt="Partner Hub"
                  width={300}
                  height={160}
                  className="h-56 w-auto mx-auto"
                  priority
                />
              </motion.div>

              <motion.h1
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-7xl font-bold tracking-tight mb-6 gradient-text"
              >
                Connecting Care
              </motion.h1>

              <motion.p
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-xl md:text-2xl text-slate-800 font-medium mb-4 max-w-2xl mx-auto"
              >
                One platform. Two experiences.{" "}
                <br className="hidden md:block" /> Built for families and providers.
              </motion.p>

              <motion.p
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-slate-700 mb-10 max-w-xl mx-auto font-medium"
              >
                Apply for programs, find care, select schools, and communicate with providers.
              </motion.p>

              {/* Animated scroll indicator */}
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                onClick={scrollToForm}
                aria-label="Scroll down to learn more"
                className="flex flex-col items-center gap-2 mt-6 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-purple rounded-lg"
              >
                <span className="text-xs font-semibold tracking-widest uppercase text-slate-500">Scroll</span>
                <div className="w-6 h-10 rounded-full border-2 border-slate-400 flex items-start justify-center p-1.5">
                  <motion.div
                    animate={{ y: [0, 14, 0] }}
                    transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
                    className="w-1.5 h-1.5 rounded-full bg-brand-purple"
                  />
                </div>
              </motion.button>
            </div>
          </section>

          {/* Families Section */}
          <section
            aria-labelledby="families-heading"
            className="py-20 px-6 bg-[#eb4885]/5 relative overflow-hidden"
          >
            <div aria-hidden="true" className="absolute top-0 right-0 w-64 h-64 bg-brand-pink/10 blur-[100px] rounded-full -z-10" />
            <div className="max-w-6xl mx-auto">
              <SectionTitle
                id="families-heading"
                subtitle="Find care, apply for programs, and stay connected with your child's journey."
              >
                For Families
              </SectionTitle>

              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="grid gap-6">
                  <FeatureCard
                    icon={FileText}
                    title="Secure Applications"
                    description="Securely upload required documents and submit applications for Pre-K and scholarships in minutes."
                    delay={0.1}
                    gradient="from-brand-blue/30 to-brand-purple/30"
                  />
                  <FeatureCard
                    icon={MapPin}
                    title="CCR&R Map"
                    description="Find providers that meet your family's specific needs using our interactive resource map."
                    delay={0.2}
                    gradient="from-brand-purple/30 to-brand-pink/30"
                  />
                  <FeatureCard
                    icon={MessageCircle}
                    title="Direct Communication"
                    description="Check application status and communicate directly with providers through our secure messaging system."
                    delay={0.3}
                    gradient="from-brand-pink/30 to-brand-yellow/30"
                  />
                  <motion.button
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    onClick={scrollToForm}
                    aria-label="Apply or get started — scroll to sign up form"
                    className="mt-4 flex items-center gap-2 text-brand-purple font-bold text-lg hover:gap-4 transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-purple rounded"
                  >
                    Apply or Get Started <ArrowRight aria-hidden="true" size={20} />
                  </motion.button>
                </div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9, x: 20 }}
                  whileInView={{ opacity: 1, scale: 1, x: 0 }}
                  viewport={{ once: true }}
                  aria-hidden="true"
                  className="relative aspect-square md:aspect-auto md:h-[600px] glass rounded-[40px] overflow-hidden p-8 flex flex-col gap-6"
                >
                  <div className="flex-1 bg-slate-100 rounded-3xl overflow-hidden relative border border-slate-200">
                    <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/map/800/800')] bg-cover bg-center opacity-40 grayscale" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="text-brand-pink"
                      >
                        <MapPin size={48} fill="currentColor" />
                      </motion.div>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 glass p-4 rounded-2xl">
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">CCR&R Map</p>
                      <p className="text-sm font-medium">32 Providers found in Forsyth County</p>
                    </div>
                  </div>

                  <div className="h-32 glass p-6 rounded-3xl flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                      <CheckCircle2 size={24} />
                    </div>
                    <div>
                      <p className="font-semibold">Application Submitted</p>
                      <p className="text-sm text-slate-600">NC Pre-K Program • Today, 10:42 AM</p>
                    </div>
                  </div>

                  <div className="absolute -right-4 top-1/4 glass p-4 rounded-2xl shadow-2xl hidden lg:block w-64">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-full bg-brand-purple/20" />
                      <p className="text-sm font-bold">Provider Support</p>
                    </div>
                    <p className="text-xs text-slate-700">Your documents have been verified. You&apos;re all set!</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Providers Section */}
          <section
            aria-labelledby="providers-heading"
            className="py-20 px-6 bg-[#2a6bec]/5 relative overflow-hidden"
          >
            <div aria-hidden="true" className="absolute bottom-0 left-0 w-64 h-64 bg-brand-blue/10 blur-[100px] rounded-full -z-10" />
            <div className="max-w-6xl mx-auto">
              <SectionTitle
                id="providers-heading"
                subtitle="Manage attendance, payments, and support families from one centralized system."
              >
                For Providers
              </SectionTitle>

              <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, x: -20 }}
                  whileInView={{ opacity: 1, scale: 1, x: 0 }}
                  viewport={{ once: true }}
                  aria-hidden="true"
                  className="relative aspect-square md:aspect-auto md:h-[600px] glass rounded-[40px] overflow-hidden p-8 flex flex-col gap-6 order-2 md:order-1"
                >
                  <div className="grid grid-cols-2 gap-4">
                    <div className="glass p-6 rounded-3xl">
                      <p className="text-xs font-bold text-slate-600 uppercase mb-2">Attendance</p>
                      <p className="text-3xl font-bold text-brand-purple">94%</p>
                      <p className="text-xs text-green-700 mt-1">+2% from last week</p>
                    </div>
                    <div className="glass p-6 rounded-3xl">
                      <p className="text-xs font-bold text-slate-600 uppercase mb-2">Payments</p>
                      <p className="text-3xl font-bold text-brand-pink">$12.4k</p>
                      <p className="text-xs text-slate-700 mt-1">Pending verification</p>
                    </div>
                  </div>

                  <div className="flex-1 glass rounded-3xl p-6 overflow-hidden">
                    <div className="flex items-center justify-between mb-6">
                      <p className="font-bold">Recent Invoices</p>
                      <BarChart3 size={20} className="text-slate-600" />
                    </div>
                    <div className="space-y-4">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="flex items-center justify-between py-3 border-b border-slate-100 last:border-0">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-slate-100" />
                            <div>
                              <p className="text-sm font-semibold">Site #{100 + i}</p>
                              <p className="text-xs text-slate-700">Monthly Report</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-sm font-bold">$2,450.00</p>
                            <p className="text-[10px] text-green-700 font-bold uppercase">Paid</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>

                <div className="grid gap-6 order-1 md:order-2">
                  <FeatureCard
                    icon={Calendar}
                    title="Attendance Tracking"
                    description="Keep accurate attendance records with our easy-to-use digital check-in system."
                    delay={0.1}
                    gradient="from-brand-yellow/30 to-brand-green/30"
                  />
                  <FeatureCard
                    icon={CreditCard}
                    title="Payment Management"
                    description="Manage provider payments and track invoices with full transparency and automated reporting."
                    delay={0.2}
                    gradient="from-brand-green/30 to-brand-blue/30"
                  />
                  <FeatureCard
                    icon={Building2}
                    title="Site Management"
                    description="Manage multiple sites, run comprehensive reports, and ensure compliance across your organization."
                    delay={0.3}
                    gradient="from-brand-blue/30 to-brand-purple/30"
                  />
                  <motion.button
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    onClick={scrollToForm}
                    aria-label="Access Provider Tools — scroll to sign up form"
                    className="mt-4 flex items-center gap-2 text-brand-pink font-bold text-lg hover:gap-4 transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-pink rounded"
                  >
                    Access Provider Tools <ArrowRight aria-hidden="true" size={20} />
                  </motion.button>
                </div>
              </div>
            </div>
          </section>

          {/* Supporting Section */}
          <section
            aria-labelledby="supporting-heading"
            className="py-24 px-6 text-center relative overflow-hidden bg-[#55c858]/5"
          >
            <div className="max-w-3xl mx-auto relative z-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                aria-hidden="true"
                className="w-20 h-20 bg-linear-to-br from-brand-pink via-brand-yellow to-brand-green rounded-3xl mx-auto mb-8 flex items-center justify-center text-white shadow-xl"
              >
                <Users size={40} />
              </motion.div>
              <motion.h2
                id="supporting-heading"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-bold mb-6"
              >
                Supporting communities in North Carolina
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-xl text-slate-700 mb-8 leading-relaxed"
              >
                Connecting families with care to ensure they have the relational and concrete supports they need to thrive.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-slate-700"
              >
                Smart Start of Forsyth County enriches young lives by supporting families, caregivers, and providers through high-quality early education programs.
              </motion.p>
            </div>

            <div aria-hidden="true" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10 opacity-30">
              <div className="absolute top-0 left-0 w-64 h-64 bg-brand-blue/50 blur-[100px] rounded-full" />
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-brand-green/50 blur-[100px] rounded-full" />
            </div>
          </section>

          {/* CTA + Form Section */}
          <section
            ref={formRef}
            id="get-started"
            aria-labelledby="cta-heading"
            className="py-20 px-6 bg-[#9956b9]/5 overflow-hidden relative"
          >
            <div aria-hidden="true" className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute -top-1/4 -left-1/4 w-[80%] h-[80%] bg-brand-purple/15 blur-[120px] rounded-full" />
              <div className="absolute -bottom-1/4 -right-1/4 w-[80%] h-[80%] bg-brand-blue/10 blur-[120px] rounded-full" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-pink/10 blur-[100px] rounded-full" />
            </div>

            <div className="max-w-xl mx-auto relative z-10">
              <div className="text-center mb-12">
                <motion.h2
                  id="cta-heading"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-4xl font-bold mb-4 text-slate-900"
                >
                  Get Started Today
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-slate-700"
                >
                  Join Partner Hub now to connect and thrive in early childhood education.
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 md:p-10 rounded-[40px] border border-slate-200 shadow-2xl"
              >
                <div aria-live="polite" role="status">
                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <div aria-hidden="true" className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                        <CheckCircle2 size={40} />
                      </div>
                      <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                      <p className="text-slate-700">
                        We&apos;ve received your information and will be in touch shortly.
                      </p>
                    </motion.div>
                  ) : (
                    <form
                      onSubmit={handleSubmit}
                      aria-label="Partner Hub sign up form"
                      className="space-y-6"
                    >
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                          Full Name
                        </label>
                        <input
                          id="name"
                          required
                          aria-required="true"
                          type="text"
                          autoComplete="name"
                          placeholder="Jane Doe"
                          className="w-full px-6 py-4 bg-white border border-slate-400 rounded-2xl focus:ring-2 focus:ring-brand-purple focus:border-brand-purple outline-none transition-all placeholder:text-slate-500 text-slate-900"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                          Email Address
                        </label>
                        <input
                          id="email"
                          required
                          aria-required="true"
                          type="email"
                          autoComplete="email"
                          placeholder="jane@example.com"
                          className="w-full px-6 py-4 bg-white border border-slate-400 rounded-2xl focus:ring-2 focus:ring-brand-purple focus:border-brand-purple outline-none transition-all placeholder:text-slate-500 text-slate-900"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">
                          Phone Number
                        </label>
                        <input
                          id="phone"
                          required
                          aria-required="true"
                          type="tel"
                          autoComplete="tel"
                          placeholder="(555) 000-0000"
                          className="w-full px-6 py-4 bg-white border border-slate-400 rounded-2xl focus:ring-2 focus:ring-brand-purple focus:border-brand-purple outline-none transition-all placeholder:text-slate-500 text-slate-900"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                      </div>
                      <div className="flex items-start gap-3">
                        <input
                          required
                          aria-required="true"
                          type="checkbox"
                          id="agree"
                          className="mt-1 w-5 h-5 rounded border-slate-400 text-brand-purple focus:ring-brand-purple"
                          checked={formData.agree}
                          onChange={(e) => setFormData({ ...formData, agree: e.target.checked })}
                        />
                        <label htmlFor="agree" className="text-sm text-slate-700 leading-relaxed">
                          I agree to receive communications regarding my application and Partner Hub updates.
                        </label>
                      </div>
                      <button
                        type="submit"
                        className="w-full py-5 bg-linear-to-r from-[#2a6bec] via-[#9956b9] via-[#eb4885] via-[#fcc10b] to-[#55c858] text-white rounded-2xl font-bold text-lg shadow-xl hover:opacity-90 transition-all active:scale-95 flex items-center justify-center gap-2 animate-gradient-x focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-purple"
                      >
                        Get Started
                        <ArrowRight aria-hidden="true" size={20} />
                      </button>
                    </form>
                  )}
                </div>
              </motion.div>

              <footer className="mt-12 text-center">
                <div className="flex items-center justify-center gap-2 text-slate-700 mb-6">
                  <ShieldCheck aria-hidden="true" size={18} />
                  <span className="text-sm">100% secure. Your information is never shared.</span>
                </div>

                <div className="pt-12 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6">
                  <Image
                    src={`${BASE}/images/Partner_Hub_Primary_Logo_Inline.png`}
                    alt="Partner Hub"
                    width={280}
                    height={56}
                    className="h-12 w-auto"
                  />
                  <div className="flex gap-4" aria-label="Program affiliations">
                    <div className="px-4 py-2 rounded-lg bg-white shadow-sm text-xs font-medium text-slate-700">NC Pre-K</div>
                    <div className="px-4 py-2 rounded-lg bg-white shadow-sm text-xs font-medium text-slate-700">Smart Start</div>
                  </div>
                </div>
              </footer>
            </div>

            <div aria-hidden="true" className="absolute top-0 right-0 w-96 h-96 bg-brand-purple/20 blur-[120px] rounded-full -z-0" />
            <div aria-hidden="true" className="absolute bottom-0 left-0 w-96 h-96 bg-brand-pink/10 blur-[120px] rounded-full -z-0" />
          </section>
        </main>
      </div>
    </MotionConfig>
  );
}
