import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#0D0F11]">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>

          <div className="prose prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Introduction</h2>
              <p className="text-[#C0C4C7] leading-relaxed">
                Factoraised Group ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy
                explains how we collect, use, and safeguard your information when you visit our website or use our
                services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Information We Collect</h2>
              <p className="text-[#C0C4C7] leading-relaxed mb-4">We may collect the following types of information:</p>
              <ul className="list-disc list-inside text-[#C0C4C7] space-y-2">
                <li>Personal information (name, phone number, email address) when you submit forms</li>
                <li>Vehicle information when you request a trade-in valuation</li>
                <li>Financial information for financing applications</li>
                <li>Usage data and cookies for website analytics</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">How We Use Your Information</h2>
              <p className="text-[#C0C4C7] leading-relaxed mb-4">We use your information to:</p>
              <ul className="list-disc list-inside text-[#C0C4C7] space-y-2">
                <li>Respond to your inquiries and provide customer service</li>
                <li>Process your financing applications with our partner institutions</li>
                <li>Provide trade-in valuations</li>
                <li>Send relevant updates about vehicles you may be interested in</li>
                <li>Improve our website and services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Data Protection</h2>
              <p className="text-[#C0C4C7] leading-relaxed">
                We implement appropriate security measures to protect your personal information. Your data is stored
                securely and only accessed by authorized personnel. We do not sell your personal information to third
                parties.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Your Rights</h2>
              <p className="text-[#C0C4C7] leading-relaxed mb-4">
                In accordance with Kenyan data protection laws, you have the right to:
              </p>
              <ul className="list-disc list-inside text-[#C0C4C7] space-y-2">
                <li>Access your personal data</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Withdraw consent for marketing communications</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Data Retention</h2>
              <p className="text-[#C0C4C7] leading-relaxed">
                We retain your personal information only for as long as necessary to fulfill the purposes outlined in
                this policy, or as required by law. Inquiry data is typically retained for 2 years unless you request
                deletion.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Cookies</h2>
              <p className="text-[#C0C4C7] leading-relaxed">
                Our website uses cookies to enhance your browsing experience and analyze website traffic. You can
                control cookie settings through your browser preferences.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Contact Us</h2>
              <p className="text-[#C0C4C7] leading-relaxed">
                If you have questions about this Privacy Policy or wish to exercise your data rights, please contact us
                at:
              </p>
              <p className="text-[#C0C4C7] mt-2">
                Email: info@factoraised.co.ke
                <br />
                Phone: +254 700 000 000
                <br />
                Address: Langata Road, Carnivore Area, Nairobi, Kenya
              </p>
            </section>

            <section>
              <p className="text-[#6F7377] text-sm">Last updated: December 2025</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
