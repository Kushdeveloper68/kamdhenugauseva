import React from 'react'

function  Services() {
  return (
    <>
     <div>
  {/* TopNavBar */}

  {/* Main Content Canvas */}
  <main className="pt-24 pb-16">
    {/* Hero Section */}
    <section className="relative max-w-container-max mx-auto px-gutter py-section-py-desktop">
      <div className="relative w-full h-[512px] min-h-[400px] rounded-xl overflow-hidden shadow-lg mb-16">
        <img alt="Gaushala Sanctuary" className="absolute inset-0 w-full h-full object-cover" data-alt="A serene, professional photograph of a well-maintained gaushala (cow sanctuary) bathed in warm, golden hour sunlight. Healthy, contented cows are resting peacefully on clean, natural terrain. The mood is calm, compassionate, and reassuring, with soft organic background tones highlighting the natural beauty of the animals. The lighting creates a high-quality, trustworthy aesthetic suitable for a modern non-profit organization." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3VtRHIDWcodLbu3Jep413_xoGZy9CDZh53zqdsIN9M7-NQ-bYjQTovRIMD6m36Nvj-xoxraYuS3C20KZsl4TfsiVwJAfhKMAuyIItfD3ichli0HYjB528DjTHTPqCvt1BpNGcm4T6j-cvH4qDDFDttv6QAjihL_DbOmGD8mZXPQrDOnB_mMDOdvmQ4mMS0riC72sU0Fd1bJtkTckWo7Z7Ew15n2mzWoTlAheg786l16xxp6DGVe9jvLPKl-tGTFN7GLpjabKk" />
        <div className="absolute inset-0 bg-gradient-to-r from-on-background/80 to-transparent flex items-center p-12">
          <div className="max-w-2xl text-surface">
            <h1 className="font-h1 text-h1 text-on-primary mb-6">Holistic Care for Every Soul</h1>
            <p className="font-body-lg text-body-lg text-surface-container-high opacity-90">Providing
              comprehensive sanctuary, medical treatment, and nutritional support for rescued and elderly
              bovines.</p>
          </div>
        </div>
      </div>
    </section>
    {/* Services Bento Grid */}
    <section className="max-w-container-max mx-auto px-gutter py-12">
      <div className="text-center mb-16">
        <h2 className="font-h2 text-h2 text-on-background mb-4">Our Core Services</h2>
        <div className="w-24 h-1 bg-primary mx-auto rounded-full opacity-50" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Service Card 1 */}
        <div className="bg-surface-container-lowest rounded-xl p-8 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-surface-container-high relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -z-10 transition-transform group-hover:scale-110">
          </div>
          <div className="w-14 h-14 bg-surface-container flex items-center justify-center rounded-lg mb-6 text-primary">
            <span className="material-symbols-outlined text-3xl" data-icon="medical_services">medical_services</span>
          </div>
          <h3 className="font-h3 text-h3 text-on-surface mb-3">24/7 Veterinary Care</h3>
          <p className="font-body-md text-body-md text-on-surface-variant">Round-the-clock medical attention from
            certified veterinarians. We provide emergency surgeries, routine checkups, and specialized
            treatments for injuries and chronic conditions.</p>
        </div>
        {/* Service Card 2 */}
        <div className="bg-surface-container-lowest rounded-xl p-8 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-surface-container-high relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -z-10 transition-transform group-hover:scale-110">
          </div>
          <div className="w-14 h-14 bg-surface-container flex items-center justify-center rounded-lg mb-6 text-primary">
            <span className="material-symbols-outlined text-3xl" data-icon="nutrition">nutrition</span>
          </div>
          <h3 className="font-h3 text-h3 text-on-surface mb-3">Nutritious Fodder</h3>
          <p className="font-body-md text-body-md text-on-surface-variant">Customized dietary plans ensuring
            optimal health. We source high-quality organic green fodder, grains, and essential mineral
            supplements tailored to each resident's needs.</p>
        </div>
        {/* Service Card 3 */}
        <div className="bg-surface-container-lowest rounded-xl p-8 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-surface-container-high relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -z-10 transition-transform group-hover:scale-110">
          </div>
          <div className="w-14 h-14 bg-surface-container flex items-center justify-center rounded-lg mb-6 text-primary">
            <span className="material-symbols-outlined text-3xl" data-icon="ambulance">ambulance</span>
          </div>
          <h3 className="font-h3 text-h3 text-on-surface mb-3">Rescue Ambulance</h3>
          <p className="font-body-md text-body-md text-on-surface-variant">Rapid response fleet equipped to safely
            transport injured or abandoned animals from urban and rural areas directly to our medical
            facilities for immediate care.</p>
        </div>
        {/* Service Card 4 */}
        <div className="bg-surface-container-lowest rounded-xl p-8 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-surface-container-high relative overflow-hidden group lg:col-span-2">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -z-10 transition-transform group-hover:scale-110">
          </div>
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="w-14 h-14 bg-surface-container flex-shrink-0 flex items-center justify-center rounded-lg text-primary">
              <span className="material-symbols-outlined text-3xl" data-icon="school">school</span>
            </div>
            <div>
              <h3 className="font-h3 text-h3 text-on-surface mb-3">Goshala Education</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">Community outreach programs
                designed to educate farmers and local communities on humane animal husbandry,
                sustainable practices, and the ethical treatment of aging livestock. We host regular
                workshops and school visits to foster a culture of compassion.</p>
            </div>
          </div>
        </div>
        {/* Service Card 5 */}
        <div className="bg-surface-container-lowest rounded-xl p-8 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-surface-container-high relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -z-10 transition-transform group-hover:scale-110">
          </div>
          <div className="w-14 h-14 bg-surface-container flex items-center justify-center rounded-lg mb-6 text-primary">
            <span className="material-symbols-outlined text-3xl" data-icon="eco">eco</span>
          </div>
          <h3 className="font-h3 text-h3 text-on-surface mb-3">Bio-Gas &amp; Farming</h3>
          <p className="font-body-md text-body-md text-on-surface-variant">Sustainable waste management converting
            cow dung into clean bio-gas energy and premium organic fertilizers to support local eco-friendly
            agriculture initiatives.</p>
        </div>
      </div>
    </section>
    {/* Workflow Section */}
    <section className="bg-surface-container-low py-20 mt-12 border-y border-outline-variant/30">
      <div className="max-w-container-max mx-auto px-gutter">
        <div className="text-center mb-16">
          <h2 className="font-h2 text-h2 text-on-background mb-4">Our Rescue Workflow</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">A structured approach
            to ensure every animal receives timely and effective care.</p>
        </div>
        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-1 bg-surface-container-highest -z-0">
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-24 h-24 mx-auto bg-surface-container-lowest border-4 border-surface-container-low shadow-md rounded-full flex items-center justify-center mb-6 relative">
                <div className="absolute inset-0 rounded-full border-2 border-primary/20 m-1" />
                <span className="material-symbols-outlined text-4xl text-primary" data-icon="call_alert">mobile_alert</span>
              </div>
              <h3 className="font-h3 text-h3 text-on-surface mb-2">1. Report</h3>
              <p className="font-body-md text-body-md text-on-surface-variant px-4">Community members alert
                our helpline regarding animals in distress.</p>
            </div>
            {/* Step 2 */}
            <div className="text-center">
              <div className="w-24 h-24 mx-auto bg-surface-container-lowest border-4 border-surface-container-low shadow-md rounded-full flex items-center justify-center mb-6 relative">
                <div className="absolute inset-0 rounded-full border-2 border-primary/20 m-1" />
                <span className="material-symbols-outlined text-4xl text-primary" data-icon="airport_shuttle">airport_shuttle</span>
              </div>
              <h3 className="font-h3 text-h3 text-on-surface mb-2">2. Rescue</h3>
              <p className="font-body-md text-body-md text-on-surface-variant px-4">Our trained ambulance team
                arrives on-site for immediate extraction.</p>
            </div>
            {/* Step 3 */}
            <div className="text-center">
              <div className="w-24 h-24 mx-auto bg-surface-container-lowest border-4 border-surface-container-low shadow-md rounded-full flex items-center justify-center mb-6 relative">
                <div className="absolute inset-0 rounded-full border-2 border-primary/20 m-1" />
                <span className="material-symbols-outlined text-4xl text-primary" data-icon="health_and_safety">health_and_safety</span>
              </div>
              <h3 className="font-h3 text-h3 text-on-surface mb-2">3. Rehab</h3>
              <p className="font-body-md text-body-md text-on-surface-variant px-4">Intensive medical
                treatment, quarantine, and nutritional stabilization.</p>
            </div>
            {/* Step 4 */}
            <div className="text-center">
              <div className="w-24 h-24 mx-auto bg-surface-container-lowest border-4 border-surface-container-low shadow-md rounded-full flex items-center justify-center mb-6 relative">
                <div className="absolute inset-0 rounded-full border-2 border-primary/20 m-1" />
                <span className="material-symbols-outlined text-4xl text-primary" data-icon="grass">grass</span>
              </div>
              <h3 className="font-h3 text-h3 text-on-surface mb-2">4. Sanctuary</h3>
              <p className="font-body-md text-body-md text-on-surface-variant px-4">Integration into the main
                herd for a peaceful, lifelong sanctuary stay.</p>
            </div>
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

export default Services
