import AnnouncementBar from '@/components/layout/announcement-bar';
import SimpleNavigation from '@/components/layout/simple-navigation';
import CTASection from '@/components/layout/cta-section';
import Footer from '@/components/layout/footer';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Press | unfamiliar.id',
  description: 'Press resources, brand assets, and media contact information.',
};

const pressReleases = [
  {
    title: 'unfamiliar.id Launches AI-Powered Identity Verification Platform',
    date: 'December 2024',
    excerpt: 'New platform offers document authentication, face match, and liveness detection for businesses of all sizes.',
  },
  {
    title: 'unfamiliar.id Expands Document Support to 200+ Types',
    date: 'November 2024',
    excerpt: 'Platform now supports driver\'s licenses, passports, and national IDs from over 150 countries.',
  },
];

export default function PressPage() {
  return (
    <div className="antialiased bg-body text-body font-body">
      <AnnouncementBar />
      <SimpleNavigation />

      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-5xl sm:text-6xl mb-6 text-gray-900">Press</h1>
            <p className="text-xl text-gray-700">
              Press resources, brand assets, and media contact information.
            </p>
          </div>
        </div>
      </section>

      {/* Brand Assets */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl mb-8 text-gray-900">Brand Assets</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 bg-white border border-gray-200 rounded-xl">
                <div className="h-24 bg-teal-900 rounded-lg flex items-center justify-center mb-4">
                  <Image src="/images/UNFAMILIAR.ID-white.png" alt="unfamiliar.id" width={429} height={32} className="h-auto w-[150px]" />
                </div>
                <h3 className="font-semibold mb-2">Logo - Dark</h3>
                <p className="text-gray-600 text-sm mb-4">For use on light backgrounds</p>
                <a href="/images/UNFAMILIAR.ID-white.png" download className="text-teal-900 font-medium hover:underline inline-block">Download PNG →</a>
              </div>
              <div className="p-8 bg-white border border-gray-200 rounded-xl">
                <div className="h-24 bg-lime-500 rounded-lg flex items-center justify-center mb-4">
                  <Image src="/images/UNFAMILIAR.ID Copy.png" alt="unfamiliar.id" width={429} height={32} className="h-auto w-[150px]" />
                </div>
                <h3 className="font-semibold mb-2">Logo - Light</h3>
                <p className="text-gray-600 text-sm mb-4">For use on dark backgrounds</p>
                <a href="/images/UNFAMILIAR.ID Copy.png" download className="text-teal-900 font-medium hover:underline inline-block">Download PNG →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Press Releases */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl mb-8 text-gray-900">Press Releases</h2>
            <div className="space-y-6">
              {pressReleases.map((release, index) => (
                <div key={index} className="p-6 bg-white rounded-xl">
                  <p className="text-gray-500 text-sm mb-2">{release.date}</p>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{release.title}</h3>
                  <p className="text-gray-600">{release.excerpt}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Media Contact */}
      <section className="py-16 lg:py-24 bg-teal-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-4xl mb-6 text-white">Media Contact</h2>
            <p className="text-white/80 mb-8">
              For press inquiries, interviews, or additional information.
            </p>
            <a
              href="mailto:press@unfamiliar.id"
              className="inline-flex py-4 px-8 items-center justify-center text-lg font-medium text-teal-900 bg-lime-500 hover:bg-lime-400 rounded-full transition duration-200"
            >
              press@unfamiliar.id
            </a>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer backgroundImage="/images/footer-waves-left-bottom.png" />
    </div>
  );
}
