import React, { Component } from 'react'
import Link from 'gatsby-link'
import Cta from './cta';
import styles from './header.module.scss'

class Header extends Component {

  constructor() {
    super();
    this.state = { active: false };
  }

  handleLinkClick(scrollTo, e) {
    console.log(e.currentTarget);
    console.log(scrollTo);
  }

  handleClickMenu(e) {
    console.log('hit');
    this.setState({ active: !this.state.active});
  }

  render() {
    return (
      <div className={styles.header}>
        <div className={`container ${styles.container}`}>
            <div className={styles.logo}>
              <a href="#" className={styles.first} onClick={(e) => this.handleLinkClick('top', e)}>Scott Merill Realty</a>
            </div>
          <ul className={`${styles.menu} ${this.state.active ? styles.active : ''}`}>
            <li>
              <a href="#" onClick={(e) => this.handleLinkClick('about', e)}>About</a>
            </li>
            <li>
              <a href="#" onClick={(e) => this.handleLinkClick('how-works', e)}>How it works</a>
            </li>
            <li>
              <a href="#" onClick={(e) => this.handleLinkClick('get-offer', e)}>Get an offer</a>
            </li>
            <li>
              <a href="#" onClick={(e) => this.handleLinkClick('contact', e)}>Contact</a>
            </li>
          </ul>
          <div className={styles.right}>
            <Cta classes={'medium-up space-right'} text="1-888-888-8888" mobileText="1-888-8888" phone="1-888-888-8888" />
            <div onClick={(e) => this.handleClickMenu(e)} className={`${styles.hamburger} ${this.state.active ? styles.active : ''}`}>
              <span className={styles.line}></span>
              <span className={styles.line}></span>
              <span className={styles.line}></span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Header
