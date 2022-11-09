import React from 'react';
import { Home, Traffic, Travel } from './icons';

export function LegalAreas() {
  const legalAreasCovered = [
    {
      title: 'Tourism Law',
      description:
        'We help frustrated holiday-makers in case of travel defects of any kind to enforce reduction claims against travel companies.',
      icon: Travel,
    },
    {
      title: 'Tenancy Law',
      description:
        'We help tenants to enforce their rights in the case of rent control, rent increases, defects in the apartment, deposit reclaim.',
      icon: Home,
    },
    {
      title: 'Traffic Law',
      description:
        'We support customers in all cases related to traffic law, for example traffic accident, traffic offense, driving license, criminal offenses.',
      icon: Traffic,
    },
  ];

  return (
    <div className="lg:px-8">
      <section className="flex items-center justify-center gap-4">
        <div className="w-full border-b border-neutral-400 hidden lg:block" />
        <p className="text-3xl font-black text-neutral-700 w-full text-center lg:w-1/3 shrink-0">
          We cover multiple aspects of legal areas
        </p>
        <div className="w-full border-b border-neutral-400 hidden lg:block" />
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
        {legalAreasCovered.map((item, idx) => (
          <div
            key={idx}
            className="col-span-1 p-4 bg-primary rounded-lg border border-neutral-200 relative bg-opacity-80 bg-clip-padding"
            style={{ backdropFilter: 'blur(20px)' }}
          >
            <span className="absolute -z-10 block w-24 h-12 top-10 left-4 overflow-hidden bg-gradient-to-b from-sky-400 to-indigo-400  blur-lg opacity-20" />

            {React.createElement(item.icon, {
              className: `h-14 w-14 z-10 ${
                ['fill-sky-400', 'fill-indigo-400', 'fill-purple-400'][idx]
              }`,
            })}

            <h3 className="font-bold text-neutral-800 mt-4">{item.title}</h3>
            <p className="font-medium text-neutral-600 mt-2">
              {item.description}
            </p>
          </div>
        ))}
      </section>
    </div>
  );
}
