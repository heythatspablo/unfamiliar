import AnnouncementBar from '@/components/layout/announcement-bar';
import SimpleNavigation from '@/components/layout/simple-navigation';
import Footer from '@/components/layout/footer';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Changelog | unfamiliar.id',
  description: 'API and SDK updates, new features, and improvements.',
};

const releases = [
  {
    version: '2.1.0',
    date: 'December 2024',
    type: 'Feature',
    changes: [
      'Added support for 15 new document types',
      'Improved face match accuracy by 12%',
      'New passive liveness detection mode',
      'Added webhook retry configuration',
    ],
  },
  {
    version: '2.0.0',
    date: 'November 2024',
    type: 'Major',
    changes: [
      'New v2 API with improved response format',
      'Breaking: Changed authentication to Bearer tokens',
      'Added batch verification endpoint',
      'New SDK for React Native',
    ],
  },
  {
    version: '1.5.0',
    date: 'October 2024',
    type: 'Feature',
    changes: [
      'Added document authentication scoring',
      'New tamper detection algorithms',
      'Improved barcode reading accuracy',
      'Added support for vertical IDs',
    ],
  },
  {
    version: '1.4.0',
    date: 'September 2024',
    type: 'Feature',
    changes: [
      'Added active liveness challenges',
      'New anti-spoofing detection',
      'Improved low-light camera capture',
      'Added document edge detection',
    ],
  },
];

export default function ChangelogPage() {
  return (
    <div className="antialiased bg-body text-body font-body">
      <AnnouncementBar />
      <SimpleNavigation />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <Link href="/developers" className="text-teal-900 hover:text-teal-700 mb-4 inline-block">
            ← Back to Developers
          </Link>
          
          <h1 className="font-heading text-4xl mb-6 text-gray-900">Changelog</h1>
          <p className="text-xl text-gray-700 mb-12">
            API and SDK updates, new features, and improvements.
          </p>

          {/* Releases */}
          <div className="space-y-12">
            {releases.map((release) => (
              <div key={release.version} className="border-l-4 border-lime-500 pl-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl font-bold">v{release.version}</span>
                  <span className={`px-3 py-1 text-sm rounded-full ${
                    release.type === 'Major' 
                      ? 'bg-orange-100 text-orange-700' 
                      : 'bg-lime-100 text-lime-700'
                  }`}>
                    {release.type}
                  </span>
                </div>
                <p className="text-gray-500 mb-4">{release.date}</p>
                <ul className="space-y-2">
                  {release.changes.map((change, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-teal-900 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700">{change}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Subscribe */}
          <div className="mt-16 bg-teal-900 text-white rounded-2xl p-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">Stay Updated</h2>
            <p className="text-white/80 mb-6">
              Get notified about new releases and breaking changes.
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full text-gray-900 outline-none"
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
      </div>

      <Footer backgroundImage="/images/footer-waves-left-bottom.png" />
    </div>
  );
}
