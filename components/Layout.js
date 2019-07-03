import React from 'react'
// import Link from 'next/link'
// import '../sass/app.css';
import Head from '../components/head'

const Layout = (props) => (
  <div className="body">
    <Head title="Home" />
    <div className="hero">
      {props.children}
    </div> 
  </div>
)

export default Layout
