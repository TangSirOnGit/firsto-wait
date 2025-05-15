import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function About() {
  return (
    <main>
      <Header />
      <section className="section bg-gradient-to-b from-white to-primary-50">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h1 className="heading-xl text-center mb-12">
              <span className="block text-gray-900">About Firsto</span>
              <span className="block text-primary-600 text-2xl mt-4">
                The Starting Point of Your Product Journey
              </span>
            </h1>

            <div className="prose prose-lg mx-auto">
              <h2>Our Story</h2>
              <p>
                Firsto was born from a simple yet profound realization: for creators, the first step is often the most crucial one.
                We believe that in the journey from idea to reality, taking the first step requires courage, and that courage deserves to be celebrated and remembered.
              </p>
              <p>
                As a partner to product creators, we are dedicated to providing developers, entrepreneurs, and independent creators with a platform
                where they can confidently release the first version of their product and share their creativity with the world.
              </p>

              <h2 className="mt-10">Our Values</h2>
              
              <div className="bg-white rounded-lg shadow-sm p-6 my-6">
                <h3 className="text-xl font-bold text-primary-600">First = Starting Point</h3>
                <p className="mt-2">
                  "Begin your product journey with Firsto."
                </p>
                <p className="mt-2">
                  We emphasize that "the first step matters" and acknowledge that we are part of your launch ritual.
                  Firsto is perfect for brand story packaging, slogans, and ritualized operations (such as launch countdowns, first comments, etc.).
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6 my-6">
                <h3 className="text-xl font-bold text-primary-600">First = Permanent</h3>
                <p className="mt-2">
                  "Your product launch, online forever."
                </p>
                <p className="mt-2">
                  As the first SEO asset for your product launch, Firsto provides a showcase page that can be referenced long-term.
                  Product creators fear: "Launched today, swallowed by the platform tomorrow," or "No entry point after the heat dies down."
                  Through permanent showcase pages + viewable version history, Firsto becomes a digital archive for your product,
                  inspiring creators' sense of security and belonging.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6 my-6">
                <h3 className="text-xl font-bold text-primary-600">First = Support</h3>
                <p className="mt-2">
                  "Find your first users and supporters."
                </p>
                <p className="mt-2">
                  At Firsto, we are not just a launch platform, but a bridge connecting creators with early adopters.
                  We believe that every great product needs its first batch of sincere users and supporters,
                  and Firsto is where these critical connections happen.
                </p>
              </div>

              <h2 className="mt-10">Ship-First Culture</h2>
              <p>
                Firsto deeply embraces the "ship-first" culture of the developer community. We believe:
              </p>
              <ul>
                <li>An imperfect product shipped today beats a perfect concept tomorrow</li>
                <li>Feedback from real users is the best compass for product evolution</li>
                <li>Building in public can bring more opportunities and support</li>
                <li>Every launch is a milestone worth celebrating</li>
              </ul>
              
              <p className="mt-6">
                As practitioners of the "ship-first" philosophy, we provide creators with a suite of tools
                to help them confidently take that first step and, from that step, build a meaningful product journey.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
