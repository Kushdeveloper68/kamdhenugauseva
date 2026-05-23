import React from 'react'

function Gallery() {
  return (
   <div>
  {/* TopNavBar */}
 
  <main className="pt-[104px] min-h-screen">
    {/* Hero Section */}
    <section className="py-section-py-mobile md:py-section-py-desktop px-gutter max-w-container-max mx-auto text-center">
      <h1 className="font-h1 text-h1 text-primary mb-6">Glimpses of Peace</h1>
      <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
        Explore the daily life, compassionate rescues, and moments of joy at Kaam Denu Gaushala. Every image tells a story of care, healing, and hope.
      </p>
    </section>
    {/* Gallery Section */}
    <section className="px-gutter pb-section-py-desktop max-w-container-max mx-auto">
      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        <button className="font-label text-label px-6 py-2 rounded-full border-2 border-primary bg-primary text-on-primary shadow-md hover:shadow-lg transition-all duration-300">
          All
        </button>
        <button className="font-label text-label px-6 py-2 rounded-full border-2 border-outline-variant text-on-surface hover:border-primary hover:text-primary transition-all duration-300">
          Rescues
        </button>
        <button className="font-label text-label px-6 py-2 rounded-full border-2 border-outline-variant text-on-surface hover:border-primary hover:text-primary transition-all duration-300">
          Medical Care
        </button>
        <button className="font-label text-label px-6 py-2 rounded-full border-2 border-outline-variant text-on-surface hover:border-primary hover:text-primary transition-all duration-300">
          Daily Life
        </button>
        <button className="font-label text-label px-6 py-2 rounded-full border-2 border-outline-variant text-on-surface hover:border-primary hover:text-primary transition-all duration-300">
          Events
        </button>
      </div>
      {/* Masonry Grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-stack-gap space-y-stack-gap">
        {/* Image Item 1 */}
        <div className="break-inside-avoid relative group rounded-xl overflow-hidden bg-surface-container shadow-md hover:shadow-xl transition-all duration-300">
          <img alt="Rescued calf resting" className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-105" data-alt="A high-quality, emotionally resonant photograph of a serene rescued calf resting peacefully in a clean, sunlit sanctuary bed of straw. The scene is bathed in warm, soft natural morning lighting that highlights the compassionate care provided by the non-profit organization. The composition follows a professional, modern aesthetic, utilizing organic textures and a calm color palette of soft greens, earthy browns, and warm off-whites. The overall mood is incredibly peaceful, safe, and deeply empathetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCE_iXeAR0W92PCXZn59ylOv_cPIokQM3uhv6odK254M9ENLjcrke79GmZQcaE1WBVpwOCxRdnSYTKc08zRTiUloHIqvQNG59fwWtRkoZ-WE11ivFM632DtrCh7qXH42JEnc0JWsBxnrHob0xUwZ1Wqqj_ykRAlQtmjNnoWlRAFNAaGdI1n-s7v0MjireFMIelrRnbpQ5GH3Y45UsZ8T9XQLoWcZ2kWF034jt1DKma9mfEM5mXVmIWs-srnx9hKcIDLrdqdDPoE" />
        </div>
        {/* Image Item 2 */}
        <div className="break-inside-avoid relative group rounded-xl overflow-hidden bg-surface-container shadow-md hover:shadow-xl transition-all duration-300">
          <img alt="Veterinary care session" className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-105" data-alt="A professional documentary-style photograph showing a dedicated veterinarian carefully examining an adult cow in a modern, well-lit medical enclosure. The lighting is bright yet soft, creating a trustworthy and clean environment indicative of a high-standard non-profit facility. The color palette focuses on crisp whites, reliable veterinary blues, and the natural tones of the animal. The visual mood is focused, gentle, and highly professional, reflecting serious commitment to animal welfare." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlC7HzybF5NBG6W38aQ8ZLKvh-i-02cJhvpSrQgegSLrtVNWt7KDtprBrPxZD98hwcxdO98xkAA5sjy--OcK6kHO7MoSfRTrbWwNbWPsPBlbtJUIsOuJwxBW686fv67n-b8NvoixjNTOMVlfQW1ziWlwXDMkJzbuKzPPQ8b7J3u0uLzSOZzUo4CcMytIHrPD4tj1IdNsA1_TwudvKdtL6VWBsAW7s2bwQGcvptrIykH9Qf9gl8ems5b8x2rgsC11gKKCDzJ9kk" />
        </div>
        {/* Image Item 3 */}
        <div className="break-inside-avoid relative group rounded-xl overflow-hidden bg-surface-container shadow-md hover:shadow-xl transition-all duration-300">
          <img alt="Cows grazing at sunset" className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-105" data-alt="A sweeping, cinematic landscape photograph of a herd of healthy cows grazing peacefully in a lush, green pasture during the golden hour. The sunlight is warm, radiant, and casts long, gentle shadows across the field, perfectly capturing the essence of 'Daily Life' at the sanctuary. The image uses a rich palette of deep greens, golden ambers, and soft blues in the sky. The aesthetic is highly professional, uplifting, and organic, designed to inspire donors and evoke a sense of deep harmony." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIHYc3XxxqQQj3h6G6yeN9yAHYsupEZftXEZMpXwy4YnceCnM7LKUEzD9fBrT-xLhAg04sr53v64aS0mZT_yC21CPApEP1zpYMiav2Q-C-YR8GjBDshvT6klUUU_015zI3xS-9968VK0W1tzwypp2J0GTDdwQ_YetA2IusYZDBACCuauL3FMqNOaTst1MGrNMoOGaA33wr3ZXLcUpAIxzBwDRvsx7QB9UaafLbOhoHAVJiuUVmu5Xm7k82xe8IpLIKFMmX4H5Q" />
        </div>
        {/* Image Item 4 */}
        <div className="break-inside-avoid relative group rounded-xl overflow-hidden bg-surface-container shadow-md hover:shadow-xl transition-all duration-300">
          <img alt="Volunteer feeding a cow" className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-105" data-alt="A heartwarming, close-up photograph of a smiling volunteer gently feeding fresh green fodder to a gentle, elderly cow. The interaction is deeply touching and highlights the emotional connection between humans and animals in a modern non-profit setting. The lighting is soft and diffused, emphasizing the textures of the cow's coat and the volunteer's caring expression. The color palette is earthy and warm, rooted in the sanctuary's brand identity of compassionate care and organic life." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQwM2_dESFbCxWXWsF0xakdewDliMhdbT8rE6nI4eX_nwtG3pWfH2XqBKdzxkV4PjHN5AdF6gR6nrDQYYQ3v93HLUsg8F5jDFxoC3QY6hO0K7_JfsTBgeKEl5fQ3GV7NlfZutMMSyQJR4zFhN8CLwYgUjhnbjxylKPcifLTigmFIGDm2PRgsWQwTeI2NwjJ58U9EgzF5SP12ZvbTtr9-bCcUdED0E9vNCiAnPrujEOSq-AvD6u0YKH0R9eLmtyosqeVlXbhh_j" />
        </div>
        {/* Image Item 5 */}
        <div className="break-inside-avoid relative group rounded-xl overflow-hidden bg-surface-container shadow-md hover:shadow-xl transition-all duration-300">
          <img alt="Sanctuary facilities overview" className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-105" data-alt="An architectural, wide-angle photograph showcasing the clean, modern, and spacious facilities of the animal sanctuary. The structures are built with sustainable materials and blend harmoniously into the natural surroundings. The lighting is bright, clear daylight, projecting a transparent and efficiently managed non-profit operation. The aesthetic is highly organized and professional, utilizing a color palette of crisp structural whites, warm wooden tones, and the vibrant green of the surrounding landscape." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpq_HakZQpAQ_VfcTmt9b5CzRet7rOR7Mu8RyBAa_g8aMNPubtdHmbA5N-KR0ngHD6o0W_EODH4Ouk_DdPc18bQD_oiHDbiS2tyb4fb0NmhxZ1ZvGYzG2ET9dIYxIcoIuwprESTw-TphtcNNPQYqQyb1rJ-DuA8BDydhx0311dMewA-9IeyGYpvo3PgBWza6q-z7_it8mZskOIBmUnYNn6TVdqdaAUyHi205RIUDFTocESG9lvM6dC00JfldlDetIg8tTCCKQN" />
        </div>
        {/* Image Item 6 */}
        <div className="break-inside-avoid relative group rounded-xl overflow-hidden bg-surface-container shadow-md hover:shadow-xl transition-all duration-300">
          <img alt="Community event at gaushala" className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-105" data-alt="A vibrant, candid photograph capturing a community awareness event at the gaushala. Visitors and staff are gathered around in a beautifully arranged outdoor seating area, bathed in dappled sunlight filtering through large trees. The mood is joyful, inclusive, and educational, reflecting a dynamic non-profit brand. The image is rich in color, featuring the soft greens of the foliage contrasting with the warm, welcoming tones of the event setup, maintaining a high-end, organic visual quality." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGOdma6qn3IjR8w5LmCrYk2IXA_esZHOAyHQfe0pCIUMAtNb4WwdGceYwIV74Gr2370DxjTLgRR7rSKONAxDFCLYywKX2KcmUq3a3Sd3xSVavBZ-Ee--Ie9pZF1Em3b26GrdD2bKAk77adF8J5ImpBihD5aNSIcSBfylviUJHHW0c8pktwDivc4LVKIshQhl__qaJ7mbhKzfI9sAFVgK5X0HG00jf5xWHl8_BA8PtU3v3TFLQCrpDe1_DY5zNoxHfRBGTSLJ9W" />
        </div>
      </div>
    </section>
  </main>
  {/* Footer */}
 
</div>

  )
}

export default Gallery