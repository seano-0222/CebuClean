import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import MenuPage from './pages/MenuPage'
import Dashboard from './pages/Dashboard'
import Donate from './pages/Donate'
import Volunteer from './pages/Volunteer'
import Seminar from './pages/Seminar'
import Impact from './pages/Impact'
import Transparency from './pages/Transparency'
import Profile from './pages/Profile'

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Navbar />
          <main style={{ flex: 1 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/menu" element={<MenuPage />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/donate" element={<Donate />} />
              <Route path="/volunteer" element={<Volunteer />} />
              <Route path="/seminar" element={<Seminar />} />
              <Route path="/impact" element={<Impact />} />
              <Route path="/transparency" element={<Transparency />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
