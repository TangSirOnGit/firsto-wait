import React from 'react';
import { FiFlag, FiArchive, FiUsers } from 'react-icons/fi';

export default function Values() {
  const values = [
    {
      icon: FiFlag,
      title: 'First = Starting Point',
      description: 'Begin your product journey with Firsto. We emphasize that "the first step matters" and serve as an essential part of your launch ritual, providing the ideal starting point for your creation.',
    },
    {
      icon: FiArchive,
      title: 'First = Permanent',
      description: 'Your product launch, online forever. As the first SEO asset for your product, Firsto provides a showcase page that can be referenced long-term, becoming a digital archive for your product.',
    },
    {
      icon: FiUsers,
      title: 'First = Support',
      description: 'Find your first users and supporters. Firsto is not just a launch platform, but a bridge connecting creators with early adopters, helping your product receive genuine feedback and support.',
    },
  ];

  return (
    <section className="section bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="heading-lg text-gray-900">Our Values</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Firsto's core philosophy is to help creators take that crucial first step and provide a lasting showcase platform for products
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value) => (
            <div
              key={value.title}
              className="p-6 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 mb-4">
                <value.icon size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {value.title}
              </h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
