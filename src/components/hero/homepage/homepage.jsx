import React from 'react'
import Hero from '../hero'
import Navbar from '../navbar/navbar'
import Body from '../body/body'
import Footer from '../footer/footer'

const Homepage = () => {
  return (
      <div>
          <Navbar />
          <Hero />
          <Body />
          <Footer />
    </div>
  )
}

export default Homepage