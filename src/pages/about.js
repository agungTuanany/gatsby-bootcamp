import React from 'react'
import { Link } from 'gatsby'

/* component */
import Layout from '../components/layout'

const AboutPage = () => {
  return (
    <Layout>
      <h1>ABOUT PAGE, </h1>
      <p> THIS IS ABOUT PAGE</p>
      <p><Link to="/contact">want to work with me? reach out</Link></p>
    </Layout>
  )
}

export default AboutPage
