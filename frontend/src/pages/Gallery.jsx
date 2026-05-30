import { useState } from 'react'

const allImages = [
  {
    id: 1,
    alt: 'Rescued calf resting peacefully in a clean, sunlit sanctuary',
    category: 'Rescues',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCE_iXeAR0W92PCXZn59ylOv_cPIokQM3uhv6odK254M9ENLjcrke79GmZQcaE1WBVpwOCxRdnSYTKc08zRTiUloHIqvQNG59fwWtRkoZ-WE11ivFM632DtrCh7qXH42JEnc0JWsBxnrHob0xUwZ1Wqqj_ykRAlQtmjNnoWlRAFNAaGdI1n-s7v0MjireFMIelrRnbpQ5GH3Y45UsZ8T9XQLoWcZ2kWF034jt1DKma9mfEM5mXVmIWs-srnx9hKcIDLrdqdDPoE',
  },
  {
    id: 2,
    alt: 'Veterinarian carefully examining an adult cow in a modern enclosure',
    category: 'Medical Care',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAlC7HzybF5NBG6W38aQ8ZLKvh-i-02cJhvpSrQgegSLrtVNWt7KDtprBrPxZD98hwcxdO98xkAA5sjy--OcK6kHO7MoSfRTrbWwNbWPsPBlbtJUIsOuJwxBW686fv67n-b8NvoixjNTOMVlfQW1ziWlwXDMkJzbuKzPPQ8b7J3u0uLzSOZzUo4CcMytIHrPD4tj1IdNsA1_TwudvKdtL6VWBsAW7s2bwQGcvptrIykH9Qf9gl8ems5b8x2rgsC11gKKCDzJ9kk',
  },
  {
    id: 3,
    alt: 'Herd of healthy cows grazing peacefully in a lush green pasture at golden hour',
    category: 'Daily Life',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAIHYc3XxxqQQj3h6G6yeN9yAHYsupEZftXEZMpXwy4YnceCnM7LKUEzD9fBrT-xLhAg04sr53v64aS0mZT_yC21CPApEP1zpYMiav2Q-C-YR8GjBDshvT6klUUU_015zI3xS-9968VK0W1tzwypp2J0GTDdwQ_YetA2IusYZDBACCuauL3FMqNOaTst1MGrNMoOGaA33wr3ZXLcUpAIxzBwDRvsx7QB9UaafLbOhoHAVJiuUVmu5Xm7k82xe8IpLIKFMmX4H5Q',
  },
  {
    id: 4,
    alt: 'Smiling volunteer gently feeding fresh green fodder to an elderly cow',
    category: 'Daily Life',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBQwM2_dESFbCxWXWsF0xakdewDliMhdbT8rE6nI4eX_nwtG3pWfH2XqBKdzxkV4PjHN5AdF6gR6nrDQYYQ3v93HLUsg8F5jDFxoC3QY6hO0K7_JfsTBgeKEl5fQ3GV7NlfZutMMSyQJR4zFhN8CLwYgUjhnbjxylKPcifLTigmFIGDm2PRgsWQwTeI2NwjJ58U9EgzF5SP12ZvbTtr9-bCcUdED0E9vNCiAnPrujEOSq-AvD6u0YKH0R9eLmtyosqeVlXbhh_j',
  },
  {
    id: 5,
    alt: 'Clean, modern, and spacious sanctuary facilities with sustainable structures',
    category: 'Daily Life',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCpq_HakZQpAQ_VfcTmt9b5CzRet7rOR7Mu8RyBAa_g8aMNPubtdHmbA5N-KR0ngHD6o0W_EODH4Ouk_DdPc18bQD_oiHDbiS2tyb4fb0NmhxZ1ZvGYzG2ET9dIYxIcoIuwprESTw-TphtcNNPQYqQyb1rJ-DuA8BDydhx0311dMewA-9IeyGYpvo3PgBWza6q-z7_it8mZskOIBmUnYNn6TVdqdaAUyHi205RIUDFTocESG9lvM6dC00JfldlDetIg8tTCCKQN',
  },
  {
    id: 6,
    alt: 'Community awareness event at the gaushala with visitors and staff',
    category: 'Events',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBGOdma6qn3IjR8w5LmCrYk2IXA_esZHOAyHQfe0pCIUMAtNb4WwdGceYwIV74Gr2370DxjTLgRV+3 yIfRUoKxBwGNMmHRHM2CiH8f_SAvBZ-Ee--Ie9pZF1Em3b26GrdD2bKAk77adF8J5ImpBihD5aNSIcSBfylviUJHHW0c8pktwDivc4LVKIshQhl__qaJ7mbhKzfI9sAFVgK5X0HG00jf5xWHl8_BA8PtU3v3TFLQCrpDe1_DY5zNoxHfRBGTSLJ9W',
  },
]

const CATEGORIES = ['All', 'Rescues', 'Medical Care', 'Daily Life', 'Events']

function Gallery() {
  // ✅ Fixed: filter state and actual filtering logic
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered = activeFilter === 'All'
    ? allImages
    : allImages.filter((img) => img.category === activeFilter)

  return (
    <div>
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
          {/* ✅ Fixed: Filters now work — clicking actually filters images */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`font-label text-label px-6 py-2 rounded-full border-2 transition-all duration-300 ${
                  activeFilter === cat
                    ? 'border-primary bg-primary text-on-primary shadow-md'
                    : 'border-outline-variant text-on-surface hover:border-primary hover:text-primary'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Masonry Grid */}
          {filtered.length === 0 ? (
            <div className="text-center py-20 text-on-surface-variant font-body-lg">
              No images in this category yet.
            </div>
          ) : (
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-stack-gap space-y-stack-gap">
              {filtered.map((img) => (
                <div
                  key={img.id}
                  className="break-inside-avoid relative group rounded-xl overflow-hidden bg-surface-container shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <img
                    alt={img.alt}
                    className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-105"
                    src={img.src}
                  />
                  {/* Category badge */}
                  <div className="absolute bottom-3 left-3 rounded-full bg-black/60 px-3 py-1 text-xs font-label text-white backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {img.category}
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  )
}

export default Gallery