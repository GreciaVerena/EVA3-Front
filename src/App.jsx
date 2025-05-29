import './App.css'
import Navbar from './components/Navbar/Navbar.jsx'
import Hero from './components/Hero/Hero.jsx'
import Footer from './components/Footer/Footer.jsx'
import ContactForm from './components/ContactForm/Contac.jsx'
import FAQ from './components/FAQ/Faq.jsx';


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <FAQ/>
      <ContactForm/>
      <Footer />
    </>
  )
}

export default App
