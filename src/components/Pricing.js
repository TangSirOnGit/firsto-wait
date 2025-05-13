import { FiCheck } from 'react-icons/fi';
import Link from 'next/link';

const plans = [
  {
    name: 'Early Bird',
    price: '$99',
    description: 'Perfect for startups and small businesses',
    features: [
      'Full access to launch platform',
      'Custom landing page',
      'Waitlist management',
      'Basic analytics',
      'Email notifications',
      '30-day money-back guarantee'
    ],
    cta: 'Pre-order Now',
    highlighted: false,
  },
  {
    name: 'Pro Launch',
    price: '$199',
    description: 'For businesses serious about their product launch',
    features: [
      'Everything in Early Bird',
      'Advanced analytics dashboard',
      'A/B testing tools',
      'Referral system',
      'Priority support',
      'Custom domain',
      'Lifetime updates'
    ],
    cta: 'Pre-order Now',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Contact Us',
    description: 'Custom solutions for larger organizations',
    features: [
      'Everything in Pro Launch',
      'Dedicated account manager',
      'Custom integrations',
      'Advanced security features',
      'SLA guarantees',
      'Onboarding assistance',
      'White-label options'
    ],
    cta: 'Contact Sales',
    highlighted: false,
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="section bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="heading-lg text-gray-900">Pre-launch Pricing</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Special pre-launch pricing available for early adopters. Lock in these rates before our official launch.
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
            All plans include a 30-day money-back guarantee. Prices will increase after official launch.
          </p>
        </div>
      </div>
    </section>
  );
}
