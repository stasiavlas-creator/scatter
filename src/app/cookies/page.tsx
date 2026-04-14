export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-3xl px-6 lg:px-8 py-20">
        <a href="/" className="text-sm text-gray-400 hover:text-gray-600 mb-8 inline-block">
          &larr; Back to home
        </a>

        <h1 className="text-3xl font-bold text-[var(--lp-graphite)] mb-2">
          Cookies Policy
        </h1>
        <p className="text-sm text-gray-400 mb-10">Last updated: April 2026</p>

        <div className="prose prose-sm prose-gray max-w-none space-y-8 text-gray-600 leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-[var(--lp-graphite)] mb-3">1. What Are Cookies</h2>
            <p>
              Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work more efficiently and to provide reporting information to website owners.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[var(--lp-graphite)] mb-3">2. How We Use Cookies</h2>
            <p>Pinscaler uses cookies for the following purposes:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li><strong>Essential cookies</strong> — required for the website to function properly (e.g., cookie consent preferences)</li>
              <li><strong>Analytics cookies</strong> — help us understand how visitors interact with our website by collecting anonymous usage data</li>
              <li><strong>Functional cookies</strong> — remember your preferences (e.g., form data) to improve your experience</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[var(--lp-graphite)] mb-3">3. Types of Cookies We Use</h2>
            <div className="mt-3 rounded-xl border border-gray-200 overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-100 bg-[var(--lp-gray)]">
                    <th className="px-4 py-3 text-left font-medium text-[var(--lp-graphite)]">Cookie</th>
                    <th className="px-4 py-3 text-left font-medium text-[var(--lp-graphite)]">Type</th>
                    <th className="px-4 py-3 text-left font-medium text-[var(--lp-graphite)]">Duration</th>
                    <th className="px-4 py-3 text-left font-medium text-[var(--lp-graphite)]">Purpose</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-50">
                    <td className="px-4 py-3">cookie_consent</td>
                    <td className="px-4 py-3">Essential</td>
                    <td className="px-4 py-3">1 year</td>
                    <td className="px-4 py-3">Stores your cookie preferences</td>
                  </tr>
                  <tr className="border-b border-gray-50">
                    <td className="px-4 py-3">_ga</td>
                    <td className="px-4 py-3">Analytics</td>
                    <td className="px-4 py-3">2 years</td>
                    <td className="px-4 py-3">Google Analytics — distinguishes unique users</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">_gid</td>
                    <td className="px-4 py-3">Analytics</td>
                    <td className="px-4 py-3">24 hours</td>
                    <td className="px-4 py-3">Google Analytics — distinguishes unique users</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[var(--lp-graphite)] mb-3">4. Managing Cookies</h2>
            <p>
              You can control and manage cookies through your browser settings. Most browsers allow you to refuse or accept cookies, delete existing cookies, and set preferences for certain websites. Please note that disabling cookies may affect the functionality of our website.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[var(--lp-graphite)] mb-3">5. Third-Party Cookies</h2>
            <p>
              We may use third-party analytics services (such as Google Analytics) that set their own cookies. These services collect anonymous data about how you use our website. We do not have control over these cookies. Please refer to the respective third-party privacy policies for more information.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[var(--lp-graphite)] mb-3">6. Updates to This Policy</h2>
            <p>
              We may update this Cookies Policy from time to time. Any changes will be posted on this page with an updated revision date.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[var(--lp-graphite)] mb-3">7. Contact</h2>
            <p>
              If you have questions about our use of cookies, contact us at{" "}
              <a href="mailto:hello@pinscaler.com" className="text-[var(--lp-coral)] underline">hello@pinscaler.com</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
