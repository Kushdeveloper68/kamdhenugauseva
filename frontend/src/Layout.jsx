import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import WindowLoadScreen from './components/WindowLoadScreen.jsx'

function Layout() {
  return (
    <div className="min-h-screen bg-background text-on-surface">
      <WindowLoadScreen />
      <Navbar />
      <main className="relative">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout