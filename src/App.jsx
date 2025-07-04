import React from 'react'
import LandingPage from './components/LandingPage'
import Content from './components/Content'
import Features from './components/Features'
import Form from './components/Form'
import Testimonial from './components/Testimonial'
import CallToAction from './components/CallToAction'
import Showcase from './components/Showcase'
import Team from './components/Team'
import Contact from './components/Contact'
import Footer from './components/Footer'
import PricingTable from './components/PricingTable'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  return (
    <div>
      <LandingPage />
      <Content />
      <Features />
      <Form />
      <Testimonial />
      <CallToAction />
      <Showcase />
      <Team />
      <Contact />
      <PricingTable />
      <Footer />
    </div>
  )
}

export default App
