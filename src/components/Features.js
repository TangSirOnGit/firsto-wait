import {
  FiUsers,
  FiTrendingUp,
  FiCreditCard,
  FiBarChart2,
} from 'react-icons/fi';

const features = [
  {
    name: 'Maximum Visibility',
    description:
      'Showcase your product on a platform designed to give new launches the spotlight they deserve.',
    icon: FiUsers,
  },
  {
    name: 'Targeted Audience',
    description:
      'Connect with an engaged community of early adopters eager to discover and try new products first.',
    icon: FiTrendingUp,
  },
  {
    name: 'Valuable Feedback',
    description:
      'Receive immediate feedback from real users to help refine and improve your product.',
    icon: FiCreditCard,
  },
  // {
  //   name: 'Launch Analytics',
  //   description: 'Track your launch performance with detailed metrics on views, engagement, and user interest.',
  //   icon: FiBarChart2,
  // },
];

export default function Features() {
  return (
    <section id="features" className="section bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="heading-lg text-gray-900">
            The Ultimate Product Launch Platform
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Firsto gives your product the attention it deserves. Our platform is
            designed to help creators showcase their innovations and connect
            with their first enthusiastic users.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.name}
              className="p-6 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 mb-4">
                <feature.icon size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.name}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
