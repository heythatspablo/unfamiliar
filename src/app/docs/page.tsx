import AnnouncementBar from '@/components/layout/announcement-bar';
import SimpleNavigation from '@/components/layout/simple-navigation';
import Footer from '@/components/layout/footer';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'API Documentation | unfamiliar.id',
  description: 'Complete API reference for identity verification endpoints, parameters, and responses.',
};

const endpoints = [
  {
    method: 'POST',
    path: '/v1/verify',
    description: 'Submit documents for verification',
  },
  {
    method: 'POST',
    path: '/v1/verify/face-match',
    description: 'Compare selfie to document photo',
  },
  {
    method: 'GET',
    path: '/v1/verify/{id}',
    description: 'Get verification status and results',
  },
  {
    method: 'POST',
    path: '/v1/documents/parse',
    description: 'Extract data from document images',
  },
  {
    method: 'POST',
    path: '/v1/documents/authenticate',
    description: 'Check document authenticity',
  },
  {
    method: 'GET',
    path: '/v1/webhooks',
    description: 'List configured webhooks',
  },
];

const sections = [
  { title: 'Getting Started', href: '#getting-started' },
  { title: 'Authentication', href: '#authentication' },
  { title: 'Endpoints', href: '#endpoints' },
  { title: 'Webhooks', href: '#webhooks' },
  { title: 'Error Codes', href: '#errors' },
  { title: 'Rate Limits', href: '#rate-limits' },
];

export default function DocsPage() {
  return (
    <div className="antialiased bg-body text-body font-body">
      <AnnouncementBar />
      <SimpleNavigation />

      <div className="flex">
        {/* Sidebar */}
        <aside className="hidden lg:block w-64 bg-gray-50 border-r border-gray-200 min-h-screen p-6">
          <h3 className="font-semibold text-gray-900 mb-4">Documentation</h3>
          <nav className="space-y-2">
            {sections.map((section) => (
              <a
                key={section.title}
                href={section.href}
                className="block px-3 py-2 text-gray-700 hover:text-teal-900 hover:bg-lime-500/20 rounded-lg transition-colors"
              >
                {section.title}
              </a>
            ))}
          </nav>
          <div className="mt-8 pt-8 border-t border-gray-200">
            <Link href="/docs/sdk" className="block px-3 py-2 text-gray-700 hover:text-teal-900">
              SDK Reference →
            </Link>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8 lg:p-12 max-w-4xl">
          <h1 className="font-heading text-4xl mb-6 text-gray-900">API Documentation</h1>
          <p className="text-xl text-gray-700 mb-12">
            Complete reference for the unfamiliar.id REST API. 
            Authenticate users, verify documents, and match faces.
          </p>

          {/* Getting Started */}
          <section id="getting-started" className="mb-16">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">Getting Started</h2>
            <p className="text-gray-700 mb-4">
              The unfamiliar.id API uses REST conventions with JSON request and response bodies. 
              All API requests must be made over HTTPS.
            </p>
            <div className="bg-gray-900 rounded-xl p-6 mb-4">
              <code className="text-green-400 text-sm">
                Base URL: https://api.unfamiliar.id/v1
              </code>
            </div>
          </section>

          {/* Authentication */}
          <section id="authentication" className="mb-16">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">Authentication</h2>
            <p className="text-gray-700 mb-4">
              Authenticate requests using Bearer tokens in the Authorization header.
            </p>
            <div className="bg-gray-900 rounded-xl p-6">
              <pre className="text-green-400 text-sm overflow-x-auto">
{`curl -X POST https://api.unfamiliar.id/v1/verify \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`}
              </pre>
            </div>
          </section>

          {/* Endpoints */}
          <section id="endpoints" className="mb-16">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">Endpoints</h2>
            <div className="space-y-4">
              {endpoints.map((endpoint, index) => (
                <div key={index} className="p-4 bg-white border border-gray-200 rounded-xl">
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`px-2 py-1 text-xs font-mono rounded ${
                      endpoint.method === 'GET' ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'
                    }`}>
                      {endpoint.method}
                    </span>
                    <code className="text-sm font-mono">{endpoint.path}</code>
                  </div>
                  <p className="text-gray-600 text-sm">{endpoint.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Webhooks */}
          <section id="webhooks" className="mb-16">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">Webhooks</h2>
            <p className="text-gray-700 mb-4">
              Receive real-time notifications when verification events occur.
            </p>
            <div className="bg-gray-900 rounded-xl p-6">
              <pre className="text-green-400 text-sm overflow-x-auto">
{`{
  "event": "verification.completed",
  "data": {
    "id": "ver_123abc",
    "status": "approved",
    "timestamp": "2024-01-15T10:30:00Z"
  }
}`}
              </pre>
            </div>
          </section>

          {/* CTA */}
          <div className="bg-lime-500 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">Ready to integrate?</h3>
            <p className="mb-6">Get your API key and start verifying identities in minutes.</p>
            <Link
              href="/contact"
              className="inline-flex py-3 px-6 items-center justify-center font-medium text-white bg-teal-900 hover:bg-teal-800 rounded-full transition duration-200"
            >
              Get API Key
            </Link>
          </div>
        </main>
      </div>

      <Footer backgroundImage="/images/footer-waves-left-bottom.png" />
    </div>
  );
}
