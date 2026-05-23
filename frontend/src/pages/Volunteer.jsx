import React from 'react'

function Volunteer() {
  return (


  <main className="">
    {/* Hero Banner */}
    <section className="relative w-full h-[614px] min-h-[500px] flex items-center justify-center overflow-hidden bg-surface-container-high">
      <div className="absolute inset-0 w-full h-full">
        <img alt="Volunteer feeding a cow" className="w-full h-full object-cover opacity-60" data-alt="A heartwarming, high-quality photograph of a young volunteer gently feeding a calm, brown cow at a clean, sunlit gaushala sanctuary. The scene is bathed in warm, natural morning light, creating a serene and compassionate mood. The aesthetic is professional, modern, and deeply connected to nature, reflecting a harmonious environment for animal welfare and community service." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZRF7BQ5cZQFFZG2rTcqukuq5R2-Mt6XHQEQjdMNAC_mQj1zL5vyz_r_cmqfxSJ4CYMlGxfGWsYopTfFJphxIgigYzD4F-duKsEfal2khfV8rEjwZZoItOPzCHuQrD9ljakj1m23Pgqy7q2mU3zR24kkxmJTOUPpIMU0dGZnCYVVym-Z0JyEvNaW1SvwPbhJQLihs6czBIePE_hjmY1nu-SpkBARZIpdwIkS1zAzaCuo1b-CIaqHTmsRfrlr6KZsN9zlEZl18s" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      </div>
      <div className="relative z-10 max-w-container-max mx-auto px-gutter text-center">
        <h1 className="font-h1 text-h1 text-on-surface mb-stack-gap">Be a Part of the Miracle</h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
          Join our community of dedicated caregivers. Your time and compassion can transform lives, providing a safe haven for every soul that enters our gates.
        </p>
      </div>
    </section>
    {/* Roles Grid */}
    <section className="py-section-py-mobile md:py-section-py-desktop max-w-container-max mx-auto px-gutter">
      <div className="text-center mb-16">
        <h2 className="font-h2 text-h2 text-on-surface mb-4">How You Can Help</h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">Discover a role that fits your skills and passion. Every contribution creates a ripple of positive impact.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
        {/* Role 1 */}
        <div className="bg-surface rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-surface-variant">
          <div className="w-16 h-16 rounded-full bg-primary-container/20 flex items-center justify-center mb-6">
            <span className="material-symbols-outlined text-primary-container" data-icon="volunteer_activism" style={{fontSize: 32}}>volunteer_activism</span>
          </div>
          <h3 className="font-h3 text-h3 text-on-surface mb-3">Caretaking</h3>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Assist with daily feeding, grooming, and maintaining a clean, comfortable environment for our residents. Direct interaction and compassionate care.
          </p>
        </div>
        {/* Role 2 */}
        <div className="bg-surface rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-surface-variant">
          <div className="w-16 h-16 rounded-full bg-primary-container/20 flex items-center justify-center mb-6">
            <span className="material-symbols-outlined text-primary-container" data-icon="support_agent" style={{fontSize: 32}}>support_agent</span>
          </div>
          <h3 className="font-h3 text-h3 text-on-surface mb-3">Admin Support</h3>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Help us organize records, manage donor communications, and keep our operations running smoothly from the office. Vital behind-the-scenes work.
          </p>
        </div>
        {/* Role 3 */}
        <div className="bg-surface rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-surface-variant">
          <div className="w-16 h-16 rounded-full bg-primary-container/20 flex items-center justify-center mb-6">
            <span className="material-symbols-outlined text-primary-container" data-icon="event_available" style={{fontSize: 32}}>event_available</span>
          </div>
          <h3 className="font-h3 text-h3 text-on-surface mb-3">Event Planning</h3>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Coordinate awareness campaigns, fundraising events, and community outreach programs. Bring people together for a noble cause.
          </p>
        </div>
      </div>
    </section>
    {/* Volunteer Form Section */}
    <section className="py-section-py-mobile md:py-section-py-desktop bg-surface-container-low">
      <div className="max-w-container-max mx-auto px-gutter">
        <div className="bg-surface rounded-xl shadow-lg overflow-hidden flex flex-col lg:flex-row">
          {/* Form Area */}
          <div className="p-8 md:p-12 lg:w-3/5">
            <h2 className="font-h2 text-h2 text-on-surface mb-2">Join Our Team</h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-8">Fill out the form below and our volunteer coordinator will be in touch shortly.</p>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-label text-label text-on-surface mb-2" htmlFor="firstName">First Name</label>
                  <input className="w-full bg-surface-container-highest border-none rounded-DEFAULT px-4 py-3 font-body-md text-on-surface focus:ring-2 focus:ring-primary focus:outline-none transition-shadow" id="firstName" placeholder="Jane" type="text" />
                </div>
                <div>
                  <label className="block font-label text-label text-on-surface mb-2" htmlFor="lastName">Last Name</label>
                  <input className="w-full bg-surface-container-highest border-none rounded-DEFAULT px-4 py-3 font-body-md text-on-surface focus:ring-2 focus:ring-primary focus:outline-none transition-shadow" id="lastName" placeholder="Doe" type="text" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-label text-label text-on-surface mb-2" htmlFor="email">Email Address</label>
                  <input className="w-full bg-surface-container-highest border-none rounded-DEFAULT px-4 py-3 font-body-md text-on-surface focus:ring-2 focus:ring-primary focus:outline-none transition-shadow" id="email" placeholder="jane@example.com" type="email" />
                </div>
                <div>
                  <label className="block font-label text-label text-on-surface mb-2" htmlFor="phone">Phone Number</label>
                  <input className="w-full bg-surface-container-highest border-none rounded-DEFAULT px-4 py-3 font-body-md text-on-surface focus:ring-2 focus:ring-primary focus:outline-none transition-shadow" id="phone" placeholder="(555) 123-4567" type="tel" />
                </div>
              </div>
              <div>
                <label className="block font-label text-label text-on-surface mb-2" htmlFor="role">Preferred Role</label>
                <select className="w-full bg-surface-container-highest border-none rounded-DEFAULT px-4 py-3 font-body-md text-on-surface focus:ring-2 focus:ring-primary focus:outline-none transition-shadow" id="role">
                  <option>Caretaking</option>
                  <option>Admin Support</option>
                  <option>Event Planning</option>
                  <option>General / Wherever needed</option>
                </select>
              </div>
              <div>
                <label className="block font-label text-label text-on-surface mb-2" htmlFor="message">Why do you want to volunteer?</label>
                <textarea className="w-full bg-surface-container-highest border-none rounded-DEFAULT px-4 py-3 font-body-md text-on-surface focus:ring-2 focus:ring-primary focus:outline-none transition-shadow" id="message" placeholder="Share a brief message..." rows={4} defaultValue={""} />
              </div>
              <button className="w-full md:w-auto bg-primary text-on-primary font-label text-label px-8 py-4 rounded-full shadow-md hover:shadow-xl hover:-translate-y-[2px] transition-all duration-300" type="button">
                Submit Application
              </button>
            </form>
          </div>
          {/* Image Area */}
          <div className="hidden lg:block lg:w-2/5 relative">
            <img alt="Volunteers organizing supplies" className="absolute inset-0 w-full h-full object-cover" data-alt="A candid shot of diverse volunteers organizing supplies and collaborating in a bright, modern sanctuary office setting. They are smiling warmly, reflecting a strong sense of community and purpose. The lighting is soft and bright, emphasizing an organized, professional, and welcoming non-profit environment characterized by soft organic tones and natural light." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDp58uTDCDNsAxAReoiAhFE83gGp1_MYTJQu7kVo-nQsmHvvPDvmGOoUjSWuuRi1ORmvML71y79FOhc7TQJTbHbpHgf2q4fTzKaruXZSLgFYGDD5b5LCh7vhKohUcWj1X6VixG4pORxZ38-zJWCz3ctVVyTmIUd8yEEi9O52hjZtOpWLbfoGVGv8tm7JMV6MejTnfEe0KQGyKNygc9PJ6fJbURQShenlKonx2H_VvNeaAjKkru-zCFvCcUfp8VW_W2reYbBA_ER" />
          </div>
        </div>
      </div>
    </section>
    {/* Testimonial Banner */}
    <section className="py-section-py-mobile md:py-section-py-desktop max-w-container-max mx-auto px-gutter">
      <div className="bg-primary-container text-on-primary-container rounded-xl p-12 md:p-20 relative overflow-hidden shadow-lg text-center">
        <span className="material-symbols-outlined absolute top-8 left-8 text-primary/20 opacity-50" data-icon="format_quote" style={{fontSize: 120}}>format_quote</span>
        <div className="relative z-10 max-w-3xl mx-auto">
          <p className="font-h3 text-h3 mb-8 leading-relaxed">
            "Volunteering here has been the most fulfilling experience of my life. The connection you build with these gentle creatures, and the supportive community around you, brings a sense of peace you can't find anywhere else."
          </p>
          <div className="flex flex-col items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-surface-container overflow-hidden mb-4 border-2 border-on-primary-container">
              <img alt="Portrait of a volunteer" className="w-full h-full object-cover" data-alt="A professional, warm portrait of a smiling female volunteer in her late 30s, standing outdoors against a softly blurred natural green background. The lighting highlights her genuine expression, conveying trust, dedication, and compassionate care aligned with a modern non-profit brand identity." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBuU7KPJm0zf3nV3WUhLODtJXIolJL6WbeJTpBd-I4A2CmCADDlOEIXqjO1qwtZj8XXRCcyYxcgjk46iASs0YUuPxBaAjRhhxS8-coyjNft5LV26l9g3rKvmSUEs1Y3FezWCFa4D7HfFacwwYJumRsgLwbEHFuf3lfUVUSZCRYzXcy6D6HY5zUTa-IoDs9-1rQAF_YkGIvRJyA7QIOTg2b34xBu6jaKa4S8SgFbUiA65awrw0HbCjlUCu0dML3-bmSb6Pht49FO" />
            </div>
            <p className="font-label text-label tracking-wide uppercase">Sarah Jenkins</p>
            <p className="font-body-md text-sm opacity-80 mt-1">Lead Caretaker Volunteer, 3 Years</p>
          </div>
        </div>
      </div>
    </section>
  </main>
 



  )
}

export default Volunteer