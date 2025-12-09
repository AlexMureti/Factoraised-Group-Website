import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#0D0F11]">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-8">Terms of Service</h1>

          <div className="prose prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Agreement to Terms</h2>
              <p className="text-[#C0C4C7] leading-relaxed">
                By accessing or using the Factoraised Group website and services, you agree to be bound by these Terms
                of Service. If you do not agree, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Vehicle Information</h2>
              <p className="text-[#C0C4C7] leading-relaxed">
                We make every effort to ensure the accuracy of vehicle information on our website. However, all
                information is provided for guidance purposes. Final specifications, pricing, and availability should be
                confirmed with our sales team before purchase.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Pricing</h2>
              <p className="text-[#C0C4C7] leading-relaxed">
                All prices are displayed in Kenyan Shillings (KES) and are subject to change without notice. Prices do
                not include additional costs such as registration, insurance, or delivery unless explicitly stated.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Financing</h2>
              <p className="text-[#C0C4C7] leading-relaxed">
                Finance estimates on our website are for illustrative purposes only. Actual rates, terms, and approval
                are determined by our partner banks and SACCOs based on their criteria. Factoraised Group does not
                guarantee financing approval.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Trade-In Valuations</h2>
              <p className="text-[#C0C4C7] leading-relaxed">
                Trade-in estimates provided online are preliminary and subject to physical inspection of the vehicle.
                The final trade-in value may differ from the initial estimate based on the actual condition of the
                vehicle.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Inspection Reports</h2>
              <p className="text-[#C0C4C7] leading-relaxed">
                We provide detailed inspection reports for each vehicle. These reports represent the condition at the
                time of inspection. Buyers are encouraged to conduct their own inspection before purchase.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Limitation of Liability</h2>
              <p className="text-[#C0C4C7] leading-relaxed">
                Factoraised Group shall not be liable for any indirect, incidental, or consequential damages arising
                from the use of our website or services. Our liability is limited to the purchase price of the vehicle.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Intellectual Property</h2>
              <p className="text-[#C0C4C7] leading-relaxed">
                All content on this website, including text, images, logos, and design, is the property of Factoraised
                Group and protected by copyright laws. Unauthorized use is prohibited.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Governing Law</h2>
              <p className="text-[#C0C4C7] leading-relaxed">
                These Terms of Service are governed by the laws of Kenya. Any disputes shall be resolved in the courts
                of Nairobi, Kenya.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Changes to Terms</h2>
              <p className="text-[#C0C4C7] leading-relaxed">
                We reserve the right to modify these terms at any time. Continued use of our website after changes
                constitutes acceptance of the new terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Contact</h2>
              <p className="text-[#C0C4C7] leading-relaxed">
                For questions about these Terms of Service, contact us at:
              </p>
              <p className="text-[#C0C4C7] mt-2">
                Email: info@factoraised.co.ke
                <br />
                Phone: +254 700 000 000
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
