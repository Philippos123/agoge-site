import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { name: 'Faster time to productivity', value: '60', description: 'Employees reach full productivity faster with structured learning' },
  { name: 'Higher engagement', value: '83', description: 'Curious employees show greater workplace engagement' },
  { name: 'Improved retention', value: '58', description: 'Learning opportunities increase employee retention' },
  { name: 'Enhanced innovation', value: '72', description: 'Curious teams generate more innovative solutions' },
];

export default function ContinuousLearningBenefits() {
  const statRefs = useRef([]);

  useEffect(() => {
    statRefs.current.forEach((statRef, index) => {
      const value = stats[index].value;

      gsap.fromTo(
        statRef,
        { innerHTML: '0', opacity: 0 },
        {
          innerHTML: value,
          opacity: 1,
          duration: 2,
          ease: 'power1.out',
          scrollTrigger: {
            trigger: statRef,
            start: 'top 80%',
            once: true,
          },
          onUpdate: () => {
            const currentValue = Math.round(statRef.innerHTML);
            statRef.innerHTML = `${currentValue}%`;
          },
        }
      );
    });
  }, []);

  return (
    <div className="relative overflow-hidden  py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-agoge-500 sm:text-5xl">
            The Power of Continuous Learning
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Curiosity isn't just a trait—it's a competitive advantage. When we embrace lifelong learning, we unlock 
            greater potential, adaptability, and fulfillment in our careers. A curious mindset leads to:
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl lg:mt-20 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 text-center sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={stat.name} className="flex flex-col items-center">
                <dd
                  ref={(el) => statRefs.current[index] = el}
                  className="text-5xl font-bold tracking-tight text-primary"
                >
                  {stat.value}%
                </dd>
                <dt className="text-base font-semibold leading-7 text-gray-300 mt-4">
                  {stat.name}
                </dt>
                <p className="mt-2 text-sm leading-6 text-gray-300">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 border-t border-gray-200 pt-10">
          <h3 className="text-2xl font-semibold text-gray-300">Why Curiosity Matters</h3>
          <div className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="rounded-lg bg-gradient-to-r to-agoge-500/10 from-agoge-700/10 p-6">
              <h4 className="text-lg font-medium text-primary-400">Professional Growth</h4>
              <p className="mt-2 text-gray-300">
                Continuous learners adapt faster to industry changes, acquire new skills more easily, 
                and position themselves for advancement opportunities.
              </p>
            </div>
            <div className="rounded-lg bg-gradient-to-l to-agoge-500/10 from-agoge-700/10 p-6">
              <h4 className="text-lg font-medium text-primary-400">Personal Fulfillment</h4>
              <p className="mt-2 text-gray-300">
                Learning new things keeps our minds active, boosts confidence, and provides a sense 
                of accomplishment that enhances overall wellbeing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}