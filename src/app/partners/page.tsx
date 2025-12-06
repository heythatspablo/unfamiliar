import AnnouncementBar from '@/components/layout/announcement-bar';
import SimpleNavigation from '@/components/layout/simple-navigation';
import CTASection from '@/components/layout/cta-section';
import Footer from '@/components/layout/footer';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Partners | unfamiliar.id',
  description: 'Partner with unfamiliar.id. Reseller, integration, and technology partnerships.',
};

const partnerTypes = [
  {
    title: 'Technology Partners',
    description: 'Integrate unfamiliar.id into your platform or product.',
    benefits: ['API access', 'Technical support', 'Co-marketing opportunities', 'Revenue share'],
    icon: '🔧',
  },
  {
    title: 'Reseller Partners',
    description: 'Sell unfamiliar.id solutions to your customers.',
    benefits: ['Wholesale pricing', 'Sales enablement', 'Deal registration', 'Partner portal'],
    icon: '🤝',
  },
  {
    title: 'Integration Partners',
    description: 'Build integrations with popular platforms and tools.',
    benefits: ['Developer resources', 'Listing in marketplace', 'Joint go-to-market', 'Technical training'],
    icon: '🔌',
  },
];

export default function PartnersPage() {
  return (
    <div className="antialiased bg-body text-body font-body">
      <AnnouncementBar />
      <SimpleNavigation />

      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-lime-500">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-5xl sm:text-6xl mb-6 text-gray-900">Partner With Us</h1>
            <p className="text-xl mb-8">
              Join our partner ecosystem and grow your business with identity verification.
            </p>
            <Link
              href="/contact"
              className="inline-flex py-4 px-8 items-center justify-center text-lg font-medium text-white bg-teal-900 hover:bg-teal-800 rounded-full transition duration-200"
            >
              Become a Partner
            </Link>
          </div>
        </div>
      </section>

      {/* Partner Types */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-4xl text-center mb-12 text-gray-900">Partnership Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {partnerTypes.map((type) => (
              <div key={type.title} className="p-8 bg-white border border-gray-200 rounded-2xl">
                <span className="text-4xl mb-4 block">{type.icon}</span>
                <h3 className="text-2xl font-semibold mb-3 text-gray-900">{type.title}</h3>
                <p className="text-gray-600 mb-6">{type.description}</p>
                <ul className="space-y-2">
                  {type.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-700">
                      <span className="w-1.5 h-1.5 bg-lime-500 rounded-full mr-3"></span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Partner */}
      <section className="py-16 lg:py-24 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-4xl text-center mb-12 text-gray-900">Why Partner With unfamiliar.id?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Growing Market</h3>
                <p className="text-gray-600">Identity verification is a $15B+ market growing 15% annually.</p>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Best-in-Class Technology</h3>
                <p className="text-gray-600">AI-powered verification with 99%+ accuracy and sub-second response times.</p>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Dedicated Support</h3>
                <p className="text-gray-600">Partner success team to help you win and grow.</p>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Competitive Economics</h3>
                <p className="text-gray-600">Attractive margins and revenue share programs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-teal-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-4xl mb-6 text-white">Ready to Partner?</h2>
            <p className="text-white/80 mb-8">
              Tell us about your business and how we can work together.
            </p>
            <Link
              href="/contact"
              className="inline-flex py-4 px-8 items-center justify-center text-lg font-medium text-teal-900 bg-lime-500 hover:bg-lime-400 rounded-full transition duration-200"
            >
              Contact Partnerships
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer backgroundImage="/images/footer-waves-left-bottom.png" />
    </div>
  );
}
