import { useState } from 'react'

const INITIAL = { firstName: '', lastName: '', email: '', phone: '', role: 'Caretaking', message: '' }

function Volunteer() {
  const [form, setForm] = useState(INITIAL)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (field) => (e) => {
    setForm({ ...form, [field]: e.target.value })
    if (errors[field]) setErrors({ ...errors, [field]: undefined })
  }

  const validate = () => {
    const errs = {}
    if (!form.firstName.trim()) errs.firstName = 'Required'
    if (!form.lastName.trim()) errs.lastName = 'Required'
    if (!form.email.trim()) errs.email = 'Required'
    else if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = 'Enter a valid email'
    if (!form.phone.trim()) errs.phone = 'Required'
    return errs
  }

  // ✅ Fixed: was type="button" — now a proper form with submit handler and validation
  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1200)
  }

  return (
    <main className="">
      {/* Hero Banner */}
      <section className="relative w-full h-[614px] min-h-[500px] flex items-center justify-center overflow-hidden bg-surface-container-high">
        <div className="absolute inset-0 w-full h-full">
          <img
            alt="Young volunteer gently feeding a calm cow at a sunlit gaushala sanctuary"
            className="w-full h-full object-cover opacity-60"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZRF7BQ5cZQFFZG2rTcqukuq5R2-Mt6XHQEQjdMNAC_mQj1zL5vyz_r_cmqfxSJ4CYMlGxfGWsYopTfFJphxIgigYzD4F-duKsEfal2khfV8rEjwZZoItOPzCHuQrD9ljakj1m23Pgqy7q2mU3zR24kkxmJTOUPpIMU0dGZnCYVVym-Z0JyEvNaW1SvwPbhJQLihs6czBIePE_hjmY1nu-SpkBARZIpdwIkS1zAzaCuo1b-CIaqHTmsRfrlr6KZsN9zlEZl18s"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        </div>
        <div className="relative z-10 max-w-container-max mx-auto px-gutter text-center">
          <h1 className="font-h1 text-h1 text-on-surface mb-stack-gap">Be a Part of the Miracle</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            Join our community of dedicated caregivers. Your time and compassion can transform lives.
          </p>
        </div>
      </section>

      {/* Roles Grid */}
      <section className="py-section-py-mobile md:py-section-py-desktop max-w-container-max mx-auto px-gutter">
        <div className="text-center mb-16">
          <h2 className="font-h2 text-h2 text-on-surface mb-4">How You Can Help</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">Discover a role that fits your skills and passion.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {[
            { icon: 'volunteer_activism', title: 'Caretaking', desc: 'Assist with daily feeding, grooming, and maintaining a clean, comfortable environment for our residents.' },
            { icon: 'support_agent', title: 'Admin Support', desc: 'Help organize records, manage donor communications, and keep operations running smoothly from the office.' },
            { icon: 'event_available', title: 'Event Planning', desc: 'Coordinate awareness campaigns, fundraising events, and community outreach programs.' },
          ].map((role) => (
            <div key={role.title} className="bg-surface rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-surface-variant">
              <div className="w-16 h-16 rounded-full bg-primary-container/20 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary-container" style={{ fontSize: 32 }}>{role.icon}</span>
              </div>
              <h3 className="font-h3 text-h3 text-on-surface mb-3">{role.title}</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">{role.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Volunteer Form Section */}
      <section className="py-section-py-mobile md:py-section-py-desktop bg-surface-container-low">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="bg-surface rounded-xl shadow-lg overflow-hidden flex flex-col lg:flex-row">
            <div className="p-8 md:p-12 lg:w-3/5">
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full text-center py-16">
                  <span className="material-symbols-outlined mb-4 text-5xl text-primary-container" style={{ fontVariationSettings: '"FILL" 1' }}>volunteer_activism</span>
                  <h2 className="font-h2 text-h2 text-on-surface mb-3">Application Received!</h2>
                  <p className="font-body-lg text-on-surface-variant mb-6 max-w-sm">
                    Thank you, {form.firstName}! Our volunteer coordinator will reach out to you at <strong>{form.email}</strong> shortly.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm(INITIAL) }}
                    className="inline-flex items-center gap-2 rounded-full border border-outline-variant px-6 py-3 font-label text-label text-on-surface hover:bg-surface-container transition-colors"
                  >
                    Submit another application
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="font-h2 text-h2 text-on-surface mb-2">Join Our Team</h2>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-8">Fill out the form below and our volunteer coordinator will be in touch shortly.</p>
                  <form className="space-y-6" onSubmit={handleSubmit} noValidate>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block font-label text-label text-on-surface mb-2" htmlFor="firstName">First Name *</label>
                        <input
                          className={`w-full bg-surface-container-highest border rounded-DEFAULT px-4 py-3 font-body-md text-on-surface focus:ring-2 focus:ring-primary focus:outline-none transition-shadow ${errors.firstName ? 'border-error' : 'border-transparent'}`}
                          id="firstName"
                          value={form.firstName}
                          onChange={handleChange('firstName')}
                          placeholder="Jane"
                          type="text"
                        />
                        {errors.firstName && <p className="mt-1 text-xs text-error">{errors.firstName}</p>}
                      </div>
                      <div>
                        <label className="block font-label text-label text-on-surface mb-2" htmlFor="lastName">Last Name *</label>
                        <input
                          className={`w-full bg-surface-container-highest border rounded-DEFAULT px-4 py-3 font-body-md text-on-surface focus:ring-2 focus:ring-primary focus:outline-none transition-shadow ${errors.lastName ? 'border-error' : 'border-transparent'}`}
                          id="lastName"
                          value={form.lastName}
                          onChange={handleChange('lastName')}
                          placeholder="Doe"
                          type="text"
                        />
                        {errors.lastName && <p className="mt-1 text-xs text-error">{errors.lastName}</p>}
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block font-label text-label text-on-surface mb-2" htmlFor="email">Email Address *</label>
                        <input
                          className={`w-full bg-surface-container-highest border rounded-DEFAULT px-4 py-3 font-body-md text-on-surface focus:ring-2 focus:ring-primary focus:outline-none transition-shadow ${errors.email ? 'border-error' : 'border-transparent'}`}
                          id="email"
                          value={form.email}
                          onChange={handleChange('email')}
                          placeholder="jane@example.com"
                          type="email"
                        />
                        {errors.email && <p className="mt-1 text-xs text-error">{errors.email}</p>}
                      </div>
                      <div>
                        <label className="block font-label text-label text-on-surface mb-2" htmlFor="phone">Phone Number *</label>
                        <input
                          className={`w-full bg-surface-container-highest border rounded-DEFAULT px-4 py-3 font-body-md text-on-surface focus:ring-2 focus:ring-primary focus:outline-none transition-shadow ${errors.phone ? 'border-error' : 'border-transparent'}`}
                          id="phone"
                          value={form.phone}
                          onChange={handleChange('phone')}
                          placeholder="+91 98765 43210"
                          type="tel"
                        />
                        {errors.phone && <p className="mt-1 text-xs text-error">{errors.phone}</p>}
                      </div>
                    </div>
                    <div>
                      <label className="block font-label text-label text-on-surface mb-2" htmlFor="role">Preferred Role</label>
                      <select
                        className="w-full bg-surface-container-highest border-transparent rounded-DEFAULT px-4 py-3 font-body-md text-on-surface focus:ring-2 focus:ring-primary focus:outline-none transition-shadow"
                        id="role"
                        value={form.role}
                        onChange={handleChange('role')}
                      >
                        <option>Caretaking</option>
                        <option>Admin Support</option>
                        <option>Event Planning</option>
                        <option>General / Wherever needed</option>
                      </select>
                    </div>
                    <div>
                      <label className="block font-label text-label text-on-surface mb-2" htmlFor="message">Why do you want to volunteer?</label>
                      <textarea
                        className="w-full bg-surface-container-highest border-transparent rounded-DEFAULT px-4 py-3 font-body-md text-on-surface focus:ring-2 focus:ring-primary focus:outline-none transition-shadow"
                        id="message"
                        value={form.message}
                        onChange={handleChange('message')}
                        placeholder="Share a brief message..."
                        rows={4}
                      />
                    </div>
                    {/* ✅ Fixed: was type="button" — now type="submit" inside a form with onSubmit */}
                    <button
                      className="w-full md:w-auto bg-primary text-on-primary font-label text-label px-8 py-4 rounded-full shadow-md hover:shadow-xl hover:-translate-y-[2px] transition-all duration-300 disabled:opacity-60"
                      type="submit"
                      disabled={loading}
                    >
                      {loading ? 'Submitting…' : 'Submit Application'}
                    </button>
                  </form>
                </>
              )}
            </div>
            <div className="hidden lg:block lg:w-2/5 relative">
              <img
                alt="Diverse volunteers collaborating in a bright, modern sanctuary office"
                className="absolute inset-0 w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDp58uTDCDNsAxAReoiAhFE83gGp1_MYTJQu7kVo-nQsmHvvPDvmGOoUjSWuuRi1ORmvML71y79FOhc7TQJTbHbpHgf2q4fTzKaruXZSLgFYGDD5b5LCh7vhKohUcWj1X6VixG4pORxZ38-zJWCz3ctVVyTmIUd8yEEi9O52hjZtOpWLbfoGVGv8tm7JMV6MejTnfEe0KQGyKNygc9PJ6fJbURQShenlKonx2H_VvNeaAjKkru-zCFvCcUfp8VW_W2reYbBA_ER"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Banner */}
      <section className="py-section-py-mobile md:py-section-py-desktop max-w-container-max mx-auto px-gutter">
        <div className="bg-primary-container text-on-primary-container rounded-xl p-12 md:p-20 relative overflow-hidden shadow-lg text-center">
          <span className="material-symbols-outlined absolute top-8 left-8 text-primary/20 opacity-50" style={{ fontSize: 120 }}>format_quote</span>
          <div className="relative z-10 max-w-3xl mx-auto">
            <p className="font-h3 text-h3 mb-8 leading-relaxed">
              "Volunteering here has been the most fulfilling experience of my life. The connection you build with these gentle creatures, and the supportive community around you, brings a sense of peace you can't find anywhere else."
            </p>
            <div className="flex flex-col items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-surface-container overflow-hidden mb-4 border-2 border-on-primary-container">
                <img
                  alt="Portrait of volunteer Sarah Jenkins"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBuU7KPJm0zf3nV3WUhLODtJXIolJL6WbeJTpBd-I4A2CmCADDlOEIXqjO1qwtZj8XXRCcyYxcgjk46iASs0YUuPxBaAjRhhxS8-coyjNft5LV26l9g3rKvmSUEs1Y3FezWCFa4D7HfFacwwYJumRsgLwbEHFuf3lfUVUSZCRYzXcy6D6HY5zUTa-IoDs9-1rQAF_YkGIvRJyA7QIOTg2b34xBu6jaKa4S8SgFbUiA65awrw0HbCjlUCu0dML3-bmSb6Pht49FO"
                />
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