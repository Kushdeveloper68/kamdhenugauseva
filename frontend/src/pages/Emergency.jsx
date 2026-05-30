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
    description: 'If safe to do so, try to keep the animal away from traffic or further danger. Do not force them to move if they are severely injured.',
    badgeClass: 'bg-secondary-container text-on-secondary-container',
  },
  {
    number: '3',
    title: 'Stay with them',
    description: 'Wait near the animal until our rescue team arrives. Your presence can help keep them calm and guide our team directly to the location.',
    badgeClass: 'bg-surface-variant text-on-surface',
  },
]

function Emergency() {
  return (
    <div className="page-fade-in">
      <div className="relative z-40 flex w-full items-center justify-center gap-2 bg-error px-4 py-3 text-center font-label text-label font-bold text-on-error shadow-md">
        <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>
          warning
        </span>
        EMERGENCY HELPLINE: +91 98765 43210 - Call for Immediate Rescue
      </div>

      <main className="mx-auto w-full max-w-container-max px-gutter py-section-py-mobile md:py-section-py-desktop">
        <section className="mb-12 overflow-hidden rounded-3xl border border-error/20 bg-surface-container-lowest shadow-lg">
          <div className="relative isolate overflow-hidden px-8 py-16 text-center md:px-12 md:py-20">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(186,26,26,0.16),_transparent_38%),linear-gradient(135deg,_rgba(247,251,240,0.98),_rgba(235,239,229,0.92))]" />
            <div className="absolute inset-0 opacity-40 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.4),transparent)]" />

            <div className="relative z-10 mx-auto max-w-3xl space-y-6">
              <div className="reveal-up inline-flex items-center gap-2 rounded-full border border-error/10 bg-error-container/70 px-4 py-2 text-sm font-label text-on-error-container shadow-sm backdrop-blur-md" style={{ animationDelay: '60ms' }}>
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: '"FILL" 1' }}>
                  emergency
                </span>
                Rapid response route for urgent rescue only
              </div>
              <h1 className="reveal-up font-h1 text-h1 text-primary md:text-7xl" style={{ animationDelay: '140ms' }}>
                Report an Emergency
              </h1>
              <p className="reveal-up mx-auto max-w-2xl font-body-lg text-body-lg text-on-surface-variant" style={{ animationDelay: '220ms' }}>
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
                <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>
                  info
                </span>
                Important Notice
              </h4>
              <p className="text-sm text-on-error-container/90">
                Please only use this form for immediate emergencies. For general inquiries or non-urgent matters, please use our contact page.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="hover-lift rounded-3xl border border-outline-variant/20 bg-surface-container-lowest p-8 shadow-md md:p-10">
              <form className="flex flex-col gap-6">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <label className="font-label text-label text-on-surface" htmlFor="name">
                      Your Name
                    </label>
                    <input className="w-full rounded-xl border border-outline-variant bg-surface-container-low px-4 py-3 shadow-sm transition duration-300 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/15" id="name" placeholder="Full Name" type="text" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-label text-label text-on-surface" htmlFor="phone">
                      Phone Number *
                    </label>
                    <input className="w-full rounded-xl border border-outline-variant bg-surface-container-low px-4 py-3 shadow-sm transition duration-300 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/15" id="phone" placeholder="+91 00000 00000" required type="tel" />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-label text-label text-on-surface" htmlFor="location">
                    Emergency Location *
                  </label>
                  <div className="flex gap-2">
                    <input className="flex-grow rounded-xl border border-outline-variant bg-surface-container-low px-4 py-3 shadow-sm transition duration-300 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/15" id="location" placeholder="Address or specific landmarks" required type="text" />
                    <button className="hover-lift flex shrink-0 items-center gap-2 rounded-xl border border-outline-variant bg-surface-variant px-4 py-3 font-label text-label text-on-surface transition-colors duration-300 hover:bg-surface-dim" type="button">
                      <span className="material-symbols-outlined text-sm">my_location</span>
                      <span className="hidden sm:inline">Detect Location</span>
                    </button>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-label text-label text-on-surface" htmlFor="details">
                    Situation Details
                  </label>
                  <textarea className="w-full resize-none rounded-xl border border-outline-variant bg-surface-container-low px-4 py-3 shadow-sm transition duration-300 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/15" id="details" placeholder="Describe the animal's condition and the situation..." rows={4} defaultValue={''} />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-label text-label text-on-surface">Upload Photo (Optional but helpful)</label>
                  <div className="hover-lift cursor-pointer rounded-2xl border-2 border-dashed border-outline-variant bg-surface-container-lowest p-6 text-center transition-colors duration-300 hover:border-primary hover:bg-surface-container-low">
                    <span className="material-symbols-outlined mb-2 text-3xl text-outline">add_a_photo</span>
                    <p className="text-sm text-on-surface-variant">
                      Click to upload or drag and drop<br />
                      <span className="text-xs">PNG, JPG up to 5MB</span>
                    </p>
                  </div>
                </div>

                <button className="button-shine hover-lift mt-4 w-full rounded-xl bg-primary-container py-4 font-label text-lg font-bold text-on-primary shadow-md" type="submit">
                  Submit Emergency Report
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