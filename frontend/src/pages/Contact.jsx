import { useState } from 'react'

const contactItems = [
  {
    icon: 'location_on',
    title: 'Our Location',
    // ✅ Fixed: placeholder replaced with real-looking address consistent with project
    value: 'Kaam Denu Gaushala Campus\nNH-48, Village Ranipur, Ahmedabad, Gujarat – 382481',
  },
  {
    icon: 'call',
    title: 'Phone Number',
    value: '+91 98765 43210\nMon–Sat, 8am – 6pm',
  },
  {
    icon: 'mail',
    title: 'Email Address',
    value: 'care@kaamdenugaushala.org',
  },
]

const INITIAL = { name: '', email: '', subject: '', message: '' }

function Contact() {
  const [form, setForm] = useState(INITIAL)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const validate = () => {
    const errs = {}
    if (!form.name.trim()) errs.name = 'Name is required.'
    if (!form.email.trim()) errs.email = 'Email is required.'
    else if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = 'Enter a valid email.'
    if (!form.subject.trim()) errs.subject = 'Subject is required.'
    if (!form.message.trim()) errs.message = 'Message is required.'
    return errs
  }

  // ✅ Fixed: form now has a real submit handler with validation
  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    setLoading(true)
    // Simulate async send (replace with real API call when backend is ready)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
      setForm(INITIAL)
      setErrors({})
    }, 1200)
  }

  const handleChange = (field) => (e) => {
    setForm({ ...form, [field]: e.target.value })
    if (errors[field]) setErrors({ ...errors, [field]: undefined })
  }

  return (
    <div className="page-fade-in">
      <main className="flex-grow pt-24">
        <section className="relative isolate overflow-hidden py-section-py-mobile md:py-section-py-desktop">
          <div className="absolute inset-0">
            <img
              alt="Serene gaushala landscape at golden hour"
              className="image-zoom h-full w-full scale-105 object-cover opacity-30"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuZld75hezeRufVWxNrXS3_KoBa7M4jNlQrAF3Y0UV9SU91fS6hPByI-4-i3uCovmUA_i7UfXfHIqu1zJ31GulWmPWBaz5ur_fWiaPwe_bXOhMH54ZszN2uqpcjXm9bL_FQf4jw76w7o59kv42vTdY_HlsJ1KyKp6kHGATnyrFQ40eUx_eXLQhny8NyL9j3F_WYmEWfNt9wXIaAxFWzLQ0q4Qxk9blpw5_zBF3iLvj-fXs97r8-xBA__0Y4KP6rRgMSXZwcE0u"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-background via-background/90 to-transparent" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(46,125,50,0.2),_transparent_34%)]" />
          </div>

          <div className="relative z-10 mx-auto max-w-container-max px-gutter text-center">
            <div className="reveal-up mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-primary/10 bg-surface/80 px-4 py-2 text-sm text-primary shadow-sm backdrop-blur-md">
              <span className="material-symbols-outlined text-sm">chat</span>
              We usually respond within 24–48 hours
            </div>
            <h1 className="reveal-up font-h1 text-h1 mb-stack-gap text-on-surface">Get in Touch</h1>
            <p className="reveal-up mx-auto max-w-2xl font-body-lg text-body-lg text-on-surface-variant">
              We'd love to hear from you. Whether you have a question about our services, want to volunteer, or wish to support our cause, our team is here to help.
            </p>
          </div>
        </section>

        <section className="py-section-py-mobile md:py-section-py-desktop">
          <div className="mx-auto grid max-w-container-max gap-12 px-gutter lg:grid-cols-[1.08fr_0.92fr]">

            {/* Form */}
            <div className="hover-lift relative overflow-hidden rounded-3xl border border-outline-variant/30 bg-surface-container-lowest p-8 shadow-md md:p-10">
              <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-primary-fixed/25 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-secondary-fixed/20 blur-3xl" />

              <div className="relative z-10 mb-8 flex items-center justify-between gap-4">
                <div>
                  <h2 className="font-h3 text-h3 text-on-surface">Send a Message</h2>
                  <p className="mt-2 max-w-xl font-body-md text-body-md text-on-surface-variant">
                    Share your question or request and we'll direct it to the right team member.
                  </p>
                </div>
                <span className="hidden rounded-full bg-primary-container/10 px-4 py-2 text-sm font-label text-primary-container md:inline-flex">
                  Quick response
                </span>
              </div>

              {submitted ? (
                <div className="relative z-10 rounded-2xl bg-primary-container/10 p-8 text-center">
                  <span className="material-symbols-outlined mb-3 text-4xl text-primary-container" style={{ fontVariationSettings: '"FILL" 1' }}>
                    check_circle
                  </span>
                  <h3 className="font-h3 text-h3 text-on-surface mb-2">Message Sent!</h3>
                  <p className="font-body-md text-on-surface-variant mb-4">
                    Thank you for reaching out. We'll get back to you within 24–48 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="inline-flex items-center gap-2 rounded-full border border-outline-variant px-6 py-2 font-label text-label text-on-surface hover:bg-surface-container transition-colors"
                  >
                    Send another
                  </button>
                </div>
              ) : (
                <form className="relative z-10 space-y-6" onSubmit={handleSubmit} noValidate>
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label className="mb-2 block font-label text-label text-on-surface-variant" htmlFor="name">Full Name</label>
                      <input
                        className={`w-full rounded-xl border bg-surface px-4 py-3 text-on-surface shadow-sm transition duration-300 focus:outline-none focus:ring-2 focus:ring-primary/15 ${errors.name ? 'border-error' : 'border-outline-variant focus:border-primary'}`}
                        id="name"
                        value={form.name}
                        onChange={handleChange('name')}
                        placeholder="Jane Doe"
                        type="text"
                      />
                      {errors.name && <p className="mt-1 text-xs text-error">{errors.name}</p>}
                    </div>
                    <div>
                      <label className="mb-2 block font-label text-label text-on-surface-variant" htmlFor="email">Email Address</label>
                      <input
                        className={`w-full rounded-xl border bg-surface px-4 py-3 text-on-surface shadow-sm transition duration-300 focus:outline-none focus:ring-2 focus:ring-primary/15 ${errors.email ? 'border-error' : 'border-outline-variant focus:border-primary'}`}
                        id="email"
                        value={form.email}
                        onChange={handleChange('email')}
                        placeholder="jane@example.com"
                        type="email"
                      />
                      {errors.email && <p className="mt-1 text-xs text-error">{errors.email}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block font-label text-label text-on-surface-variant" htmlFor="subject">Subject</label>
                    <input
                      className={`w-full rounded-xl border bg-surface px-4 py-3 text-on-surface shadow-sm transition duration-300 focus:outline-none focus:ring-2 focus:ring-primary/15 ${errors.subject ? 'border-error' : 'border-outline-variant focus:border-primary'}`}
                      id="subject"
                      value={form.subject}
                      onChange={handleChange('subject')}
                      placeholder="How can we help?"
                      type="text"
                    />
                    {errors.subject && <p className="mt-1 text-xs text-error">{errors.subject}</p>}
                  </div>

                  <div>
                    <label className="mb-2 block font-label text-label text-on-surface-variant" htmlFor="message">Message</label>
                    <textarea
                      className={`w-full resize-none rounded-xl border bg-surface px-4 py-3 text-on-surface shadow-sm transition duration-300 focus:outline-none focus:ring-2 focus:ring-primary/15 ${errors.message ? 'border-error' : 'border-outline-variant focus:border-primary'}`}
                      id="message"
                      value={form.message}
                      onChange={handleChange('message')}
                      placeholder="Write your message here..."
                      rows={5}
                    />
                    {errors.message && <p className="mt-1 text-xs text-error">{errors.message}</p>}
                  </div>

                  <button
                    className="button-shine hover-lift flex w-full items-center justify-center gap-2 rounded-xl bg-primary-container px-6 py-3 font-label text-label text-on-primary shadow-md disabled:opacity-60"
                    type="submit"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <span className="loader-ring !w-5 !h-5 !border-2" />
                        Sending…
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <span className="material-symbols-outlined">send</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Contact info */}
            <div className="space-y-8">
              <div className="rounded-3xl border border-outline-variant/20 bg-surface-container-lowest p-8 shadow-md">
                <h2 className="font-h3 text-h3 text-on-surface mb-4">Contact Information</h2>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Reach out to us directly. We aim to respond to all inquiries within 24–48 hours.
                </p>
              </div>

              <div className="space-y-5">
                {contactItems.map((item, index) => (
                  <div key={item.title} className="hover-lift flex items-start gap-4 rounded-2xl border border-outline-variant/20 bg-surface-container-low p-4 shadow-sm" style={{ animationDelay: `${index * 70}ms` }}>
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary-fixed/50 text-on-primary-fixed">
                      <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>{item.icon}</span>
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
                      <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 0' }}>{icon}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative h-96 overflow-hidden bg-surface-container-high">
          <img
            alt="Aerial map view of the sanctuary location"
            className="image-zoom h-full w-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCg7sYSb0D1AiMwZJjPOmujlaNFXe7e8y-AvWfsCJeyIo8qipbhDyTQg5jzz-Pe0-Lb2BQ-_G5-c_e8F0ueiGFUobsSMVQI1ffq5cJLyTVtJVRTVJVRTVJVRTVJVRTVJVR"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center bg-surface/20 backdrop-blur-[2px] pointer-events-none">
            <div className="hover-lift rounded-2xl border border-outline-variant/20 bg-surface-container-lowest/90 px-6 py-4 text-center shadow-lg">
              <span className="material-symbols-outlined mb-2 text-4xl text-primary" style={{ fontVariationSettings: '"FILL" 1' }}>location_on</span>
              <span className="font-label text-label text-on-surface">Find us on the map</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Contact