import React from 'react'

function Impact() {
  return (
   <div>
  {/* TopNavBar */}
  
  {/* Main Content */}
  <main className="flex-grow">
    {/* Hero Banner */}
    <section className="relative bg-surface-container-low py-section-py-mobile md:py-section-py-desktop overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img alt="Hero Background" className="w-full h-full object-cover opacity-20" data-alt="A beautifully serene and professional photograph of a sunlit, open-air cow shelter (gaushala) taken during early morning golden hour. The composition is expansive, showing clean, well-maintained facilities blending with natural greenery. The warm sunlight casts long, gentle shadows, emphasizing a calm and pure atmosphere. The overall visual style is corporate yet deeply compassionate, featuring soft organic tones, lush greens, and warm ambient light that perfectly aligns with a modern non-profit brand aesthetic focused on animal welfare." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBC9GkS-RpD5iXUcXEsWdcOy5oyVQNwIwPv8L89fC454NI6ryvbq8vTfXjEeBG5b-wRMM18SlWdcv4qMe03hfj3U2mXynbLjYUfQk6GrZ6TxKljYpqZt-qVDHb4oVoNl0u3SjpHtVlKBDlJeCitRkq0wSZ0EKSdx-7-vW9MXJXLHnWar1D9KZw3r8EH1gLvAxUlZr4R1sygPnCqJAvDl1q1-r94VL24zOQQyu8TDwlnToEKN1Qncfp2_bh-ITAyzqA-f8E3Ed3A" />
      </div>
      <div className="relative z-10 max-w-container-max mx-auto px-gutter text-center">
        <h1 className="font-h1 text-h1 text-primary-container mb-6">Measuring Our Compassion</h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
          Transparency and tangible results are at the core of our mission. Explore the data that reflects our
          unwavering commitment to animal welfare and community support.
        </p>
      </div>
    </section>
    {/* Stats Section */}
    <section className="py-section-py-mobile md:py-section-py-desktop max-w-container-max mx-auto px-gutter">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="bg-surface-container-lowest rounded-xl p-8 text-center shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300">
          <span className="material-symbols-outlined text-4xl text-primary-container mb-4" data-weight="fill">favorite</span>
          <div className="font-h2 text-h2 text-primary mb-2">50k+</div>
          <div className="font-label text-label text-on-surface-variant uppercase tracking-wider">Lives Touched
          </div>
        </div>
        <div className="bg-surface-container-lowest rounded-xl p-8 text-center shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300">
          <span className="material-symbols-outlined text-4xl text-primary-container mb-4" data-weight="fill">water_drop</span>
          <div className="font-h2 text-h2 text-primary mb-2">1.2M</div>
          <div className="font-label text-label text-on-surface-variant uppercase tracking-wider">Ltrs Milk
            Distributed</div>
        </div>
        <div className="bg-surface-container-lowest rounded-xl p-8 text-center shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300">
          <span className="material-symbols-outlined text-4xl text-primary-container mb-4" data-weight="fill">medical_services</span>
          <div className="font-h2 text-h2 text-primary mb-2">10k+</div>
          <div className="font-label text-label text-on-surface-variant uppercase tracking-wider">Medical
            Interventions</div>
        </div>
        <div className="bg-surface-container-lowest rounded-xl p-8 text-center shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300">
          <span className="material-symbols-outlined text-4xl text-primary-container mb-4" data-weight="fill">emoji_events</span>
          <div className="font-h2 text-h2 text-primary mb-2">15+</div>
          <div className="font-label text-label text-on-surface-variant uppercase tracking-wider">Awards Received
          </div>
        </div>
      </div>
    </section>
    {/* Graph Area (UI Blocks) */}
    <section className="py-section-py-mobile md:py-section-py-desktop bg-surface-container-low">
      <div className="max-w-container-max mx-auto px-gutter">
        <div className="text-center mb-12">
          <h2 className="font-h2 text-h2 text-on-background mb-4">5-Year Growth Trajectory</h2>
          <p className="font-body-md text-body-md text-on-surface-variant">Visualizing our increasing capacity to
            rescue and sustain.</p>
        </div>
        <div className="bg-surface-container-lowest rounded-xl shadow-md p-8">
          <div className="flex flex-col space-y-6">
            {/* 2019 */}
            <div className="flex items-center">
              <div className="w-16 font-label text-label text-on-surface-variant text-right pr-4">2019</div>
              <div className="flex-grow bg-surface-container rounded-full h-8 overflow-hidden relative">
                <div className="bg-secondary-container h-full absolute left-0 top-0 rounded-full" style={{width: '30%'}} />
                <div className="bg-primary-container h-full absolute left-0 top-0 rounded-full" style={{width: '20%'}} />
              </div>
            </div>
            {/* 2020 */}
            <div className="flex items-center">
              <div className="w-16 font-label text-label text-on-surface-variant text-right pr-4">2020</div>
              <div className="flex-grow bg-surface-container rounded-full h-8 overflow-hidden relative">
                <div className="bg-secondary-container h-full absolute left-0 top-0 rounded-full" style={{width: '45%'}} />
                <div className="bg-primary-container h-full absolute left-0 top-0 rounded-full" style={{width: '35%'}} />
              </div>
            </div>
            {/* 2021 */}
            <div className="flex items-center">
              <div className="w-16 font-label text-label text-on-surface-variant text-right pr-4">2021</div>
              <div className="flex-grow bg-surface-container rounded-full h-8 overflow-hidden relative">
                <div className="bg-secondary-container h-full absolute left-0 top-0 rounded-full" style={{width: '60%'}} />
                <div className="bg-primary-container h-full absolute left-0 top-0 rounded-full" style={{width: '50%'}} />
              </div>
            </div>
            {/* 2022 */}
            <div className="flex items-center">
              <div className="w-16 font-label text-label text-on-surface-variant text-right pr-4">2022</div>
              <div className="flex-grow bg-surface-container rounded-full h-8 overflow-hidden relative">
                <div className="bg-secondary-container h-full absolute left-0 top-0 rounded-full" style={{width: '75%'}} />
                <div className="bg-primary-container h-full absolute left-0 top-0 rounded-full" style={{width: '65%'}} />
              </div>
            </div>
            {/* 2023 */}
            <div className="flex items-center">
              <div className="w-16 font-label text-label text-on-surface-variant text-right pr-4">2023</div>
              <div className="flex-grow bg-surface-container rounded-full h-8 overflow-hidden relative">
                <div className="bg-secondary-container h-full absolute left-0 top-0 rounded-full" style={{width: '90%'}} />
                <div className="bg-primary-container h-full absolute left-0 top-0 rounded-full" style={{width: '85%'}} />
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-8 space-x-8">
            <div className="flex items-center">
              <div className="w-4 h-4 bg-primary-container rounded-full mr-2" />
              <span className="font-label text-label text-on-surface-variant">Rescues</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-secondary-container rounded-full mr-2" />
              <span className="font-label text-label text-on-surface-variant">Distributions</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Case Studies */}
    <section className="py-section-py-mobile md:py-section-py-desktop max-w-container-max mx-auto px-gutter">
      <h2 className="font-h2 text-h2 text-on-background text-center mb-12">Heartbeats Mended</h2>
      <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="h-64 md:h-auto">
            <img alt="Rescue Image" className="w-full h-full object-cover" data-alt="A highly detailed, emotive portrait of a healthy, majestic Indian cow (like a Gir or Sahiwal) standing proudly in a sun-dappled green pasture. The image captures a profound sense of recovery and peace. The lighting is soft and cinematic, utilizing a bright, airy aesthetic typical of high-end corporate non-profit photography. The colors emphasize rich, natural greens and earthy tones, communicating compassion, health, and structured, professional care within a modern sanctuary setting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqSeQgMqwIfhvCVnJDC_ZUOM0OH3hTzxlEWXNkWQo6ZQI_9S2p6XolCsGBZRdiIzMUJwonWiFF7Q0AYbSiOiOy2AcFvSvjKuDVbbuKmRHqnrPKZpb9qeRPqK1Dt6toY0u34WfGdLl4iz3ZVREprVBOMILnLWmkQGka3kse_Kx2OsG0OfogOlATLaJl-AgLH_EW7muG-rurUqZmmeubP2ErlF2Kpozruf1aYv1cttJWLDW4V5TKW_WoKTx8M2ycoeLp7gXxdKlB" />
          </div>
          <div className="p-8 md:p-12 flex flex-col justify-center bg-surface-bright">
            <div className="inline-block px-3 py-1 bg-tertiary-fixed text-on-tertiary-fixed font-label text-label rounded-full w-fit mb-6">
              Success Story</div>
            <h3 className="font-h3 text-h3 text-on-background mb-4">The Recovery of Bharat</h3>
            <p className="font-body-md text-body-md text-on-surface-variant mb-8 leading-relaxed">
              Found critically malnourished and injured near a highway, Bharat's journey seemed bleak.
              Through intensive veterinary care, specialized nutrition, and round-the-clock observation by
              our dedicated team, his transformation over six months has been nothing short of miraculous.
              Today, he leads our senior herd.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="border-l-4 border-primary-container pl-4">
                <div className="font-h3 text-h3 text-primary-container">6 Mos</div>
                <div className="font-label text-label text-on-surface-variant">Recovery Time</div>
              </div>
              <div className="border-l-4 border-secondary-container pl-4">
                <div className="font-h3 text-h3 text-secondary">250kg</div>
                <div className="font-label text-label text-on-surface-variant">Weight Gained</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Awards / Partners */}
    <section className="py-section-py-mobile md:py-section-py-desktop bg-surface-container-low border-t border-outline-variant/30">
      <div className="max-w-container-max mx-auto px-gutter">
        <h3 className="font-h3 text-h3 text-on-background text-center mb-10">Recognized By</h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-300">
          {/* Partner Placeholder Logos */}
          <div className="w-32 h-16 bg-surface-dim rounded flex items-center justify-center font-label text-label text-on-surface-variant">
            Govt Agency</div>
          <div className="w-32 h-16 bg-surface-dim rounded flex items-center justify-center font-label text-label text-on-surface-variant">
            NGO Partner</div>
          <div className="w-32 h-16 bg-surface-dim rounded flex items-center justify-center font-label text-label text-on-surface-variant">
            Vet Assoc</div>
          <div className="w-32 h-16 bg-surface-dim rounded flex items-center justify-center font-label text-label text-on-surface-variant">
            Eco Award</div>
          <div className="w-32 h-16 bg-surface-dim rounded flex items-center justify-center font-label text-label text-on-surface-variant">
            Trust Seal</div>
        </div>
      </div>
    </section>
  </main>
  {/* Footer */}

</div>

  )
}

export default Impact