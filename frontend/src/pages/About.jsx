const principles = [
  {
    icon: 'favorite',
    title: 'Mission',
    items: [
      'Provide immediate medical aid and sanctuary to distressed bovines.',
      'Ensure a lifelong, dignified, and pain-free existence for every resident.',
      'Foster community awareness regarding animal welfare.',
    ],
  },
  {
    icon: 'visibility',
    title: 'Vision',
    items: [
      'A society where stray cattle are no longer neglected or abused.',
      'To be a model sanctuary demonstrating sustainable, ethical care.',
      'Inspiring a global movement of compassion towards all beings.',
    ],
  },
  {
    icon: 'handshake',
    title: 'Values',
    items: [
      'Compassion First: Empathy drives every decision we make.',
      'Transparency: Accountability to our donors and supporters.',
      'Professionalism: Expert veterinary and management practices.',
    ],
  },
]

const milestones = [
  {
    year: '2010',
    title: 'Founded',
    description: 'Started in a small shelter with the first 5 rescued calves, laying the foundation of our mission.',
    align: 'left',
  },
  {
    year: '2015',
    title: 'First Hospital',
    description: 'Inaugurated a fully equipped on-site veterinary hospital to provide critical care and surgeries.',
    align: 'right',
  },
  {
    year: '2023',
    title: 'Global Outreach',
    description: 'Expanded our educational programs internationally, promoting ethical treatment and sustainability.',
    align: 'left',
  },
]

function About() {
  return (
    <div className="page-fade-in">
      <section className="relative isolate flex min-h-[520px] items-center justify-center overflow-hidden bg-background">
        <div className="absolute inset-0">
          <img
            alt="Hero Background"
            className="image-zoom h-full w-full scale-105 object-cover"
            data-alt="A serene, wide-angle landscape photograph of a lush green sanctuary pasture at dawn, bathed in soft, warm golden-hour sunlight. Gentle rolling hills recede into the distance, with a few well-cared-for cows grazing peacefully in the middle ground. The lighting is bright and inviting, creating a modern, hopeful, and pure aesthetic that aligns with a professional non-profit organization. The color palette features rich earthy greens, soft whites, and warm amber tones, establishing a calm and compassionate mood."
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCp89ON0UHH1uWKo5fycgt5h-d-TdvcPPVG8wA_o6Ajn0LzUXz4EICrbmbeHCihWAj03PATNuAJxIkHtTZBVccfQtyV7X8ywmR_0mpx-U2qs_MrT7JaSa5SOnq0IfUJ_d_VVi0OI36HQomDMwVJQ0dc7MA3RZDWPK9ZCK7XTzSf9tGmVN6wKG_IJwvULZxoTnreytUw0vKbLTznghOsTmKMX6J4JlJ4p_RSFCrrQdxnSIPaNJBkFLC7QDGFElBqBgjs5v-keotJ"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/20" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.18),_transparent_36%)]" />
        </div>

        <div className="relative z-10 w-full px-8 py-20 text-center text-white">
          <div className="mx-auto max-w-4xl space-y-6">
            <div className="reveal-up inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm backdrop-blur-md" style={{ animationDelay: '60ms' }}>
              <span className="material-symbols-outlined text-sm" data-icon="eco">
                eco
              </span>
              A sanctuary built on care, dignity, and trust
            </div>
            <h1 className="reveal-up font-h1 text-5xl text-white md:text-7xl" style={{ animationDelay: '140ms' }}>
              Our Legacy of Compassion
            </h1>
            <p className="reveal-up mx-auto max-w-2xl font-body-lg text-white/90" style={{ animationDelay: '220ms' }}>
              Kaam Denu Gaushala exists to rescue, rehabilitate, and protect every life that arrives at our gates.
            </p>
          </div>
        </div>
      </section>

      <section className="py-section-py-mobile md:py-section-py-desktop">
        <div className="container mx-auto max-w-container-max px-gutter">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <p className="font-body-lg leading-relaxed text-on-surface-variant">
              Kaam Denu Gaushala began with a simple belief: every life is sacred and deserving of care. For over a decade, we have dedicated ourselves to rescuing, rehabilitating, and providing a lifelong sanctuary for stray, abandoned, and injured cows.
            </p>
          </div>

          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="group relative">
              <div className="absolute inset-0 -z-10 translate-x-4 translate-y-4 rounded-3xl bg-primary-container/10 transition-transform duration-300 group-hover:translate-x-6 group-hover:translate-y-6" />
              <img
                alt="Caring hands"
                className="image-zoom h-[420px] w-full rounded-3xl object-cover shadow-lg"
                data-alt="A close-up, highly detailed photograph showing the gentle, caring hands of a sanctuary worker softly resting on the head of a calm white cow. The background is softly blurred, focusing entirely on the emotional connection and texture. The lighting is soft and natural, emphasizing the organic and compassionate nature of the non-profit's work. The palette is dominated by soft whites, warm skin tones, and subtle natural greens, conveying trust and professional care."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEAupslks3rwUVX1KDp0ssvDTXIUVmJf_fOKELe2tNSOOPaYAvtbGXpOORF_4exCIeL2D4C-ignlNlI1Pi9KlugtzqWz42DeHI1qNMNoFEmrkwb8MHrmPOk0U8z_8mvw1RqUVa1IvXhdJPhwZqXZH_sLzBYqYqIlZYmfXd8pDtnJKi63TR_rmL6_8PTpCL_Iu6jZ7K9KGkQ_6e2EpRtaccd3tA7QQJx5D3gTyPcUz9t40yUtpPlZ_3vOiQlqIaeVf-YczZlQ0Q"
              />
            </div>

            <div className="space-y-6">
              <h2 className="font-h2 text-h2 text-on-background">Built from a small shed into a living sanctuary.</h2>
              <p className="font-body-md text-body-md leading-relaxed text-on-surface-variant">
                Our journey started in a small shed with just five rescued calves. Today, our expansive sanctuary spans across acres of lush pasture, equipped with modern veterinary facilities and a dedicated team of caregivers. We blend traditional compassion with professional non-profit management to ensure the highest standard of welfare.
              </p>
              <p className="font-body-md text-body-md leading-relaxed text-on-surface-variant">
                Beyond immediate rescue, we are deeply committed to community education and sustainable practices. The gaushala operates as an ecosystem, where organic farming and renewable energy initiatives support our daily operations, making our mission both compassionate and environmentally responsible.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <a className="button-shine hover-lift inline-flex items-center rounded-full bg-primary-container px-8 py-3 font-label text-label text-on-primary shadow-md hover:shadow-xl" href="#principles">
                  Explore values
                  <span className="material-symbols-outlined ml-2 text-sm" data-icon="arrow_forward">
                    arrow_forward
                  </span>
                </a>
                <a className="button-shine hover-lift inline-flex items-center rounded-full border border-outline-variant/50 bg-surface px-8 py-3 font-label text-label text-on-surface shadow-sm hover:bg-surface-container-low" href="#timeline">
                  Our timeline
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="principles" className="bg-surface-container-low py-section-py-mobile md:py-section-py-desktop">
        <div className="container mx-auto max-w-container-max px-gutter">
          <h2 className="font-h2 text-h2 text-center text-primary-container mb-12">Our Guiding Principles</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {principles.map((principle, index) => (
              <article
                key={principle.title}
                className="hover-lift group rounded-3xl border border-outline-variant/20 bg-surface p-8 shadow-md"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-primary-fixed text-on-primary-fixed transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>
                    {principle.icon}
                  </span>
                </div>
                <h3 className="font-h3 text-h3 text-on-surface mb-4">{principle.title}</h3>
                <ul className="space-y-3 font-body-md text-body-md text-on-surface-variant">
                  {principle.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="material-symbols-outlined mt-1 text-sm text-primary transition-transform duration-300 group-hover:translate-x-0.5">
                        check_circle
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="timeline" className="py-section-py-mobile md:py-section-py-desktop">
        <div className="container mx-auto max-w-container-max px-gutter">
          <h2 className="font-h2 text-h2 text-center text-primary-container mb-16">Our Journey</h2>
          <div className="relative mx-auto max-w-5xl">
            <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-primary-container/40 via-surface-variant to-primary-container/40" />
            <div className="space-y-10">
              {milestones.map((milestone) => (
                <div key={milestone.year} className="relative grid items-center gap-6 md:grid-cols-2">
                  <div className={`${milestone.align === 'left' ? 'md:text-right' : 'md:order-2'} ${milestone.align === 'left' ? 'md:pr-10' : 'md:pl-10'}`}>
                    <div className="hover-lift rounded-2xl border border-outline-variant/20 bg-surface p-6 shadow-md">
                      <h3 className="font-h3 text-h3 text-primary-container">{milestone.title}</h3>
                      <p className="mt-2 font-body-md text-body-md text-on-surface-variant">{milestone.description}</p>
                    </div>
                  </div>

                  <div className="absolute left-1/2 z-10 flex h-14 w-14 -translate-x-1/2 items-center justify-center rounded-full border-4 border-surface bg-primary-container font-label text-label text-on-primary shadow-lg transition-transform duration-300 hover:scale-110">
                    {milestone.year}
                  </div>

                  <div className={`${milestone.align === 'left' ? 'md:order-2' : ''}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface-container-low py-section-py-mobile md:py-section-py-desktop">
        <div className="container mx-auto max-w-5xl px-gutter">
          <div className="hover-lift flex flex-col items-center gap-10 rounded-3xl bg-surface p-8 shadow-md md:flex-row md:p-12">
            <div className="w-full flex-shrink-0 md:w-1/3">
              <img
                alt="Founder Portrait"
                className="image-zoom h-[350px] w-full rounded-3xl object-cover shadow-sm"
                data-alt="A professional yet warm portrait photograph of the organization's founder, an older gentleman with a gentle smile, standing outdoors in front of a soft-focus background of the gaushala. He is dressed in smart-casual, earthy-toned clothing that reflects a trustworthy, grounded nature. The lighting is bright and flattering, utilizing soft natural daylight to highlight a modern, professional non-profit aesthetic. The overall mood is inspiring, sincere, and deeply compassionate."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCuujBoVJRSGKEHpvDhuxN5BuioO4cynYVyJjpUoxuunBpFQRptbZVKp2bOMz6ijl_LxLQvy0VANAGh_p-ZvUJ80nRr88mN0-RzXsejAM_XMOCNTGphWVZeRlopxc5HW9iayfq4Z4MiEe7jZe4rAIYxTG8w3fcsSAJdGJyuh4WaQevcZ7r_MF22yYP3kTTqf9ivjI7r1xHWQ_hD0yPE3qQwouUlLnOMDheWjtqpOwu-dWPQyOPxcnoni5n-fjM0_A0rM32TRZzZ"
              />
            </div>
            <div className="w-full md:w-2/3">
              <span className="material-symbols-outlined mb-4 text-4xl text-primary-container/30" style={{ fontVariationSettings: '"FILL" 1' }}>
                format_quote
              </span>
              <blockquote className="font-h3 text-h3 italic leading-relaxed text-on-surface mb-6">
                "The true measure of a society is found in how it treats its most vulnerable. Our work here is not just about animal rescue; it is about awakening the humanity within ourselves and restoring dignity to the gentle beings who have served us so silently."
              </blockquote>
              <div>
                <p className="font-label text-label text-primary-container">Dr. Ramesh Sharma</p>
                <p className="font-body-md text-sm text-on-surface-variant">Founder &amp; Chief Visionary</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About