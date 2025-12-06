import AnnouncementBar from '@/components/layout/announcement-bar';
import SimpleNavigation from '@/components/layout/simple-navigation';
import CTASection from '@/components/layout/cta-section';
import Footer from '@/components/layout/footer';
import Link from 'next/link';
import jobsData from '@/data/jobs.json';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Careers | unfamiliar.id',
  description: 'Join the team building the future of identity verification. View open positions.',
};

export default function CareersPage() {
  return (
    <div className="antialiased bg-body text-body font-body">
      <AnnouncementBar />
      <SimpleNavigation />

      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Link href="/about" className="text-teal-900 hover:text-teal-700 mb-4 inline-block">
              ← Back to About
            </Link>
            <h1 className="font-heading text-5xl sm:text-6xl mb-6 text-gray-900">Careers</h1>
            <p className="text-xl text-gray-700">
              Join us in building the future of identity verification. 
              We're a remote-first team solving hard problems.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 lg:py-24 bg-teal-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-4xl text-center mb-12 text-white">Why unfamiliar.id?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-lg font-semibold mb-2 text-white">Remote First</h3>
              <p className="text-white/80">Work from anywhere. We're distributed across time zones.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-lg font-semibold mb-2 text-white">High Impact</h3>
              <p className="text-white/80">Your work directly impacts millions of verifications.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-lg font-semibold mb-2 text-white">Growth</h3>
              <p className="text-white/80">Competitive comp, equity, and career development.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-4xl text-center mb-12 text-gray-900">Open Positions</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {jobsData.map((job) => (
              <Link
                key={job.id}
                href={`/about/careers/${job.id}`}
                className="group block p-6 bg-white border border-gray-200 rounded-xl hover:border-teal-900/20 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold group-hover:text-teal-900 transition-colors">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                        {job.department}
                      </span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                        {job.location}
                      </span>
                      <span className="px-3 py-1 bg-lime-500/20 text-teal-900 rounded-full text-sm">
                        {job.type}
                      </span>
                    </div>
                  </div>
                  <div className="mt-4 sm:mt-0 text-teal-900 font-medium">
                    Apply →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* No Match */}
      <section className="py-16 lg:py-24 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl mb-4 text-gray-900">Don't See a Match?</h2>
            <p className="text-gray-700 mb-6">
              We're always looking for talented people. Send us your resume and we'll keep you in mind.
            </p>
            <Link
              href="/contact"
              className="inline-flex py-3 px-6 items-center justify-center text-lg font-medium text-teal-900 border border-teal-900 hover:bg-teal-900 hover:text-white rounded-full transition duration-200"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer backgroundImage="/images/footer-waves-left-bottom.png" />
    </div>
  );
}
