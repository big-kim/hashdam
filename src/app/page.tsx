'use client';

import dynamic from 'next/dynamic'
import { HeroSection, LogoCloudsSection, ComparisonSection, FooterSection } from '@/components/sections'
import Navigation from '@/components/ui/Navigation'
import { useLanguage } from '@/contexts/LanguageContext'
import { useTranslation } from '@/hooks/useTranslation'

// Dynamic imports for performance optimization (code splitting)
const ASICSection = dynamic(() => import('@/components/sections').then(mod => ({ default: mod.ASICSection })), {
  loading: () => <div className="w-full py-[60px] px-4 sm:px-6 lg:px-28 flex items-center justify-center"><div className="text-gray-600 font-['Inter'] text-lg">Loading...</div></div>
})

const FeaturesSection = dynamic(() => import('@/components/sections').then(mod => ({ default: mod.FeaturesSection })), {
  loading: () => <div className="w-full py-[60px] px-4 sm:px-6 lg:px-28 flex items-center justify-center"><div className="text-gray-600 font-['Inter'] text-lg">Loading...</div></div>
})

const CalculatorSection = dynamic(() => import('@/components/sections').then(mod => ({ default: mod.CalculatorSection })), {
  loading: () => <div className="w-full bg-[#d8effa] py-[60px] px-4 sm:px-6 lg:px-28 flex items-center justify-center"><div className="text-[#0066cc] font-['Inter'] text-lg">Calculator loading...</div></div>,
  ssr: false
})

const ApplicationsSection = dynamic(() => import('@/components/sections').then(mod => ({ default: mod.ApplicationsSection })), {
  loading: () => <div className="w-full py-[60px] px-4 sm:px-6 lg:px-28 flex items-center justify-center"><div className="text-gray-600 font-['Inter'] text-lg">Loading...</div></div>
})

const BusinessBenefitsSection = dynamic(() => import('@/components/sections').then(mod => ({ default: mod.BusinessBenefitsSection })), {
  loading: () => <div className="w-full py-[60px] px-4 sm:px-6 lg:px-28 flex items-center justify-center"><div className="text-gray-600 font-['Inter'] text-lg">Loading...</div></div>
})

const HowToProcessSection = dynamic(() => import('@/components/sections').then(mod => ({ default: mod.HowToProcessSection })), {
  loading: () => <div className="w-full py-[60px] px-4 sm:px-6 lg:px-28 flex items-center justify-center"><div className="text-gray-600 font-['Inter'] text-lg">Loading...</div></div>
})

const ProductPricingSection = dynamic(() => import('@/components/sections').then(mod => ({ default: mod.ProductPricingSection })), {
  loading: () => <div className="w-full py-[60px] px-4 sm:px-6 lg:px-28 flex items-center justify-center"><div className="text-gray-600 font-['Inter'] text-lg">Loading...</div></div>
})

const StatisticsSection = dynamic(() => import('@/components/sections').then(mod => ({ default: mod.StatisticsSection })), {
  loading: () => <div className="w-full py-[60px] px-4 sm:px-6 lg:px-28 flex items-center justify-center"><div className="text-gray-600 font-['Inter'] text-lg">Loading...</div></div>
})

const MembershipSection = dynamic(() => import('@/components/sections').then(mod => ({ default: mod.MembershipSection })), {
  loading: () => <div className="w-full py-[60px] px-4 sm:px-6 lg:px-28 flex items-center justify-center"><div className="text-gray-600 font-['Inter'] text-lg">Loading...</div></div>
})

const CTASection = dynamic(() => import('@/components/sections').then(mod => ({ default: mod.CTASection })), {
  loading: () => <div className="w-full py-[60px] px-4 sm:px-6 lg:px-28 flex items-center justify-center"><div className="text-gray-600 font-['Inter'] text-lg">Loading...</div></div>
})

export default function HomePage() {
  const { language } = useLanguage();
  const t = useTranslation();

  return (
    <>
      {/* Navigation */}
      <Navigation key={`nav-${language}`} />

      {/* Hero Section */}
      <header role="banner" key={`hero-${language}`}>
        <HeroSection />
      </header>

      {/* Main Content */}
      <main id="main-content" className="min-h-screen" role="main" key={`main-${language}`}>
        {/* About Section */}
        <section id="about" className="relative" aria-labelledby="about-heading">
          <h2 id="about-heading" className="sr-only">{t.common.sections.about}</h2>
          <LogoCloudsSection />
        </section>

        {/* Comparison Section */}
        <section id="comparison" className="relative" aria-labelledby="comparison-heading">
          <h2 id="comparison-heading" className="sr-only">{t.common.sections.comparison}</h2>
          <ComparisonSection />
        </section>

        {/* Features Section */}
        <section id="features" className="relative" aria-labelledby="features-heading">
          <h2 id="features-heading" className="sr-only">{t.common.sections.features}</h2>
          <ASICSection />
        </section>

        {/* ASIC Section */}
        <section id="asic" className="relative" aria-labelledby="asic-heading">
          <h2 id="asic-heading" className="sr-only">{t.common.sections.asic}</h2>
          <FeaturesSection />
        </section>

        {/* Calculator Section */}
        <section id="calculator" className="relative" aria-labelledby="calculator-heading">
          <h2 id="calculator-heading" className="sr-only">{t.common.sections.calculator}</h2>
          <CalculatorSection />
        </section>

        {/* Applications Section */}
        <section id="applications" className="relative" aria-labelledby="applications-heading">
          <h2 id="applications-heading" className="sr-only">{t.common.sections.applications}</h2>
          <ApplicationsSection />
        </section>

        {/* Business Benefits Section */}
        <section id="business" className="relative" aria-labelledby="business-heading">
          <h2 id="business-heading" className="sr-only">{t.common.sections.business}</h2>
          <BusinessBenefitsSection />
        </section>

        {/* Process Section */}
        <section id="process" className="relative" aria-labelledby="process-heading">
          <h2 id="process-heading" className="sr-only">{t.common.sections.process}</h2>
          <HowToProcessSection />
        </section>

        {/* Products Section */}
        <section id="products" className="relative" aria-labelledby="products-heading">
          <h2 id="products-heading" className="sr-only">{t.common.sections.products}</h2>
          <ProductPricingSection />
        </section>

        {/* Statistics Section */}
        <section id="statistics" className="relative" aria-labelledby="statistics-heading">
          <h2 id="statistics-heading" className="sr-only">{t.common.sections.statistics}</h2>
          <StatisticsSection />
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="relative" aria-labelledby="pricing-heading">
          <h2 id="pricing-heading" className="sr-only">{t.common.sections.pricing}</h2>
          <MembershipSection />
        </section>

        {/* Contact Section */}
        <section id="contact" className="relative" aria-labelledby="contact-heading">
          <h2 id="contact-heading" className="sr-only">{t.common.sections.contact}</h2>
          <CTASection />
        </section>
      </main>

      {/* Footer */}
      <footer role="contentinfo" key={`footer-${language}`}>
        <FooterSection />
      </footer>
    </>
  );
}