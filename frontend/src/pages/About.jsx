import React from 'react'

function About() {
  return (
    <>
    <div>
  
  <main className="flex-grow">
    {/* Hero Banner */}
    <section className="relative w-full h-[500px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img alt="Hero Background" className="w-full h-full object-cover" data-alt="A serene, wide-angle landscape photograph of a lush green sanctuary pasture at dawn, bathed in soft, warm golden-hour sunlight. Gentle rolling hills recede into the distance, with a few well-cared-for cows grazing peacefully in the middle ground. The lighting is bright and inviting, creating a modern, hopeful, and pure aesthetic that aligns with a professional non-profit organization. The color palette features rich earthy greens, soft whites, and warm amber tones, establishing a calm and compassionate mood." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCp89ON0UHH1uWKo5fycgt5h-d-TdvcPPVG8wA_o6Ajn0LzUXz4EICrbmbeHCihWAj03PATNuAJxIkHtTZBVccfQtyV7X8ywmR_0mpx-U2qs_MrT7JaSa5SOnq0IfUJ_d_VVi0OI36HQomDMwVJQ0dc7MA3RZDWPK9ZCK7XTzSf9tGmVN6wKG_IJwvULZxoTnreytUw0vKbLTznghOsTmKMX6J4JlJ4p_RSFCrrQdxnSIPaNJBkFLC7QDGFElBqBgjs5v-keotJ" />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      <div className="relative z-10 text-center max-w-4xl px-8">
        <h1 className="font-h1 text-h1 text-white mb-4 drop-shadow-lg">Our Legacy of Compassion</h1>
      </div>
    </section>
    {/* Story Section */}
    <section className="py-section-py-mobile md:py-section-py-desktop px-8 max-w-container-max mx-auto">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
          Kaam Denu Gaushala began with a simple belief: every life is sacred and deserving of care. For over
          a decade, we have dedicated ourselves to rescuing, rehabilitating, and providing a lifelong
          sanctuary for stray, abandoned, and injured cows.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <img alt="Caring hands" className="rounded-xl shadow-md w-full h-[400px] object-cover" data-alt="A close-up, highly detailed photograph showing the gentle, caring hands of a sanctuary worker softly resting on the head of a calm white cow. The background is softly blurred, focusing entirely on the emotional connection and texture. The lighting is soft and natural, emphasizing the organic and compassionate nature of the non-profit's work. The palette is dominated by soft whites, warm skin tones, and subtle natural greens, conveying trust and professional care." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEAupslks3rwUVX1KDp0ssvDTXIUVmJf_fOKELe2tNSOOPaYAvtbGXpOORF_4exCIeL2D4C-ignlNlI1Pi9KlugtzqWz42DeHI1qNMNoFEmrkwb8MHrmPOk0U8z_8mvw1RqUVa1IvXhdJPhwZqXZH_sLzBYqYqIlZYmfXd8pDtnJKi63TR_rmL6_8PTpCL_Iu6jZ7K9KGkQ_6e2EpRtaccd3tA7QQJx5D3gTyPcUz9t40yUtpPlZ_3vOiQlqIaeVf-YczZlQ0Q" />
        </div>
        <div>
          <p className="font-body-md text-body-md text-on-surface-variant mb-6">
            Our journey started in a small shed with just five rescued calves. Today, our expansive
            sanctuary spans across acres of lush pasture, equipped with modern veterinary facilities and a
            dedicated team of caregivers. We blend traditional compassion with professional non-profit
            management to ensure the highest standard of welfare.
          </p>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Beyond immediate rescue, we are deeply committed to community education and sustainable
            practices. The gaushala operates as an eco-system, where organic farming and renewable energy
            initiatives support our daily operations, making our mission both compassionate and
            environmentally responsible.
          </p>
        </div>
      </div>
    </section>
    {/* Mission / Vision / Values */}
    <section className="py-section-py-mobile md:py-section-py-desktop px-8 bg-surface-container-low">
      <div className="max-w-container-max mx-auto">
        <h2 className="font-h2 text-h2 text-center text-primary-container mb-12">Our Guiding Principles</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Mission Card */}
          <div className="bg-surface rounded-xl shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 p-8">
            <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-on-primary-fixed" style={{fontVariationSettings: '"FILL" 1'}}>favorite</span>
            </div>
            <h3 className="font-h3 text-h3 text-on-surface mb-4">Mission</h3>
            <ul className="space-y-3 font-body-md text-body-md text-on-surface-variant">
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-primary text-sm mt-1">check_circle</span>
                Provide immediate medical aid and sanctuary to distressed bovines.
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-primary text-sm mt-1">check_circle</span>
                Ensure a lifelong, dignified, and pain-free existence for every resident.
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-primary text-sm mt-1">check_circle</span>
                Foster community awareness regarding animal welfare.
              </li>
            </ul>
          </div>
          {/* Vision Card */}
          <div className="bg-surface rounded-xl shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 p-8">
            <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-on-primary-fixed" style={{fontVariationSettings: '"FILL" 1'}}>visibility</span>
            </div>
            <h3 className="font-h3 text-h3 text-on-surface mb-4">Vision</h3>
            <ul className="space-y-3 font-body-md text-body-md text-on-surface-variant">
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-primary text-sm mt-1">check_circle</span>
                A society where stray cattle are no longer neglected or abused.
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-primary text-sm mt-1">check_circle</span>
                To be a model sanctuary demonstrating sustainable, ethical care.
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-primary text-sm mt-1">check_circle</span>
                Inspiring a global movement of compassion towards all beings.
              </li>
            </ul>
          </div>
          {/* Values Card */}
          <div className="bg-surface rounded-xl shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 p-8">
            <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-on-primary-fixed" style={{fontVariationSettings: '"FILL" 1'}}>handshake</span>
            </div>
            <h3 className="font-h3 text-h3 text-on-surface mb-4">Values</h3>
            <ul className="space-y-3 font-body-md text-body-md text-on-surface-variant">
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-primary text-sm mt-1">check_circle</span>
                <strong>Compassion First:</strong> Empathy drives every decision we make.
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-primary text-sm mt-1">check_circle</span>
                <strong>Transparency:</strong> Accountability to our donors and supporters.
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-primary text-sm mt-1">check_circle</span>
                <strong>Professionalism:</strong> Expert veterinary and management practices.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    {/* Timeline Section */}
    <section className="py-section-py-mobile md:py-section-py-desktop px-8 max-w-container-max mx-auto">
      <h2 className="font-h2 text-h2 text-center text-primary-container mb-16">Our Journey</h2>
      <div className="relative max-w-4xl mx-auto">
        {/* Center Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-surface-variant" />
        {/* Timeline Items */}
        <div className="space-y-12">
          {/* 2010 */}
          <div className="relative flex items-center justify-between w-full">
            <div className="w-5/12 text-right pr-8">
              <h3 className="font-h3 text-h3 text-primary-container">Founded</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mt-2">Started in a small shelter
                with the first 5 rescued calves, laying the foundation of our mission.</p>
            </div>
            <div className="z-10 w-12 h-12 absolute left-1/2 transform -translate-x-1/2 rounded-full bg-primary-container text-on-primary flex items-center justify-center font-label text-label shadow-md border-4 border-surface">
              2010
            </div>
            <div className="w-5/12 pl-8" />
          </div>
          {/* 2015 */}
          <div className="relative flex items-center justify-between w-full">
            <div className="w-5/12 pr-8" />
            <div className="z-10 w-12 h-12 absolute left-1/2 transform -translate-x-1/2 rounded-full bg-primary-container text-on-primary flex items-center justify-center font-label text-label shadow-md border-4 border-surface">
              2015
            </div>
            <div className="w-5/12 pl-8 text-left">
              <h3 className="font-h3 text-h3 text-primary-container">First Hospital</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mt-2">Inaugurated a fully
                equipped on-site veterinary hospital to provide critical care and surgeries.</p>
            </div>
          </div>
          {/* 2023 */}
          <div className="relative flex items-center justify-between w-full">
            <div className="w-5/12 text-right pr-8">
              <h3 className="font-h3 text-h3 text-primary-container">Global Outreach</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mt-2">Expanded our educational
                programs internationally, promoting ethical treatment and sustainability.</p>
            </div>
            <div className="z-10 w-12 h-12 absolute left-1/2 transform -translate-x-1/2 rounded-full bg-primary-container text-on-primary flex items-center justify-center font-label text-label shadow-md border-4 border-surface">
              2023
            </div>
            <div className="w-5/12 pl-8" />
          </div>
        </div>
      </div>
    </section>
    {/* Founder Message */}
    <section className="py-section-py-mobile md:py-section-py-desktop px-8 bg-surface-container-low">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 bg-surface rounded-xl shadow-md p-8 md:p-12">
        <div className="w-full md:w-1/3 flex-shrink-0">
          <img alt="Founder Portrait" className="rounded-xl w-full h-[350px] object-cover shadow-sm" data-alt="A professional yet warm portrait photograph of the organization's founder, an older gentleman with a gentle smile, standing outdoors in front of a soft-focus background of the gaushala. He is dressed in smart-casual, earthy-toned clothing that reflects a trustworthy, grounded nature. The lighting is bright and flattering, utilizing soft natural daylight to highlight a modern, professional non-profit aesthetic. The overall mood is inspiring, sincere, and deeply compassionate." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCuujBoVJRSGKEHpvDhuxN5BuioO4cynYVyJjpUoxuunBpFQRptbZVKp2bOMz6ijl_LxLQvy0VANAGh_p-ZvUJ80nRr88mN0-RzXsejAM_XMOCNTGphWVZeRlopxc5HW9iayfq4Z4MiEe7jZe4rAIYxTG8w3fcsSAJdGJyuh4WaQevcZ7r_MF22yYP3kTTqf9ivjI7r1xHWQ_hD0yPE3qQwouUlLnOMDheWjtqpOwu-dWPQyOPxcnoni5n-fjM0_A0rM32TRZzZ" />
        </div>
        <div className="w-full md:w-2/3">
          <span className="material-symbols-outlined text-4xl text-primary-container/30 mb-4" style={{fontVariationSettings: '"FILL" 1'}}>format_quote</span>
          <blockquote className="font-h3 text-h3 text-on-surface italic mb-6 leading-relaxed">
            "The true measure of a society is found in how it treats its most vulnerable. Our work here is
            not just about animal rescue; it is about awakening the humanity within ourselves and restoring
            dignity to the gentle beings who have served us so silently."
          </blockquote>
          <div>
            <p className="font-label text-label text-primary-container">Dr. Ramesh Sharma</p>
            <p className="font-body-md text-sm text-on-surface-variant">Founder &amp; Chief Visionary</p>
          </div>
        </div>
      </div>
    </section>
  </main>
  {/* Footer */}
 
</div>

    </>
  )
}

export default About