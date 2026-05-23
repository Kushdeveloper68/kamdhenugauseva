const budgetBreakdown = [
  {
    title: 'Animal Care & Health',
    subtitle: 'Fodder, medicine, shelter',
    percentage: '85%',
    icon: 'medical_services',
    accent: 'border-primary-container',
    text: 'text-primary-container',
  },
  {
    title: 'Facility Maintenance',
    subtitle: 'Upkeep, clean water systems',
    percentage: '10%',
    icon: 'home_repair_service',
    accent: 'border-secondary-container',
    text: 'text-secondary-container',
  },
  {
    title: 'Administration',
    subtitle: 'Compliance, staff, operations',
    percentage: '5%',
    icon: 'admin_panel_settings',
    accent: 'border-outline-variant',
    text: 'text-outline',
  },
]

const reports = [
  {
    title: 'Annual Impact Report 2023',
    description: 'Detailed overview of care provided, expansions, and financial statements.',
  },
  {
    title: 'Financial Audit 2023',
    description: "Independent auditor's report and complete financial breakdown.",
  },
  {
    title: 'Annual Impact Report 2022',
    description: 'Historical data, care metrics, and past financial statements.',
  },
]

function FinancialTransparency() {
  return (
    <div className="page-fade-in">
      <main className="flex-grow pt-24 pb-section-py-desktop">
        <section className="relative overflow-hidden bg-surface-container">
          <div className="absolute inset-0">
            <img
              alt="Financial transparency background"
              className="image-zoom h-full w-full object-cover opacity-20"
              data-alt="A calm, professional background showing documents and financial review materials."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3G_nNKgxbSdUbYk0-C6437mKEj6S6vbNZnq8iEemThxhR4Hh1DSRPxms5A5981-qvFVRK4ddoDzzMoLKSwS2-UBs0ETzRZeflB_wxfM5dcbaatXvoS9BXr7Sxl6wLClg2Ii6UTUAhQAUsrFe8LJh-SxbdPUWAdYj344ROOUR8Ka2IVyCCLEKOGbSeXFI9eMA_wIYd8gGW2DZhG3femwQefy-FTBCl5kJbDQv__xgGENvMzjU-1QG79ZKaPQaFufWQKmb9XDEe"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-surface-container/50 via-surface-container/80 to-surface-container" />
          </div>
          <div className="relative mx-auto max-w-container-max px-gutter py-section-py-mobile text-center md:py-section-py-desktop">
            <div className="mx-auto max-w-3xl reveal-up">
              <span className="inline-flex items-center gap-2 rounded-full bg-primary-container/10 px-4 py-2 text-label font-label text-primary">
                <span className="material-symbols-outlined text-sm">verified</span>
                Financial Transparency
              </span>
              <h1 className="mt-6 font-h1 text-h1 text-on-surface">Our Commitment to Trust</h1>
              <p className="mx-auto mt-6 max-w-2xl font-body-lg text-body-lg text-on-surface-variant">
                Transparency isn't just a word; it's the foundation of our care. We believe every donor deserves to see exactly how their contributions bring warmth, health, and dignity to our residents.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-container-max px-gutter py-section-py-mobile md:py-section-py-desktop">
          <div className="grid grid-cols-1 gap-stack-gap md:grid-cols-12">
            <div className="hover-lift md:col-span-8 rounded-3xl border border-outline-variant/20 bg-surface-container p-8 shadow-md md:p-10">
              <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="font-label text-label text-primary">Expense Breakdown</p>
                  <h2 className="mt-2 font-h2 text-h2 text-on-surface">Where your support goes</h2>
                </div>
                <span className="inline-flex items-center gap-2 rounded-full bg-primary-container/10 px-4 py-2 text-label font-label text-primary">
                  <span className="material-symbols-outlined text-sm">insights</span>
                  85% direct care
                </span>
              </div>
              <div className="flex flex-col gap-8 md:flex-row md:items-center">
                <div className="relative mx-auto flex h-56 w-56 items-center justify-center rounded-full border-8 border-surface-container-high bg-surface md:mx-0">
                  <div className="absolute inset-0 rounded-full border-8 border-primary-container" style={{ clipPath: 'polygon(50% 50%, 100% 0, 100% 100%, 0 100%, 0 0, 30% 0)' }} />
                  <div className="absolute inset-0 rounded-full border-8 border-secondary-container" style={{ clipPath: 'polygon(50% 50%, 30% 0, 0 0, 0 30%)' }} />
                  <div className="text-center z-10 rounded-full bg-surface p-5 shadow-sm">
                    <span className="block font-h3 text-h3 text-primary-container">85%</span>
                    <span className="font-label text-label text-on-surface-variant">Direct Care</span>
                  </div>
                </div>

                <div className="flex-1 space-y-4">
                  {budgetBreakdown.map((item, index) => (
                    <article
                      key={item.title}
                      className={`hover-lift flex items-center justify-between rounded-2xl border-l-4 bg-surface p-4 shadow-sm ${item.accent}`}
                      style={{ animationDelay: `${index * 90}ms` }}
                    >
                      <div className="flex items-center gap-3">
                        <span className={`material-symbols-outlined ${item.text}`}>{item.icon}</span>
                        <div>
                          <span className="block font-label text-label text-on-surface">{item.title}</span>
                          <span className="font-body-md text-sm text-on-surface-variant">{item.subtitle}</span>
                        </div>
                      </div>
                      <span className={`font-h3 text-h3 ${item.text}`}>{item.percentage}</span>
                    </article>
                  ))}
                </div>
              </div>
            </div>

            <div className="hover-lift md:col-span-4 rounded-3xl bg-primary-container p-8 text-center text-on-primary shadow-md">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-surface/20 text-secondary-container">
                <span className="material-symbols-outlined text-5xl" style={{ fontVariationSettings: '"FILL" 1' }}>verified</span>
              </div>
              <h3 className="font-h3 text-h3">Audited for Transparency</h3>
              <p className="mt-3 font-body-md text-on-primary/90">
                Our financials are independently audited annually to ensure the highest standards of accountability and ethical stewardship.
              </p>
              <button className="button-shine mt-6 rounded-full bg-surface px-6 py-3 font-label text-primary-container transition-colors hover:bg-surface-container">
                View Certificate
              </button>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-container-max px-gutter py-section-py-mobile md:py-section-py-desktop">
          <div className="mb-8 text-center">
            <p className="font-label text-label text-primary">Documents</p>
            <h2 className="mt-2 font-h2 text-h2 text-on-surface">Download Annual Reports</h2>
          </div>
          <div className="grid grid-cols-1 gap-stack-gap md:grid-cols-3">
            {reports.map((report, index) => (
              <article
                key={report.title}
                className="hover-lift group flex flex-col items-center rounded-3xl border border-outline-variant bg-surface p-6 text-center shadow-md"
                style={{ animationDelay: `${index * 90}ms` }}
              >
                <div className="mb-4 rounded-full bg-surface-container-high p-4 transition-colors duration-300 group-hover:bg-primary-container">
                  <span className="material-symbols-outlined text-3xl text-outline transition-colors duration-300 group-hover:text-on-primary">picture_as_pdf</span>
                </div>
                <h3 className="font-h3 text-h3 text-on-surface">{report.title}</h3>
                <p className="mb-6 mt-2 font-body-md text-sm text-on-surface-variant">{report.description}</p>
                <button className="button-shine mt-auto flex items-center gap-2 font-label text-primary-container transition-colors hover:text-primary">
                  <span className="material-symbols-outlined">download</span>
                  Download PDF
                </button>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

export default FinancialTransparency