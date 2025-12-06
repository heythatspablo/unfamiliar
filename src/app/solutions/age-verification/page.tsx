import AnnouncementBar from '@/components/layout/announcement-bar';
import SimpleNavigation from '@/components/layout/simple-navigation';
import CTASection from '@/components/layout/cta-section';
import Footer from '@/components/layout/footer';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Age Verification | unfamiliar.id',
  description: 'Instant age verification for cannabis, alcohol, gaming, and other age-restricted industries.',
};

const industries = [
  { name: 'Cannabis Dispensaries', description: 'Verify 21+ customers at point of sale and delivery.' },
  { name: 'Alcohol & Tobacco', description: 'Age-gate online sales and verify at delivery.' },
  { name: 'Gaming & Gambling', description: 'Ensure players meet age requirements for online and in-person gaming.' },
  { name: 'Nightlife & Events', description: 'Speed up entry with instant ID verification at the door.' },
];

const benefits = [
  { title: 'Stay Compliant', description: 'Meet state and federal age verification requirements automatically.' },
  { title: 'Reduce Liability', description: 'Document every verification for audit trails and legal protection.' },
  { title: 'Faster Service', description: 'Verify age in seconds, not minutes. Keep lines moving.' },
  { title: 'Catch Fakes', description: 'AI-powered fraud detection stops fake IDs that humans miss.' },
];

export default function AgeVerificationPage() {
  return (
    <div className="antialiased bg-body text-body font-body">
      <AnnouncementBar />
      <SimpleNavigation />

      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-lime-500">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Link href="/solutions" className="text-teal-900 hover:text-teal-700 mb-4 inline-block">
              ← Back to Solutions
            </Link>
            <h1 className="font-heading text-5xl sm:text-6xl mb-6 text-gray-900">Age Verification</h1>
            <p className="text-xl mb-8">
              Instant age verification for cannabis, alcohol, gaming, and other age-restricted industries. 
              Stay compliant and reduce liability.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex py-4 px-8 items-center justify-center text-lg font-medium text-white bg-teal-900 hover:bg-teal-800 rounded-full transition duration-200"
              >
                Request Demo
              </Link>
              <Link
                href="/pricing"
                className="inline-flex py-4 px-8 items-center justify-center text-lg font-medium text-teal-900 border border-teal-900 hover:bg-teal-900 hover:text-white rounded-full transition duration-200"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-4xl text-center mb-12 text-gray-900">Industries We Serve</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {industries.map((industry, index) => (
              <div key={index} className="p-6 bg-white border border-gray-200 rounded-xl">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{industry.name}</h3>
                <p className="text-gray-600">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 lg:py-24 bg-orange-50">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-4xl text-center mb-12 text-gray-900">Why unfamiliar.id?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <h3 className="text-lg font-semibold mb-2 text-gray-900">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer backgroundImage="/images/footer-waves-left-bottom.png" />
    </div>
  );
}
