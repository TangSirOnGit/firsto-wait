import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="section bg-gradient-to-b from-white to-primary-50">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="heading-xl mb-6">
            <span className="block text-gray-900">🚀 Launch Starts Here</span>
            <span className="block text-primary-600">
              The Starting Point of Your Product Journey
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Publish your product's first version on Firsto. Ship faster, share smarter, 
            and make that crucial first move that turns your creation into reality. 
            Where makers celebrate their first step and early adopters discover what's next.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#waitlist" className="btn-primary text-center">
              Join Waitlist
            </Link>
            {/* <Link href="#how-it-works" className="btn-secondary text-center">
              Learn More
            </Link> */}
          </div>
          <div className="pt-6">
            <p className="text-gray-500 text-sm">
              Join the ship-first community of makers, developers, and indie hackers
            </p>
            <p className="text-gray-500 text-sm mt-2">
              🚀 Limited Pre-Sale: Get 3 Premium Launches for just $19
              (Regular $87 value)!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
