import React from 'react'

function SupportUs() {
  return (
   <div>
  {/* TopNavBar */}
 
  <main className="flex-grow">
    {/* Hero Section */}
    <section className="relative w-full h-[614px] min-h-[500px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img alt="Hero Banner Image" className="w-full h-full object-cover" data-alt="A touching, high-quality photograph of a volunteer gently caring for a calm, healthy cow in a clean, natural sanctuary setting. The morning sunlight casts a warm, golden glow across the scene, highlighting the deep emotional connection between the human and the animal. The composition is wide and cinematic, leaving ample breathing room for typography overlays. The overall aesthetic is professional, heartwarming, and aligned with a modern, organic non-profit brand palette featuring soft greens and earth tones." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC16edmWNqVFF1aW3i9Es3ylSaE0zKwi8fDsWZsiSgplHK8S7eOBEZfifmF6s-fRUB3k-gf_bz7bszbaSE_EIglo-VMJKMd7kEthx6XO1lkwFFdjLQgdfPqSNV6qs7MBW2kcAQF1LQLlYHzYTpapVBHmWX_5HnnAA1e12z5z4fP0v2O_DWyBv2GqnRLvOR-VpdLf8gM7uF7-rQNsmTE32UCIgENw4Im0TqvUztl1xUHTqF29ndi8gXFfLSjAG8hxkwqYJ6BKoh2" />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      <div className="relative z-10 max-w-container-max mx-auto px-gutter text-center">
        <h1 className="font-h1 text-h1 text-white mb-6 drop-shadow-lg max-w-4xl mx-auto">Your Small Act, Their New Life</h1>
        <p className="font-body-lg text-body-lg text-white/90 max-w-2xl mx-auto mb-8 drop-shadow-md">Every contribution directly supports the wellbeing, medical care, and lifelong sanctuary of our gentle residents.</p>
        <a className="inline-block bg-[#FFC107] text-[#1B1B1B] font-label text-label px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300" href="#donate-plans">
          Make an Impact Today
        </a>
      </div>
    </section>
    {/* Why Donate (Bento Grid Style) */}
    <section className="py-section-py-mobile md:py-section-py-desktop max-w-container-max mx-auto px-gutter">
      <div className="text-center mb-16">
        <h2 className="font-h2 text-h2 text-on-surface mb-4">Why Your Donation Matters</h2>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">Your support translates directly into tangible care and improved facilities for the cows.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Card 1 */}
        <div className="bg-surface-container-lowest rounded-xl p-8 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-outline-variant/30 flex flex-col items-center text-center group">
          <div className="w-16 h-16 rounded-full bg-primary-container/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <span className="material-symbols-outlined text-primary text-3xl" style={{fontVariationSettings: '"FILL" 1'}}>medical_services</span>
          </div>
          <h3 className="font-h3 text-[20px] text-on-surface mb-3">Medical Aid</h3>
          <p className="font-body-md text-sm text-on-surface-variant">Providing necessary veterinary care, medicines, and emergency treatments.</p>
        </div>
        {/* Card 2 */}
        <div className="bg-surface-container-lowest rounded-xl p-8 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-outline-variant/30 flex flex-col items-center text-center group">
          <div className="w-16 h-16 rounded-full bg-primary-container/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <span className="material-symbols-outlined text-primary text-3xl" style={{fontVariationSettings: '"FILL" 1'}}>nutrition</span>
          </div>
          <h3 className="font-h3 text-[20px] text-on-surface mb-3">Nutritious Fodder</h3>
          <p className="font-body-md text-sm text-on-surface-variant">Ensuring a daily supply of fresh, high-quality grass, grains, and supplements.</p>
        </div>
        {/* Card 3 */}
        <div className="bg-surface-container-lowest rounded-xl p-8 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-outline-variant/30 flex flex-col items-center text-center group">
          <div className="w-16 h-16 rounded-full bg-primary-container/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <span className="material-symbols-outlined text-primary text-3xl" style={{fontVariationSettings: '"FILL" 1'}}>foundation</span>
          </div>
          <h3 className="font-h3 text-[20px] text-on-surface mb-3">Infrastructure</h3>
          <p className="font-body-md text-sm text-on-surface-variant">Building and maintaining safe, clean, and weather-proof shelters.</p>
        </div>
        {/* Card 4 */}
        <div className="bg-surface-container-lowest rounded-xl p-8 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-outline-variant/30 flex flex-col items-center text-center group">
          <div className="w-16 h-16 rounded-full bg-primary-container/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <span className="material-symbols-outlined text-primary text-3xl" style={{fontVariationSettings: '"FILL" 1'}}>favorite</span>
          </div>
          <h3 className="font-h3 text-[20px] text-on-surface mb-3">Lifelong Sanctuary</h3>
          <p className="font-body-md text-sm text-on-surface-variant">Guaranteeing a peaceful, loving home for the entirety of their natural lives.</p>
        </div>
      </div>
    </section>
    {/* Donation Plans */}
    <section className="py-section-py-mobile md:py-section-py-desktop bg-surface-container-low" id="donate-plans">
      <div className="max-w-container-max mx-auto px-gutter">
        <div className="text-center mb-16">
          <h2 className="font-h2 text-h2 text-on-surface mb-4">Choose Your Impact Level</h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">Select a monthly contribution plan that aligns with your capacity to give.</p>
        </div>
        <div className="flex flex-col lg:flex-row gap-8 items-center justify-center">
          {/* Starter Plan */}
          <div className="w-full lg:w-1/3 max-w-md bg-surface-container-lowest rounded-2xl p-8 shadow-md border border-outline-variant/20 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col">
            <h3 className="font-h3 text-h3 text-on-surface mb-2">Starter</h3>
            <div className="flex items-baseline mb-6">
              <span className="text-3xl font-bold text-primary mr-1">₹</span>
              <span className="text-5xl font-extrabold text-on-surface">100</span>
              <span className="text-on-surface-variant ml-2">/ month</span>
            </div>
            <ul className="space-y-4 mb-8 flex-grow">
              <li className="flex items-start">
                <span className="material-symbols-outlined text-secondary mr-2 text-xl">check_circle</span>
                <span className="font-body-md text-sm text-on-surface-variant">Provides basic daily fodder for one cow.</span>
              </li>
              <li className="flex items-start">
                <span className="material-symbols-outlined text-secondary mr-2 text-xl">check_circle</span>
                <span className="font-body-md text-sm text-on-surface-variant">Quarterly newsletter updates.</span>
              </li>
            </ul>
            <button className="w-full bg-primary text-white font-label text-label py-3 rounded-lg shadow-sm hover:shadow-md hover:bg-primary-container transition-all duration-300">Select Starter</button>
          </div>
          {/* Impact Plan (Highlighted) */}
          <div className="w-full lg:w-1/3 max-w-md bg-surface-container-lowest rounded-2xl p-8 shadow-xl border-2 border-[#FFC107] hover:-translate-y-2 transition-all duration-300 flex flex-col relative transform lg:scale-105 z-10">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#FFC107] text-[#1B1B1B] font-label text-xs uppercase tracking-wider px-4 py-1 rounded-full shadow-sm">
              Most Popular
            </div>
            <h3 className="font-h3 text-h3 text-on-surface mb-2">Impact</h3>
            <div className="flex items-baseline mb-6">
              <span className="text-3xl font-bold text-primary mr-1">₹</span>
              <span className="text-5xl font-extrabold text-on-surface">500</span>
              <span className="text-on-surface-variant ml-2">/ month</span>
            </div>
            <ul className="space-y-4 mb-8 flex-grow">
              <li className="flex items-start">
                <span className="material-symbols-outlined text-secondary mr-2 text-xl">check_circle</span>
                <span className="font-body-md text-sm text-on-surface-variant">Covers complete nutrition and routine health checkups for one cow.</span>
              </li>
              <li className="flex items-start">
                <span className="material-symbols-outlined text-secondary mr-2 text-xl">check_circle</span>
                <span className="font-body-md text-sm text-on-surface-variant">Monthly video updates from the shelter.</span>
              </li>
              <li className="flex items-start">
                <span className="material-symbols-outlined text-secondary mr-2 text-xl">check_circle</span>
                <span className="font-body-md text-sm text-on-surface-variant">Digital Certificate of Sponsorship.</span>
              </li>
            </ul>
            <button className="w-full bg-[#FFC107] text-[#1B1B1B] font-label text-label py-4 rounded-lg shadow-md hover:shadow-lg hover:brightness-105 transition-all duration-300 text-lg">Select Impact</button>
          </div>
          {/* Sustain Plan */}
          <div className="w-full lg:w-1/3 max-w-md bg-surface-container-lowest rounded-2xl p-8 shadow-md border border-outline-variant/20 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col">
            <h3 className="font-h3 text-h3 text-on-surface mb-2">Sustain</h3>
            <div className="flex items-baseline mb-6">
              <span className="text-3xl font-bold text-primary mr-1">₹</span>
              <span className="text-5xl font-extrabold text-on-surface">1000</span>
              <span className="text-on-surface-variant ml-2">/ month</span>
            </div>
            <ul className="space-y-4 mb-8 flex-grow">
              <li className="flex items-start">
                <span className="material-symbols-outlined text-secondary mr-2 text-xl">check_circle</span>
                <span className="font-body-md text-sm text-on-surface-variant">Supports full care plus critical medical interventions and infrastructure.</span>
              </li>
              <li className="flex items-start">
                <span className="material-symbols-outlined text-secondary mr-2 text-xl">check_circle</span>
                <span className="font-body-md text-sm text-on-surface-variant">Personalized annual report of your impact.</span>
              </li>
              <li className="flex items-start">
                <span className="material-symbols-outlined text-secondary mr-2 text-xl">check_circle</span>
                <span className="font-body-md text-sm text-on-surface-variant">Open invitation for guided shelter tours.</span>
              </li>
            </ul>
            <button className="w-full bg-primary text-white font-label text-label py-3 rounded-lg shadow-sm hover:shadow-md hover:bg-primary-container transition-all duration-300">Select Sustain</button>
          </div>
        </div>
      </div>
    </section>
    {/* Payment Section & Transparency */}
    <section className="py-section-py-mobile md:py-section-py-desktop max-w-container-max mx-auto px-gutter">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Payment Methods Card */}
        <div className="lg:w-2/3 bg-surface-container-lowest rounded-2xl shadow-lg border border-outline-variant/20 overflow-hidden">
          <div className="bg-surface-container-low p-6 border-b border-outline-variant/20">
            <h3 className="font-h3 text-[22px] text-on-surface flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">account_balance_wallet</span>
              Direct Transfer Details
            </h3>
          </div>
          <div className="p-8 flex flex-col md:flex-row gap-8">
            {/* QR Code Placeholder */}
            <div className="w-full md:w-1/3 flex flex-col items-center justify-center border-r-0 md:border-r border-outline-variant/30 pr-0 md:pr-8">
              <div className="w-48 h-48 bg-surface-container rounded-xl border-2 border-dashed border-outline-variant flex items-center justify-center mb-4 relative overflow-hidden group">
                <span className="material-symbols-outlined text-5xl text-outline-variant group-hover:scale-110 transition-transform">qr_code_2</span>
                {/* Decorative corner markers for QR feel */}
                <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-primary" />
                <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-primary" />
                <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-primary" />
                <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-primary" />
              </div>
              <p className="font-label text-sm text-on-surface-variant text-center">Scan to Pay via any UPI App</p>
            </div>
            {/* Bank Details */}
            <div className="w-full md:w-2/3 space-y-6">
              <div>
                <p className="font-label text-xs text-outline uppercase tracking-wider mb-1">UPI ID</p>
                <div className="bg-surface-container p-3 rounded-lg flex justify-between items-center group cursor-pointer hover:bg-surface-container-high transition-colors">
                  <span className="font-body-md text-on-surface font-medium">kaamdenu.donate@okbank</span>
                  <span className="material-symbols-outlined text-outline group-hover:text-primary text-sm">content_copy</span>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <p className="font-label text-xs text-outline uppercase tracking-wider mb-1">Bank Name</p>
                  <p className="font-body-md text-on-surface">State Bank of India</p>
                </div>
                <div>
                  <p className="font-label text-xs text-outline uppercase tracking-wider mb-1">Account Name</p>
                  <p className="font-body-md text-on-surface">Kaam Denu Gaushala Trust</p>
                </div>
                <div>
                  <p className="font-label text-xs text-outline uppercase tracking-wider mb-1">Account Number</p>
                  <div className="flex justify-between items-center group cursor-pointer">
                    <p className="font-body-md text-on-surface font-mono">3123 4567 8901</p>
                    <span className="material-symbols-outlined text-outline group-hover:text-primary text-sm ml-2">content_copy</span>
                  </div>
                </div>
                <div>
                  <p className="font-label text-xs text-outline uppercase tracking-wider mb-1">IFSC Code</p>
                  <div className="flex justify-between items-center group cursor-pointer">
                    <p className="font-body-md text-on-surface font-mono">SBIN0001234</p>
                    <span className="material-symbols-outlined text-outline group-hover:text-primary text-sm ml-2">content_copy</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Transparency Note */}
        <div className="lg:w-1/3 flex flex-col justify-center">
          <div className="bg-surface-container-low rounded-2xl p-8 border border-primary/20 relative overflow-hidden">
            {/* Decorative background element */}
            <div className="absolute -right-8 -top-8 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
            <div className="flex items-center gap-3 mb-4 relative z-10">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary" style={{fontVariationSettings: '"FILL" 1'}}>verified_user</span>
              </div>
              <h3 className="font-h3 text-xl text-on-surface">Our Promise to You</h3>
            </div>
            <p className="font-body-md text-on-surface-variant mb-6 relative z-10">We believe in complete transparency. Every rupee you donate is meticulously tracked and allocated to ensure maximum impact.</p>
            <div className="space-y-4 relative z-10">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-label text-on-surface">Direct Animal Care</span>
                  <span className="font-label text-primary">85%</span>
                </div>
                <div className="w-full bg-surface-container-high rounded-full h-2">
                  <div className="bg-secondary h-2 rounded-full" style={{width: '85%'}} />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-label text-on-surface">Facility Maintenance</span>
                  <span className="font-label text-primary">10%</span>
                </div>
                <div className="w-full bg-surface-container-high rounded-full h-2">
                  <div className="bg-secondary-fixed-dim h-2 rounded-full" style={{width: '10%'}} />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-label text-on-surface">Administrative</span>
                  <span className="font-label text-primary">5%</span>
                </div>
                <div className="w-full bg-surface-container-high rounded-full h-2">
                  <div className="bg-outline-variant h-2 rounded-full" style={{width: '5%'}} />
                </div>
              </div>
            </div>
            <p className="font-body-md text-xs text-outline mt-6 italic relative z-10">* Annual audit reports are available upon request for sustained donors.</p>
          </div>
        </div>
      </div>
    </section>
  </main>
  {/* Footer */}
  
</div>

  )
}

export default SupportUs