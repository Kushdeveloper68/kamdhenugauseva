import { Routes, Route } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Emergency from './pages/Emergency.jsx'
import Facilities from './pages/Facilities.jsx'
import FAQ from './pages/FAQ.jsx'
import FinancialTransparency from './pages/FinancialTransparency.jsx'
import Gallery from './pages/Gallery.jsx'
import Impact from './pages/Impact.jsx'
import Services from './pages/Services.jsx'
import SupportUs from './pages/SupportUs.jsx'
import Team from './pages/Team.jsx'
import Volunteer from './pages/Volunteer.jsx'
import Donation from './pages/Donation.jsx'
import NotFound from './pages/NotFound.jsx'
import ScrollAnimationProvider from './components/ScrollAnimationProvider.jsx'

function App() {
  return (
    <ScrollAnimationProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="emergency" element={<Emergency />} />
          <Route path="facilities" element={<Facilities />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="financial-transparency" element={<FinancialTransparency />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="impact" element={<Impact />} />
          <Route path="services" element={<Services />} />
          <Route path="support-us" element={<SupportUs />} />
          <Route path="team" element={<Team />} />
          <Route path="volunteer" element={<Volunteer />} />
          {/* ✅ Fixed: Donation page now exists */}
          <Route path="donation" element={<Donation />} />
          {/* ✅ Fixed: 404 catch-all */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </ScrollAnimationProvider>
  )
}

export default App