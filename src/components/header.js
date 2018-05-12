import React, { Component } from 'react'
import Link from 'gatsby-link'
import Cta from './cta';
import styles from './header.module.scss'

class Header extends Component {

  handleClick(scrollTo, e) {
    console.log(e.currentTarget);
    console.log(scrollTo);
  }

  render() {
    return (
      <div className={styles.header}>
        <div className={`container ${styles.container}`}>
            <div className={styles.logo}>
              <a href="#" className={styles.first} onClick={(e) => this.handleClick('top', e)}>Scott Merill Realty</a>
            </div>
          <ul className={styles.menu}>
            <li>
              <a href="#" onClick={(e) => this.handleClick('about', e)}>About</a>
            </li>
            <li>
              <a href="#" onClick={(e) => this.handleClick('how-works', e)}>How it works</a>
            </li>
            <li>
              <a href="#" onClick={(e) => this.handleClick('get-offer', e)}>Get an offer</a>
            </li>
            <li>
              <a href="#" onClick={(e) => this.handleClick('contact', e)}>Contact</a>
            </li>
          </ul>
          <div className={styles.right}>
            <Cta text="1-888-888-8888" mobileText="1-888-8888" phone="1-888-888-8888" />
          </div>
        </div>
      </div>
    )
  }
}

export default Header
