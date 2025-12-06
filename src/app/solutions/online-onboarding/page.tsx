import AnnouncementBar from '@/components/layout/announcement-bar';
import SimpleNavigation from '@/components/layout/simple-navigation';
import CTASection from '@/components/layout/cta-section';
import Footer from '@/components/layout/footer';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Online Onboarding & eKYC | unfamiliar.id',
  description: 'Remote identity verification for customer onboarding. Meet KYC/AML requirements with document verification and biometric face match.',
};

const steps = [
  { step: '1', title: 'Document Capture', description: 'User uploads or captures ID using our SDK.' },
  { step: '2', title: 'Data Extraction', description: 'AI extracts and validates all document data.' },
  { step: '3', title: 'Face Match', description: 'Selfie compared to ID photo with liveness check.' },
  { step: '4', title: 'Decision', description: 'Instant pass/fail with detailed verification report.' },
];

const compliance = [
  'KYC (Know Your Customer)',
  'AML (Anti-Money Laundering)',
  'CIP (Customer Identification Program)',
  'GDPR Compliant',
  'SOC 2 Type II',
  'PCI DSS',
];

export default function OnlineOnboardingPage() {
  return (
    <div className="antialiased bg-body text-body font-body">
      <AnnouncementBar />
      <SimpleNavigation />

      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Link href="/solutions" className="text-teal-900 hover:text-teal-700 mb-4 inline-block">
              ← Back to Solutions
            </Link>
            <h1 className="font-heading text-5xl sm:text-6xl mb-6 text-gray-900">Online Onboarding & eKYC</h1>
            <p className="text-xl text-gray-700 mb-8">
              Remote identity verification for customer onboarding. 
              Meet KYC/AML requirements with document verification and biometric face match.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex py-4 px-8 items-center justify-center text-lg font-medium text-white bg-teal-900 hover:bg-teal-800 rounded-full transition duration-200"
              >
                Request Demo
              </Link>
              <Link
                href="/developers"
                className="inline-flex py-4 px-8 items-center justify-center text-lg font-medium text-teal-900 border border-teal-900 hover:bg-teal-900 hover:text-white rounded-full transition duration-200"
              >
                View API Docs
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-4xl text-center mb-12 text-gray-900">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {steps.map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 bg-lime-500 text-teal-900 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="py-16 lg:py-24 bg-teal-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-4xl text-center mb-12 text-white">Compliance Ready</h2>
          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            {compliance.map((item, index) => (
              <span key={index} className="px-6 py-3 bg-white/10 rounded-full">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer backgroundImage="/images/footer-waves-left-bottom.png" />
    </div>
  );
}
