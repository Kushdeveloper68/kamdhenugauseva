import { useEffect, useState } from 'react'

function WindowLoadScreen() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    let fadeTimer = window.setTimeout(() => {
      setVisible(false)
    }, 700)

    const handleLoad = () => {
      window.clearTimeout(fadeTimer)
      fadeTimer = window.setTimeout(() => {
        setVisible(false)
      }, 250)
    }

    if (document.readyState === 'complete') {
      handleLoad()
    } else {
      window.addEventListener('load', handleLoad)
    }

    return () => {
      window.clearTimeout(fadeTimer)
      window.removeEventListener('load', handleLoad)
    }
  }, [])

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none fixed inset-0 z-[999] flex items-center justify-center bg-[#f7fbf0] transition-opacity duration-700 ${visible ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className={`flex flex-col items-center gap-4 text-center transition-all duration-700 ${visible ? 'translate-y-0 scale-100' : '-translate-y-2 scale-95'}`}>
        <div className="loader-ring" />
        <p className="font-label text-sm tracking-[0.2em] text-primary">Loading compassion</p>
      </div>
    </div>
  )
}

export default WindowLoadScreen