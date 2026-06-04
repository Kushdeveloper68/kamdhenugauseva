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

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000'

// Load Razorpay checkout script dynamically
function loadRazorpayScript() {
  return new Promise((resolve) => {
    if (window.Razorpay) return resolve(true)
    const script = document.createElement('script')
    script.src = 'https://checkout.razorpay.com/v1/checkout.js'
    script.onload = () => resolve(true)
    script.onerror = () => resolve(false)
    document.body.appendChild(script)
  })
}

function Donation() {
  const [selectedPlan, setSelectedPlan] = useState('impact')
  const [customAmount, setCustomAmount] = useState('')
  const [donationType, setDonationType] = useState('monthly')
  const [copied, setCopied] = useState('')
  const [formData, setFormData] = useState({ name: '', email: '', pan: '', message: '' })
  const [formErrors, setFormErrors] = useState({})
  const [paymentState, setPaymentState] = useState('idle') // idle | loading | success | error
  const [receiptNo, setReceiptNo] = useState('')
  const [errorMsg, setErrorMsg] = useState('')

  const handleCopy = (text, key) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(key)
      setTimeout(() => setCopied(''), 2000)
    })
  }

  const activePlan = plans.find((p) => p.id === selectedPlan)
  const finalAmount = customAmount ? Number(customAmount) : activePlan?.amount

  const validateForm = () => {
    const errors = {}
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errors.name = 'Full name is required'
    }
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Valid email is required'
    }
    if (!finalAmount || finalAmount < 1) {
      errors.amount = 'Please select or enter a donation amount'
    }
    if (formData.pan && !/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(formData.pan)) {
      errors.pan = 'Invalid PAN format (e.g. ABCDE1234F)'
    }
    return errors
  }

  const handlePay = async (e) => {
    e.preventDefault()
    setFormErrors({})
    setErrorMsg('')

    const errors = validateForm()
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors)
      return
    }

    setPaymentState('loading')

    try {
      // 1. Load Razorpay script
      const scriptLoaded = await loadRazorpayScript()
      if (!scriptLoaded) {
        throw new Error('Failed to load payment gateway. Please check your internet connection.')
      }

      // 2. Create order on backend
      const orderRes = await fetch(`${API_URL}/api/donation/create-order`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: finalAmount,
          name: formData.name.trim(),
          email: formData.email.trim().toLowerCase(),
          pan: formData.pan.trim().toUpperCase(),
          message: formData.message.trim(),
          donationType,
        }),
      })

      if (!orderRes.ok) {
        const errData = await orderRes.json()
        throw new Error(errData.error || 'Failed to create payment order')
      }

      const { order_id, amount, currency, key_id } = await orderRes.json()

      // 3. Open Razorpay checkout modal
      await new Promise((resolve, reject) => {
        const options = {
          key: key_id,
          amount,                    // in paise
          currency,
          name: 'Kaam Denu Gaushala',
          description: 'Donation — Compassionate care for every soul',
          order_id,
          prefill: {
            name: formData.name.trim(),
            email: formData.email.trim(),
          },
          theme: { color: '#2E7D32' },
          modal: {
            ondismiss: () => {
              // User closed the modal without paying
              reject(new Error('PAYMENT_CANCELLED'))
            },
          },
          handler: async (response) => {
            // 4. Payment successful — verify on backend
            try {
              const verifyRes = await fetch(`${API_URL}/api/donation/verify`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  razorpay_order_id: response.razorpay_order_id,
                  razorpay_payment_id: response.razorpay_payment_id,
                  razorpay_signature: response.razorpay_signature,
                  name: formData.name.trim(),
                  email: formData.email.trim().toLowerCase(),
                  pan: formData.pan.trim().toUpperCase(),
                  amount: finalAmount,
                  donationType,
                  message: formData.message.trim(),
                }),
              })

              if (!verifyRes.ok) {
                const errData = await verifyRes.json()
                throw new Error(errData.error || 'Payment verification failed')
              }

              const data = await verifyRes.json()
              setReceiptNo(data.receiptNo)
              resolve()
            } catch (verifyErr) {
              reject(verifyErr)
            }
          },
        }

        const rzp = new window.Razorpay(options)
        rzp.on('payment.failed', (response) => {
          reject(new Error(response.error?.description || 'Payment failed'))
        })
        rzp.open()
      })

      setPaymentState('success')

    } catch (err) {
      if (err.message === 'PAYMENT_CANCELLED') {
        // User dismissed — just reset to idle, no error shown
        setPaymentState('idle')
        return
      }
      console.error('Payment error:', err)
      setErrorMsg(err.message || 'Something went wrong. Please try again.')
      setPaymentState('error')
    }
  }

  // ── Success screen ─────────────────────────────────────
  if (paymentState === 'success') {
    return (
      <div className="page-fade-in flex min-h-[70vh] items-center justify-center px-gutter">
        <div className="text-center max-w-md">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary-container/20 text-primary-container">
            <span className="material-symbols-outlined text-5xl" style={{ fontVariationSettings: '"FILL" 1' }}>
              volunteer_activism
            </span>
          </div>
          <h2 className="font-h2 text-h2 text-on-surface mb-4">Thank You, {formData.name}!</h2>
          <p className="font-body-lg text-on-surface-variant mb-3">
            Your donation of{' '}
            <strong className="text-primary-container">₹{finalAmount?.toLocaleString('en-IN')}</strong>{' '}
            was received successfully.
          </p>
          <p className="font-body-md text-on-surface-variant mb-2">
            Your 80G receipt <strong>({receiptNo})</strong> has been emailed to{' '}
            <strong>{formData.email}</strong>.
          </p>
          <p className="text-sm text-on-surface-variant mb-8 italic">
            Please check your spam folder if you don't see it within a few minutes.
          </p>
          <button
            onClick={() => {
              setPaymentState('idle')
              setFormData({ name: '', email: '', pan: '', message: '' })
              setCustomAmount('')
              setSelectedPlan('impact')
              setReceiptNo('')
              setErrorMsg('')
            }}
            className="inline-flex items-center gap-2 rounded-full border border-outline-variant px-6 py-3 font-label text-label text-on-surface hover:bg-surface-container transition-colors"
          >
            <span className="material-symbols-outlined text-sm">arrow_back</span>
            Make another donation
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="page-fade-in">
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary-container py-20 text-center text-white">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '32px 32px',
          }}
        />
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
                  className={`px-6 py-2 font-label text-label transition-colors capitalize ${
                    donationType === t
                      ? 'bg-primary-container text-on-primary'
                      : 'bg-surface text-on-surface-variant hover:bg-surface-container'
                  }`}
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
                    <span className="text-2xl font-bold text-primary-container">
                      ₹{plan.amount.toLocaleString('en-IN')}
                    </span>
                    <span className="text-sm text-on-surface-variant">
                      /{donationType === 'monthly' ? 'mo' : 'once'}
                    </span>
                  </div>
                  <ul className="mt-4 space-y-2">
                    {plan.perks.map((perk) => (
                      <li key={perk} className="flex items-start gap-2 text-sm text-on-surface-variant">
                        <span className="material-symbols-outlined mt-0.5 text-sm text-primary-container">
                          check_circle
                        </span>
                        {perk}
                      </li>
                    ))}
                  </ul>
                </button>
              ))}
            </div>

            {/* Custom amount */}
            <div>
              <label className="mb-2 block font-label text-label text-on-surface-variant">
                Or enter a custom amount (₹)
              </label>
              <input
                type="number"
                min="1"
                value={customAmount}
                onChange={(e) => { setCustomAmount(e.target.value); setSelectedPlan('') }}
                placeholder="e.g. 250"
                className="w-full rounded-xl border border-outline-variant bg-surface px-4 py-3 text-on-surface shadow-sm focus:border-primary-container focus:outline-none focus:ring-2 focus:ring-primary-container/20"
              />
              {formErrors.amount && (
                <p className="mt-1 text-xs text-error">{formErrors.amount}</p>
              )}
            </div>

            {/* Donor info form */}
            <div className="rounded-3xl border border-outline-variant/30 bg-surface-container-lowest p-6 shadow-md">
              <h3 className="font-h3 text-h3 text-on-surface mb-6">Your Details</h3>
              <form onSubmit={handlePay} noValidate className="space-y-5">
                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block font-label text-label text-on-surface-variant">
                      Full Name *
                    </label>
                    <input
                      required
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value })
                        if (formErrors.name) setFormErrors({ ...formErrors, name: undefined })
                      }}
                      placeholder="Ramesh Patel"
                      className={`w-full rounded-xl border bg-surface px-4 py-3 text-on-surface shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-container/20 ${
                        formErrors.name ? 'border-error' : 'border-outline-variant focus:border-primary-container'
                      }`}
                    />
                    {formErrors.name && <p className="mt-1 text-xs text-error">{formErrors.name}</p>}
                  </div>
                  <div>
                    <label className="mb-2 block font-label text-label text-on-surface-variant">
                      Email *
                    </label>
                    <input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value })
                        if (formErrors.email) setFormErrors({ ...formErrors, email: undefined })
                      }}
                      placeholder="you@example.com"
                      className={`w-full rounded-xl border bg-surface px-4 py-3 text-on-surface shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-container/20 ${
                        formErrors.email ? 'border-error' : 'border-outline-variant focus:border-primary-container'
                      }`}
                    />
                    {formErrors.email && <p className="mt-1 text-xs text-error">{formErrors.email}</p>}
                  </div>
                </div>

                <div>
                  <label className="mb-2 block font-label text-label text-on-surface-variant">
                    PAN Card (for 80G tax receipt – optional)
                  </label>
                  <input
                    value={formData.pan}
                    onChange={(e) => {
                      setFormData({ ...formData, pan: e.target.value.toUpperCase() })
                      if (formErrors.pan) setFormErrors({ ...formErrors, pan: undefined })
                    }}
                    placeholder="ABCDE1234F"
                    maxLength={10}
                    className={`w-full rounded-xl border bg-surface px-4 py-3 text-on-surface shadow-sm uppercase focus:outline-none focus:ring-2 focus:ring-primary-container/20 ${
                      formErrors.pan ? 'border-error' : 'border-outline-variant focus:border-primary-container'
                    }`}
                  />
                  {formErrors.pan && <p className="mt-1 text-xs text-error">{formErrors.pan}</p>}
                </div>

                <div>
                  <label className="mb-2 block font-label text-label text-on-surface-variant">
                    Message (optional)
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Dedicate this donation or leave a note..."
                    className="w-full resize-none rounded-xl border border-outline-variant bg-surface px-4 py-3 text-on-surface shadow-sm focus:border-primary-container focus:outline-none focus:ring-2 focus:ring-primary-container/20"
                  />
                </div>

                {/* Error message */}
                {paymentState === 'error' && errorMsg && (
                  <div className="rounded-xl border border-error/30 bg-error-container px-4 py-3 text-sm text-on-error-container">
                    {errorMsg}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={paymentState === 'loading'}
                  className="button-shine hover-lift flex w-full items-center justify-center gap-2 rounded-xl bg-primary-container py-4 font-label text-lg text-on-primary shadow-md disabled:opacity-60"
                >
                  {paymentState === 'loading' ? (
                    <>
                      <span className="loader-ring !w-5 !h-5 !border-2" />
                      Processing…
                    </>
                  ) : (
                    <>
                      <span className="material-symbols-outlined">volunteer_activism</span>
                      Donate ₹{(finalAmount || 0).toLocaleString('en-IN')}
                      {donationType === 'monthly' ? '/month' : ''}
                    </>
                  )}
                </button>

                <p className="text-center text-xs text-on-surface-variant">
                  Secured by Razorpay · Donations are tax-exempt under Section 80G
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
                    <div
                      className={`h-full rounded-full ${item.color}`}
                      style={{ width: `${item.pct}%` }}
                    />
                  </div>
                </div>
              ))}
              <p className="mt-4 text-xs italic text-outline">
                Independently audited. Annual reports available on request.
              </p>
            </div>

            <div className="rounded-3xl border border-primary-container/20 bg-primary-container/5 p-5">
              <div className="flex items-start gap-3">
                <span
                  className="material-symbols-outlined text-primary-container"
                  style={{ fontVariationSettings: '"FILL" 1' }}
                >
                  verified_user
                </span>
                <div>
                  <p className="font-label text-label text-on-surface">80G Tax Exemption</p>
                  <p className="mt-1 text-sm text-on-surface-variant">
                    All donations are eligible for tax deduction. Your 80G receipt is emailed
                    automatically within minutes of payment confirmation.
                  </p>
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