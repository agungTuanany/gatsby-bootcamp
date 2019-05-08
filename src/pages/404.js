import React from 'react'
import { Link } from 'gatsby'

/* components */
import Layout from '../components/layout'
import Head from '../components/head'

const NotFound = () => {
  return (
    <Layout>
      <Head title="404" />
      <h1>Page not Found</h1>
      <p><Link to="/"> Head home</Link></p>
    </Layout>
  )
}

export default NotFound
