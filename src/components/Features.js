import { FiUsers, FiTrendingUp, FiCreditCard, FiBarChart2 } from 'react-icons/fi';

const features = [
  {
    name: 'First To Discover',
    description: 'Create a platform where early adopters can be the first to discover your innovative product.',
    icon: FiUsers,
  },
  {
    name: 'First To Experience',
    description: 'Provide unique first-access experiences that create lasting impact and memorable brand moments.',
    icon: FiTrendingUp,
  },
  {
    name: 'First To Share',
    description: 'Enable your earliest supporters to share their exclusive first experiences with their networks.',
    icon: FiCreditCard,
  },
  {
    name: 'First To Market',
    description: 'Accelerate your journey from concept to market with tools designed for first-movers.',
    icon: FiBarChart2,
  },
];

export default function Features() {
  return (
    <section id="features" className="section bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="heading-lg text-gray-900">The Complete First-Launch Experience</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Firsto provides the complete journey from creation to launch—where 'o' represents opportunity, 
            originality, and openness in bringing your product to the world first.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.name} className="p-6 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 mb-4">
                <feature.icon size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.name}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
