import AnnouncementBar from '@/components/layout/announcement-bar';
import SimpleNavigation from '@/components/layout/simple-navigation';
import CTASection from '@/components/layout/cta-section';
import Footer from '@/components/layout/footer';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Marketplaces & Gig Economy | unfamiliar.id',
  description: 'Verify sellers, drivers, and service providers. Build trust in your platform with identity verification.',
};

export default function MarketplacesPage() {
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
            <h1 className="font-heading text-5xl sm:text-6xl mb-6 text-gray-900">Marketplaces & Gig Economy</h1>
            <p className="text-xl text-gray-700 mb-8">
              Verify sellers, drivers, and service providers. 
              Build trust in your platform with identity verification.
            </p>
            <Link
              href="/contact"
              className="inline-flex py-4 px-8 items-center justify-center text-lg font-medium text-white bg-teal-900 hover:bg-teal-800 rounded-full transition duration-200"
            >
              Request Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-4xl text-center mb-12 text-gray-900">Use Cases</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-6 bg-white border border-gray-200 rounded-xl">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Delivery Platforms</h3>
              <p className="text-gray-600">Verify drivers before they start delivering for your platform.</p>
            </div>
            <div className="p-6 bg-white border border-gray-200 rounded-xl">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Rideshare</h3>
              <p className="text-gray-600">Ensure driver identity matches their profile for passenger safety.</p>
            </div>
            <div className="p-6 bg-white border border-gray-200 rounded-xl">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Rental Platforms</h3>
              <p className="text-gray-600">Verify guests and hosts for vacation rentals and car sharing.</p>
            </div>
            <div className="p-6 bg-white border border-gray-200 rounded-xl">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Service Marketplaces</h3>
              <p className="text-gray-600">Build trust by verifying service providers and contractors.</p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer backgroundImage="/images/footer-waves-left-bottom.png" />
    </div>
  );
}
