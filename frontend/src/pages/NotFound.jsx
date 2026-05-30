import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className="page-fade-in flex min-h-[80vh] flex-col items-center justify-center px-gutter text-center">
      <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-primary-container/10 text-primary-container">
        <span className="material-symbols-outlined text-5xl" style={{ fontVariationSettings: '"FILL" 0' }}>
          sentiment_dissatisfied
        </span>
      </div>
      <h1 className="font-h1 text-h1 text-on-surface mb-4">404</h1>
      <p className="font-body-lg text-on-surface-variant mb-2">Page not found</p>
      <p className="max-w-md font-body-md text-on-surface-variant mb-8">
        The page you're looking for doesn't exist or may have been moved. Let's get you back to safety.
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        <Link
          to="/"
          className="button-shine hover-lift inline-flex items-center gap-2 rounded-full bg-primary-container px-8 py-3 font-label text-label text-on-primary shadow-md"
        >
          <span className="material-symbols-outlined text-sm">home</span>
          Go Home
        </Link>
        <Link
          to="/contact"
          className="hover-lift inline-flex items-center gap-2 rounded-full border border-outline-variant px-8 py-3 font-label text-label text-on-surface"
        >
          Contact Us
        </Link>
      </div>
    </div>
  )
}

export default NotFound