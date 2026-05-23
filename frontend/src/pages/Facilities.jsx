const stats = [
  { value: '200+', label: 'Spacious Enclosures', icon: 'fence' },
  { value: '5', label: 'Operation Theatres', icon: 'local_hospital' },
  { value: '100%', label: 'Organic Feed', icon: 'eco' },
  { value: '24/7', label: 'Bio-Gas Energy', icon: 'bolt' },
]

const facilitySections = [
  {
    eyebrow: 'Healthcare',
    title: 'Modern Hospital',
    description:
      'Our on-site medical facility is equipped to handle everything from routine check-ups to complex surgical procedures. With five dedicated operation theatres and intensive care recovery zones, we ensure every resident receives prompt, specialized medical attention.',
    points: [
      '24/7 emergency veterinary care',
      'Advanced diagnostic imaging center',
      'Quarantine and specialized recovery wards',
    ],
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCoT8-nCWiz9M0LVJy6RDWe2KGA-ZKHFtdwcLXmH4RAZvgcVTr50sEUAkVcHClhl4i3mwYJisEhVVSoOJQgEtD1APxo1UAuiiNly87kYvORt1Ec7qd0RSgZd_DJN2A1eGw81_ZwJ9a6JdHkoBw5fsbuUGaWS6HpiXCW_tOM_CwPYjeSIWp4xl53BtTLaHFrSOt4QA73F_ypoLEGGDwbAi40lqFXooj4QIUq6rsOH1phFkvY20tSubC3U0PPh1Y3yg6J6sCl9LCG',
    alt: 'Modern hospital with clean medical equipment and bright natural light',
    icon: 'medical_services',
    reverse: false,
  },
  {
    eyebrow: 'Nutrition',
    title: 'Organic Feed Units',
    description:
      'Nutrition is the foundation of health. We cultivate our own organic fodder across acres of dedicated farmland, ensuring a chemical-free, nutrient-rich diet tailored to the specific needs of different animal groups.',
    points: [
      'Pesticide-free hydroponic grass cultivation',
      'Custom feed formulation and mixing plant',
      'Automated, hygienic distribution systems',
    ],
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAqzgQVQkJ05rEPaFOE5ulqG6TsBBeh8dqvfpg68I6KS0kc_Osm0Mkv6THK5m4xMmXyj9naP7jbEvHAgIWVIXyar5EVibIy5kTkMJT7x6fdsTQbi4h6HEb4Kf3P69bth8QX3ZJzfC9NFiNrtVFANiQtFihSfYNvcOWdYZKHBH03GHan7ApG0kbrSYSrWmBu-7bLfdod5wXxhxlJy5-Z2B2zplzeuEeZbHaX7PtOHcXJk5xljBbMgTEei-R-JbmLmGjRigB0s7qW',
    alt: 'Organic feed cultivation with vibrant green crops and workers tending the fields',
    icon: 'nutrition',
    reverse: true,
  },
  {
    eyebrow: 'Shelter',
    title: 'Sustainable Housing',
    description:
      'Our enclosures are designed to mimic natural habitats while providing safety from the elements. Utilizing sustainable building materials and passive cooling techniques, we ensure maximum comfort year-round.',
    points: [
      'Spacious, free-roaming zones',
      'Temperature-controlled indoor shelters',
      'Soft, non-slip flooring to protect hooves and joints',
    ],
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA0ufPEIkPgNNaj3aaxODxCqMgGiXhzXvy2KvIKtVM8P9p_ld7L1hB982cqOw9cVw2GbAPr3ytBIwsFX8biDNu9hqmGjRzxzTaKJ3JAGBLCUkAxQQEXI7c6NkcTnORcy-t6U5ejz-attIYDQCMp0TTDVOUzyGPEMfHuMShD46WJsxWqTPjlro8K4lmVJfKFpJ_bDMGIqewFWMxD8bkI06W0loj03Dc65WW_ar4ElVlfzKsR4ovaQ3j9__rRsVuRdQogvkXfHErv',
    alt: 'Sustainable animal housing with open, airy enclosures and warm natural light',
    icon: 'home',
    reverse: false,
  },
  {
    eyebrow: 'Energy',
    title: 'Bio-Gas Plant',
    description:
      'We believe in a circular economy. Our state-of-the-art bio-gas plant converts organic waste into clean, renewable energy that powers our facilities, significantly reducing our carbon footprint.',
    points: [
      'Powers 80% of our daily electricity needs',
      'Produces nutrient-rich organic fertilizer as a byproduct',
      'Zero-waste management system',
    ],
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDVVNo8uAG2sn_ipTb4LDE1voHW7brTcgDydLwqYa8jmWXiV65m8vxzKhxrMh_EPIRIBESXP-lPxxdRvxp2FpFMC-q3BTHakg4otcoQr2elsntNO05QGwRH3BwmvOE2WN-4__RtgbYagjGSONacRt0mkpf89xfBSllXo0vD2_3sGtewGmb8DjUREzpDwgFx5Q844vaQBneL-DBoBmeRX0zppUyYKYDXYmSX1FmRILqGzQziYNmkqAHZfbKBJ7MFWZ7axjrL9V0r',
    alt: 'Bio-gas plant with clean infrastructure and renewable energy systems',
    icon: 'recycling',
    reverse: true,
  },
]

function Facilities() {
  return (
    <div className="page-fade-in">
      <header className="relative overflow-hidden bg-surface-container">
        <div className="absolute inset-0">
          <img
            alt="Sanctuary facility"
            className="image-zoom h-full w-full object-cover opacity-60"
            data-alt="A wide panoramic shot of a modern, clean, and spacious animal sanctuary facility."
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMo1PrMkr8OXvAwEteYRU-CM7I9X2IusORt9EjeZhHU6DdyxhXFdLjoVnUbvI77GCBArVMwr8LND_Z7SBROVHx0I2SPGQFKcBeHps_IpIktM4hH3bWGvV12T3C02_hoQKWtMYrnw7LjLgQTaPM8zgKYnWV-TfBQeczrZZnRo3vFrtVqLTZL6JiPO4t4srqPWPidd102Zb3niHmOYkU65fsjaHT6eTOLFYSbQsF3MFovT0_Gf2bUvbu8aQ7TMj9U4srfgaXd2Gj"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary-fixed/40 via-surface-container/50 to-background/95" />
        </div>
        <div className="relative mx-auto flex min-h-[520px] max-w-container-max items-center px-gutter py-section-py-mobile md:py-section-py-desktop">
          <div className="max-w-4xl reveal-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary-fixed-dim/50 bg-primary-fixed-dim/25 px-4 py-2 text-label font-label text-on-primary-fixed backdrop-blur-sm">
              <span className="material-symbols-outlined text-sm">spa</span>
              Our Facilities
            </span>
            <h1 className="mt-6 font-h1 text-h1 text-on-primary-fixed md:max-w-4xl">
              State-of-the-Art Sanctuary
            </h1>
            <p className="mt-6 max-w-2xl font-body-lg text-body-lg text-on-surface-variant">
              Designed with compassion and sustainability at its core, our sanctuary provides the highest standard of care through modern infrastructure and organic practices.
            </p>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-container-max px-gutter py-section-py-mobile md:py-section-py-desktop">
        <section className="mb-24">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {stats.map((item, index) => (
              <article
                key={item.label}
                className="hover-lift reveal-up rounded-2xl border border-surface-variant bg-surface-container-low p-6 text-center shadow-md"
                style={{ animationDelay: `${index * 90}ms` }}
              >
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-container/10 text-primary">
                  <span className="material-symbols-outlined text-[32px]">{item.icon}</span>
                </div>
                <h2 className="font-h2 text-h2 text-on-surface">{item.value}</h2>
                <p className="mt-2 font-label text-label text-on-surface-variant">{item.label}</p>
              </article>
            ))}
          </div>
        </section>

        <div className="space-y-24 md:space-y-32">
          {facilitySections.map((section, index) => (
            <section
              key={section.title}
              className={`grid items-center gap-12 md:grid-cols-2 ${section.reverse ? 'md:[&>*:first-child]:order-2' : ''}`}
            >
              <div className={`${section.reverse ? 'md:order-2' : 'md:order-1'} space-y-6 reveal-up`} style={{ animationDelay: `${index * 120}ms` }}>
                <div className="inline-flex items-center gap-2 rounded-full bg-surface-container-high px-3 py-1 text-label font-label text-primary">
                  <span className="material-symbols-outlined text-sm">{section.icon}</span>
                  <span>{section.eyebrow}</span>
                </div>
                <h2 className="font-h2 text-h2 text-on-surface">{section.title}</h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant">{section.description}</p>
                <ul className="space-y-3 text-body-md font-body-md text-on-surface-variant">
                  {section.points.map(point => (
                    <li key={point} className="flex items-start gap-3">
                      <span className="material-symbols-outlined mt-0.5 text-sm text-primary">check_circle</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={`${section.reverse ? 'md:order-1' : 'md:order-2'} group relative h-[400px] overflow-hidden rounded-3xl shadow-xl hover-lift`}>
                <img
                  alt={section.alt}
                  className="image-zoom h-full w-full object-cover"
                  data-alt={section.alt}
                  src={section.image}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
            </section>
          ))}
        </div>
      </main>
    </div>
  )
}

export default Facilities