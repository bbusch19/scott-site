import React from 'react'
import Link from 'gatsby-link'
import Header from '../components/header'
import Hero from '../components/hero'
import BasicContent from '../components/basicContent'

const SecondPage = () => (
  <div>
    <Header basic={true} />
    <Hero classes="full-height">
      <BasicContent classes="alt-bg max-600 center-mobile rounded">
      <h2 className="small-bottom">Thank you for your submission!</h2>
        <p className="collapse-top">
          Someone will contact you in the next 24 hours.
        </p>
        <a href="/" className="btn">BACK TO HOME</a>
      </BasicContent>
    </Hero>
  </div>
)

export default SecondPage
