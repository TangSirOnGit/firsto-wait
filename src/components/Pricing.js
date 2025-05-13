import { FiCheck } from 'react-icons/fi';
import Link from 'next/link';

const plans = [
  {
    name: 'Standard Launch',
    price: 'Free',
    description: 'Basic launch features',
    features: [
      'Live on homepage for 7 days',
      'Badge for top 3 ranking products',
      'High authority backlink for top 3 ranking products',
      'Standard launch queue'
    ],
    cta: 'Join Waitlist',
    highlighted: false,
  },
  {
    name: 'Premium Launch',
    price: '$29',
    description: '/launch',
    features: [
      'Live on homepage for 7 days',
      'Badge for top 3 ranking products',
      'Guaranteed high authority backlink',
      'Skip the queue'
    ],
    cta: 'Join Waitlist',
    highlighted: false,
  },
  {
    name: 'Early Bird Special',
    price: '$19',
    description: 'Pre-sale limited offer',
    features: [
      '3 Premium Launches ($87 value)',
      'Live on homepage for 7 days each launch',
      'Badge for top 3 ranking products',
      'Guaranteed high authority backlink for all launches',
      'Skip the queue for all launches',
      'Priority support'
    ],
    cta: 'Pre-order Now',
    highlighted: true,
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="section bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="heading-lg text-gray-900">Simple, transparent pricing</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect plan for your product launch. No hidden fees.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div 
              key={plan.name} 
              className={`rounded-lg overflow-hidden border ${
                plan.highlighted 
                  ? 'border-primary-500 shadow-lg ring-2 ring-primary-500 ring-opacity-50' 
                  : 'border-gray-200 shadow-sm'
              }`}
            >
              <div className={`p-6 ${plan.highlighted ? 'bg-primary-50' : 'bg-white'}`}>
                <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                <p className="mt-4 text-3xl font-bold">{plan.price}</p>
                <p className="mt-1 text-sm text-gray-500">{plan.description}</p>
              </div>
              <div className="p-6 bg-white space-y-4">
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <FiCheck className="h-5 w-5 text-primary-500 flex-shrink-0 mr-2 mt-0.5" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-4">
                  <Link
                    href={plan.name === 'Enterprise' ? '#contact' : '#waitlist'}
                    className={`w-full block text-center py-3 px-4 rounded-md font-medium ${
                      plan.highlighted
                        ? 'bg-primary-600 text-white hover:bg-primary-700'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-500">
            Early Bird Special is a limited-time pre-sale offer. Get 3 Premium Launches for less than the price of 1!
          </p>
        </div>
      </div>
    </section>
  );
}
