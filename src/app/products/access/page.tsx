import AnnouncementBar from '@/components/layout/announcement-bar';
import SimpleNavigation from '@/components/layout/simple-navigation';
import CTASection from '@/components/layout/cta-section';
import Footer from '@/components/layout/footer';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Access & Visitor Management | unfamiliar.id',
  description: 'Verify guests, manage entry points, and enforce watchlists with complete audit trails.',
};

const features = [
  {
    title: 'Visitor Check-In',
    description: 'Streamlined check-in process with ID verification for guests and contractors.',
  },
  {
    title: 'Watchlist Enforcement',
    description: 'Screen visitors against custom deny lists and receive instant alerts.',
  },
  {
    title: 'Door Integrations',
    description: 'Connect with access control systems to automate entry based on verification.',
  },
  {
    title: 'Complete Audit Logs',
    description: 'Full history of all visitor activity for compliance and security review.',
  },
  {
    title: 'Pre-Registration',
    description: 'Allow visitors to verify identity before arrival for faster check-in.',
  },
  {
    title: 'Badge Printing',
    description: 'Automatically print visitor badges with photo and access permissions.',
  },
];

export default function AccessPage() {
  return (
    <div className="antialiased bg-body text-body font-body">
      <AnnouncementBar />
      <SimpleNavigation />

      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Link href="/products" className="text-teal-900 hover:text-teal-700 mb-4 inline-block">
              ← Back to Products
            </Link>
            <h1 className="font-heading text-5xl sm:text-6xl mb-6 text-gray-900">Access & Visitor Management</h1>
            <p className="text-xl text-gray-700 mb-8">
              Verify guests, manage entry points, and enforce watchlists. 
              Complete audit trails for compliance and security.
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

      {/* Features Grid */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-4xl text-center mb-12 text-gray-900">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="p-6 bg-white border border-gray-200 rounded-xl">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 lg:py-24 bg-teal-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-4xl text-center mb-12 text-white">Use Cases</h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-white/10 rounded-xl">
              <h3 className="text-xl font-semibold mb-3 text-white">Corporate Offices</h3>
              <p className="text-white/80">Secure visitor management for headquarters and branch offices.</p>
            </div>
            <div className="p-6 bg-white/10 rounded-xl">
              <h3 className="text-xl font-semibold mb-3 text-white">Events & Venues</h3>
              <p className="text-white/80">Age verification and VIP check-in for concerts, clubs, and events.</p>
            </div>
            <div className="p-6 bg-white/10 rounded-xl">
              <h3 className="text-xl font-semibold mb-3 text-white">Healthcare</h3>
              <p className="text-white/80">Patient and visitor verification for hospitals and clinics.</p>
            </div>
            <div className="p-6 bg-white/10 rounded-xl">
              <h3 className="text-xl font-semibold mb-3 text-white">Government</h3>
              <p className="text-white/80">Secure access control for government buildings and facilities.</p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer backgroundImage="/images/footer-waves-left-bottom.png" />
    </div>
  );
}
