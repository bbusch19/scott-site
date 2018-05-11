import React from 'react'
import Link from 'gatsby-link'
import Cta from './cta';
import styles from './header.module.scss'

const Header = () => (
  <div className={styles.header}>
    <div className="container">
      <ul className={styles.menu}>
        <li className={[styles.logo, styles.first].join(' ')}>
          <Link to="/">Scott Merill Realty</Link>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">How it works</a>
        </li>
        <li>
          <a href="#">Get an offer</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <li className={styles.right}>
          <Cta text="1-888-888-8888" mobileText="1-888-8888" phone="1-888-888-8888" />
        </li>
      </ul>
    </div>
  </div>
)

export default Header
