import React from 'react'
import { Link } from 'gatsby'

/* component */
import Header from '../components/header'
import Footer from '../components/footer'

const AboutPage = () => {
  return (
    <div>
      <Header />
      <h1>ABOUT PAGE, </h1>
      <p> THIS IS ABOUT PAGE</p>
      <p><Link to="/contact">want to work with me? reach out</Link></p>

      <Footer />
    </div>
  )
}

export default AboutPage
