'use client';

import { use } from 'react';
import AnnouncementBar from '@/components/layout/announcement-bar';
import SimpleNavigation from '@/components/layout/simple-navigation';
import CTASection from '@/components/layout/cta-section';
import Footer from '@/components/layout/footer';
import Link from 'next/link';
import jobsData from '@/data/jobs.json';

interface JobPageProps {
  params: Promise<{ id: string }>;
}

export default function JobPage({ params }: JobPageProps) {
  const { id } = use(params);
  const job = jobsData.find(j => j.id === parseInt(id));

  if (!job) {
    return (
      <div className="antialiased bg-body text-body font-body">
        <AnnouncementBar />
        <SimpleNavigation />
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Job Not Found</h1>
            <Link href="/about/careers" className="text-teal-900 hover:text-teal-700">
              ← Back to Careers
            </Link>
          </div>
        </section>
        <Footer backgroundImage="/images/footer-waves-left-bottom.png" />
      </div>
    );
  }

  return (
    <div className="antialiased bg-body text-body font-body">
      <AnnouncementBar />
      <SimpleNavigation />

      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Link href="/about/careers" className="text-teal-900 hover:text-teal-700 mb-4 inline-block">
              ← Back to Careers
            </Link>
            <h1 className="font-heading text-4xl sm:text-5xl mb-6 text-gray-900">{job.title}</h1>
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="px-4 py-2 bg-white text-gray-700 rounded-full">
                {job.department}
              </span>
              <span className="px-4 py-2 bg-white text-gray-700 rounded-full">
                {job.location}
              </span>
              <span className="px-4 py-2 bg-lime-500 text-teal-900 rounded-full">
                {job.type}
              </span>
            </div>
            <Link
              href="/contact"
              className="inline-flex py-4 px-8 items-center justify-center text-lg font-medium text-white bg-teal-900 hover:bg-teal-800 rounded-full transition duration-200"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </section>

      {/* Job Details */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <h2>About the Role</h2>
            <p>
              We're looking for a {job.title} to join our {job.department} team. 
              This is a {job.type.toLowerCase()} position based in {job.location}.
            </p>

            <h2>What You'll Do</h2>
            <ul>
              <li>Build and maintain core identity verification systems</li>
              <li>Collaborate with cross-functional teams to deliver features</li>
              <li>Contribute to technical architecture and design decisions</li>
              <li>Mentor team members and participate in code reviews</li>
            </ul>

            <h2>What We're Looking For</h2>
            <ul>
              <li>3+ years of relevant experience</li>
              <li>Strong problem-solving skills</li>
              <li>Excellent communication abilities</li>
              <li>Experience working in a fast-paced environment</li>
            </ul>

            <h2>Benefits</h2>
            <ul>
              <li>Competitive salary and equity</li>
              <li>Remote-first culture</li>
              <li>Health, dental, and vision insurance</li>
              <li>Unlimited PTO</li>
              <li>Home office stipend</li>
              <li>Professional development budget</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Apply CTA */}
      <section className="py-16 lg:py-24 bg-lime-500">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-4xl mb-6 text-gray-900">Ready to Apply?</h2>
            <p className="text-xl mb-8">
              Send us your resume and tell us why you'd be a great fit.
            </p>
            <Link
              href="/contact"
              className="inline-flex py-4 px-8 items-center justify-center text-lg font-medium text-white bg-teal-900 hover:bg-teal-800 rounded-full transition duration-200"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer backgroundImage="/images/footer-waves-left-bottom.png" />
    </div>
  );
}
