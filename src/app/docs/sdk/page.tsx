import AnnouncementBar from '@/components/layout/announcement-bar';
import SimpleNavigation from '@/components/layout/simple-navigation';
import Footer from '@/components/layout/footer';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SDK Documentation | unfamiliar.id',
  description: 'SDK reference for Web, iOS, and Android identity verification integration.',
};

const sdks = [
  {
    name: 'Web SDK',
    description: 'JavaScript SDK for browser-based verification with pre-built UI components.',
    install: 'npm install @unfamiliar/web-sdk',
    docs: '#web-sdk',
  },
  {
    name: 'iOS SDK',
    description: 'Native Swift SDK with camera capture and document detection.',
    install: 'pod \'UnfamiliarID\'',
    docs: '#ios-sdk',
  },
  {
    name: 'Android SDK',
    description: 'Native Kotlin SDK for Android applications.',
    install: 'implementation \'id.unfamiliar:android-sdk:1.0.0\'',
    docs: '#android-sdk',
  },
];

export default function SDKDocsPage() {
  return (
    <div className="antialiased bg-body text-body font-body">
      <AnnouncementBar />
      <SimpleNavigation />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <Link href="/docs" className="text-teal-900 hover:text-teal-700 mb-4 inline-block">
            ← Back to API Docs
          </Link>
          
          <h1 className="font-heading text-4xl mb-6 text-gray-900">SDK Documentation</h1>
          <p className="text-xl text-gray-700 mb-12">
            Native SDKs for Web, iOS, and Android with pre-built UI components and camera capture.
          </p>

          {/* SDK Cards */}
          <div className="space-y-8 mb-16">
            {sdks.map((sdk) => (
              <div key={sdk.name} className="p-8 bg-white border border-gray-200 rounded-2xl">
                <h2 className="text-2xl font-semibold mb-3 text-gray-900">{sdk.name}</h2>
                <p className="text-gray-700 mb-4">{sdk.description}</p>
                <div className="bg-gray-900 rounded-xl p-4 mb-4">
                  <code className="text-green-400 text-sm">{sdk.install}</code>
                </div>
                <a href={sdk.docs} className="text-teal-900 font-medium hover:text-teal-700">
                  View documentation →
                </a>
              </div>
            ))}
          </div>

          {/* Web SDK Example */}
          <section id="web-sdk" className="mb-16">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">Web SDK Quick Start</h2>
            <div className="bg-gray-900 rounded-xl p-6">
              <pre className="text-green-400 text-sm overflow-x-auto">
{`import { UnfamiliarID } from '@unfamiliar/web-sdk';

const client = new UnfamiliarID({
  apiKey: 'YOUR_API_KEY',
  onComplete: (result) => {
    console.log('Verification complete:', result);
  }
});

// Launch the verification flow
client.start({
  container: '#verification-container',
  steps: ['document', 'selfie', 'liveness']
});`}
              </pre>
            </div>
          </section>

          {/* Features */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-6 text-gray-900">SDK Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 bg-orange-50 rounded-xl">
                <h3 className="font-semibold mb-2">📷 Auto-capture</h3>
                <p className="text-gray-600 text-sm">Automatic document detection and capture when image is clear.</p>
              </div>
              <div className="p-4 bg-orange-50 rounded-xl">
                <h3 className="font-semibold mb-2">🎨 Customizable UI</h3>
                <p className="text-gray-600 text-sm">Match your brand with customizable colors, text, and layouts.</p>
              </div>
              <div className="p-4 bg-orange-50 rounded-xl">
                <h3 className="font-semibold mb-2">🌐 Localization</h3>
                <p className="text-gray-600 text-sm">Support for multiple languages out of the box.</p>
              </div>
              <div className="p-4 bg-orange-50 rounded-xl">
                <h3 className="font-semibold mb-2">📱 Responsive</h3>
                <p className="text-gray-600 text-sm">Works on desktop and mobile browsers.</p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <div className="bg-lime-500 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">Need Help?</h3>
            <p className="mb-6">Our team is here to help you integrate.</p>
            <Link
              href="/contact"
              className="inline-flex py-3 px-6 items-center justify-center font-medium text-white bg-teal-900 hover:bg-teal-800 rounded-full transition duration-200"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </div>

      <Footer backgroundImage="/images/footer-waves-left-bottom.png" />
    </div>
  );
}
