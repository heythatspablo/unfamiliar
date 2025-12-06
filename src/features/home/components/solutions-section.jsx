'use client';

import React, { useMemo } from 'react';
import solutionsData from '@/data/home-solutions.json';
import { Icon } from '@/components/ui';

/**
 * Solutions section component displaying energy solution categories
 * @returns {React.ReactElement} Solutions section
 */
const SolutionsSection = () => {
  const solutions = useMemo(() => solutionsData, []);
  return (
    <section id="solutions" className="p-4 bg-white">
      <div className="pt-16 pb-24 px-5 xs:px-8 xl:px-12 bg-lime-500 rounded-3xl">
        <div className="container mx-auto px-4">
          <div className="pt-14">
            <h1 className="font-heading text-4xl sm:text-6xl mb-24">Everything You Need to Verify Identity</h1>
            <div className="flex flex-wrap -mx-4">
              {solutions.map((solution, index) => (
                <div
                  key={solution.id}
                  className={`w-full sm:w-1/2 px-4 ${
                    index < 2 ? 'mb-16' :
                    index === 2 ? 'mb-16 sm:mb-0' : ''
                  }`}
                >
                  <div>
                    <Icon name={solution.icon} size={48} ariaLabel={`${solution.title} icon`} />
                    <div className="mt-6">
                      <h5 className="text-2xl font-medium mb-3">{solution.title}</h5>
                      <p className="mb-6">{solution.description}</p>
                      <a className="inline-block text-lg font-medium hover:text-teal-700" href={solution.link}>
                        Learn more
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;