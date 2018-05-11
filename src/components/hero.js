import React from 'react'
import styles from './hero.module.scss'

const Cta = ({text, mobileText, phone}) => (
  <div className={styles.hero}>
    <div className="container">
      <div className="columns">
        <h1>Sell your house for cash fast.</h1>
        <p>We can get cash for your house quickly. No pain, no hassle.</p>
      </div>
    </div>
  </div>
)

export default Cta