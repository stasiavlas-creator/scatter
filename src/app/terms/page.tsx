export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-3xl px-6 lg:px-8 py-20">
        <a href="/" className="text-sm text-gray-400 hover:text-gray-600 mb-8 inline-block">
          &larr; Back to home
        </a>

        <h1 className="text-3xl font-bold text-[var(--lp-graphite)] mb-2">
          Terms & Conditions
        </h1>
        <p className="text-sm text-gray-400 mb-10">Last updated: April 2026</p>

        <div className="prose prose-sm prose-gray max-w-none space-y-8 text-gray-600 leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-[var(--lp-graphite)] mb-3">1. Introduction</h2>
            <p>
              These Terms & Conditions govern your use of the Pinscaler website and services operated by Pinscaler ("we", "our", "us"). By accessing or using our website, you agree to be bound by these terms.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[var(--lp-graphite)] mb-3">2. Services</h2>
            <p>
              Pinscaler provides Pinterest content placement and distribution services. We place branded content across a curated network of Pinterest accounts to generate organic reach and impressions for our clients.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[var(--lp-graphite)] mb-3">3. Free Trial</h2>
            <p>
              We offer a free 7-day placement trial for new clients. The trial includes one pin placement across selected accounts with impression reporting. No credit card or payment information is required for the trial. After the trial period, you may choose to continue with a paid placement package or discontinue the service.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[var(--lp-graphite)] mb-3">4. Collection of Personal Data</h2>
            <p>
              When you submit a request through our contact form, we collect the following information:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li><strong>Name</strong> — to address you in our communications</li>
              <li><strong>Email address</strong> — to respond to your request and send placement reports</li>
              <li><strong>Message content</strong> — to understand your needs and goals</li>
              <li><strong>Product URL</strong> (optional) — to evaluate your product for placement suitability</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[var(--lp-graphite)] mb-3">5. How We Use Your Data</h2>
            <p>We use the personal data we collect for the following purposes:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>To respond to your placement request</li>
              <li>To set up and manage your pin placement campaign</li>
              <li>To send you performance reports and analytics</li>
              <li>To communicate about service updates relevant to your campaign</li>
            </ul>
            <p className="mt-3">
              We do not sell, rent, or share your personal data with third parties for marketing purposes. We do not use your data for automated decision-making or profiling.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[var(--lp-graphite)] mb-3">6. Data Storage & Security</h2>
            <p>
              Your personal data is stored securely and retained only for as long as necessary to provide our services. We implement appropriate technical and organizational measures to protect your data against unauthorized access, alteration, or destruction.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[var(--lp-graphite)] mb-3">7. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Request access to the personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Withdraw consent for data processing at any time</li>
            </ul>
            <p className="mt-3">
              To exercise any of these rights, contact us at{" "}
              <a href="mailto:hello@pinscaler.com" className="text-[var(--lp-coral)] underline">hello@pinscaler.com</a>.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[var(--lp-graphite)] mb-3">8. Limitation of Liability</h2>
            <p>
              Pinscaler provides placement services on a best-effort basis. We do not guarantee specific impression counts, engagement rates, or sales conversions. Performance metrics shared on our website represent historical network averages and may vary.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[var(--lp-graphite)] mb-3">9. Contact</h2>
            <p>
              For questions about these terms or our data practices, contact us at{" "}
              <a href="mailto:hello@pinscaler.com" className="text-[var(--lp-coral)] underline">hello@pinscaler.com</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
