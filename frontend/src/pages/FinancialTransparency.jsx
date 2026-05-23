import React from 'react'

function FinancialTransparency() {
  return (
  <div>
  {/* TopNavBar */}

  {/* Main Content */}
  <main className="flex-grow pt-24 pb-section-py-desktop">
    {/* Hero Section */}
    <section className="max-w-container-max mx-auto px-gutter py-section-py-desktop text-center">
      <h1 className="font-h1 text-h1 text-on-background mb-stack-gap">Our Commitment to Trust</h1>
      <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
        Transparency isn't just a word; it's the foundation of our care. We believe every donor deserves to see exactly how their contributions bring warmth, health, and dignity to our residents.
      </p>
    </section>
    {/* Expense Breakdown Bento Grid */}
    <section className="max-w-container-max mx-auto px-gutter mb-section-py-desktop">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-stack-gap">
        {/* Main Breakdown */}
        <div className="md:col-span-8 bg-surface-container rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow duration-300">
          <h2 className="font-h2 text-h2 text-on-surface mb-6">Where Your Support Goes</h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Simulated Pie Chart / Focus Area */}
            <div className="relative w-48 h-48 rounded-full border-8 border-surface-container-high flex items-center justify-center bg-surface">
              <div className="absolute inset-0 rounded-full border-8 border-primary-container" style={{clipPath: 'polygon(50% 50%, 100% 0, 100% 100%, 0 100%, 0 0, 30% 0)'}} />
              <div className="absolute inset-0 rounded-full border-8 border-secondary-container" style={{clipPath: 'polygon(50% 50%, 30% 0, 0 0, 0 30%)'}} />
              <div className="absolute inset-0 rounded-full border-8 border-tertiary-container" style={{clipPath: 'polygon(50% 50%, 0 30%, 0 100%, 30% 100%)', display: 'none'}} />
              <div className="text-center z-10 bg-surface rounded-full p-4">
                <span className="font-h3 text-h3 text-primary-container block">85%</span>
                <span className="font-label text-label text-on-surface-variant">Direct Care</span>
              </div>
            </div>
            {/* Legend Cards */}
            <div className="flex-1 space-y-4 w-full">
              <div className="bg-surface rounded-lg p-4 shadow-sm flex items-center justify-between border-l-4 border-primary-container">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary-container">medical_services</span>
                  <div>
                    <span className="font-label text-label block">Animal Care &amp; Health</span>
                    <span className="font-body-md text-sm text-on-surface-variant">Fodder, medicine, shelter</span>
                  </div>
                </div>
                <span className="font-h3 text-h3 text-primary-container">85%</span>
              </div>
              <div className="bg-surface rounded-lg p-4 shadow-sm flex items-center justify-between border-l-4 border-secondary-container">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary-container">home_repair_service</span>
                  <div>
                    <span className="font-label text-label block">Facility Maintenance</span>
                    <span className="font-body-md text-sm text-on-surface-variant">Upkeep, clean water systems</span>
                  </div>
                </div>
                <span className="font-h3 text-h3 text-secondary-container">10%</span>
              </div>
              <div className="bg-surface rounded-lg p-4 shadow-sm flex items-center justify-between border-l-4 border-outline-variant">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-outline">admin_panel_settings</span>
                  <div>
                    <span className="font-label text-label block">Administration</span>
                    <span className="font-body-md text-sm text-on-surface-variant">Compliance, staff, operations</span>
                  </div>
                </div>
                <span className="font-h3 text-h3 text-outline">5%</span>
              </div>
            </div>
          </div>
        </div>
        {/* Audit Badge Side Card */}
        <div className="md:col-span-4 bg-primary-container text-on-primary rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-center items-center text-center">
          <span className="material-symbols-outlined text-6xl mb-4 text-secondary-container" style={{fontVariationSettings: '"FILL" 1'}}>verified</span>
          <h3 className="font-h3 text-h3 mb-2">Audited for Transparency</h3>
          <p className="font-body-md text-on-primary/90 mb-6">
            Our financials are independently audited annually to ensure the highest standards of accountability and ethical stewardship.
          </p>
          <button className="bg-surface text-primary-container px-6 py-2 rounded-full font-label hover:bg-surface-container transition-colors">
            View Certificate
          </button>
        </div>
      </div>
    </section>
    {/* Documents Section */}
    <section className="max-w-container-max mx-auto px-gutter mb-section-py-desktop">
      <h2 className="font-h2 text-h2 text-on-background mb-stack-gap text-center">Download Annual Reports</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-stack-gap">
        {/* Document Card 1 */}
        <div className="bg-surface border border-outline-variant rounded-xl p-6 flex flex-col items-center text-center shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
          <div className="bg-surface-container-high rounded-full p-4 mb-4 group-hover:bg-primary-container transition-colors duration-300">
            <span className="material-symbols-outlined text-3xl text-outline group-hover:text-on-primary">picture_as_pdf</span>
          </div>
          <h3 className="font-h3 text-h3 text-on-surface mb-2">Annual Impact Report 2023</h3>
          <p className="font-body-md text-sm text-on-surface-variant mb-6">Detailed overview of care provided, expansions, and financial statements.</p>
          <button className="flex items-center gap-2 text-primary-container font-label hover:text-primary transition-colors mt-auto">
            <span className="material-symbols-outlined">download</span> Download PDF
          </button>
        </div>
        {/* Document Card 2 */}
        <div className="bg-surface border border-outline-variant rounded-xl p-6 flex flex-col items-center text-center shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
          <div className="bg-surface-container-high rounded-full p-4 mb-4 group-hover:bg-primary-container transition-colors duration-300">
            <span className="material-symbols-outlined text-3xl text-outline group-hover:text-on-primary">picture_as_pdf</span>
          </div>
          <h3 className="font-h3 text-h3 text-on-surface mb-2">Financial Audit 2023</h3>
          <p className="font-body-md text-sm text-on-surface-variant mb-6">Independent auditor's report and complete financial breakdown.</p>
          <button className="flex items-center gap-2 text-primary-container font-label hover:text-primary transition-colors mt-auto">
            <span className="material-symbols-outlined">download</span> Download PDF
          </button>
        </div>
        {/* Document Card 3 */}
        <div className="bg-surface border border-outline-variant rounded-xl p-6 flex flex-col items-center text-center shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
          <div className="bg-surface-container-high rounded-full p-4 mb-4 group-hover:bg-primary-container transition-colors duration-300">
            <span className="material-symbols-outlined text-3xl text-outline group-hover:text-on-primary">picture_as_pdf</span>
          </div>
          <h3 className="font-h3 text-h3 text-on-surface mb-2">Annual Impact Report 2022</h3>
          <p className="font-body-md text-sm text-on-surface-variant mb-6">Historical data, care metrics, and past financial statements.</p>
          <button className="flex items-center gap-2 text-primary-container font-label hover:text-primary transition-colors mt-auto">
            <span className="material-symbols-outlined">download</span> Download PDF
          </button>
        </div>
      </div>
    </section>
  </main>
  {/* Footer */}
</div>

  )
}

export default FinancialTransparency