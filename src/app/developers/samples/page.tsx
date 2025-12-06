import AnnouncementBar from '@/components/layout/announcement-bar';
import SimpleNavigation from '@/components/layout/simple-navigation';
import Footer from '@/components/layout/footer';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sample Apps | unfamiliar.id',
  description: 'Example implementations and starter code for identity verification integration.',
};

const samples = [
  {
    title: 'React + Node.js',
    description: 'Full-stack example with React frontend and Node.js backend.',
    language: 'JavaScript',
    github: '#',
  },
  {
    title: 'Next.js',
    description: 'Server-side verification with Next.js API routes.',
    language: 'TypeScript',
    github: '#',
  },
  {
    title: 'Python Flask',
    description: 'Backend integration with Python and Flask.',
    language: 'Python',
    github: '#',
  },
  {
    title: 'Ruby on Rails',
    description: 'Rails integration with webhook handling.',
    language: 'Ruby',
    github: '#',
  },
  {
    title: 'iOS Swift',
    description: 'Native iOS app with camera capture.',
    language: 'Swift',
    github: '#',
  },
  {
    title: 'Android Kotlin',
    description: 'Native Android app with document scanning.',
    language: 'Kotlin',
    github: '#',
  },
];

export default function SamplesPage() {
  return (
    <div className="antialiased bg-body text-body font-body">
      <AnnouncementBar />
      <SimpleNavigation />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <Link href="/developers" className="text-teal-900 hover:text-teal-700 mb-4 inline-block">
            ← Back to Developers
          </Link>
          
          <h1 className="font-heading text-4xl mb-6 text-gray-900">Sample Apps</h1>
          <p className="text-xl text-gray-700 mb-12">
            Example implementations to help you get started quickly. 
            Clone, customize, and deploy.
          </p>

          {/* Samples Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {samples.map((sample) => (
              <div key={sample.title} className="p-6 bg-white border border-gray-200 rounded-xl">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold text-gray-900">{sample.title}</h3>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                    {sample.language}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{sample.description}</p>
                <a
                  href={sample.github}
                  className="text-teal-900 font-medium hover:text-teal-700"
                >
                  View on GitHub →
                </a>
              </div>
            ))}
          </div>

          {/* Quick Start */}
          <section className="bg-gray-900 rounded-2xl p-8">
            <h2 className="text-white text-2xl font-semibold mb-4">Quick Start</h2>
            <div className="space-y-4">
              <div>
                <p className="text-gray-400 text-sm mb-2">Clone the React example:</p>
                <div className="bg-black rounded-lg p-4">
                  <code className="text-green-400 text-sm">
                    git clone https://github.com/unfamiliar-id/react-example.git
                  </code>
                </div>
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-2">Install dependencies:</p>
                <div className="bg-black rounded-lg p-4">
                  <code className="text-green-400 text-sm">
                    cd react-example && npm install
                  </code>
                </div>
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-2">Add your API key and run:</p>
                <div className="bg-black rounded-lg p-4">
                  <code className="text-green-400 text-sm">
                    UNFAMILIAR_API_KEY=your_key npm run dev
                  </code>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <Footer backgroundImage="/images/footer-waves-left-bottom.png" />
    </div>
  );
}
