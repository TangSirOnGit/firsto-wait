import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="section bg-gradient-to-b from-white to-primary-50">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="heading-xl mb-6">
            <span className="block text-gray-900">Launch Your Product</span>
            <span className="block text-primary-600">
              Get Discovered First
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Firsto is where great products get launched and discovered.
            Showcase your creation to an eager audience of early adopters and
            receive the attention, feedback, and momentum your innovation
            deserves.
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
              🚀 Limited Pre-Sale: Get 3 Premium Launches for just $19
              (Regular $87 value)!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
