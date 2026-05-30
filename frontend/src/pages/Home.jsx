import { Link } from 'react-router-dom'

const stats = [
  { value: '5000+', label: 'Cows Rescued' },
  { value: '24/7', label: 'Medical Care' },
  { value: '50+', label: 'Dedicated Workers' },
  { value: '100%', label: 'Transparent' },
]

const services = [
  {
    icon: 'medical_services',
    title: 'Medical Care',
    description: 'State-of-the-art veterinary facilities providing 24/7 care for injured and sick animals.',
  },
  {
    icon: 'agriculture',
    title: 'Organic Farming',
    description: 'Sustainable agricultural practices utilizing natural resources to support the sanctuary.',
  },
  {
    icon: 'local_shipping',
    title: 'Rescue Operations',
    description: 'Active mobile teams ready to respond to emergency rescue calls across the region.',
  },
  {
    icon: 'groups',
    title: 'Community Awareness',
    description: 'Educational programs fostering compassion and understanding for animal welfare.',
  },
]

const imageCards = [
  {
    alt: 'Nandini Before',
    label: 'Arrival - Day 1',
    className: 'grayscale-[45%]',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDOBB_hs-HDSBrJPxJQTfE1GXA0ZhqlbbN9c4NzEC__-szxTxmbYAbBLdNY0BmGw64btHZWUWBYfMhBT8Obfrchim_KOTPp1uC5npLGTAMsq4zI5Gmf5_-WUWxoT8y_XT8tCL9gqige7dRMjJ5dHpo0vmJ1GrxgJt2GCjIOobUOY9FvdlKZVdf0pS2NN2uuokPcU2QULAG2VKmj9EiEtmPKdF2PNm8SQ9G__cqLman76TbQrpEXWMnCgLWvJcuTYqTiSHtXXrDc',
  },
  {
    alt: 'Nandini After',
    label: 'Today - Thriving',
    className: '',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDONAfneBRtmYlue8vZfYF5uzVvxaPlLGc2IyMXTf0ytP5Nq32jxveWNMqXc8lvDRVM7E3Sbj8zR1fAhp11C43egtHS4V6pa-pcybnAWzkuKjBkzDnAnIPNQBTNop8GQkGnuNoWXDQZ1u4t_KBUQwFol-w4spjhlt0tkqJERqFsW8rEESJsOKCe3Gfd6VRn_Y-Wb6z8ZfDWJCjMzPREfsji5_1KAybR3R6iYFzCdQbZpEOxmC4LqzNK43A9JpfOisvFt-q-Yvm-',
  },
]

function Home() {
  return (
    <div className="page-fade-in">
      <section className="relative flex min-h-[92vh] items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            alt="A gentle cow resting peacefully in a clean, natural sanctuary setting"
            className="image-zoom h-full w-full scale-105 object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwjQg-S8xdkpfP89yyxaC3cNxj6UKVPV2k2fmoCGYdgbNj2rllbT5UCXWxKSFuk0F-gsUf0qwJB7FRS7M1ITyBMkli3C3wly5MeCBbgsA1Yy4j4oNCopNzlJtKgumxluo9BsXFK_W8p1J77rq35LaRL0byqA5WmPIU5xYrxs8zIimB9VHtvk1y6HFtOYndrToY7OgiT6NLKoTr1fuK1_Rt1V6tDXMEY5AgHPx9QcY_WouHF8WTb-iqGI7-TEYpfqsdoFzHpXjQ"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/25" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.16),_transparent_40%)]" />
        </div>

        <div className="relative z-10 container mx-auto max-w-container-max px-gutter py-20 text-white">
          <div className="max-w-3xl space-y-6">
            <div className="reveal-up inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm backdrop-blur-md" style={{ animationDelay: '60ms' }}>
              <span className="material-symbols-outlined text-sm">pets</span>
              Compassionate rescue. Modern care. Trusted sanctuary.
            </div>
            <h1 className="reveal-up font-h1 text-5xl text-white md:text-7xl" style={{ animationDelay: '140ms' }}>
              Giving a Voice to the Voiceless
            </h1>
            <p className="reveal-up max-w-2xl font-body-lg text-white/90" style={{ animationDelay: '220ms' }}>
              Join Kaam Denu Gaushala in our mission to rescue, rehabilitate, and provide a sanctuary for cows in need.
            </p>
            <div className="reveal-up flex flex-wrap gap-4" style={{ animationDelay: '300ms' }}>
              {/* ✅ Fixed: was href="#donate" — now a proper Link to the Donation page */}
              <Link
                to="/donation"
                className="button-shine hover-lift inline-flex items-center rounded-full bg-[#FFC107] px-8 py-4 font-label text-label text-[#1B1B1B] shadow-lg hover:shadow-2xl"
              >
                Donate Now
                <span className="material-symbols-outlined ml-2 text-sm">favorite</span>
              </Link>
              {/* ✅ Fixed: was href="#emergency" — now a Link to the Emergency page */}
              <Link
                to="/emergency"
                className="button-shine hover-lift inline-flex items-center rounded-full border border-white/70 bg-white/5 px-8 py-4 font-label text-label text-white backdrop-blur-sm hover:bg-white/15"
              >
                Emergency Help
                <span className="material-symbols-outlined ml-2 text-sm">support_agent</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-20 -mt-12 rounded-t-[2rem] bg-surface-container-low py-section-py-mobile shadow-[0_-20px_60px_rgba(0,0,0,0.08)] md:py-section-py-desktop">
        <div className="container mx-auto max-w-container-max px-gutter">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="hover-lift rounded-2xl border border-outline-variant/30 bg-surface p-8 text-center shadow-md"
                style={{ animationDelay: `${index * 90}ms` }}
              >
                <div className="mb-2 text-4xl font-bold text-primary-container font-['Work_Sans']">{stat.value}</div>
                <div className="font-label text-on-surface-variant">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ Fixed: added id="learn-more" so the "Read More" anchor works */}
      <section id="learn-more" className="bg-background py-section-py-mobile md:py-section-py-desktop">
        <div className="container mx-auto max-w-container-max px-gutter">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="group relative">
              <div className="absolute inset-0 -z-10 translate-x-4 translate-y-4 rounded-3xl bg-primary-container/10 transition-transform duration-300 group-hover:translate-x-6 group-hover:translate-y-6" />
              <img
                alt="A pristine animal sanctuary nestled in a lush green valley"
                className="image-zoom h-[500px] w-full rounded-3xl object-cover shadow-lg"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2RYJdONIJrNQW1AvvUbFguF4zplSthaseZcyWowHuCuu3bxmGNcdAC5A-ZDJ0urHJSTrLezjeBDKN0p63ywBpXnSLWx28Hg5mayIYI-1ri51mIDqcrCkAQ01RwpM08cQE_E-hslLHXjHwnnEPnz-yiLiyLan-8Zu2NiHPNTTfkhmU2iWoX46gxuLtli_vfK4POqea8jxprrmRA3dBbhhl1ODm1NoXzhJRX1KVbMhuJxpuOrxTj7RlLVCDdOrgqVvLQ9Wl-o41"
              />
            </div>

            <div className="space-y-6">
              <div className="reveal-up inline-flex items-center rounded-full bg-primary-container/10 px-4 py-2 text-sm font-label text-primary-container">
                <span className="material-symbols-outlined mr-2 text-sm">volunteer_activism</span>
                Our Sacred Mission
              </div>
              <h2 className="font-h2 text-h2 text-on-background">Permanent care, not temporary relief.</h2>
              <p className="font-body-lg leading-relaxed text-on-surface-variant">
                At Kaam Denu Gaushala, we believe every life is sacred. Our sanctuary provides a permanent, loving home for cows that have been abandoned, injured, or rescued from harsh conditions. We combine traditional reverence with modern veterinary science to ensure the highest standard of care.
              </p>
              <div className="pt-2">
                {/* ✅ Fixed: was href="#learn-more" pointing nowhere, now links to /about */}
                <Link
                  to="/about"
                  className="button-shine hover-lift inline-flex items-center rounded-full bg-primary-container px-8 py-3 font-label text-label text-on-primary shadow-md hover:shadow-xl"
                >
                  Read More
                  <span className="material-symbols-outlined ml-2 text-sm">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface-container-low py-section-py-mobile md:py-section-py-desktop">
        <div className="container mx-auto max-w-container-max px-gutter">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="font-h2 text-h2 text-on-background mb-4">How We Serve</h2>
            <p className="font-body-md text-on-surface-variant">
              Comprehensive care models designed for holistic well-being and sustainability.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <article
                key={service.title}
                className="hover-lift group rounded-3xl border border-outline-variant/20 bg-surface p-8 text-center shadow-md"
                style={{ animationDelay: `${index * 90}ms` }}
              >
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary-container/10 text-primary-container transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-primary-container group-hover:text-white">
                  <span className="material-symbols-outlined text-3xl">{service.icon}</span>
                </div>
                <h3 className="font-h3 text-h3 text-on-background mb-3">{service.title}</h3>
                <p className="font-body-md text-on-surface-variant">{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-section-py-mobile md:py-section-py-desktop">
        <div className="container mx-auto max-w-container-max px-gutter">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div className="order-2 space-y-6 lg:order-1">
              <div className="reveal-up inline-flex items-center rounded-full bg-tertiary-container/10 px-4 py-2 text-sm font-label text-tertiary">
                <span className="material-symbols-outlined mr-2 text-sm">auto_stories</span>
                Rescue Story
              </div>
              <h2 className="font-h2 text-h2 text-on-background">Meet Nandini: a journey from neglect to love</h2>
              <p className="font-body-lg leading-relaxed text-on-surface-variant">
                When Nandini arrived at our gates, she was severely malnourished and struggling to stand. Found abandoned on a busy highway, her spirit was broken. Our dedicated medical team worked around the clock, providing intense nutritional therapy and wound care.
              </p>
              <p className="font-body-lg leading-relaxed text-on-surface-variant">
                Today, months later, Nandini is unrecognizable. She is the playful matriarch of her herd, her coat shines with health, and her gentle eyes reflect the security of her new forever home.
              </p>
              {/* ✅ Fixed: was href="#stories" — now links to gallery */}
              <Link to="/gallery" className="inline-flex items-center font-label text-primary-container transition-colors duration-300 hover:text-primary">
                View more stories
                <span className="material-symbols-outlined ml-1">arrow_forward</span>
              </Link>
            </div>

            <div className="order-1 grid gap-4 md:grid-cols-2 lg:order-2">
              {imageCards.map((card, index) => (
                <div
                  key={card.alt}
                  className={`relative h-[300px] overflow-hidden rounded-3xl shadow-lg ${index === 1 ? 'md:mt-8' : ''}`}
                >
                  <img
                    alt={card.alt}
                    className={`image-zoom h-full w-full object-cover ${card.className}`}
                    src={card.src}
                  />
                  <div className={`absolute bottom-4 left-4 rounded-full px-3 py-1 text-xs font-label text-white backdrop-blur-sm ${index === 1 ? 'bg-primary-container' : 'bg-black/60'}`}>
                    {card.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="donate" className="relative overflow-hidden bg-primary-container py-20">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
        <div className="container relative z-10 mx-auto max-w-container-max px-gutter text-center text-white">
          <h2 className="font-h2 text-h2 mb-6 text-white">Support our Noble Cause</h2>
          <p className="mx-auto mb-10 max-w-2xl font-body-lg text-white/90">
            Your contribution directly funds medical supplies, high-quality fodder, and the expansion of our rescue operations. Every donation saves a life.
          </p>
          {/* ✅ Fixed: was href="#contact" — now proper Link to /donation */}
          <Link
            to="/donation"
            className="button-shine hover-lift inline-flex items-center rounded-full bg-[#FFC107] px-10 py-4 font-label text-lg text-[#1B1B1B] shadow-lg hover:shadow-2xl"
          >
            Donate Now
            <span className="material-symbols-outlined ml-2">volunteer_activism</span>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home