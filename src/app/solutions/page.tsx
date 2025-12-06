import AnnouncementBar from '@/components/layout/announcement-bar';
import SimpleNavigation from '@/components/layout/simple-navigation';
import CTASection from '@/components/layout/cta-section';
import Footer from '@/components/layout/footer';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Solutions | unfamiliar.id',
  description: 'Identity verification solutions for every industry. Age verification, eKYC, secure access, and more.',
};

const solutions = [
  {
    id: 'age-verification',
    title: 'Age Verification',
    description: 'Instant age verification for cannabis, alcohol, gaming, and other age-restricted industries. Stay compliant and reduce liability.',
    industries: ['Cannabis', 'Alcohol', 'Gaming', 'Nightlife'],
    href: '/solutions/age-verification',
    highlight: true,
  },
  {
    id: 'online-onboarding',
    title: 'Online Onboarding & eKYC',
    description: 'Remote identity verification for customer onboarding. Meet KYC/AML requirements with document verification and biometric face match.',
    industries: ['FinTech', 'Banking', 'Crypto', 'Insurance'],
    href: '/solutions/online-onboarding',
    highlight: false,
  },
  {
    id: 'secure-access',
    title: 'Secure Access & Entry Control',
    description: 'Verify visitors, manage entry points, and enforce watchlists. Complete audit trails for compliance.',
    industries: ['Corporate', 'Government', 'Events', 'Healthcare'],
    href: '/solutions/secure-access',
    highlight: false,
  },
  {
    id: 'marketplaces',
    title: 'Marketplaces & Gig Economy',
    description: 'Verify sellers, drivers, and service providers. Build trust in your platform with identity verification.',
    industries: ['Delivery', 'Rideshare', 'Rentals', 'Services'],
    href: '/solutions/marketplaces',
    highlight: false,
  },
  {
    id: 'remote-hiring',
    title: 'Remote Hiring & Workforce',
    description: 'Verify candidate identity during hiring. Ensure I-9 compliance and prevent identity fraud.',
    industries: ['HR', 'Staffing', 'Enterprise', 'Remote Teams'],
    href: '/solutions/remote-hiring',
    highlight: false,
  },
];

const industries = [
  { name: 'Cannabis', icon: '🌿' },
  { name: 'FinTech', icon: '💳' },
  { name: 'Gaming', icon: '🎰' },
  { name: 'Hospitality', icon: '🏨' },
  { name: 'Government', icon: '🏛️' },
  { name: 'Transportation', icon: '🚗' },
];

export default function SolutionsPage() {
  return (
    <div className="antialiased bg-body text-body font-body">
      <AnnouncementBar />
      <SimpleNavigation />

      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-5xl sm:text-6xl mb-6 text-gray-900">Solutions</h1>
            <p className="text-xl text-gray-700">
              Identity verification tailored to your industry. 
              From age-restricted compliance to enterprise eKYC.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Bar */}
      <section className="py-8 bg-teal-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8">
            {industries.map((industry) => (
              <div key={industry.name} className="flex items-center text-white">
                <span className="text-2xl mr-2">{industry.icon}</span>
                <span className="font-medium">{industry.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="space-y-8">
            {solutions.map((solution) => (
              <Link
                key={solution.id}
                href={solution.href}
                className={`group block p-8 rounded-2xl border transition-all duration-300 ${
                  solution.highlight 
                    ? 'bg-lime-500 border-lime-500 hover:bg-lime-400' 
                    : 'bg-white border-gray-200 hover:border-teal-900/20 hover:shadow-lg'
                }`}
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="lg:max-w-2xl">
                    <h3 className="text-2xl font-semibold mb-3 text-gray-900 group-hover:text-teal-900 transition-colors">
                      {solution.title}
                    </h3>
                    <p className={`mb-4 ${solution.highlight ? 'text-teal-900' : 'text-gray-600'}`}>
                      {solution.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {solution.industries.map((industry, index) => (
                        <span 
                          key={index} 
                          className={`px-3 py-1 text-sm rounded-full ${
                            solution.highlight 
                              ? 'bg-teal-900/10 text-teal-900' 
                              : 'bg-gray-100 text-gray-700'
                          }`}
                        >
                          {industry}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-6 lg:mt-0 text-teal-900 font-medium group-hover:translate-x-1 transition-transform inline-flex items-center">
                    Learn more →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-4xl sm:text-5xl mb-6 text-gray-900">Don't See Your Industry?</h2>
            <p className="text-xl text-gray-700 mb-8">
              Our platform is flexible and can be customized for any verification use case. 
              Talk to our team about your specific requirements.
            </p>
            <Link
              href="/contact"
              className="inline-flex py-4 px-8 items-center justify-center text-lg font-medium text-white bg-teal-900 hover:bg-teal-800 rounded-full transition duration-200"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer backgroundImage="/images/footer-waves-left-bottom.png" />
    </div>
  );
}
