import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function TermsOfService() {
  return (
    <main>
      <Header />
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h1 className="heading-lg text-center mb-12">Terms of Service</h1>

            <div className="prose prose-lg mx-auto">
              <p className="text-gray-500 text-sm mb-6">
                Last updated: May 15, 2025
              </p>

              <h2>1. Acceptance of Terms</h2>
              <p>
                Welcome to Firsto! These terms and conditions outline the rules
                and regulations for the use of the Firsto website.
              </p>
              <p>
                By accessing this website, we assume you accept these terms and
                conditions. Do not continue to use Firsto if you do not agree to
                all of the terms and conditions stated on this page.
              </p>

              <h2>2. Definitions</h2>
              <ul>
                <li>
                  <strong>"User", "You" and "Your"</strong>: refers to the
                  person accessing this website and accepting the Company's
                  terms and conditions.
                </li>
                <li>
                  <strong>"Company", "We", "Our" and "Us"</strong>: refers to
                  Firsto.
                </li>
                <li>
                  <strong>"Content"</strong>: refers to all information, data,
                  text, images or other material, including but not limited to
                  product descriptions, reviews, and user-submitted content.
                </li>
              </ul>

              <h2>3. User Accounts</h2>
              <p>
                When you create an account with us, you must provide accurate,
                complete, and current information. You are responsible for
                safeguarding the confidentiality of your account password and
                for all activities that occur under your account.
              </p>
              <p>
                We reserve the right to refuse service, terminate accounts,
                remove or edit content, or cancel orders at our sole discretion.
              </p>

              <h2>4. Product Launches</h2>
              <p>
                By launching your product on Firsto, you represent and warrant
                that:
              </p>
              <ul>
                <li>
                  You own or have obtained all rights and licenses necessary to
                  publish your product.
                </li>
                <li>
                  Your product does not infringe upon any third party's
                  intellectual property rights.
                </li>
                <li>
                  Your product does not contain illegal, harmful, fraudulent, or
                  other content that violates our community guidelines.
                </li>
              </ul>

              <h2>5. Intellectual Property</h2>
              <p>
                The Service and its original content, features, and
                functionality are the exclusive property of Firsto and are
                protected by international copyright, trademark, patent, trade
                secret, and other intellectual property or proprietary rights
                laws.
              </p>

              <h2>6. User Content</h2>
              <p>
                When you create or provide any content on our platform, you
                grant us a non-exclusive, worldwide, royalty-free, transferable,
                sub-licensable right to use, copy, modify, create derivative
                works of, distribute, publicly display and otherwise exploit
                such content.
              </p>

              <h2>7. Disclaimer</h2>
              <p>
                You expressly understand and agree that your use of the service
                is at your sole risk. The service is provided on an "as is" and
                "as available" basis, without warranties of any kind.
              </p>

              <h2>8. Limitation of Liability</h2>
              <p>
                In no event shall Firsto, its directors, employees, partners,
                agents, suppliers, or affiliates, be liable for any indirect,
                incidental, special, consequential or punitive damages,
                including without limitation, loss of profits, data, use,
                goodwill, or other intangible losses.
              </p>

              <h2>9. Severability</h2>
              <p>
                If any provision of these Terms is held to be unenforceable or
                invalid for any reason, that provision shall be deemed severable
                and shall not affect the validity and enforceability of the
                remaining provisions.
              </p>

              <h2>10. Changes</h2>
              <p>
                We reserve the right to modify or replace these Terms at any
                time. If a revision is material, we will try to provide at least
                30 days' notice prior to any new terms taking effect.
              </p>

              <h2>11. Contact Us</h2>
              <p>
                If you have any questions about these Terms, please contact us
                at:
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
