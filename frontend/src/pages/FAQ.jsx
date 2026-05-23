import React from 'react'

function FAQ() {
  return (
  <div>
 
  <main>
    {/* Hero Banner */}
    <section className="relative w-full py-section-py-mobile md:py-section-py-desktop bg-surface-container flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img alt="Hero Background" className="w-full h-full object-cover opacity-20" data-alt="A serene landscape of a rural animal shelter at golden hour. Gentle sunlight bathes green fields where cows graze peacefully. The scene is framed by soft, out-of-focus foliage in the foreground, creating a warm, organic, and compassionate mood. The high-quality photography uses a professional, corporate modern aesthetic with soft edges and warm tones, aligning perfectly with a non-profit animal care brand identity. The lighting is soft and welcoming, casting long, calming shadows." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3G_nNKgxbSdUbYk0-C6437mKEj6S6vbNZnq8iEemThxhR4Hh1DSRPxms5A5981-qvFVRK4ddoDzzMoLKSwS2-UBs0ETzRZeflB_wxfM5dcbaatXvoS9BXr7Sxl6wLClg2Ii6UTUAhQAUsrFe8LJh-SxbdPUWAdYj344ROOUR8Ka2IVyCCLEKOGbSeXFI9eMA_wIYd8gGW2DZhG3femwQefy-FTBCl5kJbDQv__xgGENvMzjU-1QG79ZKaPQaFufWQKmb9XDEe" />
        <div className="absolute inset-0 bg-gradient-to-b from-surface-container/80 to-surface-container" />
      </div>
      <div className="relative z-10 max-w-container-max mx-auto px-gutter text-center">
        <h1 className="font-h1 text-h1 text-on-surface mb-stack-gap">Help &amp; Information</h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">Find answers to common questions and review our organizational policies and commitments.</p>
      </div>
    </section>
    {/* Main Content Area */}
    <div className="max-w-container-max mx-auto px-gutter py-section-py-mobile md:py-section-py-desktop grid grid-cols-1 lg:grid-cols-12 gap-12">
      {/* Sidebar Navigation (Sticky on Desktop) */}
      <aside className="lg:col-span-3 hidden lg:block">
        <div className="sticky top-32 space-y-2">
          <a className="block px-4 py-3 rounded-lg font-label text-label text-primary bg-primary-container/10 border-l-4 border-primary" href="#faq">Frequently Asked Questions</a>
          <a className="block px-4 py-3 rounded-lg font-label text-label text-on-surface-variant hover:bg-surface-container hover:text-primary transition-colors" href="#privacy">Privacy Policy</a>
          <a className="block px-4 py-3 rounded-lg font-label text-label text-on-surface-variant hover:bg-surface-container hover:text-primary transition-colors" href="#terms">Terms of Service</a>
          <a className="block px-4 py-3 rounded-lg font-label text-label text-on-surface-variant hover:bg-surface-container hover:text-primary transition-colors" href="#refunds">Refund Policy</a>
        </div>
      </aside>
      {/* Content Canvas */}
      <div className="lg:col-span-9 space-y-16">
        {/* FAQ Section (Glassmorphism inspired Accordion) */}
        <section className="scroll-mt-32" id="faq">
          <h2 className="font-h2 text-h2 text-on-surface mb-8 border-b border-outline-variant pb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {/* FAQ Item 1 */}
            <div className="bg-surface-container-lowest rounded-xl shadow-md border border-outline-variant/30 overflow-hidden hover:shadow-lg transition-shadow duration-300 group">
              <details className="[&_summary::-webkit-details-marker]:hidden" open>
                <summary className="flex items-center justify-between cursor-pointer p-6 bg-surface-container-lowest text-on-surface font-h3 text-h3 text-[20px]">
                  <span>How to donate?</span>
                  <span className="material-symbols-outlined text-primary group-open:rotate-180 transition-transform duration-300">expand_more</span>
                </summary>
                <div className="px-6 pb-6 text-on-surface-variant font-body-md text-body-md border-t border-outline-variant/10 pt-4">
                  <p>You can donate securely online through our website using the 'Donate' button located in the top navigation bar. We accept major credit cards, debit cards, and bank transfers. All donations directly support the care, feeding, and medical needs of the animals at Kaam Denu Gaushala.</p>
                </div>
              </details>
            </div>
            {/* FAQ Item 2 */}
            <div className="bg-surface-container-lowest rounded-xl shadow-md border border-outline-variant/30 overflow-hidden hover:shadow-lg transition-shadow duration-300 group">
              <details className="[&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between cursor-pointer p-6 bg-surface-container-lowest text-on-surface font-h3 text-h3 text-[20px]">
                  <span>Can I visit?</span>
                  <span className="material-symbols-outlined text-primary group-open:rotate-180 transition-transform duration-300">expand_more</span>
                </summary>
                <div className="px-6 pb-6 text-on-surface-variant font-body-md text-body-md border-t border-outline-variant/10 pt-4">
                  <p>Yes, we welcome visitors! Visiting hours are generally between 10:00 AM and 4:00 PM on weekends. However, to ensure the safety and peace of our residents, we ask that you schedule your visit in advance by contacting us via the 'Contact' page. Guided tours are available upon request.</p>
                </div>
              </details>
            </div>
            {/* FAQ Item 3 */}
            <div className="bg-surface-container-lowest rounded-xl shadow-md border border-outline-variant/30 overflow-hidden hover:shadow-lg transition-shadow duration-300 group">
              <details className="[&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between cursor-pointer p-6 bg-surface-container-lowest text-on-surface font-h3 text-h3 text-[20px]">
                  <span>What animals do you rescue?</span>
                  <span className="material-symbols-outlined text-primary group-open:rotate-180 transition-transform duration-300">expand_more</span>
                </summary>
                <div className="px-6 pb-6 text-on-surface-variant font-body-md text-body-md border-t border-outline-variant/10 pt-4">
                  <p>While our primary focus is the care and rehabilitation of cows (Gaushala), we provide shelter and medical assistance to various injured, abandoned, or sick farm animals. This includes oxen, calves, and occasionally other domestic animals in urgent need of sanctuary within our capacity.</p>
                </div>
              </details>
            </div>
            {/* FAQ Item 4 */}
            <div className="bg-surface-container-lowest rounded-xl shadow-md border border-outline-variant/30 overflow-hidden hover:shadow-lg transition-shadow duration-300 group">
              <details className="[&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between cursor-pointer p-6 bg-surface-container-lowest text-on-surface font-h3 text-h3 text-[20px]">
                  <span>Are my donations tax-deductible?</span>
                  <span className="material-symbols-outlined text-primary group-open:rotate-180 transition-transform duration-300">expand_more</span>
                </summary>
                <div className="px-6 pb-6 text-on-surface-variant font-body-md text-body-md border-t border-outline-variant/10 pt-4">
                  <p>Yes, Kaam Denu Gaushala is a registered non-profit organization. All donations made are eligible for tax exemption under the applicable sections of the Income Tax Act. A receipt with our registration details will be emailed to you automatically upon successful donation.</p>
                </div>
              </details>
            </div>
          </div>
        </section>
        {/* Legal Sections (Clean Document Layout) */}
        <div className="space-y-16 bg-surface-container-lowest p-8 md:p-12 rounded-xl shadow-md border border-outline-variant/20">
          <section className="scroll-mt-32" id="privacy">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-primary-container/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary">policy</span>
              </div>
              <h2 className="font-h2 text-h2 text-on-surface">Privacy Policy</h2>
            </div>
            <div className="prose prose-slate max-w-none font-body-md text-body-md text-on-surface-variant space-y-4">
              <p>At Kaam Denu Gaushala, we are committed to protecting your privacy and ensuring that your personal information is handled securely and responsibly. This Privacy Policy outlines how we collect, use, and safeguard the information you provide to us through our website and related services.</p>
              <h3 className="font-h3 text-h3 text-on-surface mt-6 mb-3 text-[20px]">Information Collection</h3>
              <p>We collect personal information such as your name, email address, phone number, and billing details only when you voluntarily provide it to us, such as when making a donation, signing up for our newsletter, or contacting us for inquiries. We also automatically collect certain non-personally identifiable information, like IP addresses and browsing behavior, to improve our website's functionality.</p>
              <h3 className="font-h3 text-h3 text-on-surface mt-6 mb-3 text-[20px]">Use of Information</h3>
              <p>The information we collect is primarily used to process your donations, issue tax receipts, communicate updates about our activities and impact, and respond to your requests. We do not sell, rent, or trade your personal information to third parties.</p>
            </div>
          </section>
          <div className="h-px bg-outline-variant/30 w-full" />
          <section className="scroll-mt-32" id="terms">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-primary-container/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary">gavel</span>
              </div>
              <h2 className="font-h2 text-h2 text-on-surface">Terms of Service</h2>
            </div>
            <div className="prose prose-slate max-w-none font-body-md text-body-md text-on-surface-variant space-y-4">
              <p>By accessing and using the Kaam Denu Gaushala website, you accept and agree to be bound by the terms and provisions of this agreement. Furthermore, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services.</p>
              <p>All content provided on this website is for informational purposes only. The organization makes no representations as to the accuracy or completeness of any information on this site or found by following any link on this site. The organization will not be liable for any errors or omissions in this information nor for the availability of this information.</p>
            </div>
          </section>
          <div className="h-px bg-outline-variant/30 w-full" />
          <section className="scroll-mt-32" id="refunds">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-primary-container/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary">currency_exchange</span>
              </div>
              <h2 className="font-h2 text-h2 text-on-surface">Refund Policy</h2>
            </div>
            <div className="prose prose-slate max-w-none font-body-md text-body-md text-on-surface-variant space-y-4">
              <p>Kaam Denu Gaushala relies on the generosity of our donors to maintain operations and care for the animals. As donations are considered charitable contributions, they are generally non-refundable.</p>
              <p>However, we understand that errors can occasionally occur during the transaction process. If a duplicate donation is made, or an incorrect amount is charged due to a technical error on our platform, please contact us within 7 days of the transaction. We will review the request and, upon verification, initiate a refund for the erroneous amount.</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  </main>
  {/* Footer */}
</div>

  )
}

export default FAQ