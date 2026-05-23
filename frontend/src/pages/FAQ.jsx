const faqItems = [
  {
    question: 'How to donate?',
    answer:
      "You can donate securely online through our website using the 'Donate' button located in the top navigation bar. We accept major credit cards, debit cards, and bank transfers. All donations directly support the care, feeding, and medical needs of the animals at Kaam Denu Gaushala.",
  },
  {
    question: 'Can I visit?',
    answer:
      "Yes, we welcome visitors! Visiting hours are generally between 10:00 AM and 4:00 PM on weekends. However, to ensure the safety and peace of our residents, we ask that you schedule your visit in advance by contacting us via the 'Contact' page. Guided tours are available upon request.",
  },
  {
    question: 'What animals do you rescue?',
    answer:
      'While our primary focus is the care and rehabilitation of cows (Gaushala), we provide shelter and medical assistance to various injured, abandoned, or sick farm animals. This includes oxen, calves, and occasionally other domestic animals in urgent need of sanctuary within our capacity.',
  },
  {
    question: 'Are my donations tax-deductible?',
    answer:
      'Yes, Kaam Denu Gaushala is a registered non-profit organization. All donations made are eligible for tax exemption under the applicable sections of the Income Tax Act. A receipt with our registration details will be emailed to you automatically upon successful donation.',
  },
]

const policies = [
  {
    id: 'privacy',
    icon: 'policy',
    title: 'Privacy Policy',
    content: [
      'At Kaam Denu Gaushala, we are committed to protecting your privacy and ensuring that your personal information is handled securely and responsibly. This Privacy Policy outlines how we collect, use, and safeguard the information you provide to us through our website and related services.',
      'We collect personal information such as your name, email address, phone number, and billing details only when you voluntarily provide it to us, such as when making a donation, signing up for our newsletter, or contacting us for inquiries. We also automatically collect certain non-personally identifiable information, like IP addresses and browsing behavior, to improve our website\'s functionality.',
      'The information we collect is primarily used to process your donations, issue tax receipts, communicate updates about our activities and impact, and respond to your requests. We do not sell, rent, or trade your personal information to third parties.',
    ],
  },
  {
    id: 'terms',
    icon: 'gavel',
    title: 'Terms of Service',
    content: [
      'By accessing and using the Kaam Denu Gaushala website, you accept and agree to be bound by the terms and provisions of this agreement. Furthermore, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services.',
      'All content provided on this website is for informational purposes only. The organization makes no representations as to the accuracy or completeness of any information on this site or found by following any link on this site. The organization will not be liable for any errors or omissions in this information nor for the availability of this information.',
    ],
  },
  {
    id: 'refunds',
    icon: 'currency_exchange',
    title: 'Refund Policy',
    content: [
      'Kaam Denu Gaushala relies on the generosity of our donors to maintain operations and care for the animals. As donations are considered charitable contributions, they are generally non-refundable.',
      'However, we understand that errors can occasionally occur during the transaction process. If a duplicate donation is made, or an incorrect amount is charged due to a technical error on our platform, please contact us within 7 days of the transaction. We will review the request and, upon verification, initiate a refund for the erroneous amount.',
    ],
  },
]

function FAQ() {
  return (
    <div className="page-fade-in">
      <main>
        <section className="relative overflow-hidden bg-surface-container">
          <div className="absolute inset-0">
            <img
              alt="Help and information background"
              className="image-zoom h-full w-full object-cover opacity-20"
              data-alt="A serene landscape of a rural animal shelter at golden hour."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3G_nNKgxbSdUbYk0-C6437mKEj6S6vbNZnq8iEemThxhR4Hh1DSRPxms5A5981-qvFVRK4ddoDzzMoLKSwS2-UBs0ETzRZeflB_wxfM5dcbaatXvoS9BXr7Sxl6wLClg2Ii6UTUAhQAUsrFe8LJh-SxbdPUWAdYj344ROOUR8Ka2IVyCCLEKOGbSeXFI9eMA_wIYd8gGW2DZhG3femwQefy-FTBCl5kJbDQv__xgGENvMzjU-1QG79ZKaPQaFufWQKmb9XDEe"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-surface-container/70 via-surface-container/85 to-surface-container" />
          </div>
          <div className="relative mx-auto max-w-container-max px-gutter py-section-py-mobile md:py-section-py-desktop">
            <div className="max-w-3xl reveal-up">
              <span className="inline-flex items-center gap-2 rounded-full bg-primary-container/10 px-4 py-2 text-label font-label text-primary">
                <span className="material-symbols-outlined text-sm">help</span>
                Help &amp; Information
              </span>
              <h1 className="mt-6 font-h1 text-h1 text-on-surface">Answers, policies, and peace of mind.</h1>
              <p className="mt-6 max-w-2xl font-body-lg text-body-lg text-on-surface-variant">
                Find answers to common questions and review our organizational policies and commitments.
              </p>
            </div>
          </div>
        </section>

        <div className="mx-auto grid max-w-container-max grid-cols-1 gap-12 px-gutter py-section-py-mobile md:py-section-py-desktop lg:grid-cols-12">
          <aside className="hidden lg:block lg:col-span-3">
            <div className="sticky top-32 space-y-3 rounded-3xl border border-outline-variant/40 bg-surface-container-low p-4 shadow-md">
              {[
                { href: '#faq', label: 'Frequently Asked Questions', active: true },
                { href: '#privacy', label: 'Privacy Policy' },
                { href: '#terms', label: 'Terms of Service' },
                { href: '#refunds', label: 'Refund Policy' },
              ].map(item => (
                <a
                  key={item.href}
                  className={`block rounded-2xl px-4 py-3 text-label font-label transition-all ${item.active ? 'border-l-4 border-primary bg-primary-container/10 text-primary' : 'text-on-surface-variant hover:bg-surface-container hover:text-primary'}`}
                  href={item.href}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </aside>

          <div className="lg:col-span-9 space-y-16">
            <section className="scroll-mt-32" id="faq">
              <div className="mb-8 flex items-end justify-between gap-4">
                <div>
                  <p className="font-label text-label text-primary">Frequently Asked Questions</p>
                  <h2 className="mt-2 font-h2 text-h2 text-on-surface">Quick answers for visitors and donors</h2>
                </div>
              </div>
              <div className="space-y-4">
                {faqItems.map((item, index) => (
                  <div
                    key={item.question}
                    className="hover-lift overflow-hidden rounded-2xl border border-outline-variant/30 bg-surface-container-lowest shadow-md"
                    style={{ animationDelay: `${index * 90}ms` }}
                  >
                    <details className="group [&_summary::-webkit-details-marker]:hidden" open={index === 0}>
                      <summary className="flex cursor-pointer items-center justify-between gap-4 p-6 font-h3 text-h3 text-on-surface">
                        <span>{item.question}</span>
                        <span className="material-symbols-outlined text-primary transition-transform duration-300 group-open:rotate-180">expand_more</span>
                      </summary>
                      <div className="border-t border-outline-variant/10 px-6 pb-6 pt-4 text-body-md font-body-md text-on-surface-variant">
                        <p>{item.answer}</p>
                      </div>
                    </details>
                  </div>
                ))}
              </div>
            </section>

            <div className="space-y-8 rounded-3xl border border-outline-variant/20 bg-surface-container-lowest p-6 shadow-md md:p-10">
              {policies.map((policy, index) => (
                <section key={policy.id} className="scroll-mt-32" id={policy.id}>
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary-container/10 text-primary">
                      <span className="material-symbols-outlined">{policy.icon}</span>
                    </div>
                    <h2 className="font-h2 text-h2 text-on-surface">{policy.title}</h2>
                  </div>
                  <div className="mt-6 space-y-4 text-body-md font-body-md text-on-surface-variant">
                    {policy.content.map(paragraph => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                  {index < policies.length - 1 && <div className="mt-8 h-px bg-outline-variant/30" />}
                </section>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default FAQ