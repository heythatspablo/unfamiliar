import AnnouncementBar from '@/components/layout/announcement-bar';
import SimpleNavigation from '@/components/layout/simple-navigation';
import CTASection from '@/components/layout/cta-section';
import Footer from '@/components/layout/footer';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Developers | unfamiliar.id',
  description: 'Developer documentation, APIs, SDKs, and resources for integrating identity verification.',
};

const resources = [
  {
    title: 'API Reference',
    description: 'Complete REST API documentation with endpoints, parameters, and response schemas.',
    href: '/docs',
    icon: '📚',
  },
  {
    title: 'Web SDK',
    description: 'JavaScript SDK for browser-based identity verification with pre-built UI components.',
    href: '/docs/sdk',
    icon: '🌐',
  },
  {
    title: 'Mobile SDKs',
    description: 'Native SDKs for iOS and Android with camera capture and document detection.',
    href: '/docs/sdk',
    icon: '📱',
  },
  {
    title: 'Sample Apps',
    description: 'Example implementations in React, Node.js, Python, and more.',
    href: '/developers/samples',
    icon: '💻',
  },
];

const codeExample = `// Verify an ID document
const response = await fetch('https://api.unfamiliar.id/v1/verify', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    document_front: base64Image,
    document_back: base64ImageBack,
    selfie: base64Selfie
  })
});

const result = await response.json();
// { verified: true, document: { ... }, face_match: { score: 0.98 } }`;

export default function DevelopersPage() {
  return (
    <div className="antialiased bg-body text-body font-body">
      <AnnouncementBar />
      <SimpleNavigation />

      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-teal-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-5xl sm:text-6xl mb-6 text-white">Built for Developers</h1>
            <p className="text-xl text-white/80 mb-8">
              RESTful APIs, comprehensive SDKs, and detailed documentation. 
              Integrate identity verification in hours, not weeks.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/docs"
                className="inline-flex py-4 px-8 items-center justify-center text-lg font-medium text-teal-900 bg-lime-500 hover:bg-lime-400 rounded-full transition duration-200"
              >
                Read the Docs
              </Link>
              <Link
                href="/contact"
                className="inline-flex py-4 px-8 items-center justify-center text-lg font-medium text-white border border-white hover:bg-white hover:text-teal-900 rounded-full transition duration-200"
              >
                Get API Key
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Code Example */}
      <section className="py-16 lg:py-24 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-white text-2xl font-semibold mb-6">Quick Start</h2>
            <pre className="bg-black rounded-xl p-6 overflow-x-auto">
              <code className="text-sm text-green-400 font-mono whitespace-pre">
                {codeExample}
              </code>
            </pre>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-4xl text-center mb-12 text-gray-900">Developer Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {resources.map((resource) => (
              <Link
                key={resource.title}
                href={resource.href}
                className="group block p-8 bg-white border border-gray-200 rounded-2xl hover:border-teal-900/20 hover:shadow-lg transition-all duration-300"
              >
                <span className="text-4xl mb-4 block">{resource.icon}</span>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-teal-900 transition-colors">
                  {resource.title}
                </h3>
                <p className="text-gray-600">{resource.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 lg:py-24 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-4xl text-center mb-12 text-gray-900">Developer Experience</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900">Fast Integration</h3>
                <p className="text-gray-600">Go live in hours with our SDKs and pre-built UI components.</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🔒</div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900">Secure by Default</h3>
                <p className="text-gray-600">TLS encryption, API key rotation, and webhook signatures.</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900">Real-time Webhooks</h3>
                <p className="text-gray-600">Get instant notifications for verification events.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer backgroundImage="/images/footer-waves-left-bottom.png" />
    </div>
  );
}
