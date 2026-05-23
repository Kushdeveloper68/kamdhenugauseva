const contactItems = [
  {
    icon: 'location_on',
    title: 'Our Location',
    value: '123 Compassion Way\nGreen Valley, GA 30200',
  },
  {
    icon: 'call',
    title: 'Phone Number',
    value: '+1 (555) 123-4567\nMon-Fri, 9am - 5pm',
  },
  {
    icon: 'mail',
    title: 'Email Address',
    value: 'hello@kaamdenugaushala.org',
  },
]

function Contact() {
  return (
    <div className="page-fade-in">
      <main className="flex-grow pt-24">
        <section className="relative isolate overflow-hidden py-section-py-mobile md:py-section-py-desktop">
          <div className="absolute inset-0">
            <img
              alt="Hero Background"
              className="image-zoom h-full w-full scale-105 object-cover opacity-30"
              data-alt="A softly focused, wide-angle photograph of a serene gaushala (cow shelter) landscape at dawn. Gentle golden hour light filters through the trees, casting long shadows across lush green fields. The mood is calm, compassionate, and deeply rooted in nature, reflecting the organic and trustworthy aesthetic of the brand's light-mode design system. The overall tone is warm and inviting."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuZld75hezeRufVWxNrXS3_KoBa7M4jNlQrAF3Y0UV9SU91fS6hPByI-4-i3uCovmUA_i7UfXfHIqu1zJ31GulWmPWBaz5ur_fWiaPwe_bXOhMH54ZszN2uqpcjXm9bL_FQf4jw76w7o59kv42vTdY_HlsJ1KyKp6kHGATnyrFQ40eUx_eXLQhny8NyL9j3F_WYmEWfNt9wXIaAxFWzLQ0q4Qxk9blpw5_zBF3iLvj-fXs97r8-xBA__0Y4KP6rRgMSXZwcE0u"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-background via-background/90 to-transparent" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(46,125,50,0.2),_transparent_34%)]" />
          </div>

          <div className="relative z-10 mx-auto max-w-container-max px-gutter text-center">
            <div className="reveal-up mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-primary/10 bg-surface/80 px-4 py-2 text-sm text-primary shadow-sm backdrop-blur-md" style={{ animationDelay: '60ms' }}>
              <span className="material-symbols-outlined text-sm" data-icon="chat">
                chat
              </span>
              We usually respond within 24-48 hours
            </div>
            <h1 className="reveal-up font-h1 text-h1 mb-stack-gap text-on-surface" style={{ animationDelay: '140ms' }}>
              Get in Touch
            </h1>
            <p className="reveal-up mx-auto max-w-2xl font-body-lg text-body-lg text-on-surface-variant" style={{ animationDelay: '220ms' }}>
              We'd love to hear from you. Whether you have a question about our services, want to volunteer, or wish to support our cause, our team is here to help.
            </p>
          </div>
        </section>

        <section className="py-section-py-mobile md:py-section-py-desktop">
          <div className="mx-auto grid max-w-container-max gap-12 px-gutter lg:grid-cols-[1.08fr_0.92fr]">
            <div className="hover-lift relative overflow-hidden rounded-3xl border border-outline-variant/30 bg-surface-container-lowest p-8 shadow-md md:p-10">
              <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-primary-fixed/25 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-secondary-fixed/20 blur-3xl" />

              <div className="relative z-10 mb-8 flex items-center justify-between gap-4">
                <div>
                  <h2 className="font-h3 text-h3 text-on-surface">Send a Message</h2>
                  <p className="mt-2 max-w-xl font-body-md text-body-md text-on-surface-variant">
                    Share your question or request and we’ll direct it to the right team member.
                  </p>
                </div>
                <span className="hidden rounded-full bg-primary-container/10 px-4 py-2 text-sm font-label text-primary-container md:inline-flex">
                  Quick response
                </span>
              </div>

              <form className="relative z-10 space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block font-label text-label text-on-surface-variant" htmlFor="name">
                      Full Name
                    </label>
                    <input className="w-full rounded-xl border border-outline-variant bg-surface px-4 py-3 text-on-surface shadow-sm transition duration-300 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/15" id="name" name="name" placeholder="Jane Doe" type="text" />
                  </div>
                  <div>
                    <label className="mb-2 block font-label text-label text-on-surface-variant" htmlFor="email">
                      Email Address
                    </label>
                    <input className="w-full rounded-xl border border-outline-variant bg-surface px-4 py-3 text-on-surface shadow-sm transition duration-300 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/15" id="email" name="email" placeholder="jane@example.com" type="email" />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block font-label text-label text-on-surface-variant" htmlFor="subject">
                    Subject
                  </label>
                  <input className="w-full rounded-xl border border-outline-variant bg-surface px-4 py-3 text-on-surface shadow-sm transition duration-300 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/15" id="subject" name="subject" placeholder="How can we help?" type="text" />
                </div>

                <div>
                  <label className="mb-2 block font-label text-label text-on-surface-variant" htmlFor="message">
                    Message
                  </label>
                  <textarea className="w-full resize-none rounded-xl border border-outline-variant bg-surface px-4 py-3 text-on-surface shadow-sm transition duration-300 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/15" id="message" name="message" placeholder="Write your message here..." rows={5} defaultValue={''} />
                </div>

                <button className="button-shine hover-lift flex w-full items-center justify-center gap-2 rounded-xl bg-primary-container px-6 py-3 font-label text-label text-on-primary shadow-md" type="submit">
                  <span>Send Message</span>
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 0' }}>
                    send
                  </span>
                </button>
              </form>
            </div>

            <div className="space-y-8">
              <div className="rounded-3xl border border-outline-variant/20 bg-surface-container-lowest p-8 shadow-md">
                <h2 className="font-h3 text-h3 text-on-surface mb-4">Contact Information</h2>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Reach out to us directly using the information below. We aim to respond to all inquiries within 24-48 hours.
                </p>
              </div>

              <div className="space-y-5">
                {contactItems.map((item, index) => (
                  <div key={item.title} className="hover-lift flex items-start gap-4 rounded-2xl border border-outline-variant/20 bg-surface-container-low p-4 shadow-sm" style={{ animationDelay: `${index * 70}ms` }}>
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary-fixed/50 text-on-primary-fixed transition-transform duration-300">
                      <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>
                        {item.icon}
                      </span>
                    </div>
                    <div>
                      <h3 className="mb-1 font-label text-label text-on-surface">{item.title}</h3>
                      <p className="whitespace-pre-line font-body-md text-body-md text-on-surface-variant">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="rounded-3xl border border-outline-variant/20 bg-surface p-6 shadow-sm">
                <h3 className="mb-4 font-label text-label text-on-surface">Connect With Us</h3>
                <div className="flex gap-4">
                  {['share', 'public', 'forum'].map((icon) => (
                    <a key={icon} className="hover-lift flex h-11 w-11 items-center justify-center rounded-full bg-surface-container-high text-on-surface shadow-sm transition-colors duration-300 hover:bg-primary-container hover:text-on-primary" href="#">
                      <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 0' }}>
                        {icon}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative h-96 overflow-hidden bg-surface-container-high">
          <img alt="Location Map" className="image-zoom h-full w-full object-cover" data-alt="A highly detailed, modern aerial map view of a lush, green rural area. The map uses a clean, light-mode interface style typical of high-end navigation apps, emphasizing natural terrain features in soft greens and earthy tones. Roads are subtly marked, and a distinct, elegant pin marker highlights a central location. The overall aesthetic is professional, clear, and perfectly aligned with a structured, nature-inspired corporate UI." data-location="Green Valley" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCg7sYSb0D1AiMwZJjPOmujlaNFXe7e8y-AvWfsCJeyIo8qipbhDyTQg5jzz-Pe0-Lb2BQ-_G5-c_e8F0ueiGFUobsSMVQI1ffq5cJLyTVtJVRvN_rB2M50iIE-sTs7x4UqMeC9BS87qdM2Y2CjZUoY7LmuxmBG0Ne12--ThgEdwGM6pzjchqLigcfUkq-DUUdTZuCl7GBj4G3Sq36f3I0_BZI6C_9ySve8cLn6iOhYkYo4PRjyteWyamV1KY302a9UgUMzBZ4Z" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center bg-surface/20 backdrop-blur-[2px] pointer-events-none">
            <div className="hover-lift rounded-2xl border border-outline-variant/20 bg-surface-container-lowest/90 px-6 py-4 text-center shadow-lg">
              <span className="material-symbols-outlined mb-2 text-4xl text-primary" style={{ fontVariationSettings: '"FILL" 1' }}>
                location_on
              </span>
              <span className="font-label text-label text-on-surface">Find us on the map</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Contact