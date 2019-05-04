import React from 'react'

/* components */
import Header from './header'
import Footer from './footer'

const Layout = (props) => {
  return (
    <div>
      <Header />
      {props.children}
      <Footer />
    </div>
  )
}

export default Layout
