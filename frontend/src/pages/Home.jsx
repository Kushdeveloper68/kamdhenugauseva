import React from 'react'

function Home() {
  return (
    <>
   <div>
  {/* TopNavBar Component */}
 
  {/* Hero Section */}
  <header className="relative min-h-[921px] flex items-center justify-center overflow-hidden">
    {/* Background Image with zoom */}
    <div className="absolute inset-0 z-0">
      <img alt="Hero Cow Rescue" className="w-full h-full object-cover transform scale-105 transition-transform duration-10000 hover:scale-100" data-alt="A compelling, high-quality photograph of a gentle cow resting peacefully in a clean, natural sanctuary setting. The morning sunlight casts a warm, golden glow over the scene, highlighting the soft textures of the cow's coat. The background features lush, organic green fields slightly out of focus to draw attention to the animal. The image is framed to evoke deep compassion and serenity, perfectly aligning with a modern, corporate non-profit aesthetic that values emotional connection and high-end visual storytelling. The lighting is bright and hopeful, maintaining a professional light-mode feel." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwjQg-S8xdkpfP89yyxaC3cNxj6UKVPV2k2fmoCGYdgbNj2rllbT5UCXWxKSFuk0F-gsUf0qwJB7FRS7M1ITyBMkli3C3wly5MeCBbgsA1Yy4j4oNCopNzlJtKgumxluo9BsXFK_W8p1J77rq35LaRL0byqA5WmPIU5xYrxs8zIimB9VHtvk1y6HFtOYndrToY7OgiT6NLKoTr1fuK1_Rt1V6tDXMEY5AgHPx9QcY_WouHF8WTb-iqGI7-TEYpfqsdoFzHpXjQ" />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />
    </div>
    <div className="relative z-10 container mx-auto px-gutter max-w-container-max flex flex-col items-start justify-center h-full text-white">
      <div className="max-w-3xl space-y-stack-gap">
        <h1 className="font-h1 text-h1 text-white mb-6">Giving a Voice to the Voiceless</h1>
        <p className="font-body-lg text-body-lg text-white/90 mb-8 max-w-2xl">
          Join Kaam Denu Gaushala in our mission to rescue, rehabilitate, and provide a sanctuary for cows in
          need.
        </p>
        <div className="flex flex-wrap gap-4">
          <a className="bg-[#FFC107] text-[#1B1B1B] font-label text-label px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 inline-flex items-center" href="#">
            Donate Now
            <span className="material-symbols-outlined ml-2 text-sm" data-icon="favorite">favorite</span>
          </a>
          <a className="bg-transparent border-2 border-white text-white font-label text-label px-8 py-4 rounded-full hover:bg-white/10 transition-all duration-300 inline-flex items-center" href="#">
            Emergency Help
            <span className="material-symbols-outlined ml-2 text-sm" data-icon="support_agent">support_agent</span>
          </a>
        </div>
      </div>
    </div>
  </header>
  {/* Impact Stats Section */}
  <section className="py-section-py-mobile md:py-section-py-desktop bg-surface-container-low relative z-20 -mt-10 rounded-t-3xl shadow-lg">
    <div className="container mx-auto px-gutter max-w-container-max">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Stat 1 */}
        <div className="bg-surface rounded-xl p-8 shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 text-center border border-outline-variant/30">
          <div className="text-4xl font-bold text-primary-container mb-2 font-['Work_Sans']">5000+</div>
          <div className="font-label text-on-surface-variant">Cows Rescued</div>
        </div>
        {/* Stat 2 */}
        <div className="bg-surface rounded-xl p-8 shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 text-center border border-outline-variant/30">
          <div className="text-4xl font-bold text-primary-container mb-2 font-['Work_Sans']">24/7</div>
          <div className="font-label text-on-surface-variant">Medical Care</div>
        </div>
        {/* Stat 3 */}
        <div className="bg-surface rounded-xl p-8 shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 text-center border border-outline-variant/30">
          <div className="text-4xl font-bold text-primary-container mb-2 font-['Work_Sans']">50+</div>
          <div className="font-label text-on-surface-variant">Dedicated Workers</div>
        </div>
        {/* Stat 4 */}
        <div className="bg-surface rounded-xl p-8 shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 text-center border border-outline-variant/30">
          <div className="text-4xl font-bold text-primary-container mb-2 font-['Work_Sans']">100%</div>
          <div className="font-label text-on-surface-variant">Transparent</div>
        </div>
      </div>
    </div>
  </section>
  {/* About Preview Section */}
  <section className="py-section-py-mobile md:py-section-py-desktop bg-background">
    <div className="container mx-auto px-gutter max-w-container-max">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="relative group">
          <div className="absolute inset-0 bg-primary-container/10 rounded-xl transform translate-x-4 translate-y-4 -z-10 transition-transform duration-300 group-hover:translate-x-6 group-hover:translate-y-6">
          </div>
          <img alt="Gaushala Sanctuary" className="w-full h-[500px] object-cover rounded-xl shadow-lg" data-alt="A wide, sweeping photograph of a pristine animal sanctuary nestled in a lush green valley. The facility features modern, clean barns with open-air designs to ensure ventilation and sunlight. In the foreground, healthy cows graze peacefully on vibrant green grass. The lighting is crisp, bright, and optimistic, capturing a beautiful spring day with clear blue skies. The image composition is balanced and professional, perfectly suited for a high-end corporate non-profit website that emphasizes organic care and professional management." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2RYJdONIJrNQW1AvvUbFguF4zplSthaseZcyWowHuCuu3bxmGNcdAC5A-ZDJ0urHJSTrLezjeBDKN0p63ywBpXnSLWx28Hg5mayIYI-1ri51mIDqcrCkAQ01RwpM08cQE_E-hslLHXjHwnnEPnz-yiLiyLan-8Zu2NiHPNTTfkhmU2iWoX46gxuLtli_vfK4POqea8jxprrmRA3dBbhhl1ODm1NoXzhJRX1KVbMhuJxpuOrxTj7RlLVCDdOrgqVvLQ9Wl-o41" />
        </div>
        <div className="space-y-6">
          <h2 className="font-h2 text-h2 text-on-background">Our Sacred Mission</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
            At Kaam Denu Gaushala, we believe every life is sacred. Our sanctuary provides a permanent,
            loving home for cows that have been abandoned, injured, or rescued from harsh conditions. We
            combine traditional reverence with modern veterinary science to ensure the highest standard of
            care. Our mission extends beyond shelter; we are dedicated to fostering a community that
            respects and protects these gentle creatures through sustainable practices and compassionate
            action.
          </p>
          <div className="pt-4">
            <a className="bg-primary-container text-on-primary font-label text-label px-8 py-3 rounded-full shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 inline-flex items-center" href="#">
              Read More
              <span className="material-symbols-outlined ml-2 text-sm" data-icon="arrow_forward">arrow_forward</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Services Preview Section */}
  <section className="py-section-py-mobile md:py-section-py-desktop bg-surface-container-low">
    <div className="container mx-auto px-gutter max-w-container-max">
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <h2 className="font-h2 text-h2 text-on-background mb-4">How We Serve</h2>
        <p className="font-body-md text-on-surface-variant">Comprehensive care models designed for holistic
          well-being and sustainability.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Service 1 */}
        <div className="bg-surface rounded-xl p-8 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-outline-variant/20 flex flex-col items-center text-center group">
          <div className="w-16 h-16 rounded-full bg-primary-container/10 flex items-center justify-center mb-6 text-primary-container group-hover:bg-primary-container group-hover:text-white transition-colors duration-300">
            <span className="material-symbols-outlined text-3xl" data-icon="medical_services">medical_services</span>
          </div>
          <h3 className="font-h3 text-h3 text-on-background mb-3">Medical Care</h3>
          <p className="font-body-md text-on-surface-variant line-clamp-2">State-of-the-art veterinary facilities
            providing 24/7 care for injured and sick animals.</p>
        </div>
        {/* Service 2 */}
        <div className="bg-surface rounded-xl p-8 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-outline-variant/20 flex flex-col items-center text-center group">
          <div className="w-16 h-16 rounded-full bg-primary-container/10 flex items-center justify-center mb-6 text-primary-container group-hover:bg-primary-container group-hover:text-white transition-colors duration-300">
            <span className="material-symbols-outlined text-3xl" data-icon="agriculture">agriculture</span>
          </div>
          <h3 className="font-h3 text-h3 text-on-background mb-3">Organic Farming</h3>
          <p className="font-body-md text-on-surface-variant line-clamp-2">Sustainable agricultural practices
            utilizing natural resources to support the sanctuary.</p>
        </div>
        {/* Service 3 */}
        <div className="bg-surface rounded-xl p-8 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-outline-variant/20 flex flex-col items-center text-center group">
          <div className="w-16 h-16 rounded-full bg-primary-container/10 flex items-center justify-center mb-6 text-primary-container group-hover:bg-primary-container group-hover:text-white transition-colors duration-300">
            <span className="material-symbols-outlined text-3xl" data-icon="local_shipping">local_shipping</span>
          </div>
          <h3 className="font-h3 text-h3 text-on-background mb-3">Rescue Operations</h3>
          <p className="font-body-md text-on-surface-variant line-clamp-2">Active mobile teams ready to respond to
            emergency rescue calls across the region.</p>
        </div>
        {/* Service 4 */}
        <div className="bg-surface rounded-xl p-8 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-outline-variant/20 flex flex-col items-center text-center group">
          <div className="w-16 h-16 rounded-full bg-primary-container/10 flex items-center justify-center mb-6 text-primary-container group-hover:bg-primary-container group-hover:text-white transition-colors duration-300">
            <span className="material-symbols-outlined text-3xl" data-icon="groups">groups</span>
          </div>
          <h3 className="font-h3 text-h3 text-on-background mb-3">Community Awareness</h3>
          <p className="font-body-md text-on-surface-variant line-clamp-2">Educational programs fostering
            compassion and understanding for animal welfare.</p>
        </div>
      </div>
    </div>
  </section>
  {/* Rescue Story Section */}
  <section className="py-section-py-mobile md:py-section-py-desktop bg-background">
    <div className="container mx-auto px-gutter max-w-container-max">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1 space-y-6">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-tertiary-container/10 text-tertiary font-label text-sm mb-2">
            <span className="material-symbols-outlined text-sm mr-1" data-icon="auto_stories">auto_stories</span>
            Rescue Story
          </div>
          <h2 className="font-h2 text-h2 text-on-background">Meet Nandini: A Journey from Neglect to Love</h2>
          <p className="font-body-lg text-on-surface-variant leading-relaxed">
            When Nandini arrived at our gates, she was severely malnourished and struggling to stand. Found
            abandoned on a busy highway, her spirit was broken. Our dedicated medical team worked around the
            clock, providing intense nutritional therapy and wound care.
          </p>
          <p className="font-body-lg text-on-surface-variant leading-relaxed mb-6">
            Today, months later, Nandini is unrecognizable. She is the playful matriarch of her herd, her
            coat shines with health, and her gentle eyes reflect the security of her new forever home. Her
            transformation is a testament to what compassion and professional care can achieve.
          </p>
          <a className="inline-flex items-center text-primary-container font-label hover:text-primary transition-colors" href="#">
            View more stories
            <span className="material-symbols-outlined ml-1" data-icon="arrow_forward">arrow_forward</span>
          </a>
        </div>
        <div className="order-1 lg:order-2 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative rounded-xl overflow-hidden shadow-md h-[300px]">
            <img alt="Nandini Before" className="w-full h-full object-cover grayscale-[50%]" data-alt="A poignant photograph showing a rescued cow in a clinical setting upon arrival at the sanctuary. The lighting is slightly subdued, emphasizing the serious nature of the initial rescue. The cow appears tired but is being gently tended to by a veterinary professional wearing clean scrubs. The setting is clean, sterile, and focused on medical care, communicating trust and professionalism. The overall mood is solemn but hopeful, laying the foundation for a transformation story in a high-end corporate non-profit context." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOBB_hs-HDSBrJPxJQTfE1GXA0ZhqlbbN9c4NzEC__-szxTxmbYAbBLdNY0BmGw64btHZWUWBYfMhBT8Obfrchim_KOTPp1uC5npLGTAMsq4zI5Gmf5_-WUWxoT8y_XT8tCL9gqige7dRMjJ5dHpo0vmJ1GrxgJt2GCjIOobUOY9FvdlKZVdf0pS2NN2uuokPcU2QULAG2VKmj9EiEtmPKdF2PNm8SQ9G__cqLman76TbQrpEXWMnCgLWvJcuTYqTiSHtXXrDc" />
            <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-label">
              Arrival - Day 1</div>
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-lg h-[300px] md:mt-8">
            <img alt="Nandini After" className="w-full h-full object-cover" data-alt="A vibrant, joyful photograph of a healthy, robust cow standing proudly in a sunlit green meadow. The cow's coat is shiny and well-groomed, and her posture is relaxed and confident. The lighting is bright and warm, creating a pristine light-mode aesthetic. The background is softly blurred lush vegetation, keeping the focus entirely on the animal's successful rehabilitation. The image radiates warmth, success, and high-quality care, perfectly suited to inspire donors." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDONAfneBRtmYlue8vZfYF5uzVvxaPlLGc2IyMXTf0ytP5Nq32jxveWNMqXc8lvDRVM7E3Sbj8zR1fAhp11C43egtHS4V6pa-pcybnAWzkuKjBkzDnAnIPNQBTNop8GQkGnuNoWXDQZ1u4t_KBUQwFol-w4spjhlt0tkqJERqFsW8rEESJsOKCe3Gfd6VRn_Y-Wb6z8ZfDWJCjMzPREfsji5_1KAybR3R6iYFzCdQbZpEOxmC4LqzNK43A9JpfOisvFt-q-Yvm-" />
            <div className="absolute bottom-4 left-4 bg-primary-container text-white px-3 py-1 rounded-full text-xs font-label">
              Today - Thriving</div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Donation Banner */}
  <section className="py-20 bg-primary-container relative overflow-hidden">
    {/* Abstract pattern overlay */}
    <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px'}}>
    </div>
    <div className="container mx-auto px-gutter max-w-container-max relative z-10 text-center">
      <h2 className="font-h2 text-h2 text-white mb-6">Support our Noble Cause</h2>
      <p className="font-body-lg text-white/90 max-w-2xl mx-auto mb-10">
        Your contribution directly funds medical supplies, high-quality fodder, and the expansion of our rescue
        operations. Every donation saves a life.
      </p>
      <a className="bg-[#FFC107] text-[#1B1B1B] font-label text-lg px-10 py-4 rounded-full shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 inline-flex items-center" href="#">
        Donate Now
        <span className="material-symbols-outlined ml-2" data-icon="volunteer_activism">volunteer_activism</span>
      </a>
    </div>
  </section>
  {/* Footer Component */}
  
</div>

    </>
  )
}

export default Home