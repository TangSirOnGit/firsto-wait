import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function PrivacyPolicy() {
  return (
    <main>
      <Header />
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h1 className="heading-lg text-center mb-12">Privacy Policy</h1>

            <div className="prose prose-lg mx-auto">
              <p className="text-gray-500 text-sm mb-6">
                Last updated: May 15, 2025
              </p>

              <h2>1. Introduction</h2>
              <p>
                Firsto ("we", "our" or "the Company") respects your privacy and
                is committed to protecting your personal data. This privacy
                policy will inform you about how we handle your personal data,
                including when you visit our website (regardless of where you
                visit it from), and your privacy rights and legal protections.
              </p>

              <h2>2. Data We Collect</h2>
              <p>
                We may collect, use, store and transfer different types of
                personal data, including:
              </p>
              <ul>
                <li>
                  <strong>Identity Data</strong>: including name, username or
                  similar identifiers.
                </li>
                <li>
                  <strong>Contact Data</strong>: including email address and
                  telephone numbers.
                </li>
                <li>
                  <strong>Technical Data</strong>: including internet protocol
                  (IP) address, your login data, browser type and version, time
                  zone setting and location, browser plug-in types and versions,
                  operating system and platform, and other technology on the
                  devices you use to access this website.
                </li>
                <li>
                  <strong>Usage Data</strong>: including information about how
                  you use our website, products and services.
                </li>
                <li>
                  <strong>Marketing and Communications Data</strong>: including
                  your preferences in receiving marketing from us and your
                  communication preferences.
                </li>
              </ul>

              <h2>3. How We Collect Your Personal Data</h2>
              <p>We collect your personal data through:</p>
              <ul>
                <li>
                  <strong>Direct Interactions</strong>: You may provide us with
                  your Identity, Contact and Financial Data by filling in forms
                  or by corresponding with us by email or otherwise.
                </li>
                <li>
                  <strong>Automated Technologies or Interactions</strong>: As
                  you interact with our website, we may automatically collect
                  Technical Data about your equipment, browsing actions and
                  patterns.
                </li>
                <li>
                  <strong>Third Parties or Publicly Available Sources</strong>:
                  We may receive personal data about you from various third
                  parties and public sources.
                </li>
              </ul>

              <h2>4. How We Use Your Personal Data</h2>
              <p>
                We will only use your personal data when the law allows us to.
                Most commonly, we will use your personal data in the following
                circumstances:
              </p>
              <ul>
                <li>
                  Where we need to perform the contract we are about to enter
                  into or have entered into with you.
                </li>
                <li>
                  Where it is necessary for our legitimate interests (or those
                  of a third party) and your interests and fundamental rights do
                  not override those interests.
                </li>
                <li>
                  Where we need to comply with a legal or regulatory obligation.
                </li>
              </ul>

              <h2>5. Data Security</h2>
              <p>
                We have implemented appropriate security measures to prevent
                your personal data from being accidentally lost, used or
                accessed in an unauthorized way, altered or disclosed. In
                addition, we limit access to your personal data to those
                employees, agents, contractors and other third parties who have
                a business need to know.
              </p>

              <h2>6. Data Retention</h2>
              <p>
                We will only retain your personal data for as long as necessary
                to fulfill the purposes we collected it for, including for the
                purposes of satisfying any legal, accounting, or reporting
                requirements.
              </p>

              <h2>7. Your Legal Rights</h2>
              <p>
                Under data protection laws, you have rights in relation to your
                personal data including the right to request access, correction,
                erasure, restriction, transfer, to object to processing, to
                portability of data and (where the lawful ground of processing
                is consent) to withdraw consent.
              </p>

              <h2>8. Third-Party Links</h2>
              <p>
                This website may include links to third-party websites, plug-ins
                and applications. Clicking on those links or enabling those
                connections may allow third parties to collect or share data
                about you. We do not control these third-party websites and are
                not responsible for their privacy statements.
              </p>

              <h2>9. Contact Us</h2>
              <p>
                If you have any questions about this privacy policy or wish to
                exercise your legal rights, please contact us at:
              </p>
              <p>Email: contact@firsto.co</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
