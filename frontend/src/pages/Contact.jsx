import React from 'react'

function Contact() {
  return (
 <div>
  {/* TopNavBar */}
 
  <main className="flex-grow pt-24">
    {/* Hero Banner */}
    <section className="relative py-section-py-desktop bg-surface-container overflow-hidden">
      <div className="absolute inset-0">
        <img alt="Hero Background" className="w-full h-full object-cover opacity-20" data-alt="A softly focused, wide-angle photograph of a serene gaushala (cow shelter) landscape at dawn. Gentle golden hour light filters through the trees, casting long shadows across lush green fields. The mood is calm, compassionate, and deeply rooted in nature, reflecting the organic and trustworthy aesthetic of the brand's light-mode design system. The overall tone is warm and inviting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuZld75hezeRufVWxNrXS3_KoBa7M4jNlQrAF3Y0UV9SU91fS6hPByI-4-i3uCovmUA_i7UfXfHIqu1zJ31GulWmPWBaz5ur_fWiaPwe_bXOhMH54ZszN2uqpcjXm9bL_FQf4jw76w7o59kv42vTdY_HlsJ1KyKp6kHGATnyrFQ40eUx_eXLQhny8NyL9j3F_WYmEWfNt9wXIaAxFWzLQ0q4Qxk9blpw5_zBF3iLvj-fXs97r8-xBA__0Y4KP6rRgMSXZwcE0u" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
      </div>
      <div className="relative max-w-container-max mx-auto px-gutter text-center z-10">
        <h1 className="font-h1 text-h1 text-on-surface mb-stack-gap">Get in Touch</h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
          We'd love to hear from you. Whether you have a question about our services, want to volunteer, or wish to support our cause, our team is here to help.
        </p>
      </div>
    </section>
    {/* 2-Column Contact Section */}
    <section className="py-section-py-desktop max-w-container-max mx-auto px-gutter">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left: Form */}
        <div className="bg-surface-container-lowest rounded-xl p-8 shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 border border-outline-variant/30 relative overflow-hidden">
          {/* Glassmorphism accent */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary-fixed/30 rounded-full blur-3xl pointer-events-none" />
          <h2 className="font-h3 text-h3 text-on-surface mb-6 relative z-10">Send a Message</h2>
          <form className="space-y-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block font-label text-label text-on-surface-variant mb-2" htmlFor="name">Full Name</label>
                <input className="w-full bg-surface text-on-surface border border-outline-variant rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow" id="name" name="name" placeholder="Jane Doe" type="text" />
              </div>
              <div>
                <label className="block font-label text-label text-on-surface-variant mb-2" htmlFor="email">Email Address</label>
                <input className="w-full bg-surface text-on-surface border border-outline-variant rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow" id="email" name="email" placeholder="jane@example.com" type="email" />
              </div>
            </div>
            <div>
              <label className="block font-label text-label text-on-surface-variant mb-2" htmlFor="subject">Subject</label>
              <input className="w-full bg-surface text-on-surface border border-outline-variant rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow" id="subject" name="subject" placeholder="How can we help?" type="text" />
            </div>
            <div>
              <label className="block font-label text-label text-on-surface-variant mb-2" htmlFor="message">Message</label>
              <textarea className="w-full bg-surface text-on-surface border border-outline-variant rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow resize-none" id="message" name="message" placeholder="Write your message here..." rows={5} defaultValue={""} />
            </div>
            <button className="w-full bg-primary-container text-on-primary font-label text-label px-6 py-3 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2" type="submit">
              <span>Send Message</span>
              <span className="material-symbols-outlined" style={{fontVariationSettings: '"FILL" 0'}}>send</span>
            </button>
          </form>
        </div>
        {/* Right: Contact Info */}
        <div className="space-y-8">
          <div>
            <h2 className="font-h3 text-h3 text-on-surface mb-6">Contact Information</h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-8">
              Reach out to us directly using the information below. We aim to respond to all inquiries within 24-48 hours.
            </p>
          </div>
          <div className="space-y-6">
            {/* Info Card 1 */}
            <div className="flex items-start gap-4 p-4 rounded-xl bg-surface-container-low hover:bg-surface-container transition-colors duration-300 border border-outline-variant/20">
              <div className="w-12 h-12 rounded-full bg-primary-fixed/50 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-on-primary-fixed" style={{fontVariationSettings: '"FILL" 1'}}>location_on</span>
              </div>
              <div>
                <h3 className="font-label text-label text-on-surface mb-1">Our Location</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">123 Compassion Way<br />Green Valley, GA 30200</p>
              </div>
            </div>
            {/* Info Card 2 */}
            <div className="flex items-start gap-4 p-4 rounded-xl bg-surface-container-low hover:bg-surface-container transition-colors duration-300 border border-outline-variant/20">
              <div className="w-12 h-12 rounded-full bg-primary-fixed/50 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-on-primary-fixed" style={{fontVariationSettings: '"FILL" 1'}}>call</span>
              </div>
              <div>
                <h3 className="font-label text-label text-on-surface mb-1">Phone Number</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">+1 (555) 123-4567</p>
                <p className="font-body-md text-body-md text-on-surface-variant text-sm mt-1">Mon-Fri, 9am - 5pm</p>
              </div>
            </div>
            {/* Info Card 3 */}
            <div className="flex items-start gap-4 p-4 rounded-xl bg-surface-container-low hover:bg-surface-container transition-colors duration-300 border border-outline-variant/20">
              <div className="w-12 h-12 rounded-full bg-primary-fixed/50 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-on-primary-fixed" style={{fontVariationSettings: '"FILL" 1'}}>mail</span>
              </div>
              <div>
                <h3 className="font-label text-label text-on-surface mb-1">Email Address</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">hello@kaamdenugaushala.org</p>
              </div>
            </div>
          </div>
          {/* Social Links */}
          <div className="pt-6 border-t border-outline-variant/30">
            <h3 className="font-label text-label text-on-surface mb-4">Connect With Us</h3>
            <div className="flex gap-4">
              <a className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface hover:bg-primary-container hover:text-on-primary transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1" href="#">
                <span className="material-symbols-outlined" style={{fontVariationSettings: '"FILL" 0'}}>share</span>
              </a>
              <a className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface hover:bg-primary-container hover:text-on-primary transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1" href="#">
                <span className="material-symbols-outlined" style={{fontVariationSettings: '"FILL" 0'}}>public</span>
              </a>
              <a className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface hover:bg-primary-container hover:text-on-primary transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1" href="#">
                <span className="material-symbols-outlined" style={{fontVariationSettings: '"FILL" 0'}}>forum</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Map Placeholder */}
    <section className="w-full h-96 relative bg-surface-container-high">
      <img alt="Location Map" className="w-full h-full object-cover" data-alt="A highly detailed, modern aerial map view of a lush, green rural area. The map uses a clean, light-mode interface style typical of high-end navigation apps, emphasizing natural terrain features in soft greens and earthy tones. Roads are subtly marked, and a distinct, elegant pin marker highlights a central location. The overall aesthetic is professional, clear, and perfectly aligned with a structured, nature-inspired corporate UI." data-location="Green Valley" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCg7sYSb0D1AiMwZJjPOmujlaNFXe7e8y-AvWfsCJeyIo8qipbhDyTQg5jzz-Pe0-Lb2BQ-_G5-c_e8F0ueiGFUobsSMVQI1ffq5cJLyTVtJVRvN_rB2M50iIE-sTs7x4UqMeC9BS87qdM2Y2CjZUoY7LmuxmBG0Ne12--ThgEdwGM6pzjchqLigcfUkq-DUUdTZuCl7GBj4G3Sq36f3I0_BZI6C_9ySve8cLn6iOhYkYo4PRjyteWyamV1KY302a9UgUMzBZ4Z" />
      <div className="absolute inset-0 flex items-center justify-center bg-surface/20 backdrop-blur-[2px] pointer-events-none">
        <div className="bg-surface-container-lowest/90 px-6 py-4 rounded-xl shadow-lg border border-outline-variant/20 flex flex-col items-center">
          <span className="material-symbols-outlined text-primary text-4xl mb-2" style={{fontVariationSettings: '"FILL" 1'}}>location_on</span>
          <span className="font-label text-label text-on-surface">Find us on the map</span>
        </div>
      </div>
    </section>
  </main>
  {/* Footer */}
  
</div>

  )
}

export default Contact