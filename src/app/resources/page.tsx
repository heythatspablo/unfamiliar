import AnnouncementBar from '@/components/layout/announcement-bar';
import SimpleNavigation from '@/components/layout/simple-navigation';
import CTASection from '@/components/layout/cta-section';
import Footer from '@/components/layout/footer';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resources | unfamiliar.id',
  description: 'Case studies, guides, and documentation for identity verification.',
};

const resources = [
  {
    type: 'Case Study',
    title: 'How a Cannabis Dispensary Reduced Verification Time by 76%',
    description: 'Learn how one dispensary chain automated age verification and improved customer experience.',
    href: '/blog',
    tag: 'Age Verification',
  },
  {
    type: 'Guide',
    title: 'The Complete Guide to Identity Verification for Regulated Industries',
    description: 'Everything you need to know about implementing identity verification for compliance.',
    href: '/blog',
    tag: 'Compliance',
  },
  {
    type: 'Case Study',
    title: 'FinTech Startup Achieves 94% Pass Rate with AI Document Auth',
    description: 'How a growing fintech reduced fraud while maintaining a smooth onboarding experience.',
    href: '/blog',
    tag: 'eKYC',
  },
  {
    type: 'Guide',
    title: 'Implementing Biometric Face Match: Best Practices',
    description: 'Technical guide to integrating face match with liveness detection.',
    href: '/blog',
    tag: 'Technical',
  },
];

const categories = [
  { name: 'All', count: 12 },
  { name: 'Case Studies', count: 4 },
  { name: 'Guides', count: 5 },
  { name: 'Product Sheets', count: 3 },
];

export default function ResourcesPage() {
  return (
    <div className="antialiased bg-body text-body font-body">
      <AnnouncementBar />
      <SimpleNavigation />

      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-5xl sm:text-6xl mb-6 text-gray-900">Resources</h1>
            <p className="text-xl text-gray-700">
              Case studies, guides, and documentation to help you implement identity verification.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.name}
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-teal-900 hover:bg-lime-500/20 rounded-full transition-colors"
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {resources.map((resource, index) => (
              <Link
                key={index}
                href={resource.href}
                className="group block p-8 bg-white border border-gray-200 rounded-2xl hover:border-teal-900/20 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-teal-900/10 text-teal-900 text-sm font-medium rounded-full">
                    {resource.type}
                  </span>
                  <span className="px-3 py-1 bg-lime-500/20 text-teal-900 text-sm rounded-full">
                    {resource.tag}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-teal-900 transition-colors">
                  {resource.title}
                </h3>
                <p className="text-gray-600">{resource.description}</p>
                <div className="mt-4 text-teal-900 font-medium">
                  Read more →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 lg:py-24 bg-teal-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-heading text-4xl mb-4 text-white">Stay Updated</h2>
            <p className="text-white/80 mb-8">
              Get the latest resources, guides, and industry insights delivered to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full text-gray-900 outline-none focus:ring-2 focus:ring-lime-500"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-lime-500 text-teal-900 font-medium rounded-full hover:bg-lime-400 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer backgroundImage="/images/footer-waves-left-bottom.png" />
    </div>
  );
}
