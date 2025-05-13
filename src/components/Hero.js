import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="section bg-gradient-to-b from-white to-primary-50">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="heading-xl">
              <span className="block text-gray-900">Launch Your Product</span>
              <span className="block text-primary-600">With Confidence</span>
            </h1>
            <p className="text-xl text-gray-600">
              Firsto.co is the ultimate platform for product launches. Get early feedback, 
              build a waitlist, and secure presales before your official launch.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#waitlist" className="btn-primary text-center">
                Join Waitlist
              </Link>
              <Link href="#how-it-works" className="btn-secondary text-center">
                Learn More
              </Link>
            </div>
            <div className="pt-4">
              <p className="text-gray-500 text-sm">
                🚀 Coming soon - Be the first to know when we launch!
              </p>
            </div>
          </div>
          <div className="relative h-[400px] lg:h-[500px]">
            {/* Placeholder for hero image - replace with your actual image */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-200 to-primary-400 rounded-lg flex items-center justify-center">
              <span className="text-white text-2xl font-bold">Product Launch Platform</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
