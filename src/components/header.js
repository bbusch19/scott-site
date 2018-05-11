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
        <div className="container">
          <ul className={styles.menu}>
            <li className={styles.logo}>
              <a href="#" className={styles.first} onClick={(e) => this.handleClick('top', e)}>Scott Merill Realty</a>
            </li>
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
            <li className={styles.right}>
              <Cta text="1-888-888-8888" mobileText="1-888-8888" phone="1-888-888-8888" />
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Header
