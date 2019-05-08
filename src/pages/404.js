import React from 'react'
import { Link } from 'gatsby'

/* component */
import Layout from '../components/layout'
import Head from '../components/head'


const NotFound = () => {
  return (
    <Layout>
      <Head title="404" />
      <h1>PAGE NOT FOUND</h1>
      <p><Link to="/">HEAD HOME</Link></p>
    </Layout>
  )
}

export default NotFound
