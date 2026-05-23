import React from 'react'

function Emergency() {
  return (
 <div>
  {/* TopNavBar */}
 
  {/* Emergency Strip */}
  <div className="bg-error w-full text-on-error py-3 px-4 text-center font-label text-label font-bold flex items-center justify-center gap-2 shadow-md relative z-40">
    <span className="material-symbols-outlined" style={{fontVariationSettings: '"FILL" 1'}}>warning</span>
    EMERGENCY HELPLINE: +91 98765 43210 - Call for Immediate Rescue
  </div>
  {/* Main Content */}
  <main className="flex-grow w-full max-w-container-max mx-auto px-gutter py-section-py-mobile md:py-section-py-desktop">
    <div className="mb-12 text-center md:text-left">
      <h1 className="font-h1 text-h1 text-primary mb-4">Report an Emergency</h1>
      <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">If you spot a cow in distress, injured, or abandoned, please notify us immediately. Every second counts in saving a life.</p>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
      {/* Steps Section (Left) */}
      <div className="lg:col-span-5 flex flex-col gap-8">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center font-h3 text-h3 font-bold shadow-md">
            1
          </div>
          <div>
            <h3 className="font-h3 text-h3 text-on-surface mb-2">Report</h3>
            <p className="text-on-surface-variant">Call our emergency helpline immediately or fill out the form with accurate details and photos to help us prepare.</p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center font-h3 text-h3 font-bold shadow-md">
            2
          </div>
          <div>
            <h3 className="font-h3 text-h3 text-on-surface mb-2">Secure</h3>
            <p className="text-on-surface-variant">If safe to do so, try to keep the animal away from traffic or further danger. Do not force them to move if they are severely injured.</p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-surface-variant text-on-surface flex items-center justify-center font-h3 text-h3 font-bold shadow-md">
            3
          </div>
          <div>
            <h3 className="font-h3 text-h3 text-on-surface mb-2">Stay with them</h3>
            <p className="text-on-surface-variant">Wait near the animal until our rescue team arrives. Your presence can help keep them calm and guide our team directly to the location.</p>
          </div>
        </div>
        <div className="mt-8 p-6 bg-error-container text-on-error-container rounded-xl shadow-sm border border-red-200">
          <h4 className="font-label text-label font-bold mb-2 flex items-center gap-2">
            <span className="material-symbols-outlined">info</span>
            Important Notice
          </h4>
          <p className="text-sm">Please only use this form for immediate emergencies. For general inquiries or non-urgent matters, please use our contact page.</p>
        </div>
      </div>
      {/* Form Section (Right) */}
      <div className="lg:col-span-7">
        <div className="bg-surface-container-lowest rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 p-8 border border-outline-variant">
          <form className="flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="font-label text-label text-on-surface" htmlFor="name">Your Name</label>
                <input className="w-full rounded-lg border-outline-variant bg-surface-container-low focus:border-primary focus:ring-primary focus:ring-1 transition-colors" id="name" placeholder="Full Name" type="text" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-label text-label text-on-surface" htmlFor="phone">Phone Number *</label>
                <input className="w-full rounded-lg border-outline-variant bg-surface-container-low focus:border-primary focus:ring-primary focus:ring-1 transition-colors" id="phone" placeholder="+91 00000 00000" required type="tel" />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-label text-label text-on-surface" htmlFor="location">Emergency Location *</label>
              <div className="flex gap-2">
                <input className="flex-grow rounded-lg border-outline-variant bg-surface-container-low focus:border-primary focus:ring-primary focus:ring-1 transition-colors" id="location" placeholder="Address or specific landmarks" required type="text" />
                <button className="flex-shrink-0 bg-surface-variant text-on-surface px-4 py-2 rounded-lg font-label text-label hover:bg-surface-dim transition-colors flex items-center gap-2 border border-outline-variant" type="button">
                  <span className="material-symbols-outlined text-sm">my_location</span>
                  <span className="hidden sm:inline">Detect Location</span>
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-label text-label text-on-surface" htmlFor="details">Situation Details</label>
              <textarea className="w-full rounded-lg border-outline-variant bg-surface-container-low focus:border-primary focus:ring-primary focus:ring-1 transition-colors" id="details" placeholder="Describe the animal's condition and the situation..." rows={3} defaultValue={""} />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-label text-label text-on-surface">Upload Photo (Optional but helpful)</label>
              <div className="border-2 border-dashed border-outline-variant rounded-lg p-6 text-center hover:border-primary hover:bg-surface-container-low transition-colors cursor-pointer bg-surface-container-lowest">
                <span className="material-symbols-outlined text-outline text-3xl mb-2">add_a_photo</span>
                <p className="text-on-surface-variant text-sm">Click to upload or drag and drop<br /><span className="text-xs">PNG, JPG up to 5MB</span></p>
              </div>
            </div>
            <button className="mt-4 bg-primary-container text-on-primary-container w-full py-4 rounded-xl font-label text-label font-bold text-lg shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300" type="submit">
              Submit Emergency Report
            </button>
            <p className="text-center text-sm text-on-surface-variant mt-2">By submitting, you confirm the urgency of this report.</p>
          </form>
        </div>
      </div>
    </div>
  </main>
  {/* Footer */}
 
</div>

  )
}

export default Emergency