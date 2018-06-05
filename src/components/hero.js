import React from 'react'
import styles from './hero.module.scss'

const Hero = ({classes = '', children}) => (
  <div className={`${styles.hero} ${classes.split(' ').map(el => styles[el]).join(' ')}`}>
    <div className="container">
      <div className="columns">
        {children}
      </div>
    </div>
  </div>
)

export default Hero