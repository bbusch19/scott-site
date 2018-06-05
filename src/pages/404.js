import React from 'react'
import Link from 'gatsby-link'
import Header from '../components/header'
import Hero from '../components/hero'
import BasicContent from '../components/basicContent'

const NotFoundPage = () => (
  <div>
    <Header basic={true} />
    <Hero classes="full-height">
      <BasicContent classes="alt-bg max-600">
      <h2 className="small-bottom">Whoops!</h2>
        <p className="collapse-top">
          The page you're looking for doesn't exist.
        </p>
        <a href="/" className="btn">BACK TO HOME</a>
      </BasicContent>
    </Hero>
  </div>
)

export default NotFoundPage
