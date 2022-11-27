import React from 'react'
// import Footer from './Footer'
import Nav from './Nav'

export default function Layout({ children }) {
  return (
    <div>



    <Nav />

    <div className="flex flex-col justify-center min-h-screen">

      <main>{children}</main>

      {/* <Footer /> */}
    </div>
    </div>

  )
}