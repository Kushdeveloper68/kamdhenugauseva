import { useState, useRef } from 'react'

const steps = [
  {
    number: '1',
    title: 'Report',
    description: 'Call our emergency helpline immediately or fill out the form with accurate details and photos to help us prepare.',
    badgeClass: 'bg-primary-container text-on-primary',
  },
  {
    number: '2',
    title: 'Secure',
    description: 'If safe to do so, try to keep the animal away from traffic or further danger. Do not force them to move if severely injured.',
    badgeClass: 'bg-secondary-container text-on-secondary-container',
  },
  {
    number: '3',
    title: 'Stay with them',
    description: 'Wait near the animal until our rescue team arrives. Your presence can help keep them calm and guide our team to the exact location.',
    badgeClass: 'bg-surface-variant text-on-surface',
  },
]

function Emergency() {
  const [form, setForm] = useState({ name: '', phone: '', location: '', details: '' })
  const [errors, setErrors] = useState({})
  const [geoLoading, setGeoLoading] = useState(false)
  const [geoError, setGeoError] = useState('')
  const [fileName, setFileName] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const fileInputRef = useRef(null)

  const handleChange = (field) => (e) => {
    setForm({ ...form, [field]: e.target.value })
    if (errors[field]) setErrors({ ...errors, [field]: undefined })
  }

  // ✅ Fixed: Detect Location now calls the Geolocation API
  const handleDetectLocation = () => {
    if (!navigator.geolocation) {
      setGeoError('Geolocation is not supported by your browser.')
      return
    }
    setGeoLoading(true)
    setGeoError('')
    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const { latitude, longitude } = pos.coords
        try {
          // Reverse geocode using a free API
          const res = await fetch(
            `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
          )
          const data  = await res.json()
          const address = data.display_name || `${latitude.toFixed(5)}, ${longitude.toFixed(5)}`
          setForm((prev) => ({ ...prev, location: address }))
        } catch {
          setForm((prev) => ({ ...prev, location: `${latitude.toFixed(5)}, ${longitude.toFixed(5)}` }))
        }
        setGeoLoading(false)
      },
      (err) => {
        setGeoError('Could not get location. Please allow location access and try again.')
        setGeoLoading(false)
      },
      { timeout: 10000 }
    )
  }

  // ✅ Fixed: File input now works — clicking the upload area triggers input
  const handleFileChange = (e) => {
    const file = e.target.files?.[0]
    if (file) setFileName(file.name)
  }

  const validate = () => {
    const errs = {}
    if (!form.phone.trim()) errs.phone = 'Phone number is required.'
    if (!form.location.trim()) errs.location = 'Location is required.'
    return errs
  }

  // ✅ Fixed: form submit now validates and shows confirmation
  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    setSubmitting(true)
    setTimeout(() => {
      setSubmitting(false)
      setSubmitted(true)
    }, 1200)
  }

  if (submitted) {
    return (
      <div className="page-fade-in flex min-h-[70vh] flex-col items-center justify-center px-gutter text-center">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary-container/20 text-primary-container">
          <span className="material-symbols-outlined text-5xl" style={{ fontVariationSettings: '"FILL" 1' }}>check_circle</span>
        </div>
        <h2 className="font-h2 text-h2 text-on-surface mb-4">Report Submitted!</h2>
        <p className="max-w-md font-body-lg text-on-surface-variant mb-2">
          Our rescue team has been alerted. Please stay near the animal and keep your phone on.
        </p>
        <p className="font-label text-primary-container mb-8">Helpline: +91 98765 43210</p>
        <button
          onClick={() => { setSubmitted(false); setForm({ name: '', phone: '', location: '', details: '' }); setFileName('') }}
          className="inline-flex items-center gap-2 rounded-full border border-outline-variant px-6 py-3 font-label text-label text-on-surface hover:bg-surface-container transition-colors"
        >
          <span className="material-symbols-outlined text-sm">add</span>
          Submit another report
        </button>
      </div>
    )
  }

  return (
    <div className="page-fade-in">
      <div className="relative z-40 flex w-full items-center justify-center gap-2 bg-error px-4 py-3 text-center font-label text-label font-bold text-on-error shadow-md">
        <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>warning</span>
        EMERGENCY HELPLINE: +91 98765 43210 — Call for Immediate Rescue
      </div>

      <main className="mx-auto w-full max-w-container-max px-gutter py-section-py-mobile md:py-section-py-desktop">
        <section className="mb-12 overflow-hidden rounded-3xl border border-error/20 bg-surface-container-lowest shadow-lg">
          <div className="relative isolate overflow-hidden px-8 py-16 text-center md:px-12 md:py-20">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(186,26,26,0.16),_transparent_38%),linear-gradient(135deg,_rgba(247,251,240,0.98),_rgba(235,239,229,0.92))]" />
            <div className="relative z-10 mx-auto max-w-3xl space-y-6">
              <div className="reveal-up inline-flex items-center gap-2 rounded-full border border-error/10 bg-error-container/70 px-4 py-2 text-sm font-label text-on-error-container shadow-sm backdrop-blur-md">
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: '"FILL" 1' }}>emergency</span>
                Rapid response route for urgent rescue only
              </div>
              <h1 className="reveal-up font-h1 text-h1 text-primary md:text-7xl">Report an Emergency</h1>
              <p className="reveal-up mx-auto max-w-2xl font-body-lg text-body-lg text-on-surface-variant">
                If you spot a cow in distress, injured, or abandoned, please notify us immediately. Every second counts in saving a life.
              </p>
            </div>
          </div>
        </section>

        <section className="grid gap-12 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5 space-y-5">
            {steps.map((step, index) => (
              <div key={step.title} className="hover-lift flex items-start gap-4 rounded-2xl border border-outline-variant/20 bg-surface p-5 shadow-sm" style={{ animationDelay: `${index * 90}ms` }}>
                <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full shadow-md ${step.badgeClass}`}>
                  <span className="font-h3 text-h3 font-bold">{step.number}</span>
                </div>
                <div>
                  <h3 className="font-h3 text-h3 text-on-surface mb-2">{step.title}</h3>
                  <p className="text-on-surface-variant">{step.description}</p>
                </div>
              </div>
            ))}

            <div className="rounded-2xl border border-error/20 bg-error-container p-6 shadow-sm">
              <h4 className="mb-2 flex items-center gap-2 font-label text-label font-bold text-on-error-container">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>info</span>
                Important Notice
              </h4>
              <p className="text-sm text-on-error-container/90">
                Please only use this form for immediate emergencies. For general inquiries or non-urgent matters, please use our contact page.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="hover-lift rounded-3xl border border-outline-variant/20 bg-surface-container-lowest p-8 shadow-md md:p-10">
              <form className="flex flex-col gap-6" onSubmit={handleSubmit} noValidate>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <label className="font-label text-label text-on-surface" htmlFor="name">Your Name</label>
                    <input
                      className="w-full rounded-xl border border-outline-variant bg-surface-container-low px-4 py-3 shadow-sm transition duration-300 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/15"
                      id="name"
                      value={form.name}
                      onChange={handleChange('name')}
                      placeholder="Full Name"
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-label text-label text-on-surface" htmlFor="phone">Phone Number *</label>
                    <input
                      className={`w-full rounded-xl border bg-surface-container-low px-4 py-3 shadow-sm transition duration-300 focus:outline-none focus:ring-2 focus:ring-primary/15 ${errors.phone ? 'border-error' : 'border-outline-variant focus:border-primary'}`}
                      id="phone"
                      value={form.phone}
                      onChange={handleChange('phone')}
                      placeholder="+91 00000 00000"
                      type="tel"
                    />
                    {errors.phone && <p className="text-xs text-error">{errors.phone}</p>}
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-label text-label text-on-surface" htmlFor="location">Emergency Location *</label>
                  <div className="flex gap-2">
                    <input
                      className={`flex-grow rounded-xl border bg-surface-container-low px-4 py-3 shadow-sm transition duration-300 focus:outline-none focus:ring-2 focus:ring-primary/15 ${errors.location ? 'border-error' : 'border-outline-variant focus:border-primary'}`}
                      id="location"
                      value={form.location}
                      onChange={handleChange('location')}
                      placeholder="Address or specific landmarks"
                      type="text"
                    />
                    {/* ✅ Fixed: Detect Location now calls geolocation API */}
                    <button
                      className="hover-lift flex shrink-0 items-center gap-2 rounded-xl border border-outline-variant bg-surface-variant px-4 py-3 font-label text-label text-on-surface transition-colors duration-300 hover:bg-surface-dim disabled:opacity-60"
                      type="button"
                      onClick={handleDetectLocation}
                      disabled={geoLoading}
                    >
                      {geoLoading ? (
                        <span className="loader-ring !w-4 !h-4 !border-2" />
                      ) : (
                        <span className="material-symbols-outlined text-sm">my_location</span>
                      )}
                      <span className="hidden sm:inline">{geoLoading ? 'Detecting…' : 'Detect'}</span>
                    </button>
                  </div>
                  {geoError && <p className="text-xs text-error">{geoError}</p>}
                  {errors.location && <p className="text-xs text-error">{errors.location}</p>}
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-label text-label text-on-surface" htmlFor="details">Situation Details</label>
                  <textarea
                    className="w-full resize-none rounded-xl border border-outline-variant bg-surface-container-low px-4 py-3 shadow-sm transition duration-300 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/15"
                    id="details"
                    value={form.details}
                    onChange={handleChange('details')}
                    placeholder="Describe the animal's condition and the situation..."
                    rows={4}
                  />
                </div>

                {/* ✅ Fixed: upload area now triggers a real file input */}
                <div className="flex flex-col gap-2">
                  <label className="font-label text-label text-on-surface">Upload Photo (Optional but helpful)</label>
                  <div
                    className="hover-lift cursor-pointer rounded-2xl border-2 border-dashed border-outline-variant bg-surface-container-lowest p-6 text-center transition-colors duration-300 hover:border-primary hover:bg-surface-container-low"
                    onClick={() => fileInputRef.current?.click()}
                  >
                    <span className="material-symbols-outlined mb-2 text-3xl text-outline">add_a_photo</span>
                    <p className="text-sm text-on-surface-variant">
                      {fileName ? (
                        <span className="font-label text-primary-container">{fileName}</span>
                      ) : (
                        <>Click to upload or drag and drop<br /><span className="text-xs">PNG, JPG up to 5MB</span></>
                      )}
                    </p>
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/png,image/jpeg,image/jpg"
                      className="hidden"
                      onChange={handleFileChange}
                    />
                  </div>
                </div>

                <button
                  className="button-shine hover-lift mt-4 w-full rounded-xl bg-primary-container py-4 font-label text-lg font-bold text-on-primary shadow-md disabled:opacity-60"
                  type="submit"
                  disabled={submitting}
                >
                  {submitting ? 'Submitting…' : 'Submit Emergency Report'}
                </button>
                <p className="mt-2 text-center text-sm text-on-surface-variant">
                  By submitting, you confirm the urgency of this report.
                </p>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Emergency