import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function CookiePolicy() {
  return (
    <main>
      <Header />
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h1 className="heading-lg text-center mb-12">Cookie Policy</h1>

            <div className="prose prose-lg mx-auto">
              <p className="text-gray-500 text-sm mb-6">
                Last updated: May 15, 2025
              </p>

              <h2>1. What Are Cookies?</h2>
              <p>
                Cookies are small text files that are placed on your device when
                you visit a website, allowing that site to "remember" your
                actions and preferences. Cookies help us understand which pages
                and features are most popular, count visits, remember your
                preferences, and overall improve your user experience.
              </p>

              <h2>2. How We Use Cookies</h2>
              <p>We use the following types of cookies:</p>
              <ul>
                <li>
                  <strong>Necessary Cookies</strong>: These cookies are
                  essential for the website to function properly and cannot be
                  switched off in our systems. They are usually only set in
                  response to actions made by you which amount to a request for
                  services, such as setting your privacy preferences, logging in
                  or filling in forms.
                </li>
                <li>
                  <strong>Performance Cookies</strong>: These cookies allow us
                  to count visits and traffic sources so we can measure and
                  improve the performance of our site. They help us to know
                  which pages are the most and least popular and see how
                  visitors move around the site.
                </li>
                <li>
                  <strong>Functional Cookies</strong>: These cookies enable the
                  website to provide enhanced functionality and personalization.
                  They may be set by us or by third party providers whose
                  services we have added to our pages.
                </li>
                <li>
                  <strong>Targeting Cookies</strong>: These cookies may be set
                  through our site by our advertising partners. They may be used
                  by those companies to build a profile of your interests and
                  show you relevant adverts on other sites.
                </li>
              </ul>

              <h2>3. Managing Cookies</h2>
              <p>
                Most web browsers automatically accept cookies, but you can
                usually modify your browser setting to decline cookies if you
                prefer. This may prevent you from taking full advantage of the
                website. Here are links to information on how to manage cookies
                in different browsers:
              </p>
              <ul>
                <li>
                  <a
                    href="https://support.google.com/chrome/answer/95647"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Google Chrome
                  </a>
                </li>
                <li>
                  <a
                    href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Mozilla Firefox
                  </a>
                </li>
                <li>
                  <a
                    href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Microsoft Edge
                  </a>
                </li>
                <li>
                  <a
                    href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Safari
                  </a>
                </li>
              </ul>

              <h2>4. Third-Party Cookies</h2>
              <p>
                In some special cases, we also use cookies provided by trusted
                third parties. The following section details which third party
                cookies you might encounter through this site.
              </p>
              <ul>
                <li>
                  This site uses Google Analytics which is one of the most
                  widespread and trusted analytics solutions on the web for
                  helping us to understand how you use the site and ways that we
                  can improve your experience. These cookies may track things
                  such as how long you spend on the site and the pages that you
                  visit so we can continue to produce engaging content.
                </li>
                <li>
                  We also use social media buttons and/or plugins on this site
                  that allow you to connect with your social network in various
                  ways. For these to work, the social media sites will set
                  cookies through our site which may be used to enhance your
                  profile on their site or contribute to the data they hold for
                  various purposes.
                </li>
              </ul>

              <h2>5. More Information</h2>
              <p>
                Hopefully that has clarified things for you and as was
                previously mentioned if there is something that you aren't sure
                whether you need or not it's usually safer to leave cookies
                enabled in case it does interact with one of the features you
                use on our site.
              </p>
              <p>
                However, if you are still looking for more information, you can
                contact us at:
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
