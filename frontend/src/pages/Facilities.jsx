import React from 'react'

function Facilities() {
  return (
  <div>
  {/* TopNavBar Component */}
  
  {/* Hero Banner */}
  <header className="relative w-full h-[614px] min-h-[500px] flex items-center justify-center bg-surface-container overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img alt="Hero background" className="w-full h-full object-cover opacity-60" data-alt="A wide panoramic shot of a modern, clean, and spacious animal sanctuary facility. Sunlight bathes the large, open-air enclosures in a warm, inviting glow. The architecture blends seamlessly with the natural surroundings, featuring sustainable materials and expansive green pastures. The overall aesthetic is peaceful, professional, and deeply rooted in compassionate care, utilizing a soft color palette of natural greens and earthy tones." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMo1PrMkr8OXvAwEteYRU-CM7I9X2IusORt9EjeZhHU6DdyxhXFdLjoVnUbvI77GCBArVMwr8LND_Z7SBROVHx0I2SPGQFKcBeHps_IpIktM4hH3bWGvV12T3C02_hoQKWtMYrnw7LjLgQTaPM8zgKYnWV-TfBQeczrZZnRo3vFrtVqLTZL6JiPO4t4srqPWPidd102Zb3niHmOYkU65fsjaHT6eTOLFYSbQsF3MFovT0_Gf2bUvbu8aQ7TMj9U4srfgaXd2Gj" />
      <div className="absolute inset-0 bg-gradient-to-b from-primary-fixed/40 to-background/90 mix-blend-multiply" />
    </div>
    <div className="relative z-10 text-center max-w-4xl px-gutter mx-auto">
      <span className="inline-block px-4 py-1.5 mb-6 rounded-full bg-primary-fixed-dim/30 text-on-primary-fixed font-label text-label backdrop-blur-sm border border-primary-fixed-dim/50">
        Our Facilities
      </span>
      <h1 className="font-h1 text-h1 text-on-primary-fixed mb-6">State-of-the-Art Sanctuary</h1>
      <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
        Designed with compassion and sustainability at its core, our sanctuary provides the highest standard of care through modern infrastructure and organic practices.
      </p>
    </div>
  </header>
  <main className="max-w-container-max mx-auto px-gutter py-section-py-mobile md:py-section-py-desktop">
    {/* Detail Grid (Stats) */}
    <section className="mb-24">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="bg-surface-container-low rounded-xl p-8 text-center shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 border border-surface-variant">
          <div className="w-16 h-16 mx-auto bg-primary-container/10 rounded-full flex items-center justify-center mb-4 text-primary">
            <span className="material-symbols-outlined" data-icon="fence" style={{fontSize: 32}}>fence</span>
          </div>
          <h3 className="font-h2 text-h2 text-on-surface mb-2">200+</h3>
          <p className="font-label text-label text-on-surface-variant">Spacious Enclosures</p>
        </div>
        <div className="bg-surface-container-low rounded-xl p-8 text-center shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 border border-surface-variant">
          <div className="w-16 h-16 mx-auto bg-primary-container/10 rounded-full flex items-center justify-center mb-4 text-primary">
            <span className="material-symbols-outlined" data-icon="local_hospital" style={{fontSize: 32}}>local_hospital</span>
          </div>
          <h3 className="font-h2 text-h2 text-on-surface mb-2">5</h3>
          <p className="font-label text-label text-on-surface-variant">Operation Theatres</p>
        </div>
        <div className="bg-surface-container-low rounded-xl p-8 text-center shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 border border-surface-variant">
          <div className="w-16 h-16 mx-auto bg-primary-container/10 rounded-full flex items-center justify-center mb-4 text-primary">
            <span className="material-symbols-outlined" data-icon="eco" style={{fontSize: 32}}>eco</span>
          </div>
          <h3 className="font-h2 text-h2 text-on-surface mb-2">100%</h3>
          <p className="font-label text-label text-on-surface-variant">Organic Feed</p>
        </div>
        <div className="bg-surface-container-low rounded-xl p-8 text-center shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 border border-surface-variant">
          <div className="w-16 h-16 mx-auto bg-primary-container/10 rounded-full flex items-center justify-center mb-4 text-primary">
            <span className="material-symbols-outlined" data-icon="bolt" style={{fontSize: 32}}>bolt</span>
          </div>
          <h3 className="font-h2 text-h2 text-on-surface mb-2">24/7</h3>
          <p className="font-label text-label text-on-surface-variant">Bio-Gas Energy</p>
        </div>
      </div>
    </section>
    {/* Image Sections (Alternating) */}
    <div className="space-y-32">
      {/* Facility 1: Modern Hospital */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1 relative h-[400px] rounded-xl overflow-hidden shadow-md group">
          <img alt="Modern Hospital" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="A brightly lit, modern veterinary hospital interior. The space is immaculately clean with sleek, state-of-the-art medical equipment organized efficiently. Soft, natural light streams in through large windows, creating a calming atmosphere for the animals. The color palette features pristine whites, cool steel, and gentle greens, reflecting a professional yet deeply compassionate environment dedicated to animal healthcare." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCoT8-nCWiz9M0LVJy6RDWe2KGA-ZKHFtdwcLXmH4RAZvgcVTr50sEUAkVcHClhl4i3mwYJisEhVVSoOJQgEtD1APxo1UAuiiNly87kYvORt1Ec7qd0RSgZd_DJN2A1eGw81_ZwJ9a6JdHkoBw5fsbuUGaWS6HpiXCW_tOM_CwPYjeSIWp4xl53BtTLaHFrSOt4QA73F_ypoLEGGDwbAi40lqFXooj4QIUq6rsOH1phFkvY20tSubC3U0PPh1Y3yg6J6sCl9LCG" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <div className="order-1 md:order-2 space-y-6">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-surface-container-high rounded-full text-primary font-label text-label">
            <span className="material-symbols-outlined text-sm" data-icon="medical_services">medical_services</span>
            <span>Healthcare</span>
          </div>
          <h2 className="font-h2 text-h2 text-on-surface">Modern Hospital</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Our on-site medical facility is equipped to handle everything from routine check-ups to complex surgical procedures. With five dedicated operation theatres and intensive care recovery zones, we ensure every resident receives prompt, specialized medical attention.
          </p>
          <ul className="space-y-3 font-body-md text-body-md text-on-surface-variant">
            <li className="flex items-center"><span className="material-symbols-outlined text-primary mr-3 text-sm" data-icon="check_circle">check_circle</span> 24/7 emergency veterinary care</li>
            <li className="flex items-center"><span className="material-symbols-outlined text-primary mr-3 text-sm" data-icon="check_circle">check_circle</span> Advanced diagnostic imaging center</li>
            <li className="flex items-center"><span className="material-symbols-outlined text-primary mr-3 text-sm" data-icon="check_circle">check_circle</span> Quarantine and specialized recovery wards</li>
          </ul>
        </div>
      </section>
      {/* Facility 2: Organic Feed Units */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="order-1 md:order-1 space-y-6">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-surface-container-high rounded-full text-primary font-label text-label">
            <span className="material-symbols-outlined text-sm" data-icon="nutrition">nutrition</span>
            <span>Nutrition</span>
          </div>
          <h2 className="font-h2 text-h2 text-on-surface">Organic Feed Units</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Nutrition is the foundation of health. We cultivate our own organic fodder across acres of dedicated farmland, ensuring a chemical-free, nutrient-rich diet tailored to the specific needs of different animal groups.
          </p>
          <ul className="space-y-3 font-body-md text-body-md text-on-surface-variant">
            <li className="flex items-center"><span className="material-symbols-outlined text-primary mr-3 text-sm" data-icon="check_circle">check_circle</span> Pesticide-free hydroponic grass cultivation</li>
            <li className="flex items-center"><span className="material-symbols-outlined text-primary mr-3 text-sm" data-icon="check_circle">check_circle</span> Custom feed formulation and mixing plant</li>
            <li className="flex items-center"><span className="material-symbols-outlined text-primary mr-3 text-sm" data-icon="check_circle">check_circle</span> Automated, hygienic distribution systems</li>
          </ul>
        </div>
        <div className="order-2 md:order-2 relative h-[400px] rounded-xl overflow-hidden shadow-md group">
          <img alt="Organic Feed Units" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="Lush, vibrant green rows of organic crops growing in a modern agricultural setting. The scene captures the meticulous care of hydroponic grass cultivation, bathed in bright, natural sunlight. Workers in clean attire tend to the fresh fodder. The aesthetic emphasizes purity, sustainability, and vibrant life, using rich shades of green (#2E7D32) and earthy tones to convey health and natural nutrition." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqzgQVQkJ05rEPaFOE5ulqG6TsBBeh8dqvfpg68I6KS0kc_Osm0Mkv6THK5m4xMmXyj9naP7jbEvHAgIWVIXyar5EVibIy5kTkMJT7x6fdsTQbi4h6HEb4Kf3P69bth8QX3ZJzfC9NFiNrtVFANiQtFihSfYNvcOWdYZKHBH03GHan7ApG0kbrSYSrWmBu-7bLfdod5wXxhxlJy5-Z2B2zplzeuEeZbHaX7PtOHcXJk5xljBbMgTEei-R-JbmLmGjRigB0s7qW" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </section>
      {/* Facility 3: Sustainable Housing */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1 relative h-[400px] rounded-xl overflow-hidden shadow-md group">
          <img alt="Sustainable Housing" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="Wide, airy enclosures designed for animal comfort, featuring natural wood and sustainable building materials. Gentle, dappled sunlight filters through shade nets onto soft sand beds where animals are resting peacefully. The environment is impeccably clean, spacious, and seamlessly integrated with the surrounding nature. The warm, inviting lighting and earthy color palette evoke a sense of safety, comfort, and harmonious living." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0ufPEIkPgNNaj3aaxODxCqMgGiXhzXvy2KvIKtVM8P9p_ld7L1hB982cqOw9cVw2GbAPr3ytBIwsFX8biDNu9hqmGjRzxzTaKJ3JAGBLCUkAxQQEXI7c6NkcTnORcy-t6U5ejz-attIYDQCMp0TTDVOUzyGPEMfHuMShD46WJsxWqTPjlro8K4lmVJfKFpJ_bDMGIqewFWMxD8bkI06W0loj03Dc65WW_ar4ElVlfzKsR4ovaQ3j9__rRsVuRdQogvkXfHErv" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <div className="order-1 md:order-2 space-y-6">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-surface-container-high rounded-full text-primary font-label text-label">
            <span className="material-symbols-outlined text-sm" data-icon="home">home</span>
            <span>Shelter</span>
          </div>
          <h2 className="font-h2 text-h2 text-on-surface">Sustainable Housing</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Our enclosures are designed to mimic natural habitats while providing safety from the elements. Utilizing sustainable building materials and passive cooling techniques, we ensure maximum comfort year-round.
          </p>
          <ul className="space-y-3 font-body-md text-body-md text-on-surface-variant">
            <li className="flex items-center"><span className="material-symbols-outlined text-primary mr-3 text-sm" data-icon="check_circle">check_circle</span> Spacious, free-roaming zones</li>
            <li className="flex items-center"><span className="material-symbols-outlined text-primary mr-3 text-sm" data-icon="check_circle">check_circle</span> Temperature-controlled indoor shelters</li>
            <li className="flex items-center"><span className="material-symbols-outlined text-primary mr-3 text-sm" data-icon="check_circle">check_circle</span> Soft, non-slip flooring to protect hooves and joints</li>
          </ul>
        </div>
      </section>
      {/* Facility 4: Bio-Gas Plant */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="order-1 md:order-1 space-y-6">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-surface-container-high rounded-full text-primary font-label text-label">
            <span className="material-symbols-outlined text-sm" data-icon="recycling">recycling</span>
            <span>Energy</span>
          </div>
          <h2 className="font-h2 text-h2 text-on-surface">Bio-Gas Plant</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            We believe in a circular economy. Our state-of-the-art bio-gas plant converts organic waste into clean, renewable energy that powers our facilities, significantly reducing our carbon footprint.
          </p>
          <ul className="space-y-3 font-body-md text-body-md text-on-surface-variant">
            <li className="flex items-center"><span className="material-symbols-outlined text-primary mr-3 text-sm" data-icon="check_circle">check_circle</span> Powers 80% of our daily electricity needs</li>
            <li className="flex items-center"><span className="material-symbols-outlined text-primary mr-3 text-sm" data-icon="check_circle">check_circle</span> Produces nutrient-rich organic fertilizer as a byproduct</li>
            <li className="flex items-center"><span className="material-symbols-outlined text-primary mr-3 text-sm" data-icon="check_circle">check_circle</span> Zero-waste management system</li>
          </ul>
        </div>
        <div className="order-2 md:order-2 relative h-[400px] rounded-xl overflow-hidden shadow-md group">
          <img alt="Bio-Gas Plant" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="A clean, modern industrial bio-gas facility set against a backdrop of clear blue skies and green landscape. Large, sleek cylindrical digesters stand prominent, reflecting a commitment to clean energy and modern engineering. The area is tidy and well-maintained, highlighting technological efficiency in a sustainable, eco-friendly context. The lighting is bright and optimistic, emphasizing the harmony between nature and sustainable technology." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVVNo8uAG2sn_ipTb4LDE1voHW7brTcgDydLwqYa8jmWXiV65m8vxzKhxrMh_EPIRIBESXP-lPxxdRvxp2FpFMC-q3BTHakg4otcoQr2elsntNO05QGwRH3BwmvOE2WN-4__RtgbYagjGSONacRt0mkpf89xfBSllXo0vD2_3sGtewGmb8DjUREzpDwgFx5Q844vaQBneL-DBoBmeRX0zppUyYKYDXYmSX1FmRILqGzQziYNmkqAHZfbKBJ7MFWZ7axjrL9V0r" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </section>
    </div>
  </main>

</div>

  )
}

export default Facilities