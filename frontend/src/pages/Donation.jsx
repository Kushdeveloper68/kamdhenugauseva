import { useState } from 'react'

const plans = [
  {
    id: 'starter',
    name: 'Starter',
    amount: 100,
    perks: ['Basic daily fodder for one cow', 'Quarterly newsletter updates'],
    highlight: false,
  },
  {
    id: 'impact',
    name: 'Impact',
    amount: 500,
    perks: [
      'Complete nutrition + routine health checkups for one cow',
      'Monthly video updates from the shelter',
      'Digital Certificate of Sponsorship',
    ],
    highlight: true,
  },
  {
    id: 'sustain',
    name: 'Sustain',
    amount: 1000,
    perks: [
      'Full care including medical interventions',
      'Personalized annual impact report',
      'Open invitation for guided shelter tours',
    ],
    highlight: false,
  },
]

function Donation() {
  const [selectedPlan, setSelectedPlan] = useState('impact')
  const [customAmount, setCustomAmount] = useState('')
  const [donationType, setDonationType] = useState('monthly')
  const [copied, setCopied] = useState('')
  const [formData, setFormData] = useState({ name: '', email: '', pan: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleCopy = (text, key) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(key)
      setTimeout(() => setCopied(''), 2000)
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.name || !formData.email) {
      alert('Please fill in your name and email.')
      return
    }
    setSubmitted(true)
  }

  const activePlan = plans.find((p) => p.id === selectedPlan)
  const finalAmount = customAmount ? Number(customAmount) : activePlan?.amount

  if (submitted) {
    return (
      <div className="page-fade-in flex min-h-[70vh] items-center justify-center px-gutter">
        <div className="text-center max-w-md">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary-container/20 text-primary-container">
            <span className="material-symbols-outlined text-5xl" style={{ fontVariationSettings: '"FILL" 1' }}>volunteer_activism</span>
          </div>
          <h2 className="font-h2 text-h2 text-on-surface mb-4">Thank You, {formData.name}!</h2>
          <p className="font-body-lg text-on-surface-variant mb-6">
            Your intention to donate ₹{finalAmount?.toLocaleString('en-IN')} means the world to us.
            Please complete the payment via UPI or bank transfer below and we'll send you a receipt at <strong>{formData.email}</strong>.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="inline-flex items-center gap-2 rounded-full border border-outline-variant px-6 py-3 font-label text-label text-on-surface hover:bg-surface-container transition-colors"
          >
            <span className="material-symbols-outlined text-sm">arrow_back</span>
            Go back
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="page-fade-in">
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary-container py-20 text-center text-white">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
        <div className="relative z-10 mx-auto max-w-3xl px-gutter">
          <div className="reveal-up inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm backdrop-blur-md mb-6">
            <span className="material-symbols-outlined text-sm">favorite</span>
            Every rupee saved is a life secured
          </div>
          <h1 className="font-h1 text-h1 text-white mb-4">Support Our Noble Cause</h1>
          <p className="font-body-lg text-white/90 max-w-2xl mx-auto">
            Your donation directly funds medical care, quality fodder, and the rescue operations that give
            these gentle beings a second chance at life.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-container-max px-gutter py-section-py-mobile md:py-section-py-desktop">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">

          {/* LEFT — Plan selector + form */}
          <div className="space-y-8">

            {/* Donation type toggle */}
            <div className="flex rounded-xl border border-outline-variant overflow-hidden w-fit">
              {['monthly', 'one-time'].map((t) => (
                <button
                  key={t}
                  onClick={() => setDonationType(t)}
                  className={`px-6 py-2 font-label text-label transition-colors capitalize ${donationType === t ? 'bg-primary-container text-on-primary' : 'bg-surface text-on-surface-variant hover:bg-surface-container'}`}
                >
                  {t}
                </button>
              ))}
            </div>

            {/* Plans */}
            <div className="grid gap-4 md:grid-cols-3">
              {plans.map((plan) => (
                <button
                  key={plan.id}
                  onClick={() => { setSelectedPlan(plan.id); setCustomAmount('') }}
                  className={`relative rounded-2xl border-2 p-6 text-left transition-all duration-200 hover:-translate-y-1 ${
                    selectedPlan === plan.id
                      ? 'border-primary-container bg-primary-container/10 shadow-lg'
                      : 'border-outline-variant bg-surface hover:border-primary-container/50'
                  }`}
                >
                  {plan.highlight && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#FFC107] px-3 py-0.5 text-xs font-label text-[#1B1B1B]">
                      Most Popular
                    </span>
                  )}
                  <div className="font-h3 text-h3 text-on-surface">{plan.name}</div>
                  <div className="mt-2 flex items-baseline gap-1">
                    <span className="text-2xl font-bold text-primary-container">₹{plan.amount.toLocaleString('en-IN')}</span>
                    <span className="text-sm text-on-surface-variant">/{donationType === 'monthly' ? 'mo' : 'once'}</span>
                  </div>
                  <ul className="mt-4 space-y-2">
                    {plan.perks.map((perk) => (
                      <li key={perk} className="flex items-start gap-2 text-sm text-on-surface-variant">
                        <span className="material-symbols-outlined mt-0.5 text-sm text-primary-container">check_circle</span>
                        {perk}
                      </li>
                    ))}
                  </ul>
                </button>
              ))}
            </div>

            {/* Custom amount */}
            <div>
              <label className="mb-2 block font-label text-label text-on-surface-variant">Or enter a custom amount (₹)</label>
              <input
                type="number"
                min="1"
                value={customAmount}
                onChange={(e) => { setCustomAmount(e.target.value); setSelectedPlan('') }}
                placeholder="e.g. 250"
                className="w-full rounded-xl border border-outline-variant bg-surface px-4 py-3 text-on-surface shadow-sm focus:border-primary-container focus:outline-none focus:ring-2 focus:ring-primary-container/20"
              />
            </div>

            {/* Donor info form */}
            <div className="rounded-3xl border border-outline-variant/30 bg-surface-container-lowest p-6 shadow-md">
              <h3 className="font-h3 text-h3 text-on-surface mb-6">Your Details</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block font-label text-label text-on-surface-variant">Full Name *</label>
                    <input
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Ramesh Patel"
                      className="w-full rounded-xl border border-outline-variant bg-surface px-4 py-3 text-on-surface shadow-sm focus:border-primary-container focus:outline-none focus:ring-2 focus:ring-primary-container/20"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block font-label text-label text-on-surface-variant">Email *</label>
                    <input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="you@example.com"
                      className="w-full rounded-xl border border-outline-variant bg-surface px-4 py-3 text-on-surface shadow-sm focus:border-primary-container focus:outline-none focus:ring-2 focus:ring-primary-container/20"
                    />
                  </div>
                </div>
                <div>
                  <label className="mb-2 block font-label text-label text-on-surface-variant">PAN Card (for 80G tax receipt – optional)</label>
                  <input
                    value={formData.pan}
                    onChange={(e) => setFormData({ ...formData, pan: e.target.value.toUpperCase() })}
                    placeholder="ABCDE1234F"
                    maxLength={10}
                    className="w-full rounded-xl border border-outline-variant bg-surface px-4 py-3 text-on-surface shadow-sm focus:border-primary-container focus:outline-none focus:ring-2 focus:ring-primary-container/20 uppercase"
                  />
                </div>
                <div>
                  <label className="mb-2 block font-label text-label text-on-surface-variant">Message (optional)</label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Dedicate this donation or leave a note..."
                    className="w-full resize-none rounded-xl border border-outline-variant bg-surface px-4 py-3 text-on-surface shadow-sm focus:border-primary-container focus:outline-none focus:ring-2 focus:ring-primary-container/20"
                  />
                </div>
                <button
                  type="submit"
                  className="button-shine hover-lift flex w-full items-center justify-center gap-2 rounded-xl bg-primary-container py-4 font-label text-lg text-on-primary shadow-md"
                >
                  <span className="material-symbols-outlined">volunteer_activism</span>
                  Proceed to Pay ₹{(finalAmount || 0).toLocaleString('en-IN')}
                  {donationType === 'monthly' ? '/month' : ''}
                </button>
                <p className="text-center text-xs text-on-surface-variant">
                  Donations are tax-exempt under Section 80G of the Income Tax Act.
                </p>
              </form>
            </div>
          </div>

          {/* RIGHT — Payment details */}
          <div className="space-y-6">
            <div className="rounded-3xl border border-outline-variant/20 bg-surface-container-lowest p-6 shadow-md">
              <h3 className="font-h3 text-h3 text-on-surface mb-5">Pay via UPI / Bank Transfer</h3>

              {/* QR placeholder */}
              <div className="mb-6 flex flex-col items-center">
                <div className="relative flex h-48 w-48 items-center justify-center rounded-2xl border-2 border-dashed border-outline-variant bg-surface-container">
                  <span className="material-symbols-outlined text-6xl text-outline-variant">qr_code_2</span>
                  <div className="absolute top-2 left-2 h-5 w-5 border-t-2 border-l-2 border-primary-container" />
                  <div className="absolute top-2 right-2 h-5 w-5 border-t-2 border-r-2 border-primary-container" />
                  <div className="absolute bottom-2 left-2 h-5 w-5 border-b-2 border-l-2 border-primary-container" />
                  <div className="absolute bottom-2 right-2 h-5 w-5 border-b-2 border-r-2 border-primary-container" />
                </div>
                <p className="mt-3 text-sm text-on-surface-variant">Scan with any UPI app</p>
              </div>

              {/* UPI + bank details with copy */}
              {[
                { label: 'UPI ID', value: 'kaamdenu.donate@okbank', key: 'upi' },
                { label: 'Account Number', value: '3123456789012', key: 'acc' },
                { label: 'IFSC Code', value: 'SBIN0001234', key: 'ifsc' },
              ].map((item) => (
                <div key={item.key} className="mb-4">
                  <p className="mb-1 text-xs font-label uppercase tracking-wider text-outline">{item.label}</p>
                  <div
                    onClick={() => handleCopy(item.value, item.key)}
                    className="flex cursor-pointer items-center justify-between rounded-xl border border-outline-variant bg-surface-container px-4 py-3 transition-colors hover:bg-surface-container-high"
                  >
                    <span className="font-mono text-sm text-on-surface">{item.value}</span>
                    <span className="material-symbols-outlined text-sm text-outline transition-colors hover:text-primary-container">
                      {copied === item.key ? 'check' : 'content_copy'}
                    </span>
                  </div>
                  {copied === item.key && (
                    <p className="mt-1 text-xs text-primary-container">Copied!</p>
                  )}
                </div>
              ))}

              <div className="grid grid-cols-2 gap-4 mt-2">
                <div>
                  <p className="text-xs font-label uppercase tracking-wider text-outline mb-1">Bank</p>
                  <p className="text-sm text-on-surface">State Bank of India</p>
                </div>
                <div>
                  <p className="text-xs font-label uppercase tracking-wider text-outline mb-1">Account Name</p>
                  <p className="text-sm text-on-surface">Kaam Denu Gaushala Trust</p>
                </div>
              </div>
            </div>

            {/* Trust signals */}
            <div className="rounded-3xl border border-outline-variant/20 bg-surface-container-low p-6">
              <h4 className="font-label text-label text-on-surface mb-4">Where your money goes</h4>
              {[
                { label: 'Direct Animal Care', pct: 85, color: 'bg-primary-container' },
                { label: 'Facility Maintenance', pct: 10, color: 'bg-secondary-container' },
                { label: 'Administration', pct: 5, color: 'bg-outline-variant' },
              ].map((item) => (
                <div key={item.label} className="mb-3">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-label text-on-surface">{item.label}</span>
                    <span className="font-label text-primary-container">{item.pct}%</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-surface-container-high">
                    <div className={`h-full rounded-full ${item.color}`} style={{ width: `${item.pct}%` }} />
                  </div>
                </div>
              ))}
              <p className="mt-4 text-xs italic text-outline">Independently audited. Annual reports available on request.</p>
            </div>

            <div className="rounded-3xl border border-primary-container/20 bg-primary-container/5 p-5">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary-container" style={{ fontVariationSettings: '"FILL" 1' }}>verified_user</span>
                <div>
                  <p className="font-label text-label text-on-surface">80G Tax Exemption</p>
                  <p className="mt-1 text-sm text-on-surface-variant">All donations are eligible for tax deduction. Receipts emailed automatically within 48 hours of payment confirmation.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Donation